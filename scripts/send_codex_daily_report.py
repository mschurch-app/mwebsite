#!/usr/bin/env python3
"""Build the daily Codex report from the checked-in work log and send via Resend."""

from __future__ import annotations

import argparse
import datetime as dt
import json
import os
import re
import sys
import urllib.error
import urllib.request
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
RECIPIENT = "james@tcsc.org.tw"
EMAIL_API = "https://api.resend.com/emails"


def parse_sections(markdown: str) -> dict[str, str]:
    sections: dict[str, list[str]] = {}
    current = ""
    for line in markdown.splitlines():
        match = re.match(r"^##\s+(.+?)\s*$", line)
        if match:
            current = match.group(1)
            sections[current] = []
        elif current:
            sections[current].append(line)
    return {name: "\n".join(lines).strip() for name, lines in sections.items()}


def section(sections: dict[str, str], *names: str) -> str:
    for name in names:
        if sections.get(name):
            return sections[name]
    return ""


def bullets(value: str) -> list[str]:
    return [re.sub(r"^\s*(?:[-*]|\d+[.)])\s+", "", line).strip() for line in value.splitlines()
            if re.match(r"^\s*(?:[-*]|\d+[.)])\s+", line)]


def redact_secrets(value: str) -> str:
    value = re.sub(
        r"(?i)(\b(?:api[_ -]?key|password|token|service[_ -]?role[_ -]?key|connection[_ -]?string)\b\s*[:=]\s*)\S+",
        r"\1[已遮蔽]", value,
    )
    value = re.sub(r"\b(?:re|sk|gh[pousr])_[A-Za-z0-9_-]{20,}\b", "[已遮蔽]", value)
    value = re.sub(r"\beyJ[A-Za-z0-9_-]{20,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b", "[已遮蔽]", value)
    return value


def sentence_text(value: str) -> str:
    return redact_secrets(value).rstrip("。；; ")


def clean_lines(value: str, empty: str) -> list[str]:
    found = bullets(value)
    return [redact_secrets(item) for item in found] if found else [empty]


def field_value(value: str, label: str, fallback: str) -> str:
    match = re.search(rf"(?im)^\s*[-*]\s*{re.escape(label)}\s*[：:]\s*(.+?)\s*$", value)
    return redact_secrets(match.group(1)).rstrip("。；; ") if match else fallback


def make_report(report_date: str, markdown: str | None, branch: str, sha: str) -> tuple[str, str]:
    subject = f"【Codex 開發日報】M+ 大雅教會網站｜{report_date}"
    if not markdown:
        summary = (
            "GitHub 預設分支找不到今天的工作紀錄，因此無法可靠確認完成事項、檢查結果或資料庫異動。\n"
            "這份通知只說明當日紀錄尚未同步，不代表系統正常或沒有變更。\n"
            "請確認 Codex 已將 docs/codex-log 當日紀錄推送到 GitHub。"
        )
        body = f"# 今日開發摘要\n{summary}\n\n# ✅ 今日完成\n今日工作紀錄未同步，無法確認。\n\n# 🧪 系統檢查\nBuild：未能從工作紀錄確認\nTest：未能從工作紀錄確認\nLint：未能從工作紀錄確認\nTypecheck：未能從工作紀錄確認\n\n# ☁️ GitHub\nBranch：{branch}\nCommit：{sha}\nPush：報告工作階段讀取 GitHub 預設分支\nRepository 是否同步：只可確認此工作階段使用 GitHub 上的 commit；無法偵測未推送的本機修改\n\n# 🗄️ Database / Supabase\n當日資料庫異動：無法確認，請勿視為無異動。\n\n# ⚠️ 問題與風險\n未找到當日工作紀錄。\n\n# ⏳ 尚未完成\n請先同步當日 Codex 工作紀錄。\n\n# ➡️ 下一步\n確認當日紀錄已推送至 GitHub 預設分支。"
        return subject, body

    sections = parse_sections(markdown)
    completed = bullets(section(sections, "完成事項", "今日完成"))
    if completed:
        summary_parts = [f"今日完成 {len(completed)} 項工作，主要為：{sentence_text(completed[0])}。"]
        if len(completed) > 1:
            summary_parts.append(f"另完成：{sentence_text(completed[1])}。")
        checks_summary = section(sections, "測試", "系統檢查")
        summary_parts.append(
            f"檢查結果：Build {field_value(checks_summary, 'Build', '未執行／工作紀錄未標示')}；"
            f"Test {field_value(checks_summary, 'Test', '未執行／工作紀錄未標示')}。"
        )
        db_summary = section(sections, "Database", "資料庫") or "當日工作紀錄未提供資料庫異動狀態；無法確認。"
        summary_parts.append(f"資料庫狀態：{redact_secrets(db_summary.splitlines()[0])}")
        summary_parts.append("報告根據已同步至 GitHub 預設分支的紀錄；未推送的本機修改不會列入。")
        summary = "\n".join(summary_parts)
    else:
        checks_summary = section(sections, "測試", "系統檢查")
        db_summary = section(sections, "Database", "資料庫") or "當日工作紀錄未提供資料庫異動狀態；無法確認。"
        summary = (
            "今日工作紀錄沒有列出已完成事項。\n"
            f"檢查結果：Build {field_value(checks_summary, 'Build', '未執行／工作紀錄未標示')}；"
            f"Test {field_value(checks_summary, 'Test', '未執行／工作紀錄未標示')}。\n"
            f"資料庫狀態：{redact_secrets(db_summary.splitlines()[0])}\n"
            "報告根據已同步至 GitHub 預設分支的紀錄；未推送的本機修改不會列入。"
        )

    checks = section(sections, "測試", "系統檢查")
    build = field_value(checks, "Build", "未執行／工作紀錄未標示")
    test = field_value(checks, "Test", "未執行／工作紀錄未標示")
    lint = field_value(checks, "Lint", "未執行／工作紀錄未標示")
    typecheck = field_value(checks, "Typecheck", "未執行／工作紀錄未標示")
    db = section(sections, "Database", "資料庫") or "當日工作紀錄未提供資料庫異動狀態；無法確認。"
    db = redact_secrets(db)
    git_log = section(sections, "Git")
    work_branch = field_value(git_log, "Branch", "工作紀錄未標示")
    work_commit = field_value(git_log, "Commit", "工作紀錄未標示")
    work_push = field_value(git_log, "Push", "工作紀錄未標示")

    lines = [
        "# 今日開發摘要",
        summary,
        f"Build：{build}；Test：{test}；Lint：{lint}；Typecheck：{typecheck}。",
        f"資料庫狀態：{db.splitlines()[0]}",
        "本報告根據 GitHub 預設分支上的當日工作紀錄；未推送的本機變更不會出現在報告中。",
        "",
        "# ✅ 今日完成",
        *[f"- {item}" for item in clean_lines(section(sections, "完成事項", "今日完成"), "今日工作紀錄未列完成事項。")],
        "",
        "# 🧪 系統檢查",
        f"Build：{build}",
        f"Test：{test}",
        f"Lint：{lint}",
        f"Typecheck：{typecheck}",
        "",
        "# ☁️ GitHub",
        f"Branch：{branch}",
        f"Commit：{sha}",
        "Push：本報告由 GitHub Actions 從 GitHub 預設分支執行。",
        "Repository 是否同步：只能確認本次執行讀取到的 GitHub commit；無法偵測本機未推送修改。",
        f"工作紀錄中的 Branch：{work_branch}",
        f"工作紀錄中的 Commit：{work_commit}",
        f"工作紀錄中的 Push：{work_push}",
        "",
        "# 🗄️ Database / Supabase",
        db,
        "",
        "# ⚠️ 問題與風險",
        *[f"- {item}" for item in clean_lines(section(sections, "發現問題", "問題與風險"), "目前未發現新的重大風險。")],
        "",
        "# ⏳ 尚未完成",
        *[f"- {item}" for item in clean_lines(section(sections, "未完成", "尚未完成"), "今日工作紀錄未列尚未完成事項。")],
        "",
        "# ➡️ 下一步",
        *[f"- {item}" for item in clean_lines(section(sections, "下一步"), "今日工作紀錄未列下一步。")],
    ]
    return subject, "\n".join(lines)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--date", required=True, help="Taipei calendar date in YYYY-MM-DD format")
    parser.add_argument("--dry-run", action="store_true", help="Print the report without sending")
    args = parser.parse_args()
    try:
        report_date = dt.date.fromisoformat(args.date).isoformat()
    except ValueError:
        parser.error("--date must be a valid YYYY-MM-DD date")

    log_path = ROOT / "docs" / "codex-log" / f"{report_date}.md"
    markdown = log_path.read_text(encoding="utf-8") if log_path.is_file() else None
    branch = os.environ.get("GITHUB_REF_NAME", "local preview")
    sha = os.environ.get("GITHUB_SHA", "")[:12] or "本機預覽（尚未推送）"
    subject, body = make_report(report_date, markdown, branch, sha)
    payload = {"from": os.environ.get("REPORT_FROM_EMAIL", "[尚未設定寄件地址]"),
               "to": [RECIPIENT], "subject": subject, "text": body}

    if args.dry_run:
        print(json.dumps(payload, ensure_ascii=False, indent=2))
        return 0

    api_key = os.environ.get("RESEND_API_KEY", "")
    from_email = os.environ.get("REPORT_FROM_EMAIL", "")
    if not api_key or not from_email:
        print("寄信設定不完整：請設定 RESEND_API_KEY secret 與 REPORT_FROM_EMAIL variable。", file=sys.stderr)
        return 2

    request = urllib.request.Request(
        EMAIL_API,
        data=json.dumps(payload, ensure_ascii=False).encode("utf-8"),
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
            "Idempotency-Key": f"codex-daily-report/{report_date}",
        },
        method="POST",
    )
    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            response.read()
            print(f"每日開發報告已交由 Email API 處理（HTTP {response.status}）。")
    except urllib.error.HTTPError as error:
        print(f"Email API 回應 HTTP {error.code}；請檢查 workflow 與寄件者設定。", file=sys.stderr)
        return 1
    except (urllib.error.URLError, TimeoutError):
        print("無法連線到 Email API；請檢查 workflow 執行紀錄後再處理。", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

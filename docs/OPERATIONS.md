# 維運手冊

盤點日期：2026-10-07

## 本機預覽

- 靜態頁可直接開啟；需要測試 Supabase API 時，請用本機 HTTP server 服務 repository 根目錄，再於瀏覽器開啟對應頁面。
- 建議預覽命令：`python3 -m http.server 8000`，網址為 `http://localhost:8000/`。此方式是一般靜態預覽建議，repository 沒有專用 dev server 設定。

## Install / dev / build / test

- Install：目前沒有 `package.json`、lockfile 或專案相依安裝命令。
- Dev：沒有專用開發伺服器；可用上述 Python 靜態伺服器預覽。
- Build：未設定 build 命令或 bundler。
- Test：未設定自動化測試命令。
- Lint / typecheck：未設定。
- GitHub Actions 只為講道資料更新工作安裝 Python 3.12，並執行 `scripts/update-sermons.py`；這不是整站驗證。

## Deployment

- README 說明網站部署於 GitHub Pages，根目錄 `CNAME` 設定自訂網域 `mchurch.online`。
- repository 中沒有一般網站 build/deploy workflow。實際 Pages source 設定未經 GitHub 設定頁確認；部署前先確認目前 production source branch/folder。
- 更新靜態頁面的安全流程：檢查 diff → 在本機預覽相關頁面 → 確認無 secret → 依 repository 分支/PR 規範提交 → 核對 GitHub Pages 發布結果。
- `.github/workflows/update-sermons.yml` 會定期更新 `sermons-data.json` 並 push 到觸發分支；確認分支權限和 Pages source 的關係後才可推斷該 workflow 是否直接影響正式網站。

## Rollback

- 靜態程式碼：以 `git revert <commit>` 建立反向提交，再依同一發布流程部署；不要 force push 或改寫共享歷史。
- GitHub Pages：先回復造成問題的 commit，確認部署完成與網域可用。
- Supabase：依 migration 設計執行經審核的 rollback 或前向修正。資料庫變更不可假設都能自動回復；先做備份並確認資料相容性。
- 若需回復業務資料，停止自動化寫入，先盤點受影響範圍並依正式備份程序處理。

## 常見故障排除

- 頁面更新未出現：確認 GitHub Pages source、最近 workflow/deployment 狀態、瀏覽器快取與資源 URL。
- 網站資料空白：檢查瀏覽器網路請求、RPC 回應、Supabase 專案狀態、RPC 授權及 RLS；不要用 service role key 直接在瀏覽器測試。
- 新朋友登記或 LINE 通知失敗：檢查 Edge Function logs、function secrets 與 LINE 回應；避免在工單或 log 複製憑證或完整個資。
- YouTube 資料未更新：檢查 GitHub Actions 排程/手動執行結果、RSS 回應、`scripts/update-sermons.py` 與 workflow push 權限。
- 金流測試問題：使用藍新測試環境和測試交易資料；確認商店審核/測試帳號狀態及 callback 設定，不以正式交易驗證測試頁。

## 每日 Email 開發報告現況與建議

- 原本沒有寄信服務；本次新增 `.github/workflows/daily-codex-report.yml` 與 `scripts/send_codex_daily_report.py` 作為每日報告流程。
- 已決定排程為台灣時間每日 21:00（GitHub Actions cron 對應 `0 13 * * *` UTC）。
- 寄信使用 Resend API；GitHub Actions 需設定 secret `RESEND_API_KEY`，及 variable `REPORT_FROM_EMAIL`（Resend 已驗證的寄件地址），收件地址固定為 `james@tcsc.org.tw`。API key 僅在寄信步驟以環境變數提供，程式不輸出 key 或 API 回應內容。
- 報告由 `docs/codex-log/YYYY-MM-DD.md` 產生，保留 Build/Test/Lint/Typecheck、Git、Database、風險、未完成與下一步等狀態；對未同步的日誌會明確表示無法確認，不推定系統正常或資料庫無異動。Resend request 使用日期作為 idempotency key；Resend 目前提供 24 小時去重，降低短時間 workflow 重跑造成的重複寄送。
- `workflow_dispatch` 預設為 dry-run，只在 Actions log 顯示預覽；手動執行時取消 dry-run 才會寄信。每日排程會正常寄送。
- Gmail 連線可由目前對話手動寄信，但沒有提供可供 GitHub Actions 定時執行的授權方式，故不視為現成自動寄信機制。
- GitHub Actions 的排程工作只會在預設分支執行，且排程可能因平台負載稍晚；報告只涵蓋已同步到 GitHub 預設分支的當日紀錄。本次 workflow 尚未推送/合併，Resend secret 與寄件地址也尚未設定，因此尚未啟用、沒有寄送郵件。

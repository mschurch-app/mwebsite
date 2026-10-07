# 專案狀態

盤點日期：2026-10-07

## 專案目前狀態

M+ 大雅教會網站是已上線使用的靜態網站，正式網域為 `mchurch.online`。網站原始碼由 GitHub repository `mschurch-app/mwebsite` 管理，主機使用 GitHub Pages（依 README、CNAME 與 repository 結構判斷；尚未登入 GitHub 設定頁核對實際發布來源）。網站透過 Supabase 提供部分公開內容讀取、表單登記與後端功能。

本次檢查的分支為 `codex/add-ga4-analytics`，比其遠端追蹤分支多 5 個 commit。工作目錄另有既存的未提交變更，涉及籃球營測試頁與樣式、週報影片資料、新增成功頁、Reel 預覽及講道處理腳本。這些變更不是本次治理文件工作的一部分，應先由負責人審查再提交。

## 已完成主要功能

- 教會公開網站首頁、關於、信仰介紹、新朋友指南、主日信息、週報、週報歷史及小組資源頁。
- 公開週報與內容典藏透過 Supabase RPC 讀取已發布資料。
- 新朋友表單透過 Supabase Edge Function 登記，並可通知 LINE 接待群組。
- 籃球營報名頁；程式碼含正式頁、測試頁及付款相關 Supabase function/RPC 整合。
- GitHub Actions 定時更新 YouTube 主日信息資料並提交 `sermons-data.json`。
- Google Analytics 4 網站追蹤程式碼已出現在多個公開頁面。

## 進行中工作

- 籃球營測試頁、成功頁及付款流程仍有未提交檔案；尚未確認這些修改是否已完成測試或可部署。
- 講道字幕／本機處理及網站佈景輔助腳本有未提交的新檔案；尚未確認是否正式採用。
- 本分支目前比遠端追蹤分支多 7 個 commit（含先前 5 個籃球營金流相關 commit、治理文件與日報實作）；推送前須確認 Pages 發布來源及變更範圍。
- 每日開發 Email 報告已完成本機實作（GitHub Actions + Resend），時間為台灣時間每日 21:00；尚未推送/合併至預設分支，也未設定 `RESEND_API_KEY` 或已驗證的寄件地址，因此尚未啟用。

## 已知問題

- repository 沒有本地 Supabase migration、Supabase CLI 設定或完整 schema 文件；正式資料庫 migration 歷史只能透過已連線的 Supabase 專案查證。
- GitHub Pages 的實際發布分支／目錄設定未能從本機 repository 完全確認。
- 沒有統一的 build、lint、typecheck 或 test 命令，亦沒有網站端到端檢查。
- Supabase 正式專案的 schema 變更在另一個 `church-management-staging`/Church OS 專案維護；本 repository 的資料庫變更追蹤不完整。

## 技術債

- 靜態頁面以多個 HTML、CSS、ES module 檔案組成，缺少一致的建置與自動檢查流程。
- Supabase migration 的正式來源與網站程式碼分屬不同 repository，容易造成前後端版本落差。
- 正式／測試籃球營頁面並存，需要明確標示環境並避免測試端點或內容誤部署。
- 缺少部署後 smoke check、可操作的回復說明及定期 secret 掃描；每日開發報告流程尚待 GitHub 設定並合併啟用。

## 下一步建議

1. 先審查目前分支領先的 5 個 commits 與既有未提交變更，確認發布範圍，再同步遠端分支。
2. 與 Church OS repository 對齊 Supabase migration 的唯一來源、套用流程與回復程序，並建立可追蹤的跨 repository 連結。
3. 加入不接觸正式資料的基本靜態檢查與部署後 smoke check，再逐步補測試。
4. 驗證 `mchurch.online` 寄件網域並在 GitHub Actions 設定寄件地址與 Resend API secret，再合併每日報告 workflow 至 `main`。

## 重要風險

- **資料庫變更來源分散：** 正式 Supabase 專案已有 migration 歷史，但 migration 檔不在本 repository；網站與資料庫版本需跨 repository 核對。
- **部署設定未核實：** GitHub Pages 發布設定未由 GitHub 設定頁確認，不能僅憑 CNAME 判定實際來源分支。
- **待審查本機變更：** 當前工作目錄的付款、講道資料與處理腳本修改未提交，不能直接視為已完成或已上線。
- **後端權限與 secret：** Edge Functions 使用伺服器端 secrets；不得把 service role key 或支付憑證放入靜態網站、log 或治理文件。
- **缺少自動品質門檻：** 現有 Actions 只做講道資料更新，未見網站 build/test/lint 與部署驗證。

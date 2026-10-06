# 系統架構

盤點日期：2026-10-07

## 前端架構

- 純靜態多頁網站：HTML、CSS、原生 JavaScript ES modules，沒有 package manifest 或前端建置器。
- 主要頁面位於 repository 根目錄；共用視覺樣式與頁面樣式以 CSS 檔案分拆。
- `sermons-data.json` 是主日信息頁面的靜態資料來源。
- 多個頁面從 CDN 載入 Supabase JavaScript client；公開端使用 publishable/anon key，不能將 service role key 放入瀏覽器。

## 後端架構

- Supabase 專案：`aqanuwilmvdtlzuqlrau`，專案 URL 為 `https://aqanuwilmvdtlzuqlrau.supabase.co`。
- 本 repository 可見的 Edge Functions 位於 `supabase/functions/`，包含新朋友登記及共用 LINE 通知程式碼；另有籃球營前端呼叫的 function endpoint。
- 週報、內容典藏等前端經由 RPC 取得經篩選的公開資料；新朋友登記由 Edge Function 呼叫 `register_staging_newcomer`。
- 教會管理員登入、排班管理與多數內部資料操作屬於獨立 Church OS 專案，不由此靜態網站 repository 提供。

## API 與資料流

1. 瀏覽器載入靜態頁面。
2. 公開內容頁呼叫 Supabase RPC，例如 `get_website_weekly_data`、`get_website_content_posts`。
3. 新朋友表單送到 Supabase Edge Function，再由後端呼叫受限 RPC 並處理 LINE 通知。
4. 籃球營頁面呼叫 Supabase Edge Function 處理報名與金流相關工作；本機有尚未提交的測試頁修改，細節須以審查後程式碼為準。

## Authentication

- 公開頁面以匿名讀取權限呼叫 RPC，不建立持久化前端 session。
- 管理員身分驗證及授權由 Church OS 管理；本 repository README 說明管理頁使用既有登入和功能權限。
- Edge Function 的伺服器端憑證從 Supabase Functions 環境讀取；不得記錄或複製到文件。
- 已連線專案的 public tables 均回報啟用 RLS；本次沒有逐一審查每條 policy 的正確性，不能把 RLS 開啟等同於已完成安全稽核。

## 第三方服務

- GitHub Pages：靜態網站託管，正式自訂網域由根目錄 `CNAME` 指向 `mchurch.online`。
- Supabase：資料庫、RPC、Storage/Edge Functions。
- YouTube：公開影片 feed；GitHub Actions 定期更新講道資料。
- LINE：新朋友接待通知。
- Google Analytics 4：頁面中可見追蹤代碼。
- 籃球營程式碼包含藍新金流串接方向；尚未提交的測試頁需先審查，不能由本次盤點推定正式金流已核准或啟用。

## GitHub / deployment 關係

- Remote：`git@github.com:mschurch-app/mwebsite.git`。
- 可見 workflow：`.github/workflows/update-sermons.yml`，排程執行 `scripts/update-sermons.py`；若 `sermons-data.json` 改變，workflow 會 commit 並 push。
- README 表示網站部署於 GitHub Pages，且 repository 有 `CNAME`。未取得 GitHub Pages 設定頁資訊，因此實際發布 branch、資料夾與部署狀態仍須在 GitHub 核實。
- 沒看到一般網站 build/deploy workflow；GitHub Pages 可能直接發佈靜態來源。

## 重要目錄與模組

- 根目錄：公開頁面 HTML、頁面模組、CSS、`sermons-data.json`。
- `assets/`：品牌圖片與圖示。
- `scripts/`：YouTube feed 更新腳本及目前未提交的輔助處理腳本。
- `supabase/functions/`：此網站 repository 內的 Supabase Edge Function 原始碼。
- `.github/workflows/`：GitHub Actions。
- `docs/`：本專案治理文件與 Codex 工作紀錄。

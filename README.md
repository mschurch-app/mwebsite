# M+大雅教會網站

靜態網站前台部署於 GitHub Pages；每週週報與主日預告圖片由教會管理系統維護，資料儲存於既有 `church-management-staging` Supabase 專案。

## 週報管理

- 入口：教會管理系統 → 系統設定 → 教會網站維護。
- 每份週報依主日日期維護，可新增、修改、儲存草稿或發布。
- 主日預告圖片支援 JPG、PNG、WebP，最大 8 MB，建議 16:9。
- 週報每個自訂欄位、項目標題與完整內文都可編輯。
- 本週與下週服事人員透過受限的資料庫函式，依週報日期從服事排班讀取；不在公開 API 開放排班表本身。
- 公開頁只讀取已發布的週報；管理頁使用既有管理員登入與「牧養訊息」權限。

## 網站新朋友預約

- 首頁預約表單送入 `church-management-staging` 的新朋友關懷流程；M+ 登記成功後會通知已設定的青年教會 LINE 接待群組。
- 表單明確告知資料會存入教會關懷系統並傳送至 LINE 群組，需由訪客勾選同意後才可送出。
- LINE 通知憑證保存在 Supabase Edge Function secrets；不可放入網站前端或 Git。群組接收目標沿用既有的主日 LINE 群組設定。
- 若 LINE 通知失敗，預約表單會提示重試並保留同一筆登記識別碼，避免重複建立新朋友資料。

## 本機預覽

直接開啟 `index.html`、`weekly.html?church=M%2B`。要從本機 HTTP 伺服器預覽才能測試 Supabase API。網站可公開瀏覽，不包含服務角色金鑰。

## 資料庫

需要先套用 `mschurch-app/church-management-staging` 專案中的 `supabase/migrations/20260926160000_weekly_bulletin_cms.sql` 到 `church-management-staging`。此 migration 為新增週報資料表、圖片 bucket、RLS policies 與唯讀 RPC，不會搬動或修改現有會友/排班資料。

## 主日信息自動更新

- `sermons.html` 與首頁的最新信息讀取 `sermons-data.json`。
- GitHub Actions 會在每週日中午及傍晚多次讀取 M+ 公開 YouTube 頻道，週間每日補查一次。
- 新影片公開後會依講題中的講員或聖經資訊辨識主日信息，自動更新資料並由 GitHub Pages 發布。
- 若影片尚未公開、設為不公開，或 YouTube 尚未完成處理，網站會保留上一筆內容，下一次排程再補抓。

## SEO 與 Google 收錄

- Google Search Console 使用 `https://mchurch.online/` 網址前置字元資源；首頁保留教會帳號提供的 HTML 驗證標記。標記存在不代表已在 Google 完成驗證或收錄。
- 驗證成功後提交 `https://mchurch.online/sitemap.xml`，使用「網址審查」檢查首頁並要求建立索引；收錄與排名仍由 Google 決定。
- 關於教會內容統一維護於 `about-content.mjs`，外框在 `scripts/templates/about.html`。執行 `node scripts/build-seo.mjs` 產生五個含完整內容與獨立 metadata 的 HTML 分頁；舊 `about.html?page=…` 仍可使用。
- 講道卡片由 `sermon-content.mjs` 共用產生，首頁三篇、信息頁六篇；建置時直接寫入 HTML，瀏覽器也能繼續讀取最新 `sermons-data.json`。資料讀取失敗時保留已發布內容。
- YouTube 自動更新工作會同步建置 HTML 與 sitemap。修改內容模組或模板後亦須執行建置並提交產出；`node scripts/check-seo.mjs` 與 SEO workflow 會檢查 metadata、canonical、公開連結及同步狀況。
- sitemap 僅列 12 個正式公開網址；付款測試、報名成功及視覺預覽頁維持 noindex。CMS 內容更新日期與 Git 日期不同，因此 sitemap 不填不可靠的 lastmod。
- Search Console 的索引、成效、體驗報告須由具權限的教會 Google 帳號查閱；不要將 Google 密碼或私人 API token 放入網站或 Git。

## 雲彩見證（先開放投稿）

`share-testimony.html` 支援文字、影片與照片。投稿進入 Supabase 私人儲存及教會 OS `testimony-admin.html?church=M%2B` 審核；沒有核准稿件時首頁只顯示投稿入口，雲彩見證區保持隱藏。只有核准稿件的顯示名稱與內容可公開，真實姓名及聯絡資料不在公開 API。

後端來源與 migration 保存在教會 OS repo 的 `supabase/functions/testimony-intake/` 及 `20261022144818_testimony_submission_review.sql`。官網不能使用瀏覽器草稿資料作為公開資料源。

見證圖文閱讀由 `testimony-layout-plan.mjs`、`testimony-story-layout.mjs` 及同名 CSS 共用。官網可先重排已公開的舊稿；`testimony-published-layouts.mjs` 只保存編排與來源指紋，原文與照片仍從已核准公開 API 讀取。新投稿在初審前儲存編排的教會 OS 後端屬另一批待部署更新。修改時需同步兩個 repository 的共用檔並核對內容一致，執行 `node qa/layout-plan.mjs`、`node qa/layout-browser.mjs` 及既有 SEO 檢查。

## 小書出版預告與試讀

「信仰，在路上」目前為出版預告模式，`faith-on-the-way/publication.json` 的 `pages` 僅列書籍介紹、推薦序、作者序與前三章精選試讀。第四至十二章及終章的既有網址保留出版預告，不再包含全文、隱藏文章模板或全文資料。完整書稿與邀序PDF另存於私人出版工作目錄，不放入本網站repository；歷次書稿及編修報告也已移出公開部署範圍。

維護試讀頁後，執行 `node scripts/build-seo.mjs`、`node scripts/check-seo.mjs` 及 `node qa/faith-publication-preview.mjs`。推薦序與作者序應保留作者核定原文；未經作者指示，不恢復完整章節。

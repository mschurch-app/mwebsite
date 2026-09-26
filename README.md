# M+大雅教會網站

靜態網站前台部署於 GitHub Pages；每週週報與主日預告圖片由教會管理系統維護，資料儲存於既有 `church-management-staging` Supabase 專案。

## 週報管理

- 入口：教會管理系統 → 系統設定 → 教會網站維護。
- 每份週報依主日日期維護，可新增、修改、儲存草稿或發布。
- 主日預告圖片支援 JPG、PNG、WebP，最大 8 MB，建議 16:9。
- 週報每個自訂欄位、項目標題與完整內文都可編輯。
- 本週與下週服事人員透過受限的資料庫函式，依週報日期從服事排班讀取；不在公開 API 開放排班表本身。
- 公開頁只讀取已發布的週報；管理頁使用既有管理員登入與「牧養訊息」權限。

## 本機預覽

直接開啟 `index.html`、`weekly.html?church=M%2B`。要從本機 HTTP 伺服器預覽才能測試 Supabase API。網站可公開瀏覽，不包含服務角色金鑰。

## 資料庫

需要先套用 `mschurch-app/church-management-staging` 專案中的 `supabase/migrations/20260926160000_weekly_bulletin_cms.sql` 到 `church-management-staging`。此 migration 為新增週報資料表、圖片 bucket、RLS policies 與唯讀 RPC，不會搬動或修改現有會友/排班資料。

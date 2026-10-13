# M+大雅教會網站與社群盤查（2026-10-13）

範圍僅含 M+大雅教會；火樂教會不在本次盤查內。

## 實際資料

| 項目 | 結果 | 解讀 |
| --- | --- | --- |
| GA4 網站 | 10-05：1 位使用者、2 次工作階段、1 次頁面瀏覽；10-06 至 10-12 無回報資料 | 缺口不能當成零流量。官網追蹤碼為 G-VPZZCKQ41B，原報表只讀固定資源 556984991。 |
| YouTube | 10-05 至 10-09：159 次觀看、947 分鐘觀看時間 | 10-10 至 10-12 尚待平台資料，不列入合計。 |
| Instagram | 10-05 至 10-12 每日觸及 17、13、12、4、3、6、7、7 | 日觸及相加為 69，但不能當成 69 位不重複的人。互動數目前未取得。 |
| Facebook | 每日均顯示需要授權 | Instagram 授權不能替代 Facebook 粉專授權。 |

## Google 與 SEO

- 官網公開頁已有 canonical、描述、社群分享資訊及結構化資料；robots.txt 指向含 12 個公開頁面的 sitemap.xml。首頁有 Search Console HTML 驗證標記。使用者先前表示已驗證並提交 sitemap；本次 GSC Wizard 回覆訂閱已結束，無法獨立讀取實際索引與搜尋成效。
- 舊網域 daya.mchurch.online 仍出現在公開搜尋結果。其首頁由 HTML／JavaScript 跳轉，並非 HTTP 301。舊文章等內頁原先回 404。本次加入按舊路徑導向新站對應入口的 404 訪客導引頁。
- site: 搜尋結果不足以證實新站有無索引；應由 Search Console 的頁面索引與網址審查確認。

## 本次已執行

1. 舊站導引頁已發佈至 mschurch-app/daya-redirect，commit 8c4d3d6。
2. 教會 OS 每日報表已加入 GA4 資源與官網 Measurement ID 核對；找到正確資源時更新編號，找不到時顯示具體原因。原始碼 commit 745714f；Supabase Edge Function daily-traffic-report 已部署為 v17。下次排程後才能確認缺口是否修復。

## 尚須帳號端處理

1. Search Console：恢復可讀的連線，確認網域資源、sitemap、首頁及重要內頁的索引狀態，再讀取搜尋點擊、曝光、CTR 與查詢字詞。驗證標記存在不等於頁面已索引。
2. Facebook：以粉專管理者身分完成 Meta Facebook Page Insights 授權，才可讀取觸及與互動。
3. 正式 301：在掌管 daya.mchurch.online 的網域或邊緣託管服務設定舊網址到新網址的永久轉址。GitHub Pages 的靜態 HTML 無法單靠頁面內容回傳真正的 HTTP 301。
4. GA4：讀取下次每日報表的網站狀態及資源編號。若追蹤碼對上仍無資料，需查看 GA4 即時資料、資料串流及主機名稱。

## 內容優先順序

先確認首頁、第一次來、主日信息與週報在 Search Console 正常索引，再依搜尋查詢字詞補強台中大雅、主日聚會、第一次來訪等內容。YouTube、Instagram 和網站數據分開報告，不混算。

Google 官方說明：HTTP 永久轉址最適合網址搬遷；site: 搜尋結果不一定列出所有已索引網址。

- https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes
- https://developers.google.com/search/docs/monitor-debug/search-operators/all-search-site

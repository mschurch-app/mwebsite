# 見證分享改用內文圖片

## 修正

- IG 不再生成文字圖卡。分享檔取自當篇封面照片；沒有照片時使用該篇已編入的示意插圖。保留完整構圖與比例，輸出 PNG（長邊最多 2048），不加其他圖片或文字、不以 Logo 替代。
- 分享視窗顯示真正即將分享的圖片。無圖片、圖片讀取失敗或取消分享都保留正確回饋。
- Facebook / LINE 使用各篇獨立的靜態 Open Graph 頁，`og:image` 指向相同篇章的照片。一般瀏覽器會檢查目前仍公開後開啟全文；爬蟲不用執行 JavaScript 即可讀到圖片與篇章資料。
- 預覽頁只從確認成功的公開 API 產生，沒有待審投稿、原始全文、聯絡方式或私人附件網址。圖片透過既有公開媒體端點驗證目前公開狀態後，才提供短效讀取連結；未公開照片仍為 404。
- 預覽版本綁定文章與選用圖片。預覽未建立或內容已更新時，Facebook / LINE 改提供當篇圖片檔與文字的分享流程，不把首頁圖當成當篇預覽。
- 既有主日信息更新工作同步已公開見證預覽，不增加排程頻率；同次更新有變更才明確要求 GitHub Pages 建置，避免機器人提交後未觸發發布。

## 驗收

- Chrome / WebKit，390 / 1440 CSS px：91 項分享檢查通過。以像素比對驗證照片與插圖輸出與內文來源一致，包含失敗回復、取消、下載及待建預覽的分享流程。
- 14 項靜態預覽及來源檢查通過：公開限制、HTML escaping、圖片選取、來源變更失效、API 失敗保留既有檔案、撤回後清除舊頁。
- 既有 146 項圖文排版、SEO 及靜態連結回歸通過。
- 後端 38 項 Edge 檢查通過；正式端點核對照片 CORS、HEAD 與未公開照片拒絕存取。
- 真實 iPhone 的系統分享目標及 Facebook / LINE 已存在的舊預覽快取不由網站測試推定通過；原生 Mac Safari 正式圖片另於發布後核對。

## 依據

[Open Graph 圖片規格](https://ogp.me/)、[LINE 分享按鈕](https://developers.line.biz/en/docs/line-social-plugins/install-guide/using-line-share-buttons/)、[GitHub Pages build API](https://docs.github.com/en/rest/pages/pages#request-a-github-pages-build)。

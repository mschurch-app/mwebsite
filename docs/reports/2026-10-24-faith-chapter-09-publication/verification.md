# 第九章上線、全書引文樣式與段落金句卡

日期：2026-10-24

網址：https://mchurch.online/faith-on-the-way/chapter-09.html

## 內容與入口

- 完整採用作者最後貼出的第九章定稿，包含「當我們想展開一項事工」的新修正；對照檔為 approved-manuscript.txt。
- 第九章配置三張同系列水彩插圖，以及三處原稿已列出的重要經文與出處。
- 書架最新閱讀、書本完整章名連結、各頁目錄、第八章下一章、出版清單與 sitemap 一併更新。
- 第一至第八章的原有正文與經文內容未改寫。

## 經文與金句

- 採使用者選定的米白底、細金線，統一第一至第九章共 20 個經文引用區塊；去除原本淡綠色底與厚側線。
- 每章精選兩句，共 18 張金句卡，摘錄原文、不另寫新句，放在原文所在段落結尾。來源段落、摘錄與位置見 quote-cards.json。
- 金句卡使用深綠與米白兩款原生網頁排版，搭配襯線字、金色引號與細線裝飾。文字可選取，縮放仍清晰；結構化正文維持原稿，避免再次加入重複的摘錄與卡片署名。
- 經文與金句卡均保留整個區塊，空間不足時移至下一頁；整段與金句卡能同頁放下時，會一起移動。
- 18 張金句卡另匯出為 PNG，路徑與尺寸見 quote-card-exports.json。壓縮檔：/Users/james-codex/Documents/Codex/2026-10-22/new-chat/faith-chapter-05/publication-review/quote-cards/金句圖卡-第一至九章.zip。

## 驗證

- Chromium 390×900、1440×900、320×568、844×390，九章共 36 組均通過：全文不缺漏、結構化正文一致、20 個經文區塊與 18 張金句卡保持完整、插圖載入、頁面無溢出、末頁提示正常，無腳本錯誤。
- 第九章分享文字與章節圖卡產生通過，未混入第八章內容。
- 已檢視手機金句卡、米白金線經文、桌面 PNG 匯出與第九章水彩圖頁。
- 九章靜態備援全文與來源一致；移除新增金句卡後，第一至第八章來源與上線前完全一致，第九章與作者定稿一致。
- SEO、公開連結、JavaScript 語法與 git diff 檢查通過。未宣稱 iPhone 實機或 Safari 驗收。

## 插圖成品與模式

模式：imagegen 技能、內建 image_gen；完整提示詞見 image-prompts.txt。原圖僅轉換格式用於網站，未另行修改畫面。

PNG 原檔：

- /Users/james-codex/Documents/Codex/2026-10-22/new-chat/faith-chapter-05/publication-review/chapter-09/widow-borrowing-vessels.png
- /Users/james-codex/Documents/Codex/2026-10-22/new-chat/faith-chapter-05/publication-review/chapter-09/widow-pouring-oil.png
- /Users/james-codex/Documents/Codex/2026-10-22/new-chat/faith-chapter-05/publication-review/chapter-09/widow-filled-vessels.png

網站 JPEG：

- /Users/james-codex/Documents/Codex/2026-10-22/new-chat/faith-chapter-05/faith-on-the-way/illustrations/widow-borrowing-vessels.jpg（1536×1024）
- /Users/james-codex/Documents/Codex/2026-10-22/new-chat/faith-chapter-05/faith-on-the-way/illustrations/widow-pouring-oil.jpg（1536×1024）
- /Users/james-codex/Documents/Codex/2026-10-22/new-chat/faith-chapter-05/faith-on-the-way/illustrations/widow-filled-vessels.jpg（1024×1536）
- /Users/james-codex/Documents/Codex/2026-10-22/new-chat/faith-chapter-05/faith-on-the-way/share-chapter-09.jpg（1200×800）

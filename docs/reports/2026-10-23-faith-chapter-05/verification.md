# 信仰，在路上：第五章

使用者先指定原稿，後明確改為採用助理整理的修訂版，並要求插圖與既有章節同樣質感。刊登〈脫下驕傲的軍裝〉，作者沿用吳俊璋牧師；既有全文、目錄及分享架構延續。

## 變更

- 第五章修訂全文、Article JSON-LD、canonical、OG 與專屬分享摘要一致。
- 全書目錄從預告轉為可閱讀；第四章結尾連往第五章，書本最新章節入口更新，publication.json 與 sitemap 同步。
- 新增乃縵走向約旦河的橫式插圖，以及河中謙卑默想的直式結尾插圖；OG 使用橫式插圖，IG 沿用既有程式產生本章專屬文字圖卡。
- 插圖是依章節意象創作的藝術詮釋，不是考古重建或經文未記載細節的史實證明。

## 驗證

Chromium 390及1440寬度：逐頁核對全文完整、無橫向溢出、各頁文字與兩張插圖無裁切；目錄、Escape關閉還原焦點、章末及本章分享圖卡均通過。手機13頁、桌面12頁依實際字體自動分頁。

原生 Mac Safari 本機：第五章載入、插圖、下一頁及目錄開啟。原生目錄檢查發現新章複製時第四章項目被誤替換，已修正並加入自動查核。未以模擬瀏覽器代稱真實iPhone驗收。

初次版面測試曾同時顯示兩頁造成假溢出，改為一次只量測一頁後通過。SEO build/check及diff檢查通過。公開社群貼文與通知均未送出。

## 插圖來源與提示

使用 imagegen 內建工具，參考本書第四章 illustrations/lazarus-stone-wide.jpg 的畫風，沒有使用 CLI fallback。

共同提示：refined hand-painted watercolor, textured ivory watercolor paper, warm honey-gold sunlight, olive foliage, muted blue fabrics, delicate believable figures and intricate brush detail; peaceful biblical landscape; no text, title or watermark.

橫式提示：Naaman, an ancient Aramean commander, humbly approaches the Jordan river in a modest ivory tunic; bronze armor, mantle and sandals rest on dry riverbank; two discreet servants far behind; wide 1200:630 composition, no tomb or modern uniforms.

直式提示：Naaman stands quietly knee-deep in the Jordan, fully clothed in an ivory tunic, head bowed and hands open; armor and folded red-brown cloak rest on shore, reeds, pebbles, golden reflected light, olive trees and distant hills; 3:4 portrait, no magical effects.

資產位置：faith-on-the-way/illustrations/naaman-jordan-wide.jpg、naaman-jordan.jpg；原始生成檔保留於本機 generated_images，網站引用檔已存入專案。

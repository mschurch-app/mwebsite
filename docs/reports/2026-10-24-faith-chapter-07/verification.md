# 第七章上線與插圖製作紀錄

日期：2026-10-24

正式網址：https://mchurch.online/faith-on-the-way/chapter-07.html

## 定稿與驗證

- 採用使用者最後確認的全文；保留弟兄姐妹、教會事工與陪伴有需要者等修訂，未改寫正文，無星號標記。
- approved-manuscript.txt 保存確認稿，正文、閱讀分頁、靜態備援及 Article 結構化資料全文比對一致。
- Chromium 390×900、1440×900：每頁文字完整，無橫向或書頁溢出、插圖正常載入、無腳本錯誤。手機尺寸為 14 頁，桌面 13 頁，依可用空間自動排版。
- 目錄第六、第七章標示及連結、關閉目錄焦點還原、末頁完成對話框、章節分享文字與圖卡產生通過。
- 書架首頁的最新閱讀指向第七章，實際點擊能到達第七章；書本最新入口與出版清單由既有 SEO 檢查核對。
- 第六章末頁銜接第七章；各章目錄與 sitemap 已更新。
- node scripts/check-seo.mjs、git diff --check 通過。未宣稱 iPhone 實機驗證。

## 插圖

模式：內建 image_gen。以第六章插圖作風格參照，製作新的暖金色水彩場景，再以 sips 轉為 JPEG 與尺寸最佳化；未改動畫面內容。

風格參照：faith-on-the-way/illustrations/cana-water-wide.jpg

開篇成品：faith-on-the-way/illustrations/ten-lepers-road-wide.jpg（1200×630）

結尾成品：faith-on-the-way/illustrations/samaritan-thanks.jpg（900×1200）

分享預覽：faith-on-the-way/share-chapter-07.jpg（開篇插圖副本）

### 開篇提示詞

Use case: illustration-story. Asset: opening landscape illustration for chapter seven of an established Christian devotional book. Reference image is STYLE REFERENCE ONLY. Match luminous hand-painted watercolor, fine layered golden-hour brushwork, warm ivory paper grain, muted blue and cream linen, natural olive foliage and limestone, contemplative biblical realism. New scene from Luke 17: ten adult men in humble worn ancient Galilean garments begin walking away along a winding dusty path toward a distant village, in trust after Jesus tells them to go show themselves to the priests. Show exactly ten men as a readable small group, varying ages, three-quarter rear view with natural separated silhouettes and clear direction of travel, no extra travelers. Jesus stands farther back near a stone village entrance, gently indicating their onward path, distinguished in cream robe and muted blue mantle. Broad honey-gold morning sunlight, olive branches framing softly, earthy stone terraces. The men appear vulnerable but dignified; no graphic wounds or grotesque illness, no staged before-and-after or gradual skin transformation, no magical effects. Wide 1200:630 composition; generous harmonious landscape, careful believable anatomy, moving yet quiet. No text, captions, border or watermark. This is a new narrative image, not the Cana wedding; no water jars, cups or banquet.

### 結尾提示詞

Use case: illustration-story. Asset: closing portrait illustration for chapter seven of an established Christian devotional book. Reference image is STYLE REFERENCE ONLY. Match finely layered hand-painted watercolor, luminous honey-gold sunlight, warm ivory watercolor-paper grain, natural olive foliage, muted cream and blue linen, detailed ancient limestone, gentle biblical realism. New scene from Luke 17: the one healed Samaritan has returned to thank Jesus. A humble adult man in worn earth-toned clothing bows deeply at Jesus' feet on a dusty village path, hands resting naturally on the ground, face partly visible with profound gratitude. Jesus in a simple cream robe and muted blue mantle stands beside him with a gentle welcoming gesture, looking down with compassion. Compose the complete respectful interaction with believable human anatomy, no worship spectacle. Soft olive branches, warm village stone and a quiet path in background, evocative golden afternoon. Portrait 3:4; calm intimate framing and intricate watercolor brushwork, emotion carried by gesture. No other foreground people, no graphic disease, no magic or glowing skin, no halo, no modern objects, no text, labels, border or watermark. This is a new scene, not Cana; no jars, cups or banquet.

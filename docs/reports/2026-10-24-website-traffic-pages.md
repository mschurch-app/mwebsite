# 公開頁面流量追蹤補齊

補上主日直播、熱火籃球營與志工招募三個公開入口的 Google Analytics tag。沿用經原生 GA4 串流確認的既有 Measurement ID，不新增資源或第二套追蹤。

新模組只在 mchurch.online 與 www.mchurch.online 載入；localhost、預覽網域不送流量。同一頁只初始化一次並重用 Google 載入器。頁面網址與來源網址清除報名編號、token、email、電話、fragment 等參數，保留格式受限的活動歸因參數。不追蹤測試、付款回呼或私人投稿工具頁。

6 項模組／頁面設定檢查，以及 Chrome / WebKit 三個公開頁面的 18 項接線、單一載入與參數清除檢查通過。瀏覽器接線驗收攔截 Google 載入器，沒有灌入測試流量。SEO 與靜態連結檢查通過。沒有樣式、報名流程或付款變更。

網站追蹤碼原本正常，流量報表讀錯 GA4 資源的根因已在正式設定更正；相關後端報表修正於 church-management-staging 分開維護。真實數字與診斷回條留在私人工作區。

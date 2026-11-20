// church-os-giving-catalog-20261120/app-function-definitions.mjs?v=20261116-memberline1
function freezeTree(value) {
  if (value && typeof value === "object") {
    Object.values(value).forEach(freezeTree);
    Object.freeze(value);
  }
  return value;
}
var FUNCTION_CATALOG = freezeTree({
  "church_giving_preview": { "file": "church-giving.html", "title": "教會奉獻頁面預覽", "description": "單次與定期定額介面預覽，尚未開放收款", "key": "church_giving_preview", "church": "M+", "group": "finance", "symbol": "heart", "owner": true, "configurableHome": false, "searchTerms": ["奉獻", "定期定額", "金流預覽"] },
  "association_donation_preview": { "file": "association-donate.html", "title": "協會捐款頁面預覽", "description": "協會專用捐款介面預覽，尚未開放收款", "key": "association_donation_preview", "church": "M+", "group": "finance", "symbol": "heart", "owner": true, "configurableHome": false, "searchTerms": ["協會", "捐款", "定期定額"] },
  "admin_workbench": { "file": "admin-workbench.html", "title": "行政待辦", "description": "待我處理、我送出的、核准待完成與異常追蹤", "key": "admin_workbench", "church": "M+", "group": "finance", "symbol": "mplus-box", "configurableHome": false, "searchTerms": ["行政", "待辦", "逾期", "結案"] },
  "member_line_history": { "file": "member-line-history.html", "title": "LINE 訊息發送紀錄", "description": "查詢發送人、收件人、全文、時間與受理狀態", "key": "member_line_history", "group": "system", "church": "M+", "owner": true, "symbol": "chat", "configurableHome": false, "searchTerms": ["LINE", "紀錄", "誰發的", "訊息"], "settingsId": "member-line-history", "settingsGroup": "people" },
  "member_line_settings": { "file": "member-line-settings.html", "title": "會友 LINE 傳送權限", "description": "開關個別同工的會友私人訊息傳送權", "key": "member_line_settings", "group": "system", "church": "M+", "owner": true, "symbol": "chat", "configurableHome": false, "searchTerms": ["LINE", "訊息", "傳送", "權限"], "settingsId": "member-line-settings", "settingsGroup": "people" },
  "potluck": { "file": "potluck-admin.html", "title": "互動料理募集", "description": "活動設定、料理名單與感恩餐桌統計", "key": "potluck", "group": "events", "church": "M+", "owner": true, "symbol": "heart", "configurableHome": false, "searchTerms": ["感恩節", "料理", "活動管理"] },
  "finance_permission_settings": { "file": "admin-accounts.html?church=M%2B", "title": "同工權限設定", "description": "統一勾選教會功能、操作與財務權限", "key": "finance_permission_settings", "group": "finance", "church": "M+", "owner": true, "symbol": "mplus-box", "configurableHome": false, "searchTerms": ["授權", "同工權限"] },
  "finance_accounting_reports": { "file": "finance-permissions.html#reports", "title": "會計報表", "description": "查閱與匯出已核准財務資料", "key": "finance_accounting_reports", "group": "finance", "church": "M+", "accountingReportAccess": true, "symbol": "mplus-box", "configurableHome": false, "searchTerms": ["會計", "報表", "匯出"] },
  "school_staff_scheduling": { "file": "https://school.mchurch.online/?tab=schedules", "title": "班表安排", "description": "安排老師與工讀生班表，僅限鈺庭與恩茹操作", "key": "school_staff_scheduling", "group": "finance", "church": "M+", "symbol": "mplus-calendar", "configurableHome": false, "scheduleAccess": true, "searchTerms": ["排班", "老師班表", "工讀生班表"] },
  "school_payroll": { "file": "school-payroll.html?month=current", "title": "課輔薪資結算", "description": "時薪設定、月底結算、簽到表與逐級審核", "key": "school_payroll", "group": "finance", "church": "M+", "symbol": "mplus-box", "configurableHome": false, "payrollAccess": true, "searchTerms": ["老師薪資", "工讀生薪水", "每月簽到表", "結算審核"] },
  "testimony_review": {
    "permission": "website_weekly",
    "file": "testimony-admin.html",
    "church": "M+",
    "icon": "☁",
    "title": "雲彩見證",
    "description": "文字、影片與照片投稿審核",
    "key": "testimony_review",
    "group": "media",
    "symbol": "book",
    "configurableHome": false,
    "searchTerms": ["見證", "投稿", "分享", "審核"],
    "settingsId": "testimony-review",
    "settingsGroup": "content"
  },
  "review_workflows": {
    "permission": "notification_settings",
    "file": "review-workflow-settings.html",
    "icon": "✅",
    "title": "審核流程",
    "description": "初審、複審與通知設定",
    "key": "review_workflows",
    "group": "system",
    "symbol": "check",
    "configurableHome": false,
    "searchTerms": [
      "初審",
      "複審",
      "審核人"
    ],
    "settingsId": "review-workflows",
    "settingsGroup": "review"
  },
  "members": {
    "permission": "members",
    "file": "members.html",
    "icon": "👥",
    "title": "會友",
    "description": "會友與新朋友資料",
    "key": "members",
    "group": "pastoral",
    "symbol": "people",
    "configurableHome": true,
    "searchTerms": [
      "會友名冊"
    ]
  },
  "newcomer_care": {
    "permission": "newcomer_care",
    "file": "newcomer-care.html",
    "icon": "🌱",
    "title": "新朋友",
    "description": "聯絡、追蹤與後續關懷",
    "key": "newcomer_care",
    "group": "pastoral",
    "symbol": "sprout",
    "configurableHome": true,
    "searchTerms": [
      "新朋友關懷"
    ]
  },
  "church_albums": { "file": "church-albums.html", "title": "相簿", "description": "教會與課輔照片、資料夾及檔案上傳", "key": "church_albums", "permission": "church_albums", "group": "pastoral", "church": "M+", "symbol": "mplus-box", "configurableHome": false, "searchTerms": ["教會相簿", "課輔相簿", "照片", "上傳"] },
  "pastoral_workspace": {
    "file": "pastoral/workspace.html",
    "icon": "🤝",
    "title": "同工工作區",
    "description": "工作、行程與同工工具",
    "key": "pastoral_workspace",
    "group": "pastoral",
    "symbol": "people",
    "configurableHome": true,
    "searchTerms": [
      "同工協作"
    ]
  },
  "pastoral_workflow_survey": {
    "file": "pastoral/workflow-survey.html",
    "icon": "📝",
    "title": "同工工作流程調查",
    "description": "蒐集例行工作、卡點與提醒偏好",
    "key": "pastoral_workflow_survey",
    "group": "pastoral",
    "symbol": "check",
    "configurableHome": false,
    "searchTerms": ["同工問卷", "工作流程", "每週工作"]
  },
  "private_prayers": {
    "permission": "private_prayers",
    "file": "prayers.html",
    "icon": "🙏",
    "title": "代禱與關懷",
    "description": "代禱事項與後續關心",
    "key": "private_prayers",
    "group": "pastoral",
    "symbol": "heart",
    "configurableHome": true,
    "searchTerms": [
      "代禱關懷"
    ]
  },
  "pastoral_chats": {
    "permission": "pastoral_chats",
    "file": "pastoral-inbox.html",
    "icon": "💬",
    "title": "關懷訊息",
    "description": "一對一訊息與跟進",
    "key": "pastoral_chats",
    "group": "pastoral",
    "symbol": "chat",
    "configurableHome": true,
    "searchTerms": [
      "牧養訊息"
    ]
  },
  "attendance": {
    "permission": "attendance",
    "file": "attendance.html",
    "icon": "✅",
    "title": "出席登記",
    "description": "聚會出席與統計",
    "key": "attendance",
    "group": "service",
    "symbol": "check",
    "configurableHome": true,
    "searchTerms": [
      "聚會點名"
    ]
  },
  "groups": {
    "permission": "groups",
    "file": "groups.html",
    "icon": "🫶",
    "title": "小組與小家",
    "description": "分組、組長與成員",
    "key": "groups",
    "group": "pastoral",
    "symbol": "people",
    "configurableHome": true,
    "searchTerms": [
      "小組／小家"
    ]
  },
  "schedules": {
    "permission": "schedules",
    "file": "schedules.html",
    "icon": "📅",
    "title": "服事安排",
    "description": "主日與聚會服事",
    "key": "schedules",
    "group": "service",
    "symbol": "calendar",
    "configurableHome": true,
    "searchTerms": [
      "服事排班"
    ]
  },
  "spaces": {
    "permission": "spaces",
    "file": "spaces.html",
    "icon": "📍",
    "title": "場地與設備",
    "description": "空間、設備與預約",
    "key": "spaces",
    "group": "service",
    "symbol": "pin",
    "configurableHome": true,
    "searchTerms": [
      "場地預約"
    ],
    "settingsId": "space-settings",
    "settingsGroup": "church"
  },
  "inventory": {
    "permission": "inventory",
    "file": "inventory.html",
    "icon": "📦",
    "title": "物品與借用",
    "description": "位置、數量與借還",
    "key": "inventory",
    "group": "service",
    "symbol": "box",
    "configurableHome": true,
    "searchTerms": [
      "物品清冊"
    ],
    "settingsId": "inventory-settings",
    "settingsGroup": "church"
  },
  "heat_camp": {
    "church": "M+",
    "permission": "heat_camp",
    "file": "heat-camp-admin.html",
    "icon": "🏀",
    "title": "熱火籃球營",
    "description": "報名、繳費、名單與志工",
    "key": "heat_camp",
    "group": "basketball",
    "symbol": "target",
    "configurableHome": true,
    "searchTerms": ["志工報名", "熱火籃球營志工"]
  },
  "website_weekly": {
    "permission": "website_weekly",
    "file": "website-maintenance.html",
    "icon": "🌐",
    "title": "主日週報",
    "description": "週報、預告圖與服事表",
    "key": "website_weekly",
    "group": "media",
    "symbol": "globe",
    "configurableHome": true,
    "searchTerms": [
      "教會網站維護",
      "官網",
      "網站",
      "預告圖",
      "主日"
    ],
    "settingsId": "website-maintenance",
    "settingsGroup": "content"
  },
  "association_stories": { "church": "M+", "permission": "association_content", "file": "association-stories.html", "title": "協會照片說故事", "description": "照片與故事產生 FB 文案，送牧師／師母審核後發布，可同步協會最新消息", "key": "association_stories", "group": "media", "symbol": "globe", "configurableHome": false, "searchTerms": ["協會", "FB", "Facebook", "照片說故事", "師母審核"], "settingsId": "association-stories", "settingsGroup": "content" },
  "association_news": {
    "church": "M+",
    "permission": "association_content",
    "file": "association-news.html",
    "icon": "📰",
    "title": "協會網站",
    "description": "最新消息上稿，發佈後直接顯示於協會首頁",
    "key": "association_news",
    "group": "media",
    "symbol": "globe",
    "configurableHome": true,
    "searchTerms": ["協會", "最新消息", "tcsc.org.tw", "上稿"],
    "settingsId": "association-news",
    "settingsGroup": "content"
  },
  "website_group_resources": {
    "permission": "website_group_resources",
    "file": "group-resources-management.html",
    "icon": "📚",
    "title": "小組教材",
    "description": "每週教材與聚會內容",
    "key": "website_group_resources",
    "group": "media",
    "symbol": "book",
    "configurableHome": true,
    "searchTerms": [
      "小組聚會資源"
    ],
    "settingsId": "group-resources",
    "settingsGroup": "content"
  },
  "tree_reading_admin": {
    "permission": "tree_reading_admin",
    "file": "daily-devotional-admin.html",
    "icon": "🌳",
    "title": "生命樹",
    "description": "每日靈修與讀經進度",
    "key": "tree_reading_admin",
    "group": "media",
    "symbol": "tree",
    "configurableHome": true,
    "searchTerms": [
      "每日靈修生命樹",
      "讀經生命樹",
      "每日靈修",
      "讀經"
    ],
    "settingsId": "daily-devotional",
    "settingsGroup": "content"
  },
  "bibletree_admin": {
    "permission": "tree_reading_admin",
    "church": "M+",
    "file": "bibletree-admin.html",
    "icon": "🌳",
    "title": "讀經樹管理",
    "description": "玩家進度與365日靈修內容",
    "key": "bibletree_admin",
    "group": "events",
    "symbol": "tree",
    "configurableHome": false,
    "searchTerms": ["讀經樹", "RPG", "遊戲管理", "玩家", "365", "靈修"]
  },
  "bibletree_devotional": {
    "permission": "tree_reading_admin",
    "church": "M+",
    "file": "bibletree-devotional-admin.html",
    "icon": "🌳",
    "title": "讀經樹365日靈修",
    "description": "逐日檢視、修訂與發布靈修內容",
    "key": "bibletree_devotional",
    "group": "events",
    "symbol": "tree",
    "configurableHome": false,
    "searchTerms": ["讀經樹", "365", "全年靈修", "經文", "內容審查"]
  },
  "bibletree_players": {
    "permission": "tree_reading_admin",
    "church": "M+",
    "file": "bibletree-players.html",
    "icon": "👥",
    "title": "讀經樹玩家列表",
    "description": "玩家資料、讀經進度與公測參與",
    "key": "bibletree_players",
    "group": "events",
    "symbol": "people",
    "configurableHome": false,
    "searchTerms": ["玩家", "遊戲帳號", "讀經樹", "公測", "回饋"]
  },
  "life_tree_festivals": {
    "permission": "tree_reading_admin",
    "church": "M+",
    "file": "life-tree-festivals.html",
    "icon": "🌳",
    "title": "生命樹節慶預覽",
    "description": "九種節慶場景與每日互動試玩",
    "key": "life_tree_festivals",
    "group": "media",
    "symbol": "tree",
    "configurableHome": false,
    "searchTerms": ["節慶", "生命樹", "聖誕燈", "感恩節", "光明勇士"],
    "settingsId": "life-tree-festivals",
    "settingsGroup": "content"
  },
  "binding_review": {
    "permission": "binding_review",
    "file": "binding-review.html",
    "icon": "🔗",
    "title": "LINE 身分確認",
    "description": "確認會友與 LINE 帳號",
    "key": "binding_review",
    "group": "system",
    "symbol": "link",
    "configurableHome": true,
    "searchTerms": [
      "LINE 綁定審核"
    ],
    "settingsId": "binding-review",
    "settingsGroup": "people"
  },
  "notification_settings": {
    "permission": "notification_settings",
    "file": "notification-settings.html",
    "icon": "🔔",
    "title": "通知設定",
    "description": "手機與 LINE 通知",
    "key": "notification_settings",
    "group": "system",
    "symbol": "bell",
    "configurableHome": true,
    "searchTerms": [
      "LINE 通知設定",
      "通知管道設定"
    ],
    "settingsId": "notification-settings",
    "settingsGroup": "review"
  },
  "school": {
    "file": "https://school.mchurch.online/",
    "icon": "📚",
    "title": "課輔",
    "description": "學生、出席與輔導",
    "key": "school",
    "group": "school",
    "symbol": "book",
    "configurableHome": true,
    "searchTerms": []
  },
  "school_checkin": {
    "file": "https://school.mchurch.online/?tab=checkin",
    "icon": "📷",
    "title": "課輔打卡",
    "description": "學生與同工打卡",
    "key": "school_checkin",
    "group": "school",
    "symbol": "camera",
    "configurableHome": true,
    "searchTerms": []
  },
  "school_schedules": {
    "file": "https://school.mchurch.online/?tab=schedules",
    "icon": "🗓️",
    "title": "課輔安排",
    "description": "老師與同工安排",
    "key": "school_schedules",
    "group": "school",
    "symbol": "calendar",
    "configurableHome": true,
    "searchTerms": []
  },
  "school_rollcall": {
    "file": "https://school.mchurch.online/?tab=rollcall",
    "icon": "✅",
    "title": "課輔出席",
    "description": "每日課堂出席",
    "key": "school_rollcall",
    "group": "school",
    "symbol": "check",
    "configurableHome": true,
    "searchTerms": []
  },
  "school_students": {
    "file": "https://school.mchurch.online/?tab=students",
    "icon": "🧑‍🎓",
    "title": "學生",
    "description": "學生與同工資料",
    "key": "school_students",
    "group": "school",
    "symbol": "student",
    "configurableHome": true,
    "searchTerms": []
  },
  "school_counseling": {
    "file": "https://school.mchurch.online/?tab=counseling",
    "icon": "💛",
    "title": "個別輔導",
    "description": "輔導紀錄與跟進",
    "key": "school_counseling",
    "group": "school",
    "symbol": "heart",
    "configurableHome": true,
    "searchTerms": []
  },
  "school_reports": {
    "file": "https://school.mchurch.online/?tab=print-center",
    "icon": "🖨️",
    "title": "課輔報表",
    "description": "出席表與學生資料",
    "key": "school_reports",
    "group": "school",
    "symbol": "printer",
    "configurableHome": true,
    "searchTerms": []
  },
  "basketball": {
    "file": "https://mschurch-app.github.io/m-plus-basketball/",
    "icon": "🏀",
    "title": "籃球隊",
    "description": "球員與球隊",
    "key": "basketball",
    "group": "basketball",
    "symbol": "target",
    "configurableHome": true,
    "searchTerms": []
  },
  "basketball_gamecenter": {
    "file": "https://mschurch-app.github.io/m-plus-basketball/?tab=gamecenter",
    "icon": "🏆",
    "title": "比賽紀錄",
    "description": "比賽、得分與犯規",
    "key": "basketball_gamecenter",
    "group": "basketball",
    "symbol": "trophy",
    "configurableHome": true,
    "searchTerms": []
  },
  "basketball_tactics": {
    "file": "https://mschurch-app.github.io/m-plus-basketball/?tab=tactics",
    "icon": "📋",
    "title": "籃球戰術",
    "description": "戰術板與訓練內容",
    "key": "basketball_tactics",
    "group": "basketball",
    "symbol": "clipboard",
    "configurableHome": true,
    "searchTerms": []
  },
  "basketball_assignments": {
    "file": "https://mschurch-app.github.io/m-plus-basketball/?tab=assignments",
    "icon": "🎯",
    "title": "球員作業",
    "description": "訓練任務與成果",
    "key": "basketball_assignments",
    "group": "basketball",
    "symbol": "target",
    "configurableHome": true,
    "searchTerms": []
  },
  "basketball_schedule": {
    "file": "https://mschurch-app.github.io/m-plus-basketball/?tab=schedule",
    "icon": "📆",
    "title": "球隊行程",
    "description": "練球與比賽",
    "key": "basketball_schedule",
    "group": "basketball",
    "symbol": "calendar",
    "configurableHome": true,
    "searchTerms": []
  },
  "basketball_daily": {
    "file": "https://mschurch-app.github.io/m-plus-basketball/?tab=dailystatus",
    "icon": "💪",
    "title": "每日狀態",
    "description": "身體與訓練狀態",
    "key": "basketball_daily",
    "group": "basketball",
    "symbol": "bolt",
    "configurableHome": true,
    "searchTerms": []
  },
  "system_monitor": {
    "file": "system-monitor.html",
    "icon": "📊",
    "title": "系統狀況",
    "description": "網站、服務與排程",
    "key": "system_monitor",
    "group": "system",
    "symbol": "chart",
    "configurableHome": true,
    "searchTerms": [
      "系統監控中心"
    ]
  },
  "church_settings": {
    "file": "church-settings.html",
    "icon": "⚙️",
    "title": "教會設定",
    "description": "堂會、帳號與功能",
    "key": "church_settings",
    "group": "system",
    "symbol": "gear",
    "configurableHome": true,
    "searchTerms": [
      "系統設定"
    ]
  },
  "pastoral_content": {
    "permission": "pastoral",
    "file": "pastoral-content.html",
    "icon": "✨",
    "title": "牧養圖卡",
    "description": "祝禱、小卡與新朋友旅程",
    "key": "pastoral_content",
    "group": "media",
    "symbol": "sparkle",
    "configurableHome": false,
    "searchTerms": [
      "教牧內容"
    ],
    "settingsId": "pastoral-content",
    "settingsGroup": "content"
  },
  "todays_message": {
    "permission": "pastoral",
    "file": "todays-message-settings.html",
    "icon": "✨",
    "title": "給今天的你",
    "description": "每日經文與祝福內容",
    "key": "todays_message",
    "group": "media",
    "symbol": "sparkle",
    "configurableHome": false,
    "searchTerms": [],
    "settingsId": "line-today",
    "settingsGroup": "content"
  },
  "love_share": {
    "permission": "pastoral",
    "file": "love-share-settings.html",
    "icon": "💛",
    "title": "把愛傳出去",
    "description": "祝福情境與分享圖片",
    "key": "love_share",
    "group": "media",
    "symbol": "heart",
    "configurableHome": false,
    "searchTerms": [],
    "settingsId": "line-love",
    "settingsGroup": "content"
  },
  "line_preview": {
    "permission": "pastoral",
    "file": "line-preview.html",
    "icon": "🔗",
    "title": "LINE 服務預覽",
    "description": "檢查會友服務內容",
    "key": "line_preview",
    "group": "media",
    "symbol": "link",
    "configurableHome": false,
    "searchTerms": [],
    "settingsId": "line-preview",
    "settingsGroup": "content"
  },
  "customization": {
    "permission": "pastoral",
    "file": "customization-settings.html",
    "icon": "⚙️",
    "title": "名稱與表單",
    "description": "功能名稱、順序、迎新表單與選項",
    "key": "customization",
    "group": "system",
    "symbol": "sliders",
    "configurableHome": false,
    "searchTerms": [],
    "settingsId": "customization-options",
    "settingsGroup": "content"
  },
  "admin_accounts": {
    "owner": true,
    "file": "admin-accounts.html",
    "icon": "👥",
    "title": "同工帳號與權限",
    "description": "選同工、勾選功能與操作權限",
    "key": "admin_accounts",
    "group": "system",
    "symbol": "people",
    "configurableHome": false,
    "searchTerms": [],
    "settingsId": "admin-accounts",
    "settingsGroup": "people"
  },
  "media_publishing": {
    "permission": "website_weekly",
    "action": "approve",
    "file": "authorization-settings.html",
    "icon": "▶",
    "title": "服務授權管理",
    "description": "YouTube、Instagram、教會與協會 FB、Google 與 LINE 連線授權",
    "key": "media_publishing",
    "group": "media",
    "symbol": "play",
    "configurableHome": false,
    "searchTerms": [
      "IG",
      "Instagram",
      "YouTube",
      "影片",
      "社群"
    ],
    "settingsId": "media-publishing",
    "settingsGroup": "content"
  },
  "sermon_preparation": {
    "permission": "website_weekly",
    "action": "edit",
    "church": "M+",
    "file": "sermon-preparation.html",
    "icon": "📖",
    "title": "信息預備",
    "description": "素材、領受、大綱與講章",
    "key": "sermon_preparation",
    "group": "media",
    "symbol": "book",
    "configurableHome": true,
    "searchTerms": ["講章", "講道", "預備", "信息工作室"],
    "settingsId": "sermon-preparation",
    "settingsGroup": "content"
  },
  "subtitle_library": {
    "permission": "website_weekly",
    "action": "edit",
    "church": "M+",
    "file": "youtube-subtitle-library.html",
    "icon": "📚",
    "title": "字幕詞庫",
    "description": "辨識錯字與講員用語",
    "key": "subtitle_library",
    "group": "media",
    "symbol": "book",
    "configurableHome": false,
    "searchTerms": [],
    "settingsId": "subtitle-library",
    "settingsGroup": "content"
  },
  "service_signups": {
    "church": "M+",
    "permission": "schedules",
    "file": "service-signup-admin.html",
    "icon": "📅",
    "title": "服事意願與協調",
    "description": "每兩個月的服事意願、候補與排班協調",
    "key": "service_signups",
    "group": "service",
    "symbol": "calendar",
    "configurableHome": false,
    "searchTerms": []
  },
  "thanksgiving_offering_admin": { "file": "thanksgiving-offering-admin.html", "title": "感恩節奉獻回報", "description": "私人奉獻回報、通知投遞與財務核對", "key": "thanksgiving_offering_admin", "group": "finance", "church": "M+", "offeringAccess": true, "symbol": "clipboard", "configurableHome": false, "searchTerms": ["感恩節", "奉獻回應", "末五碼", "匯款", "對帳"] },
  "finance_projects": { "file": "finance-projects.html", "title": "專案與事工設定", "description": "專案、事工項目、收入科目與線上捐款對應", "key": "finance_projects", "group": "finance", "church": "M+", "owner": true, "symbol": "clipboard", "configurableHome": false, "settingsGroup": "church", "settingsId": "finance-projects", "searchTerms": ["專案", "事工", "收入科目", "捐款項目"] },
  "finance_receipts": {
    "church": "M+",
    "receiptAccess": true,
    "file": "finance-receipts.html",
    "title": "收據開立",
    "description": "金錢與物品收據、開立及作廢紀錄",
    "key": "finance_receipts",
    "group": "finance",
    "symbol": "clipboard",
    "configurableHome": false,
    "searchTerms": ["收據", "捐款收據", "捐物", "金錢", "物品", "會計"]
  },
  "finance_expenses": {
    "church": "M+",
    "expenseAccess": true,
    "file": "finance-expenses.html",
    "icon": "📋",
    "title": "支出記帳",
    "description": "費用提報、憑證核對、審核與付款紀錄",
    "key": "finance_expenses",
    "group": "finance",
    "symbol": "clipboard",
    "configurableHome": false,
    "searchTerms": ["支出", "費用", "記帳", "核銷", "付款", "零用金"]
  },
  "finance_cash": {
    "church": "M+",
    "financeAccess": true,
    "file": "finance-cash.html",
    "icon": "📋",
    "title": "主日奉獻",
    "description": "逐筆登錄奉獻、核對與入帳",
    "key": "finance_cash",
    "group": "finance",
    "symbol": "clipboard",
    "configurableHome": false,
    "searchTerms": ["財務", "會計", "奉獻", "點收", "現金"]
  },
  "service_quick_match": {
    "church": "M+",
    "permission": "schedules",
    "file": "service-signup-admin.html?match=1",
    "icon": "⚡",
    "title": "服事快速適配",
    "description": "事工領袖可預排負責類別的服事人選",
    "key": "service_quick_match",
    "group": "service",
    "symbol": "calendar",
    "configurableHome": false,
    "searchTerms": ["智能配對", "快速配對", "事工領袖"]
  }
});
var FUNCTION_GROUPS = freezeTree([
  { "key": "events", "title": "活動", "note": "活動參與及遊戲玩家管理", "keys": ["potluck", "bibletree_admin", "bibletree_players", "bibletree_devotional"] },
  {
    "key": "pastoral",
    "title": "人與關懷",
    "note": "會友、新朋友、小組與關懷",
    "keys": [
      "members",
      "newcomer_care",
      "groups",
      "private_prayers",
      "pastoral_chats",
      "church_albums",
      "pastoral_workspace",
      "pastoral_workflow_survey"
    ]
  },
  {
    "key": "service",
    "title": "聚會與服事",
    "note": "出席、意願登記、排班與場地",
    "keys": [
      "attendance",
      "schedules",
      "service_signups",
      "service_quick_match",
      "spaces",
      "inventory"
    ]
  },
  {
    "key": "finance",
    "title": "教會財務",
    "note": "M＋奉獻收入、支出記帳與核對",
    "keys": ["church_giving_preview", "association_donation_preview", "admin_workbench", "thanksgiving_offering_admin", "finance_projects", "finance_cash", "finance_expenses", "finance_receipts", "finance_permission_settings", "finance_accounting_reports", "school_staff_scheduling", "school_payroll"]
  },
  {
    "key": "media",
    "title": "內容與發布",
    "note": "靈修、週報、教材與社群內容",
    "keys": [
      "testimony_review",
      "tree_reading_admin",
      "life_tree_festivals",
      "website_weekly",
      "association_news",
      "association_stories",
      "website_group_resources",
      "pastoral_content",
      "todays_message",
      "love_share",
      "line_preview",
      "media_publishing",
      "subtitle_library",
      "sermon_preparation"
    ]
  },
  {
    "key": "school",
    "title": "課輔",
    "note": "學生、出席、輔導與報表",
    "keys": [
      "school",
      "school_checkin",
      "school_schedules",
      "school_rollcall",
      "school_students",
      "school_counseling",
      "school_reports"
    ]
  },
  {
    "key": "basketball",
    "title": "籃球事工",
    "note": "籃球隊、訓練與熱火籃球營",
    "keys": [
      "heat_camp",
      "basketball",
      "basketball_gamecenter",
      "basketball_tactics",
      "basketball_assignments",
      "basketball_schedule",
      "basketball_daily"
    ]
  },
  {
    "key": "system",
    "title": "設定與工具",
    "note": "帳號、身分、審核與通知",
    "keys": [
      "binding_review",
      "review_workflows",
      "notification_settings",
      "customization",
      "admin_accounts",
      "member_line_settings",
      "member_line_history",
      "church_settings",
      "system_monitor"
    ]
  }
]);
var SETTINGS_GROUPS = freezeTree([
  {
    "key": "people",
    "title": "同工與權限",
    "note": "邀請同工、確認 LINE 身分與使用權限",
    "keys": [
      "admin_accounts",
      "member_line_settings",
      "member_line_history",
      "binding_review"
    ]
  },
  {
    "key": "review",
    "title": "審核與通知",
    "note": "設定初審、複審與通知方式",
    "keys": [
      "review_workflows",
      "notification_settings"
    ]
  },
  {
    "key": "content",
    "title": "內容與發布",
    "note": "主日、靈修、表單與社群內容",
    "keys": [
      "testimony_review",
      "website_weekly",
      "association_news",
      "association_stories",
      "website_group_resources",
      "tree_reading_admin",
      "life_tree_festivals",
      "pastoral_content",
      "todays_message",
      "love_share",
      "line_preview",
      "media_publishing",
      "subtitle_library",
      "sermon_preparation",
      "customization"
    ]
  },
  {
    "key": "church",
    "title": "堂會與場地",
    "note": "公開資訊、聚會位置、空間與物品",
    "keys": [
      "finance_projects",
      "spaces",
      "inventory"
    ]
  }
]);
var PERMISSION_LABELS = freezeTree({
  association_content: "協會內容（照片說故事／網站消息）",
  church_albums: "相簿",
  "members": "會友",
  "attendance": "出席登記",
  "groups": "小組與小家",
  "schedules": "服事安排",
  "private_prayers": "代禱與關懷",
  "pastoral_chats": "關懷訊息與圖卡",
  "spaces": "場地與設備",
  "newcomer_care": "新朋友",
  "tree_reading_admin": "生命樹",
  "binding_review": "LINE 身分確認",
  "notification_settings": "通知設定",
  "website_weekly": "主日週報",
  "website_group_resources": "小組教材",
  "inventory": "物品與借用",
  "heat_camp": "熱火籃球營"
});
var ROLE_TEMPLATES = freezeTree({
  "pastor": {
    "label": "牧者",
    "permissions": [
      "members",
      "attendance",
      "groups",
      "schedules",
      "private_prayers",
      "pastoral_chats",
      "spaces",
      "newcomer_care",
      "tree_reading_admin",
      "binding_review",
      "notification_settings",
      "website_weekly",
      "website_group_resources",
      "inventory"
    ]
  },
  "pastor_spouse": {
    "label": "師母",
    "permissions": [
      "members",
      "attendance",
      "groups",
      "schedules",
      "private_prayers",
      "pastoral_chats",
      "spaces",
      "newcomer_care",
      "tree_reading_admin",
      "binding_review",
      "notification_settings",
      "website_weekly",
      "website_group_resources",
      "inventory"
    ]
  },
  "administrator": {
    "label": "行政管理",
    "permissions": [
      "members",
      "attendance",
      "groups",
      "schedules",
      "spaces",
      "newcomer_care",
      "binding_review",
      "notification_settings",
      "inventory"
    ]
  },
  "group_leader": {
    "label": "小組／小家長",
    "permissions": [
      "members",
      "attendance",
      "groups"
    ]
  },
  "care": {
    "label": "關懷同工",
    "permissions": [
      "members",
      "private_prayers",
      "pastoral_chats",
      "newcomer_care"
    ]
  },
  "facilities": {
    "label": "總務同工",
    "permissions": [
      "spaces",
      "inventory"
    ]
  },
  "custom": {
    "label": "自訂權限",
    "permissions": []
  }
});
var HOME_TEMPLATES = freezeTree({
  "pastor": [
    "newcomer_care",
    "private_prayers",
    "pastoral_chats",
    "pastoral_workspace",
    "members",
    "schedules",
    "system_monitor"
  ],
  "pastor_spouse": [
    "newcomer_care",
    "private_prayers",
    "pastoral_workspace",
    "members",
    "groups",
    "schedules"
  ],
  "administrator": [
    "attendance",
    "members",
    "groups",
    "schedules",
    "spaces",
    "inventory",
    "binding_review",
    "notification_settings",
    "website_weekly"
  ],
  "group_leader": [
    "groups",
    "attendance",
    "members",
    "pastoral_workspace"
  ],
  "care": [
    "newcomer_care",
    "private_prayers",
    "pastoral_chats",
    "members",
    "pastoral_workspace"
  ],
  "facilities": [
    "spaces",
    "inventory",
    "pastoral_workspace"
  ],
  "custom": [
    "pastoral_workspace"
  ]
});
var FEATURE_ACTIONS = freezeTree({
  "view": "查看",
  "create": "新增",
  "edit": "修改",
  "delete": "刪除",
  "export": "匯出",
  "approve": "審核",
  "manage": "管理設定"
});
var FRIENDLY_LABELS = freezeTree({
  "會友名冊": "會友",
  "新朋友關懷": "新朋友",
  "同工協作": "同工工作區",
  "代禱關懷": "代禱與關懷",
  "牧養訊息": "關懷訊息",
  "聚會點名": "出席登記",
  "小組／小家": "小組與小家",
  "服事排班": "服事安排",
  "場地預約": "場地與設備",
  "物品清冊": "物品與借用",
  "教會網站維護": "主日週報",
  "小組聚會資源": "小組教材",
  "每日靈修生命樹": "生命樹",
  "讀經生命樹": "生命樹",
  "LINE 綁定審核": "LINE 身分確認",
  "LINE 通知設定": "通知設定",
  "通知管道設定": "通知設定",
  "教牧內容": "牧養圖卡",
  "系統監控中心": "系統狀況",
  "系統設定": "教會設定"
});
var NAVIGATION_MODULES = freezeTree([
  {
    "key": "dashboard",
    "file": "admin-dashboard.html",
    "label": "首頁",
    "icon": "🏠"
  },
  {
    "key": "members",
    "functionKey": "members",
    "also": [
      "member-audit.html"
    ]
  },
  {
    "key": "newcomer_care",
    "functionKey": "newcomer_care"
  },
  {
    "key": "tree_reading_admin",
    "functionKey": "tree_reading_admin",
    "also": [
      "tree-reading-admin.html",
      "bibletree-players.html"
    ]
  },
  {
    "key": "binding_review",
    "functionKey": "binding_review"
  },
  {
    "key": "notification_settings",
    "functionKey": "notification_settings"
  },
  {
    "key": "review_workflows",
    "functionKey": "review_workflows"
  },
  {
    "key": "groups",
    "functionKey": "groups",
    "also": [
      "group-members.html"
    ]
  },
  {
    "key": "attendance",
    "functionKey": "attendance"
  },
  {
    "key": "schedules",
    "functionKey": "schedules"
  },
  {
    "key": "inventory",
    "functionKey": "inventory"
  },
  {
    "key": "prayers",
    "functionKey": "private_prayers"
  },
  {
    "key": "pastoral_inbox",
    "functionKey": "pastoral_chats"
  },
  {
    "key": "pastoral_content",
    "functionKey": "pastoral_content",
    "permission": "pastoral_chats"
  },
  {
    "key": "settings",
    "functionKey": "church_settings",
    "also": [
      "customization-settings.html",
      "welcome-settings.html",
      "ministry-settings.html",
      "admin-accounts.html",
      "todays-message-settings.html",
      "love-share-settings.html"
    ]
  }
].map((route) => {
  if (route.key === "dashboard") return route;
  const item = FUNCTION_CATALOG[route.functionKey];
  return { ...route, file: item.file, label: item.title, icon: item.icon, ...route.permission || item.permission ? { permission: route.permission || item.permission } : {} };
}));
var FUNCTION_ALIASES = Object.freeze({ prayers: "private_prayers", pastoral_inbox: "pastoral_chats", settings: "church_settings" });
var HOME_MODULES = Object.freeze(Object.fromEntries(Object.entries(FUNCTION_CATALOG).filter(([, item]) => item.configurableHome).map(([key, item]) => [key, item.title])));
var LEGACY_DASHBOARD_MODULES = Object.freeze([
  "members",
  "newcomer_care",
  "tree_reading_admin",
  "binding_review",
  "notification_settings",
  "groups",
  "attendance",
  "schedules",
  "spaces",
  "inventory",
  "prayers",
  "pastoral_inbox",
  "pastoral_content",
  "website_weekly",
  "website_group_resources"
].map((key) => {
  const item = FUNCTION_CATALOG[FUNCTION_ALIASES[key] || key];
  return Object.freeze({ ...item, key, permission: item.permission === "pastoral" ? "pastoral_chats" : item.permission });
}));
function canonicalFunctionKey(key) {
  return FUNCTION_ALIASES[key] || key;
}
var LEGACY_FEATURE_FILES = Object.freeze(Object.fromEntries([
  "members",
  "newcomer_care",
  "tree_reading_admin",
  "binding_review",
  "notification_settings",
  "groups",
  "attendance",
  "schedules",
  "prayers",
  "spaces",
  "pastoral_inbox",
  "pastoral_content",
  "website_weekly",
  "website_group_resources"
].map((key) => [key, FUNCTION_CATALOG[canonicalFunctionKey(key)].file])));

// church-os-giving-catalog-20261120/app-icons.mjs?v=20261116-memberline1
var ICON_PATHS = Object.freeze({
  "mplus-book": '<path d="M12 5C8 2 4 3 2 4v15c4-2 7-1 10 1 3-2 6-3 10-1V4c-2-1-6-2-10 1Zm0 0v15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
  "mplus-box": '<path d="m3 7 9-4 9 4v13H3Zm0 0h18M8 12h8M8 16h5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
  "mplus-calendar": '<rect x="3" y="5" width="18" height="16" rx="3" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M7 2v6m10-6v6M3 11h18m-13 5h2m4 0h2" fill="none" stroke="currentColor" stroke-width="1.8"/>',
  "mplus-globe": '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M3 12h18M12 3c-5 5-5 13 0 18 5-5 5-13 0-18Z" fill="none" stroke="currentColor" stroke-width="1.5"/>',
  "tree-raincoat": '<path d="M8 8C6 2 18 2 16 8l5 5-3 4-3-2v7H9v-7l-3 2-3-4Z" fill="#ffd45b" stroke="#a76828" stroke-width="1.2" stroke-linejoin="round"/><path d="M9 8q3 3 6 0M12 11v10" fill="none" stroke="#a76828" stroke-width="1.2"/><circle cx="10.4" cy="6.5" r=".65" fill="#664927"/><circle cx="13.6" cy="6.5" r=".65" fill="#664927"/><path d="M10.5 17h-1m5 0h-1" stroke="#fff6ce" stroke-width="2"/>',
  "tree-spray": '<path d="M7 4h8v3h-3l-1 4H7l1-5Z" fill="#e9855c" stroke="#93472f" stroke-width="1.2"/><path d="M8 10h4q3 3 3 6v4q0 2-2 2H6q-2 0-2-2v-4q0-3 4-6Z" fill="#a5d9c1" stroke="#376d59" stroke-width="1.2"/><rect x="6" y="14" width="7" height="5" rx="2" fill="#fff9df"/><path d="m18 4 3-1m-3 4h4m-4 2 3 2" stroke="#6baeb5" stroke-width="1.5" stroke-linecap="round"/><path d="M8 16h3" stroke="#376d59" stroke-width="1.5"/>',
  "tree-support": '<circle cx="7" cy="5" r="3" fill="#f3c79f" stroke="#926c4d" stroke-width="1.1"/><circle cx="17" cy="5" r="3" fill="#f3c79f" stroke="#926c4d" stroke-width="1.1"/><path d="M3 20V12q0-3 4-3t4 3v8Z" fill="#9fcdb4" stroke="#386c56" stroke-width="1.2"/><path d="M13 20V12q0-3 4-3t4 3v8Z" fill="#f1c872" stroke="#a37636" stroke-width="1.2"/><path d="M5 11q6 4 12-1M19 11q-6 4-12-1" fill="none" stroke="#f3c79f" stroke-width="2.8" stroke-linecap="round"/><path d="M5 20v2m4-2v2m6-2v2m4-2v2" stroke="#735843" stroke-width="2" stroke-linecap="round"/><path d="M10.5 3q1.5-2 3 0-1.5 2-3 0" fill="#df846a"/>',
  "tree-broom": '<path d="m16 2-7 13" stroke="#a26c43" stroke-width="3" stroke-linecap="round"/><path d="m8 12 5 3 1 7q-6 2-11-3Z" fill="#f1c668" stroke="#a77532" stroke-width="1.2"/><path d="m6 18 2-3m2 5 1-4" stroke="#a77532" stroke-width="1.2"/><path d="m18 13 .6 2.4L21 16l-2.4.6L18 19l-.6-2.4L15 16l2.4-.6Z" fill="#ed9b6b"/>',
  "home": '<path d="m2.4 11.1 8.45-7.2a1.8 1.8 0 0 1 2.3 0l8.45 7.2a1.35 1.35 0 0 1-1.75 2.05L19 12.4v7.1A2.5 2.5 0 0 1 16.5 22h-2.7v-6.4h-3.6V22H7.5A2.5 2.5 0 0 1 5 19.5v-7.1l-.85.75A1.35 1.35 0 0 1 2.4 11.1Z" fill="currentColor" stroke="none"/>',
  "people": '<circle cx="9" cy="8" r="3.25" fill="#fff" stroke="none"/><path d="M2.9 19.8c0-3.7 2.45-6.15 6.1-6.15s6.1 2.45 6.1 6.15c0 .65-.45 1.2-1.1 1.2H4c-.65 0-1.1-.55-1.1-1.2Z" fill="#fff" stroke="none"/><circle cx="16.5" cy="8.4" r="2.55" fill="#fff" opacity=".72" stroke="none"/><path d="M15.2 13.7c3.65-.35 6 1.8 6 5.1 0 .65-.45 1.2-1.1 1.2h-3.25c.05-2.6-.55-4.7-1.65-6.3Z" fill="#fff" opacity=".72" stroke="none"/>',
  "sprout": '<path d="M11 21V11.7c-4.5-.1-7.35-2.6-7.35-7.1 4.55 0 7.25 2.15 7.65 6.1.55-4.55 3.55-7.1 8.7-7.1 0 4.95-3.45 7.75-8 7.95V21Z" fill="#fff" stroke="none"/><path d="M12 11.2c1.4-2.6 3.4-4.45 6.05-5.55M10.8 11.4C9.6 9.2 8 7.7 5.65 6.75" opacity=".38"/>',
  "tree": '<path d="M12 2.5c2.75 0 5 2.05 5.25 4.75A4.85 4.85 0 0 1 16.1 16H7.9a4.85 4.85 0 0 1-1.15-8.75A5.28 5.28 0 0 1 12 2.5Z" fill="#fff" stroke="none"/><path d="M11 13h2v8.5h-2zM7.8 19.5h8.4V22H7.8z" fill="#fff" opacity=".78" stroke="none"/>',
  "link": '<path d="M14.4 4.4a5.15 5.15 0 0 1 7.3 7.3l-2.5 2.5a5.15 5.15 0 0 1-7.3 0 1.55 1.55 0 1 1 2.2-2.2 2.05 2.05 0 0 0 2.9 0l2.5-2.5a2.05 2.05 0 0 0-2.9-2.9l-1.45 1.45a1.55 1.55 0 1 1-2.2-2.2Z" fill="#fff" stroke="none"/><path d="M9.6 19.6a5.15 5.15 0 0 1-7.3-7.3l2.5-2.5a5.15 5.15 0 0 1 7.3 0 1.55 1.55 0 1 1-2.2 2.2A2.05 2.05 0 0 0 7 12l-2.5 2.5a2.05 2.05 0 0 0 2.9 2.9l1.45-1.45a1.55 1.55 0 1 1 2.2 2.2Z" fill="#fff" opacity=".8" stroke="none"/>',
  "bell": '<path d="M12 2.5a2 2 0 0 1 1.8 1.12A6.55 6.55 0 0 1 18.5 9.9v3.3l2.2 3.65c.5.85-.1 1.95-1.1 1.95H4.4c-1 0-1.6-1.1-1.1-1.95l2.2-3.65V9.9a6.55 6.55 0 0 1 4.7-6.28A2 2 0 0 1 12 2.5Z" fill="#fff" stroke="none"/><path d="M9.2 20h5.6a2.9 2.9 0 0 1-5.6 0Z" fill="#fff" opacity=".72" stroke="none"/>',
  "check": '<rect x="3" y="3" width="18" height="18" rx="5.2" fill="#fff" stroke="none"/><path d="m6.7 12.3 3.25 3.3 7.55-7.4" fill="none" stroke="#1976e8" stroke-width="2.6"/>',
  "calendar": '<rect x="3" y="4" width="18" height="17" rx="3.5" fill="#fff" stroke="none"/><path d="M3 8.5h18V7.2A3.2 3.2 0 0 0 17.8 4H6.2A3.2 3.2 0 0 0 3 7.2Z" fill="#ff4f5e" stroke="none"/><path d="M7.5 13h2M11 13h2M14.5 13h2M7.5 17h2M11 17h2M14.5 17h2" stroke="#d83a46" stroke-width="1.7"/>',
  "box": '<path d="m12 2.8 9 4.5-9 4.55L3 7.3Z" fill="#fff" stroke="none"/><path d="M3 8.8 11 13v8.2l-8-4.15ZM21 8.8 13 13v8.2l8-4.15Z" fill="#fff" opacity=".78" stroke="none"/><path d="m8 5 9 4.5v3.1" opacity=".45"/>',
  "heart": '<path d="M12 21.5 3.35 13.2A5.72 5.72 0 0 1 11.45 5.1l.55.6.55-.6a5.72 5.72 0 0 1 8.1 8.1Z" fill="#fff" stroke="none"/><path d="M6.2 7.8c1.2-1.15 2.7-1.25 3.8-.35" opacity=".35"/>',
  "chat": '<path d="M12 2.7c5.45 0 9.7 3.75 9.7 8.7 0 5-4.25 8.7-9.7 8.7-1.35 0-2.6-.22-3.75-.65L3 21.3l1.8-4.45a8.13 8.13 0 0 1-2.5-5.45c0-4.95 4.25-8.7 9.7-8.7Z" fill="#fff" stroke="none"/><circle cx="8" cy="11.5" r="1" fill="#1eaa4a" stroke="none"/><circle cx="12" cy="11.5" r="1" fill="#1eaa4a" stroke="none"/><circle cx="16" cy="11.5" r="1" fill="#1eaa4a" stroke="none"/>',
  "sparkle": '<path d="m11.7 1.8 1.65 5.15 4.75 2.25-4.75 2.25-1.65 5.15-1.65-5.15L5.3 9.2l4.75-2.25Z" fill="#fff" stroke="none"/><path d="m19 13.1 1.05 3.05 2.75 1.25-2.75 1.25L19 21.7l-1.05-3.05-2.75-1.25 2.75-1.25ZM4.6 1.9l.8 2.2 2 1-2 1-.8 2.2-.8-2.2-2-1 2-1Z" fill="#fff" opacity=".75" stroke="none"/>',
  "gear": '<path d="M10.1 2h3.8l.55 2.35c.55.2 1.08.42 1.55.72l2.05-1.25 2.7 2.7-1.25 2.05c.3.47.53 1 .72 1.55l2.35.55v3.8l-2.35.55c-.2.55-.42 1.08-.72 1.55l1.25 2.05-2.7 2.7L16 19.93c-.47.3-1 .53-1.55.72L13.9 23h-3.8l-.55-2.35A8.6 8.6 0 0 1 8 19.93l-2.05 1.25-2.7-2.7 1.25-2.05a8.6 8.6 0 0 1-.72-1.55l-2.35-.55v-3.8l2.35-.55c.2-.55.42-1.08.72-1.55L3.25 6.38l2.7-2.7L8 4.93c.47-.3 1-.53 1.55-.72Z" fill="#fff" stroke="none"/><circle cx="12" cy="12.5" r="3.4" fill="#7b838d" stroke="none"/>',
  "pin": '<path d="M12 1.8a8.2 8.2 0 0 1 8.2 8.2c0 5.25-5.35 10.1-8.2 12.2C9.15 20.1 3.8 15.25 3.8 10A8.2 8.2 0 0 1 12 1.8Z" fill="currentColor" stroke="none"/><circle cx="12" cy="9.8" r="3" fill="#fff" stroke="none"/>',
  "globe": '<circle cx="12" cy="12" r="9.5" fill="#fff" opacity=".2" stroke="none"/><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  "book": '<path d="M3.2 4.2h6.1c1.55 0 2.7.65 3.4 1.55v14.7c-.8-1.15-1.95-1.75-3.65-1.75H3.2Z" fill="#fff" stroke="none"/><path d="M20.8 4.2h-6.1c-.85 0-1.5.3-2 .78v15.47c.8-1.15 1.95-1.75 3.65-1.75h4.45Z" fill="#fff" opacity=".78" stroke="none"/><path d="M6 8h4M6 11h4M15 8h3.2M15 11h3.2" opacity=".38"/>',
  "chart": '<path d="M3 12.5h4V21H3ZM10 3h4v18h-4ZM17 8h4v13h-4Z" fill="#fff" stroke="none"/><path d="M2 21.5h20" opacity=".55"/>',
  "grid": '<rect x="2.8" y="2.8" width="8" height="8" rx="2.3" fill="currentColor" stroke="none"/><rect x="13.2" y="2.8" width="8" height="8" rx="2.3" fill="currentColor" opacity=".68" stroke="none"/><rect x="2.8" y="13.2" width="8" height="8" rx="2.3" fill="currentColor" opacity=".68" stroke="none"/><rect x="13.2" y="13.2" width="8" height="8" rx="2.3" fill="currentColor" stroke="none"/>',
  "play": '<circle cx="12" cy="12" r="10" fill="#fff" stroke="none"/><path d="m10 7.2 7.4 4.8-7.4 4.8Z" fill="#6b60dc" stroke="none"/>',
  "camera": '<path d="M6.7 5.2 8.5 2.8h7l1.8 2.4H20A3 3 0 0 1 23 8v10.5a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-2.8Z" fill="#fff" stroke="none"/><circle cx="12" cy="13.2" r="5.1" fill="#685fda" stroke="none"/><circle cx="12" cy="13.2" r="2.6" fill="#fff" opacity=".82" stroke="none"/><circle cx="19.2" cy="8.5" r="1.1" fill="#685fda" stroke="none"/>',
  "student": '<path d="m2.4 6.4 9.6-4.6 9.6 4.6L12 11Z" fill="currentColor" stroke="none"/><path d="M18.6 8.1v5.1"/><circle cx="12" cy="12" r="3" fill="currentColor" opacity=".72" stroke="none"/><path d="M5.5 21c.25-4.05 2.6-6.2 6.5-6.2s6.25 2.15 6.5 6.2Z" fill="currentColor" opacity=".72" stroke="none"/>',
  "printer": '<path d="M6 2.5h12V9H6Z" fill="currentColor" opacity=".65" stroke="none"/><path d="M3.5 8h17A2.5 2.5 0 0 1 23 10.5v7h-4V22H5v-4.5H1v-7A2.5 2.5 0 0 1 3.5 8Z" fill="currentColor" stroke="none"/><rect x="7" y="15" width="10" height="5" rx=".8" fill="#fff" stroke="none"/><circle cx="19" cy="11.5" r="1" fill="#fff" stroke="none"/>',
  "trophy": '<path d="M7 2.5h10v6.2c0 4.1-2.2 6.45-5 6.45s-5-2.35-5-6.45Z" fill="#fff" stroke="none"/><path d="M7 5H2.5v2.8A5.2 5.2 0 0 0 8 13M17 5h4.5v2.8A5.2 5.2 0 0 1 16 13"/><path d="M10.8 14h2.4v4h3.6v3H7.2v-3h3.6Z" fill="#fff" opacity=".78" stroke="none"/>',
  "clipboard": '<rect x="4" y="3.5" width="16" height="19" rx="3" fill="#fff" stroke="none"/><rect x="8.5" y="1.5" width="7" height="4" rx="1.5" fill="#2a9299" stroke="none"/><path d="M8 10h8M8 14h8M8 18h5" stroke="#2a9299" stroke-width="1.7"/>',
  "target": '<circle cx="12" cy="12" r="10" fill="#fff" stroke="none"/><path d="M3.8 7.8c4.6.7 8.2 5 8.2 10.2M20.2 7.8c-4.6.7-8.2 5-8.2 10.2M2 12h20M12 2c0 4.1 3.5 7.4 8 8.2M12 2c0 4.1-3.5 7.4-8 8.2" stroke="#ef6a21" stroke-width="1.45"/>',
  "bolt": '<path d="M13.2 1.5 4.5 14h6.4l-1 8.5L19.5 9h-6.6Z" fill="#fff" stroke="none"/>',
  "star": '<path d="m12 1.8 3.15 6.4 7.05 1.05-5.1 4.95 1.2 7-6.3-3.3-6.3 3.3 1.2-7-5.1-4.95L8.85 8.2Z" fill="currentColor" stroke="none"/>',
  "alert": '<path d="M12 2.3a2 2 0 0 1 1.8 1.1 6.4 6.4 0 0 1 4.6 6.1v3.2l2.25 3.8a1.3 1.3 0 0 1-1.1 1.95H4.45a1.3 1.3 0 0 1-1.1-1.95l2.25-3.8V9.5a6.4 6.4 0 0 1 4.6-6.1A2 2 0 0 1 12 2.3Z" fill="currentColor" stroke="none"/><path d="M9.2 20h5.6a2.9 2.9 0 0 1-5.6 0Z" fill="currentColor" opacity=".7" stroke="none"/>',
  "clock": '<circle cx="12" cy="12" r="10" fill="currentColor" stroke="none"/><path d="M12 6v6l4 2" stroke="#fff" stroke-width="2.2"/>',
  "sliders": '<path d="M4 5h16M4 12h16M4 19h16"/><circle cx="9" cy="5" r="2.4" fill="currentColor" stroke="none"/><circle cx="16" cy="12" r="2.4" fill="currentColor" stroke="none"/><circle cx="7" cy="19" r="2.4" fill="currentColor" stroke="none"/>',
  "church": '<path d="m12 1.5 3.2 4.2v3.1h4.3V22h-15V8.8h4.3V5.7Zm0 8.4a3 3 0 0 0-3 3V22h6v-9.1a3 3 0 0 0-3-3Z" fill="currentColor" stroke="none"/><path d="M12 1.5v5M9.8 3.6h4.4"/>',
  "more": '<circle cx="5" cy="12" r="1.3" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1.3" fill="currentColor" stroke="none"/>'
});
var SYMBOL_NAMES = Object.freeze({
  "🏠": "home",
  "⌂": "home",
  "👥": "people",
  "🤝": "people",
  "🫶": "people",
  "🌱": "sprout",
  "🌳": "tree",
  "🔗": "link",
  "🔔": "bell",
  "✅": "check",
  "✓": "check",
  "📅": "calendar",
  "🗓️": "calendar",
  "📆": "calendar",
  "📦": "box",
  "🙏": "heart",
  "💛": "heart",
  "💬": "chat",
  "✨": "sparkle",
  "★": "star",
  "⚙": "gear",
  "⚙️": "gear",
  "📍": "pin",
  "🌐": "globe",
  "📚": "book",
  "📊": "chart",
  "▦": "grid",
  "▶": "play",
  "📷": "camera",
  "🧑‍🎓": "student",
  "👨‍🎓": "student",
  "👩‍🎓": "student",
  "🖨️": "printer",
  "🖨": "printer",
  "🏀": "target",
  "🏆": "trophy",
  "📋": "clipboard",
  "🎯": "target",
  "💪": "bolt",
  "🚨": "alert",
  "⏰": "clock",
  "🎛️": "sliders",
  "🎛": "sliders",
  "⛪": "church",
  "•••": "more",
  "🎒": "book",
  "☰": "sliders",
  "◎": "people",
  "LINE": "link",
  "字": "book",
  "🌅": "sparkle",
  "🕊️": "heart",
  "☕": "sprout",
  "💌": "heart",
  "🏛️": "church"
});
function iconSymbol(key) {
  const canonical = FUNCTION_ALIASES[key] || key;
  return FUNCTION_CATALOG[canonical]?.symbol || { dashboard: "home", settings: "gear" }[key] || (ICON_PATHS[key] ? key : "grid");
}
function iconMarkup(key) {
  return ICON_PATHS[iconSymbol(key)] || ICON_PATHS.grid;
}
function applyAppIcon(node, key) {
  node.dataset.iosSymbol = iconSymbol(key);
  node.replaceChildren();
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");
  const monochrome = node.matches(".module-bar-icon,.mobile-app-nav a>span:first-child");
  svg.innerHTML = monochrome ? iconMarkup(key).replace(/fill="(#[^"]+)"/g, (_, color) => 'fill="' + (color === "#fff" ? "currentColor" : "#fff") + '"').replace(/stroke="(#[^"]+)"/g, 'stroke="#fff"') : iconMarkup(key);
  if (node.matches(".dashboard-icon,.home-library-item>span,.home-icon-main>b,.settings-link-icon,.line-settings-shortcuts a>span,.app-hub-card>span")) node.classList.add("function-icon");
  node.append(svg);
  return node;
}
function createAppIcon(key, className = "function-icon") {
  const node = document.createElement("span");
  node.className = className;
  node.setAttribute("aria-hidden", "true");
  return applyAppIcon(node, key);
}

// church-os-giving-catalog-20261120/app-function-definitions.mjs?v=20261116-admin1
function freezeTree2(value) {
  if (value && typeof value === "object") {
    Object.values(value).forEach(freezeTree2);
    Object.freeze(value);
  }
  return value;
}
var FUNCTION_CATALOG2 = freezeTree2({
  "church_giving_preview": { "file": "church-giving.html", "title": "教會奉獻頁面預覽", "description": "單次與定期定額介面預覽，尚未開放收款", "key": "church_giving_preview", "church": "M+", "group": "finance", "symbol": "heart", "owner": true, "configurableHome": false, "searchTerms": ["奉獻", "定期定額", "金流預覽"] },
  "association_donation_preview": { "file": "association-donate.html", "title": "協會捐款頁面預覽", "description": "協會專用捐款介面預覽，尚未開放收款", "key": "association_donation_preview", "church": "M+", "group": "finance", "symbol": "heart", "owner": true, "configurableHome": false, "searchTerms": ["協會", "捐款", "定期定額"] },
  "admin_workbench": { "file": "admin-workbench.html", "title": "行政待辦", "description": "待我處理、我送出的、核准待完成與異常追蹤", "key": "admin_workbench", "church": "M+", "group": "finance", "symbol": "mplus-box", "configurableHome": false, "searchTerms": ["行政", "待辦", "逾期", "結案"] },
  "member_line_history": { "file": "member-line-history.html", "title": "LINE 訊息發送紀錄", "description": "查詢發送人、收件人、全文、時間與受理狀態", "key": "member_line_history", "group": "system", "church": "M+", "owner": true, "symbol": "chat", "configurableHome": false, "searchTerms": ["LINE", "紀錄", "誰發的", "訊息"], "settingsId": "member-line-history", "settingsGroup": "people" },
  "member_line_settings": { "file": "member-line-settings.html", "title": "會友 LINE 傳送權限", "description": "開關個別同工的會友私人訊息傳送權", "key": "member_line_settings", "group": "system", "church": "M+", "owner": true, "symbol": "chat", "configurableHome": false, "searchTerms": ["LINE", "訊息", "傳送", "權限"], "settingsId": "member-line-settings", "settingsGroup": "people" },
  "potluck": { "file": "potluck-admin.html", "title": "互動料理募集", "description": "活動設定、料理名單與感恩餐桌統計", "key": "potluck", "group": "events", "church": "M+", "owner": true, "symbol": "heart", "configurableHome": false, "searchTerms": ["感恩節", "料理", "活動管理"] },
  "finance_permission_settings": { "file": "admin-accounts.html?church=M%2B", "title": "同工權限設定", "description": "統一勾選教會功能、操作與財務權限", "key": "finance_permission_settings", "group": "finance", "church": "M+", "owner": true, "symbol": "mplus-box", "configurableHome": false, "searchTerms": ["授權", "同工權限"] },
  "finance_accounting_reports": { "file": "finance-permissions.html#reports", "title": "會計報表", "description": "查閱與匯出已核准財務資料", "key": "finance_accounting_reports", "group": "finance", "church": "M+", "accountingReportAccess": true, "symbol": "mplus-box", "configurableHome": false, "searchTerms": ["會計", "報表", "匯出"] },
  "school_staff_scheduling": { "file": "https://school.mchurch.online/?tab=schedules", "title": "班表安排", "description": "安排老師與工讀生班表，僅限鈺庭與恩茹操作", "key": "school_staff_scheduling", "group": "finance", "church": "M+", "symbol": "mplus-calendar", "configurableHome": false, "scheduleAccess": true, "searchTerms": ["排班", "老師班表", "工讀生班表"] },
  "school_payroll": { "file": "school-payroll.html?month=current", "title": "課輔薪資結算", "description": "時薪設定、月底結算、簽到表與逐級審核", "key": "school_payroll", "group": "finance", "church": "M+", "symbol": "mplus-box", "configurableHome": false, "payrollAccess": true, "searchTerms": ["老師薪資", "工讀生薪水", "每月簽到表", "結算審核"] },
  "testimony_review": {
    "permission": "website_weekly",
    "file": "testimony-admin.html",
    "church": "M+",
    "icon": "☁",
    "title": "雲彩見證",
    "description": "文字、影片與照片投稿審核",
    "key": "testimony_review",
    "group": "media",
    "symbol": "book",
    "configurableHome": false,
    "searchTerms": ["見證", "投稿", "分享", "審核"],
    "settingsId": "testimony-review",
    "settingsGroup": "content"
  },
  "review_workflows": {
    "permission": "notification_settings",
    "file": "review-workflow-settings.html",
    "icon": "✅",
    "title": "審核流程",
    "description": "初審、複審與通知設定",
    "key": "review_workflows",
    "group": "system",
    "symbol": "check",
    "configurableHome": false,
    "searchTerms": [
      "初審",
      "複審",
      "審核人"
    ],
    "settingsId": "review-workflows",
    "settingsGroup": "review"
  },
  "members": {
    "permission": "members",
    "file": "members.html",
    "icon": "👥",
    "title": "會友",
    "description": "會友與新朋友資料",
    "key": "members",
    "group": "pastoral",
    "symbol": "people",
    "configurableHome": true,
    "searchTerms": [
      "會友名冊"
    ]
  },
  "newcomer_care": {
    "permission": "newcomer_care",
    "file": "newcomer-care.html",
    "icon": "🌱",
    "title": "新朋友",
    "description": "聯絡、追蹤與後續關懷",
    "key": "newcomer_care",
    "group": "pastoral",
    "symbol": "sprout",
    "configurableHome": true,
    "searchTerms": [
      "新朋友關懷"
    ]
  },
  "church_albums": { "file": "church-albums.html", "title": "相簿", "description": "教會與課輔照片、資料夾及檔案上傳", "key": "church_albums", "permission": "church_albums", "group": "pastoral", "church": "M+", "symbol": "mplus-box", "configurableHome": false, "searchTerms": ["教會相簿", "課輔相簿", "照片", "上傳"] },
  "pastoral_workspace": {
    "file": "pastoral/workspace.html",
    "icon": "🤝",
    "title": "同工工作區",
    "description": "工作、行程與同工工具",
    "key": "pastoral_workspace",
    "group": "pastoral",
    "symbol": "people",
    "configurableHome": true,
    "searchTerms": [
      "同工協作"
    ]
  },
  "pastoral_workflow_survey": {
    "file": "pastoral/workflow-survey.html",
    "icon": "📝",
    "title": "同工工作流程調查",
    "description": "蒐集例行工作、卡點與提醒偏好",
    "key": "pastoral_workflow_survey",
    "group": "pastoral",
    "symbol": "check",
    "configurableHome": false,
    "searchTerms": ["同工問卷", "工作流程", "每週工作"]
  },
  "private_prayers": {
    "permission": "private_prayers",
    "file": "prayers.html",
    "icon": "🙏",
    "title": "代禱與關懷",
    "description": "代禱事項與後續關心",
    "key": "private_prayers",
    "group": "pastoral",
    "symbol": "heart",
    "configurableHome": true,
    "searchTerms": [
      "代禱關懷"
    ]
  },
  "pastoral_chats": {
    "permission": "pastoral_chats",
    "file": "pastoral-inbox.html",
    "icon": "💬",
    "title": "關懷訊息",
    "description": "一對一訊息與跟進",
    "key": "pastoral_chats",
    "group": "pastoral",
    "symbol": "chat",
    "configurableHome": true,
    "searchTerms": [
      "牧養訊息"
    ]
  },
  "attendance": {
    "permission": "attendance",
    "file": "attendance.html",
    "icon": "✅",
    "title": "出席登記",
    "description": "聚會出席與統計",
    "key": "attendance",
    "group": "service",
    "symbol": "check",
    "configurableHome": true,
    "searchTerms": [
      "聚會點名"
    ]
  },
  "groups": {
    "permission": "groups",
    "file": "groups.html",
    "icon": "🫶",
    "title": "小組與小家",
    "description": "分組、組長與成員",
    "key": "groups",
    "group": "pastoral",
    "symbol": "people",
    "configurableHome": true,
    "searchTerms": [
      "小組／小家"
    ]
  },
  "schedules": {
    "permission": "schedules",
    "file": "schedules.html",
    "icon": "📅",
    "title": "服事安排",
    "description": "主日與聚會服事",
    "key": "schedules",
    "group": "service",
    "symbol": "calendar",
    "configurableHome": true,
    "searchTerms": [
      "服事排班"
    ]
  },
  "spaces": {
    "permission": "spaces",
    "file": "spaces.html",
    "icon": "📍",
    "title": "場地與設備",
    "description": "空間、設備與預約",
    "key": "spaces",
    "group": "service",
    "symbol": "pin",
    "configurableHome": true,
    "searchTerms": [
      "場地預約"
    ],
    "settingsId": "space-settings",
    "settingsGroup": "church"
  },
  "inventory": {
    "permission": "inventory",
    "file": "inventory.html",
    "icon": "📦",
    "title": "物品與借用",
    "description": "位置、數量與借還",
    "key": "inventory",
    "group": "service",
    "symbol": "box",
    "configurableHome": true,
    "searchTerms": [
      "物品清冊"
    ],
    "settingsId": "inventory-settings",
    "settingsGroup": "church"
  },
  "heat_camp": {
    "church": "M+",
    "permission": "heat_camp",
    "file": "heat-camp-admin.html",
    "icon": "🏀",
    "title": "熱火籃球營",
    "description": "報名、繳費、名單與志工",
    "key": "heat_camp",
    "group": "basketball",
    "symbol": "target",
    "configurableHome": true,
    "searchTerms": ["志工報名", "熱火籃球營志工"]
  },
  "website_weekly": {
    "permission": "website_weekly",
    "file": "website-maintenance.html",
    "icon": "🌐",
    "title": "主日週報",
    "description": "週報、預告圖與服事表",
    "key": "website_weekly",
    "group": "media",
    "symbol": "globe",
    "configurableHome": true,
    "searchTerms": [
      "教會網站維護",
      "官網",
      "網站",
      "預告圖",
      "主日"
    ],
    "settingsId": "website-maintenance",
    "settingsGroup": "content"
  },
  "association_stories": { "church": "M+", "permission": "association_content", "file": "association-stories.html", "title": "協會照片說故事", "description": "照片與故事產生 FB 文案，送牧師／師母審核後發布，可同步協會最新消息", "key": "association_stories", "group": "media", "symbol": "globe", "configurableHome": false, "searchTerms": ["協會", "FB", "Facebook", "照片說故事", "師母審核"], "settingsId": "association-stories", "settingsGroup": "content" },
  "association_news": {
    "church": "M+",
    "permission": "association_content",
    "file": "association-news.html",
    "icon": "📰",
    "title": "協會網站",
    "description": "最新消息上稿，發佈後直接顯示於協會首頁",
    "key": "association_news",
    "group": "media",
    "symbol": "globe",
    "configurableHome": true,
    "searchTerms": ["協會", "最新消息", "tcsc.org.tw", "上稿"],
    "settingsId": "association-news",
    "settingsGroup": "content"
  },
  "website_group_resources": {
    "permission": "website_group_resources",
    "file": "group-resources-management.html",
    "icon": "📚",
    "title": "小組教材",
    "description": "每週教材與聚會內容",
    "key": "website_group_resources",
    "group": "media",
    "symbol": "book",
    "configurableHome": true,
    "searchTerms": [
      "小組聚會資源"
    ],
    "settingsId": "group-resources",
    "settingsGroup": "content"
  },
  "tree_reading_admin": {
    "permission": "tree_reading_admin",
    "file": "daily-devotional-admin.html",
    "icon": "🌳",
    "title": "生命樹",
    "description": "每日靈修與讀經進度",
    "key": "tree_reading_admin",
    "group": "media",
    "symbol": "tree",
    "configurableHome": true,
    "searchTerms": [
      "每日靈修生命樹",
      "讀經生命樹",
      "每日靈修",
      "讀經"
    ],
    "settingsId": "daily-devotional",
    "settingsGroup": "content"
  },
  "bibletree_admin": {
    "permission": "tree_reading_admin",
    "church": "M+",
    "file": "bibletree-admin.html",
    "icon": "🌳",
    "title": "讀經樹管理",
    "description": "玩家進度與365日靈修內容",
    "key": "bibletree_admin",
    "group": "events",
    "symbol": "tree",
    "configurableHome": false,
    "searchTerms": ["讀經樹", "RPG", "遊戲管理", "玩家", "365", "靈修"]
  },
  "bibletree_devotional": {
    "permission": "tree_reading_admin",
    "church": "M+",
    "file": "bibletree-devotional-admin.html",
    "icon": "🌳",
    "title": "讀經樹365日靈修",
    "description": "逐日檢視、修訂與發布靈修內容",
    "key": "bibletree_devotional",
    "group": "events",
    "symbol": "tree",
    "configurableHome": false,
    "searchTerms": ["讀經樹", "365", "全年靈修", "經文", "內容審查"]
  },
  "bibletree_players": {
    "permission": "tree_reading_admin",
    "church": "M+",
    "file": "bibletree-players.html",
    "icon": "👥",
    "title": "讀經樹玩家列表",
    "description": "玩家資料、讀經進度與公測參與",
    "key": "bibletree_players",
    "group": "events",
    "symbol": "people",
    "configurableHome": false,
    "searchTerms": ["玩家", "遊戲帳號", "讀經樹", "公測", "回饋"]
  },
  "life_tree_festivals": {
    "permission": "tree_reading_admin",
    "church": "M+",
    "file": "life-tree-festivals.html",
    "icon": "🌳",
    "title": "生命樹節慶預覽",
    "description": "九種節慶場景與每日互動試玩",
    "key": "life_tree_festivals",
    "group": "media",
    "symbol": "tree",
    "configurableHome": false,
    "searchTerms": ["節慶", "生命樹", "聖誕燈", "感恩節", "光明勇士"],
    "settingsId": "life-tree-festivals",
    "settingsGroup": "content"
  },
  "binding_review": {
    "permission": "binding_review",
    "file": "binding-review.html",
    "icon": "🔗",
    "title": "LINE 身分確認",
    "description": "確認會友與 LINE 帳號",
    "key": "binding_review",
    "group": "system",
    "symbol": "link",
    "configurableHome": true,
    "searchTerms": [
      "LINE 綁定審核"
    ],
    "settingsId": "binding-review",
    "settingsGroup": "people"
  },
  "notification_settings": {
    "permission": "notification_settings",
    "file": "notification-settings.html",
    "icon": "🔔",
    "title": "通知設定",
    "description": "手機與 LINE 通知",
    "key": "notification_settings",
    "group": "system",
    "symbol": "bell",
    "configurableHome": true,
    "searchTerms": [
      "LINE 通知設定",
      "通知管道設定"
    ],
    "settingsId": "notification-settings",
    "settingsGroup": "review"
  },
  "school": {
    "file": "https://school.mchurch.online/",
    "icon": "📚",
    "title": "課輔",
    "description": "學生、出席與輔導",
    "key": "school",
    "group": "school",
    "symbol": "book",
    "configurableHome": true,
    "searchTerms": []
  },
  "school_checkin": {
    "file": "https://school.mchurch.online/?tab=checkin",
    "icon": "📷",
    "title": "課輔打卡",
    "description": "學生與同工打卡",
    "key": "school_checkin",
    "group": "school",
    "symbol": "camera",
    "configurableHome": true,
    "searchTerms": []
  },
  "school_schedules": {
    "file": "https://school.mchurch.online/?tab=schedules",
    "icon": "🗓️",
    "title": "課輔安排",
    "description": "老師與同工安排",
    "key": "school_schedules",
    "group": "school",
    "symbol": "calendar",
    "configurableHome": true,
    "searchTerms": []
  },
  "school_rollcall": {
    "file": "https://school.mchurch.online/?tab=rollcall",
    "icon": "✅",
    "title": "課輔出席",
    "description": "每日課堂出席",
    "key": "school_rollcall",
    "group": "school",
    "symbol": "check",
    "configurableHome": true,
    "searchTerms": []
  },
  "school_students": {
    "file": "https://school.mchurch.online/?tab=students",
    "icon": "🧑‍🎓",
    "title": "學生",
    "description": "學生與同工資料",
    "key": "school_students",
    "group": "school",
    "symbol": "student",
    "configurableHome": true,
    "searchTerms": []
  },
  "school_counseling": {
    "file": "https://school.mchurch.online/?tab=counseling",
    "icon": "💛",
    "title": "個別輔導",
    "description": "輔導紀錄與跟進",
    "key": "school_counseling",
    "group": "school",
    "symbol": "heart",
    "configurableHome": true,
    "searchTerms": []
  },
  "school_reports": {
    "file": "https://school.mchurch.online/?tab=print-center",
    "icon": "🖨️",
    "title": "課輔報表",
    "description": "出席表與學生資料",
    "key": "school_reports",
    "group": "school",
    "symbol": "printer",
    "configurableHome": true,
    "searchTerms": []
  },
  "basketball": {
    "file": "https://mschurch-app.github.io/m-plus-basketball/",
    "icon": "🏀",
    "title": "籃球隊",
    "description": "球員與球隊",
    "key": "basketball",
    "group": "basketball",
    "symbol": "target",
    "configurableHome": true,
    "searchTerms": []
  },
  "basketball_gamecenter": {
    "file": "https://mschurch-app.github.io/m-plus-basketball/?tab=gamecenter",
    "icon": "🏆",
    "title": "比賽紀錄",
    "description": "比賽、得分與犯規",
    "key": "basketball_gamecenter",
    "group": "basketball",
    "symbol": "trophy",
    "configurableHome": true,
    "searchTerms": []
  },
  "basketball_tactics": {
    "file": "https://mschurch-app.github.io/m-plus-basketball/?tab=tactics",
    "icon": "📋",
    "title": "籃球戰術",
    "description": "戰術板與訓練內容",
    "key": "basketball_tactics",
    "group": "basketball",
    "symbol": "clipboard",
    "configurableHome": true,
    "searchTerms": []
  },
  "basketball_assignments": {
    "file": "https://mschurch-app.github.io/m-plus-basketball/?tab=assignments",
    "icon": "🎯",
    "title": "球員作業",
    "description": "訓練任務與成果",
    "key": "basketball_assignments",
    "group": "basketball",
    "symbol": "target",
    "configurableHome": true,
    "searchTerms": []
  },
  "basketball_schedule": {
    "file": "https://mschurch-app.github.io/m-plus-basketball/?tab=schedule",
    "icon": "📆",
    "title": "球隊行程",
    "description": "練球與比賽",
    "key": "basketball_schedule",
    "group": "basketball",
    "symbol": "calendar",
    "configurableHome": true,
    "searchTerms": []
  },
  "basketball_daily": {
    "file": "https://mschurch-app.github.io/m-plus-basketball/?tab=dailystatus",
    "icon": "💪",
    "title": "每日狀態",
    "description": "身體與訓練狀態",
    "key": "basketball_daily",
    "group": "basketball",
    "symbol": "bolt",
    "configurableHome": true,
    "searchTerms": []
  },
  "system_monitor": {
    "file": "system-monitor.html",
    "icon": "📊",
    "title": "系統狀況",
    "description": "網站、服務與排程",
    "key": "system_monitor",
    "group": "system",
    "symbol": "chart",
    "configurableHome": true,
    "searchTerms": [
      "系統監控中心"
    ]
  },
  "church_settings": {
    "file": "church-settings.html",
    "icon": "⚙️",
    "title": "教會設定",
    "description": "堂會、帳號與功能",
    "key": "church_settings",
    "group": "system",
    "symbol": "gear",
    "configurableHome": true,
    "searchTerms": [
      "系統設定"
    ]
  },
  "pastoral_content": {
    "permission": "pastoral",
    "file": "pastoral-content.html",
    "icon": "✨",
    "title": "牧養圖卡",
    "description": "祝禱、小卡與新朋友旅程",
    "key": "pastoral_content",
    "group": "media",
    "symbol": "sparkle",
    "configurableHome": false,
    "searchTerms": [
      "教牧內容"
    ],
    "settingsId": "pastoral-content",
    "settingsGroup": "content"
  },
  "todays_message": {
    "permission": "pastoral",
    "file": "todays-message-settings.html",
    "icon": "✨",
    "title": "給今天的你",
    "description": "每日經文與祝福內容",
    "key": "todays_message",
    "group": "media",
    "symbol": "sparkle",
    "configurableHome": false,
    "searchTerms": [],
    "settingsId": "line-today",
    "settingsGroup": "content"
  },
  "love_share": {
    "permission": "pastoral",
    "file": "love-share-settings.html",
    "icon": "💛",
    "title": "把愛傳出去",
    "description": "祝福情境與分享圖片",
    "key": "love_share",
    "group": "media",
    "symbol": "heart",
    "configurableHome": false,
    "searchTerms": [],
    "settingsId": "line-love",
    "settingsGroup": "content"
  },
  "line_preview": {
    "permission": "pastoral",
    "file": "line-preview.html",
    "icon": "🔗",
    "title": "LINE 服務預覽",
    "description": "檢查會友服務內容",
    "key": "line_preview",
    "group": "media",
    "symbol": "link",
    "configurableHome": false,
    "searchTerms": [],
    "settingsId": "line-preview",
    "settingsGroup": "content"
  },
  "customization": {
    "permission": "pastoral",
    "file": "customization-settings.html",
    "icon": "⚙️",
    "title": "名稱與表單",
    "description": "功能名稱、順序、迎新表單與選項",
    "key": "customization",
    "group": "system",
    "symbol": "sliders",
    "configurableHome": false,
    "searchTerms": [],
    "settingsId": "customization-options",
    "settingsGroup": "content"
  },
  "admin_accounts": {
    "owner": true,
    "file": "admin-accounts.html",
    "icon": "👥",
    "title": "同工帳號與權限",
    "description": "選同工、勾選功能與操作權限",
    "key": "admin_accounts",
    "group": "system",
    "symbol": "people",
    "configurableHome": false,
    "searchTerms": [],
    "settingsId": "admin-accounts",
    "settingsGroup": "people"
  },
  "media_publishing": {
    "permission": "website_weekly",
    "action": "approve",
    "file": "authorization-settings.html",
    "icon": "▶",
    "title": "服務授權管理",
    "description": "YouTube、Instagram、教會與協會 FB、Google 與 LINE 連線授權",
    "key": "media_publishing",
    "group": "media",
    "symbol": "play",
    "configurableHome": false,
    "searchTerms": [
      "IG",
      "Instagram",
      "YouTube",
      "影片",
      "社群"
    ],
    "settingsId": "media-publishing",
    "settingsGroup": "content"
  },
  "sermon_preparation": {
    "permission": "website_weekly",
    "action": "edit",
    "church": "M+",
    "file": "sermon-preparation.html",
    "icon": "📖",
    "title": "信息預備",
    "description": "素材、領受、大綱與講章",
    "key": "sermon_preparation",
    "group": "media",
    "symbol": "book",
    "configurableHome": true,
    "searchTerms": ["講章", "講道", "預備", "信息工作室"],
    "settingsId": "sermon-preparation",
    "settingsGroup": "content"
  },
  "subtitle_library": {
    "permission": "website_weekly",
    "action": "edit",
    "church": "M+",
    "file": "youtube-subtitle-library.html",
    "icon": "📚",
    "title": "字幕詞庫",
    "description": "辨識錯字與講員用語",
    "key": "subtitle_library",
    "group": "media",
    "symbol": "book",
    "configurableHome": false,
    "searchTerms": [],
    "settingsId": "subtitle-library",
    "settingsGroup": "content"
  },
  "service_signups": {
    "church": "M+",
    "permission": "schedules",
    "file": "service-signup-admin.html",
    "icon": "📅",
    "title": "服事意願與協調",
    "description": "每兩個月的服事意願、候補與排班協調",
    "key": "service_signups",
    "group": "service",
    "symbol": "calendar",
    "configurableHome": false,
    "searchTerms": []
  },
  "thanksgiving_offering_admin": { "file": "thanksgiving-offering-admin.html", "title": "感恩節奉獻回報", "description": "私人奉獻回報、通知投遞與財務核對", "key": "thanksgiving_offering_admin", "group": "finance", "church": "M+", "offeringAccess": true, "symbol": "clipboard", "configurableHome": false, "searchTerms": ["感恩節", "奉獻回應", "末五碼", "匯款", "對帳"] },
  "finance_projects": { "file": "finance-projects.html", "title": "專案與事工設定", "description": "專案、事工項目、收入科目與線上捐款對應", "key": "finance_projects", "group": "finance", "church": "M+", "owner": true, "symbol": "clipboard", "configurableHome": false, "settingsGroup": "church", "settingsId": "finance-projects", "searchTerms": ["專案", "事工", "收入科目", "捐款項目"] },
  "finance_receipts": {
    "church": "M+",
    "receiptAccess": true,
    "file": "finance-receipts.html",
    "title": "收據開立",
    "description": "金錢與物品收據、開立及作廢紀錄",
    "key": "finance_receipts",
    "group": "finance",
    "symbol": "clipboard",
    "configurableHome": false,
    "searchTerms": ["收據", "捐款收據", "捐物", "金錢", "物品", "會計"]
  },
  "finance_expenses": {
    "church": "M+",
    "expenseAccess": true,
    "file": "finance-expenses.html",
    "icon": "📋",
    "title": "支出記帳",
    "description": "費用提報、憑證核對、審核與付款紀錄",
    "key": "finance_expenses",
    "group": "finance",
    "symbol": "clipboard",
    "configurableHome": false,
    "searchTerms": ["支出", "費用", "記帳", "核銷", "付款", "零用金"]
  },
  "finance_cash": {
    "church": "M+",
    "financeAccess": true,
    "file": "finance-cash.html",
    "icon": "📋",
    "title": "主日奉獻",
    "description": "逐筆登錄奉獻、核對與入帳",
    "key": "finance_cash",
    "group": "finance",
    "symbol": "clipboard",
    "configurableHome": false,
    "searchTerms": ["財務", "會計", "奉獻", "點收", "現金"]
  },
  "service_quick_match": {
    "church": "M+",
    "permission": "schedules",
    "file": "service-signup-admin.html?match=1",
    "icon": "⚡",
    "title": "服事快速適配",
    "description": "事工領袖可預排負責類別的服事人選",
    "key": "service_quick_match",
    "group": "service",
    "symbol": "calendar",
    "configurableHome": false,
    "searchTerms": ["智能配對", "快速配對", "事工領袖"]
  }
});
var FUNCTION_GROUPS2 = freezeTree2([
  { "key": "events", "title": "活動", "note": "活動參與及遊戲玩家管理", "keys": ["potluck", "bibletree_admin", "bibletree_players", "bibletree_devotional"] },
  {
    "key": "pastoral",
    "title": "人與關懷",
    "note": "會友、新朋友、小組與關懷",
    "keys": [
      "members",
      "newcomer_care",
      "groups",
      "private_prayers",
      "pastoral_chats",
      "church_albums",
      "pastoral_workspace",
      "pastoral_workflow_survey"
    ]
  },
  {
    "key": "service",
    "title": "聚會與服事",
    "note": "出席、意願登記、排班與場地",
    "keys": [
      "attendance",
      "schedules",
      "service_signups",
      "service_quick_match",
      "spaces",
      "inventory"
    ]
  },
  {
    "key": "finance",
    "title": "教會財務",
    "note": "M＋奉獻收入、支出記帳與核對",
    "keys": ["church_giving_preview", "association_donation_preview", "admin_workbench", "thanksgiving_offering_admin", "finance_projects", "finance_cash", "finance_expenses", "finance_receipts", "finance_permission_settings", "finance_accounting_reports", "school_staff_scheduling", "school_payroll"]
  },
  {
    "key": "media",
    "title": "內容與發布",
    "note": "靈修、週報、教材與社群內容",
    "keys": [
      "testimony_review",
      "tree_reading_admin",
      "life_tree_festivals",
      "website_weekly",
      "association_news",
      "association_stories",
      "website_group_resources",
      "pastoral_content",
      "todays_message",
      "love_share",
      "line_preview",
      "media_publishing",
      "subtitle_library",
      "sermon_preparation"
    ]
  },
  {
    "key": "school",
    "title": "課輔",
    "note": "學生、出席、輔導與報表",
    "keys": [
      "school",
      "school_checkin",
      "school_schedules",
      "school_rollcall",
      "school_students",
      "school_counseling",
      "school_reports"
    ]
  },
  {
    "key": "basketball",
    "title": "籃球事工",
    "note": "籃球隊、訓練與熱火籃球營",
    "keys": [
      "heat_camp",
      "basketball",
      "basketball_gamecenter",
      "basketball_tactics",
      "basketball_assignments",
      "basketball_schedule",
      "basketball_daily"
    ]
  },
  {
    "key": "system",
    "title": "設定與工具",
    "note": "帳號、身分、審核與通知",
    "keys": [
      "binding_review",
      "review_workflows",
      "notification_settings",
      "customization",
      "admin_accounts",
      "member_line_settings",
      "member_line_history",
      "church_settings",
      "system_monitor"
    ]
  }
]);
var SETTINGS_GROUPS2 = freezeTree2([
  {
    "key": "people",
    "title": "同工與權限",
    "note": "邀請同工、確認 LINE 身分與使用權限",
    "keys": [
      "admin_accounts",
      "member_line_settings",
      "member_line_history",
      "binding_review"
    ]
  },
  {
    "key": "review",
    "title": "審核與通知",
    "note": "設定初審、複審與通知方式",
    "keys": [
      "review_workflows",
      "notification_settings"
    ]
  },
  {
    "key": "content",
    "title": "內容與發布",
    "note": "主日、靈修、表單與社群內容",
    "keys": [
      "testimony_review",
      "website_weekly",
      "association_news",
      "association_stories",
      "website_group_resources",
      "tree_reading_admin",
      "life_tree_festivals",
      "pastoral_content",
      "todays_message",
      "love_share",
      "line_preview",
      "media_publishing",
      "subtitle_library",
      "sermon_preparation",
      "customization"
    ]
  },
  {
    "key": "church",
    "title": "堂會與場地",
    "note": "公開資訊、聚會位置、空間與物品",
    "keys": [
      "finance_projects",
      "spaces",
      "inventory"
    ]
  }
]);
var PERMISSION_LABELS2 = freezeTree2({
  association_content: "協會內容（照片說故事／網站消息）",
  church_albums: "相簿",
  "members": "會友",
  "attendance": "出席登記",
  "groups": "小組與小家",
  "schedules": "服事安排",
  "private_prayers": "代禱與關懷",
  "pastoral_chats": "關懷訊息與圖卡",
  "spaces": "場地與設備",
  "newcomer_care": "新朋友",
  "tree_reading_admin": "生命樹",
  "binding_review": "LINE 身分確認",
  "notification_settings": "通知設定",
  "website_weekly": "主日週報",
  "website_group_resources": "小組教材",
  "inventory": "物品與借用",
  "heat_camp": "熱火籃球營"
});
var ROLE_TEMPLATES2 = freezeTree2({
  "pastor": {
    "label": "牧者",
    "permissions": [
      "members",
      "attendance",
      "groups",
      "schedules",
      "private_prayers",
      "pastoral_chats",
      "spaces",
      "newcomer_care",
      "tree_reading_admin",
      "binding_review",
      "notification_settings",
      "website_weekly",
      "website_group_resources",
      "inventory"
    ]
  },
  "pastor_spouse": {
    "label": "師母",
    "permissions": [
      "members",
      "attendance",
      "groups",
      "schedules",
      "private_prayers",
      "pastoral_chats",
      "spaces",
      "newcomer_care",
      "tree_reading_admin",
      "binding_review",
      "notification_settings",
      "website_weekly",
      "website_group_resources",
      "inventory"
    ]
  },
  "administrator": {
    "label": "行政管理",
    "permissions": [
      "members",
      "attendance",
      "groups",
      "schedules",
      "spaces",
      "newcomer_care",
      "binding_review",
      "notification_settings",
      "inventory"
    ]
  },
  "group_leader": {
    "label": "小組／小家長",
    "permissions": [
      "members",
      "attendance",
      "groups"
    ]
  },
  "care": {
    "label": "關懷同工",
    "permissions": [
      "members",
      "private_prayers",
      "pastoral_chats",
      "newcomer_care"
    ]
  },
  "facilities": {
    "label": "總務同工",
    "permissions": [
      "spaces",
      "inventory"
    ]
  },
  "custom": {
    "label": "自訂權限",
    "permissions": []
  }
});
var HOME_TEMPLATES2 = freezeTree2({
  "pastor": [
    "newcomer_care",
    "private_prayers",
    "pastoral_chats",
    "pastoral_workspace",
    "members",
    "schedules",
    "system_monitor"
  ],
  "pastor_spouse": [
    "newcomer_care",
    "private_prayers",
    "pastoral_workspace",
    "members",
    "groups",
    "schedules"
  ],
  "administrator": [
    "attendance",
    "members",
    "groups",
    "schedules",
    "spaces",
    "inventory",
    "binding_review",
    "notification_settings",
    "website_weekly"
  ],
  "group_leader": [
    "groups",
    "attendance",
    "members",
    "pastoral_workspace"
  ],
  "care": [
    "newcomer_care",
    "private_prayers",
    "pastoral_chats",
    "members",
    "pastoral_workspace"
  ],
  "facilities": [
    "spaces",
    "inventory",
    "pastoral_workspace"
  ],
  "custom": [
    "pastoral_workspace"
  ]
});
var FEATURE_ACTIONS2 = freezeTree2({
  "view": "查看",
  "create": "新增",
  "edit": "修改",
  "delete": "刪除",
  "export": "匯出",
  "approve": "審核",
  "manage": "管理設定"
});
var FRIENDLY_LABELS2 = freezeTree2({
  "會友名冊": "會友",
  "新朋友關懷": "新朋友",
  "同工協作": "同工工作區",
  "代禱關懷": "代禱與關懷",
  "牧養訊息": "關懷訊息",
  "聚會點名": "出席登記",
  "小組／小家": "小組與小家",
  "服事排班": "服事安排",
  "場地預約": "場地與設備",
  "物品清冊": "物品與借用",
  "教會網站維護": "主日週報",
  "小組聚會資源": "小組教材",
  "每日靈修生命樹": "生命樹",
  "讀經生命樹": "生命樹",
  "LINE 綁定審核": "LINE 身分確認",
  "LINE 通知設定": "通知設定",
  "通知管道設定": "通知設定",
  "教牧內容": "牧養圖卡",
  "系統監控中心": "系統狀況",
  "系統設定": "教會設定"
});
var NAVIGATION_MODULES2 = freezeTree2([
  {
    "key": "dashboard",
    "file": "admin-dashboard.html",
    "label": "首頁",
    "icon": "🏠"
  },
  {
    "key": "members",
    "functionKey": "members",
    "also": [
      "member-audit.html"
    ]
  },
  {
    "key": "newcomer_care",
    "functionKey": "newcomer_care"
  },
  {
    "key": "tree_reading_admin",
    "functionKey": "tree_reading_admin",
    "also": [
      "tree-reading-admin.html",
      "bibletree-players.html"
    ]
  },
  {
    "key": "binding_review",
    "functionKey": "binding_review"
  },
  {
    "key": "notification_settings",
    "functionKey": "notification_settings"
  },
  {
    "key": "review_workflows",
    "functionKey": "review_workflows"
  },
  {
    "key": "groups",
    "functionKey": "groups",
    "also": [
      "group-members.html"
    ]
  },
  {
    "key": "attendance",
    "functionKey": "attendance"
  },
  {
    "key": "schedules",
    "functionKey": "schedules"
  },
  {
    "key": "inventory",
    "functionKey": "inventory"
  },
  {
    "key": "prayers",
    "functionKey": "private_prayers"
  },
  {
    "key": "pastoral_inbox",
    "functionKey": "pastoral_chats"
  },
  {
    "key": "pastoral_content",
    "functionKey": "pastoral_content",
    "permission": "pastoral_chats"
  },
  {
    "key": "settings",
    "functionKey": "church_settings",
    "also": [
      "customization-settings.html",
      "welcome-settings.html",
      "ministry-settings.html",
      "admin-accounts.html",
      "todays-message-settings.html",
      "love-share-settings.html"
    ]
  }
].map((route) => {
  if (route.key === "dashboard") return route;
  const item = FUNCTION_CATALOG2[route.functionKey];
  return { ...route, file: item.file, label: item.title, icon: item.icon, ...route.permission || item.permission ? { permission: route.permission || item.permission } : {} };
}));
var FUNCTION_ALIASES2 = Object.freeze({ prayers: "private_prayers", pastoral_inbox: "pastoral_chats", settings: "church_settings" });
var HOME_MODULES2 = Object.freeze(Object.fromEntries(Object.entries(FUNCTION_CATALOG2).filter(([, item]) => item.configurableHome).map(([key, item]) => [key, item.title])));
var LEGACY_DASHBOARD_MODULES2 = Object.freeze([
  "members",
  "newcomer_care",
  "tree_reading_admin",
  "binding_review",
  "notification_settings",
  "groups",
  "attendance",
  "schedules",
  "spaces",
  "inventory",
  "prayers",
  "pastoral_inbox",
  "pastoral_content",
  "website_weekly",
  "website_group_resources"
].map((key) => {
  const item = FUNCTION_CATALOG2[FUNCTION_ALIASES2[key] || key];
  return Object.freeze({ ...item, key, permission: item.permission === "pastoral" ? "pastoral_chats" : item.permission });
}));
function canonicalFunctionKey2(key) {
  return FUNCTION_ALIASES2[key] || key;
}
var LEGACY_FEATURE_FILES2 = Object.freeze(Object.fromEntries([
  "members",
  "newcomer_care",
  "tree_reading_admin",
  "binding_review",
  "notification_settings",
  "groups",
  "attendance",
  "schedules",
  "prayers",
  "spaces",
  "pastoral_inbox",
  "pastoral_content",
  "website_weekly",
  "website_group_resources"
].map((key) => [key, FUNCTION_CATALOG2[canonicalFunctionKey2(key)].file])));

// church-os-giving-catalog-20261120/app-ui.mjs?v=20261116-admin1
function setStatus(node, message, { tone = "neutral", busy = false } = {}) {
  node.textContent = message;
  node.dataset.tone = tone;
  node.setAttribute("aria-busy", String(busy));
  node.hidden = !message;
}

// church-os-giving-catalog-20261120/giving-pages.mjs
var $ = (selector) => document.querySelector(selector);
var form = $("#giving-form");
var association = document.body.dataset.organization === "association";
var org = association ? "社團法人台灣基督教社會關懷協會" : "M+ 大雅教會";
var noun = association ? "捐款" : "奉獻";
var purposeCatalog = [{ "project": "Ｍ＋大雅教會", "name": "十一奉獻", "externalItemNo": 38, "publicGroup": "church", "publicEnabled": true, "alias": null, "frequency": "once", "minimum": 1, "externalProject": "為M+大雅教會奉獻" }, { "project": "Ｍ＋大雅教會", "name": "青年教會", "externalItemNo": 150, "publicGroup": "church", "publicEnabled": true, "alias": "青少年事工奉獻", "frequency": "once", "minimum": 1, "externalProject": "為M+大雅教會奉獻" }, { "project": "Ｍ＋大雅教會", "name": "一般奉獻", "externalItemNo": 7, "publicGroup": "church", "publicEnabled": true, "alias": null, "frequency": "once", "minimum": 1, "externalProject": "為M+大雅教會奉獻" }, { "project": "Ｍ＋大雅教會", "name": "感恩奉獻", "externalItemNo": 9, "publicGroup": "church", "publicEnabled": true, "alias": null, "frequency": "once", "minimum": 1, "externalProject": "為M+大雅教會奉獻" }, { "project": "Ｍ＋大雅教會", "name": "宣教奉獻", "externalItemNo": 8, "publicGroup": "church", "publicEnabled": true, "alias": null, "frequency": "once", "minimum": 1, "externalProject": "為M+大雅教會奉獻" }, { "project": "Ｍ＋大雅教會", "name": "指定奉獻", "externalItemNo": 6, "publicGroup": "church", "publicEnabled": true, "alias": null, "frequency": "once", "minimum": 1, "externalProject": "為M+大雅教會奉獻" }, { "project": "夢想加油站課輔班", "name": "2026弱勢兒少公益課輔班-夢想加油站", "externalItemNo": 166, "publicGroup": "association", "publicEnabled": true, "alias": null, "frequency": "once", "minimum": 100, "externalProject": "弱勢兒少夢想加油站募款" }, { "project": "夢想加油站課輔班", "name": "2026弱勢兒少公益課輔班-夢想加油站（定期定額）", "externalItemNo": 167, "publicGroup": "association", "publicEnabled": true, "alias": null, "frequency": "monthly", "minimum": 100, "externalProject": "弱勢兒少夢想加油站募款" }, { "project": "夢想加油站課輔班", "name": "2027弱勢兒少公益課輔班-夢想加油站", "externalItemNo": 185, "publicGroup": "association", "publicEnabled": true, "alias": "2027弱勢兒少課後輔導班", "frequency": "once", "minimum": 100, "externalProject": "弱勢兒少夢想加油站募款" }, { "project": "夢想加油站課輔班", "name": "2027弱勢兒少公益課輔班-夢想加油站（定期定額）", "externalItemNo": 186, "publicGroup": "association", "publicEnabled": true, "alias": null, "frequency": "monthly", "minimum": 100, "externalProject": "弱勢兒少夢想加油站募款" }];
var purposes = purposeCatalog.filter((x) => x.publicGroup === (association ? "association" : "church"));
var payments = { credit: "信用卡", linepay: "LINE Pay", atm: "ATM 虛擬帳號", barcode: "超商條碼" };
var receipts = { single: "單筆電子收據", annual: "年度彙整收據", none: "不索取收據" };
var money = (value) => "NT$ " + Number(value || 0).toLocaleString("zh-TW");
var monthly = () => form.elements.frequency.value === "monthly";
var currentStep = 0;
var previousPayment = "credit";
var previousReceipt = "single";
var lastFrequency = "once";
var priorFocus = null;
for (const node of document.querySelectorAll("[data-icon]")) node.append(createAppIcon(node.dataset.icon, "giving-shared-icon"));
function updatePurposes() {
  const previous = form.elements.purpose.selectedOptions[0]?.dataset.baseName;
  const choices = purposes.filter((x) => !association || x.frequency === (monthly() ? "monthly" : "once"));
  form.elements.purpose.replaceChildren();
  for (const item of choices) {
    const option = document.createElement("option");
    option.value = item.name;
    option.textContent = item.name;
    option.dataset.itemNo = String(item.externalItemNo);
    option.dataset.minimum = String(item.minimum);
    option.dataset.baseName = item.name.replace("（定期定額）", "");
    form.elements.purpose.append(option);
  }
  const keep = [...form.elements.purpose.options].find((o) => o.dataset.baseName === previous);
  if (keep) form.elements.purpose.value = keep.value;
  form.elements.amount.min = association ? "100" : "1";
}
updatePurposes();
var presetAmounts = association ? [300, 500, 1e3, 2e3] : [500, 1e3, 2e3, 5e3];
for (const value of presetAmounts) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = money(value);
  button.dataset.amount = String(value);
  button.setAttribute("aria-pressed", String(value === 1e3));
  button.addEventListener("click", () => {
    form.elements.amount.value = String(value);
    updateSummary();
  });
  $("#amount-options").append(button);
}
function updateSummary() {
  const m = monthly(), amount = form.elements.amount.value;
  for (const button of document.querySelectorAll("[data-amount]")) button.setAttribute("aria-pressed", String(Number(button.dataset.amount) === Number(amount)));
  $("#summary-amount").textContent = money(amount);
  $("#summary-frequency").textContent = m ? "每月定期定額" : "單次" + noun;
  $("#summary-purpose").textContent = form.elements.purpose.value;
  $("#summary-payment").textContent = payments[form.elements.payment.value];
  $("#summary-recurring").hidden = !m;
  $("#summary-recurring").textContent = `預覽設定：每月 ${form.elements.charge_day.value} 日，共 ${form.elements.periods.value} 期。`;
}
function updateOptions() {
  const m = monthly();
  if (form.elements.frequency.value !== lastFrequency) {
    if (m) {
      previousPayment = form.elements.payment.value;
      previousReceipt = form.elements.receipt.value;
      form.elements.payment.value = "credit";
      form.elements.receipt.value = "annual";
    } else {
      form.elements.payment.value = previousPayment;
      form.elements.receipt.value = previousReceipt;
    }
    lastFrequency = form.elements.frequency.value;
    updatePurposes();
  }
  $("#recurring-settings").hidden = !m;
  for (const radio of form.querySelectorAll('input[name="payment"]')) radio.disabled = m && radio.value !== "credit";
  $("#amount-legend").textContent = m ? "每月支持金額" : "選擇金額";
  $("#linepay-note").textContent = m ? "定期扣款待專用授權核准" : "使用 LINE Pay 付款";
  $("#payment-note").textContent = m ? "定期自動扣款預覽採信用卡。LINE Pay 須另申請預先授權；ATM／超商條碼需要自行繳款。" : "這裡可以預覽付款選擇，目前不會導向付款或建立繳款帳號。";
  $("#receipt-fields").hidden = form.elements.receipt.value === "none";
  form.elements.receipt_title.disabled = form.elements.receipt.value === "none";
  form.elements.email.required = form.elements.receipt.value !== "none";
  $("#email-required").textContent = form.elements.email.required ? "必填" : "選填";
  updateSummary();
}
function fail(message, input) {
  setStatus($("#form-status"), message, { tone: "error" });
  input.focus();
  return false;
}
function validAmount() {
  const field = form.elements.amount, value = Number(field.value);
  if (!field.value || !Number.isSafeInteger(value) || value < Number(field.min) || value > 9999999) return fail(`請輸入 ${field.min} 至 9,999,999 元之間的整數金額。`, field);
  return true;
}
function validReceipt() {
  const name = form.elements.donor_name, email = form.elements.email;
  if (!name.value.trim()) return fail("請填寫姓名，方便核對支持與收據資料。", name);
  if (!email.checkValidity()) return fail(email.validity.valueMissing ? "請填寫 Email，以便寄送電子收據。" : "請確認 Email 格式是否正確。", email);
  return true;
}
function showStep(index) {
  setStatus($("#form-status"), "");
  currentStep = index;
  document.querySelectorAll("[data-step]").forEach((node) => node.hidden = Number(node.dataset.step) !== index);
  document.querySelectorAll(".steps li").forEach((node, i) => {
    if (i === index) node.setAttribute("aria-current", "step");
    else node.removeAttribute("aria-current");
  });
  if (index === 2) renderReview();
  const heading = form.querySelector(`[data-step="${index}"] h3`);
  heading.focus({ preventScroll: true });
  form.scrollIntoView({ block: "start", behavior: "instant" });
  priorFocus = heading;
}
function renderReview() {
  const data = [["支持單位", org], ["支持用途", form.elements.purpose.value], ["既有捐款項目編號", form.elements.purpose.selectedOptions[0].dataset.itemNo], ["支持方式", monthly() ? "每月定期定額" : "單次" + noun], ["每" + (monthly() ? "月" : "筆") + "金額", money(form.elements.amount.value)], ["付款方式", payments[form.elements.payment.value]]];
  if (monthly()) data.push(["預計扣款日", `每月 ${form.elements.charge_day.value} 日（待正式授權確認）`], ["支持期數", form.elements.periods.value + " 期"]);
  data.push(["姓名", form.elements.donor_name.value.trim()], ["Email", form.elements.email.value.trim() || "未填寫"], ["收據方式", receipts[form.elements.receipt.value]]);
  if (form.elements.receipt.value !== "none") data.push(["收據抬頭", form.elements.receipt_title.value.trim() || form.elements.donor_name.value.trim()]);
  data.push(["公開姓名", form.elements.anonymous.checked ? "不公開" : "依正式徵信告知與同意辦理"]);
  const dl = $("#review-details");
  dl.replaceChildren();
  for (const [label, value] of data) {
    const row = document.createElement("div"), dt = document.createElement("dt"), dd = document.createElement("dd");
    dt.textContent = label;
    dd.textContent = value;
    row.append(dt, dd);
    dl.append(row);
  }
}
form.addEventListener("submit", (event) => event.preventDefault());
form.addEventListener("change", updateOptions);
form.elements.amount.addEventListener("input", updateSummary);
$("#to-receipt").addEventListener("click", () => {
  if (validAmount()) showStep(1);
});
$("#to-review").addEventListener("click", () => {
  if (validAmount() && validReceipt()) showStep(2);
});
for (const button of form.querySelectorAll("[data-back]")) button.addEventListener("click", () => showStep(Number(button.dataset.back)));
window.addEventListener("pageshow", (event) => {
  if (event.persisted && priorFocus && currentStep === 2) renderReview();
});
updateOptions();

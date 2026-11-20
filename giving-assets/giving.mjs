// church-os-giving-pages-20261120/app-function-definitions.mjs?v=20261116-memberline1
function freezeTree(value) {
  if (value && typeof value === "object") {
    Object.values(value).forEach(freezeTree);
    Object.freeze(value);
  }
  return value;
}
var FUNCTION_CATALOG = freezeTree({
  "church_giving_preview": { "file": "church-giving.html", "title": "\u6559\u6703\u5949\u737B\u9801\u9762\u9810\u89BD", "description": "\u55AE\u6B21\u8207\u5B9A\u671F\u5B9A\u984D\u4ECB\u9762\u9810\u89BD\uFF0C\u5C1A\u672A\u958B\u653E\u6536\u6B3E", "key": "church_giving_preview", "church": "M+", "group": "finance", "symbol": "heart", "owner": true, "configurableHome": false, "searchTerms": ["\u5949\u737B", "\u5B9A\u671F\u5B9A\u984D", "\u91D1\u6D41\u9810\u89BD"] },
  "association_donation_preview": { "file": "association-donate.html", "title": "\u5354\u6703\u6350\u6B3E\u9801\u9762\u9810\u89BD", "description": "\u5354\u6703\u5C08\u7528\u6350\u6B3E\u4ECB\u9762\u9810\u89BD\uFF0C\u5C1A\u672A\u958B\u653E\u6536\u6B3E", "key": "association_donation_preview", "church": "M+", "group": "finance", "symbol": "heart", "owner": true, "configurableHome": false, "searchTerms": ["\u5354\u6703", "\u6350\u6B3E", "\u5B9A\u671F\u5B9A\u984D"] },
  "admin_workbench": { "file": "admin-workbench.html", "title": "\u884C\u653F\u5F85\u8FA6", "description": "\u5F85\u6211\u8655\u7406\u3001\u6211\u9001\u51FA\u7684\u3001\u6838\u51C6\u5F85\u5B8C\u6210\u8207\u7570\u5E38\u8FFD\u8E64", "key": "admin_workbench", "church": "M+", "group": "finance", "symbol": "mplus-box", "configurableHome": false, "searchTerms": ["\u884C\u653F", "\u5F85\u8FA6", "\u903E\u671F", "\u7D50\u6848"] },
  "member_line_history": { "file": "member-line-history.html", "title": "LINE \u8A0A\u606F\u767C\u9001\u7D00\u9304", "description": "\u67E5\u8A62\u767C\u9001\u4EBA\u3001\u6536\u4EF6\u4EBA\u3001\u5168\u6587\u3001\u6642\u9593\u8207\u53D7\u7406\u72C0\u614B", "key": "member_line_history", "group": "system", "church": "M+", "owner": true, "symbol": "chat", "configurableHome": false, "searchTerms": ["LINE", "\u7D00\u9304", "\u8AB0\u767C\u7684", "\u8A0A\u606F"], "settingsId": "member-line-history", "settingsGroup": "people" },
  "member_line_settings": { "file": "member-line-settings.html", "title": "\u6703\u53CB LINE \u50B3\u9001\u6B0A\u9650", "description": "\u958B\u95DC\u500B\u5225\u540C\u5DE5\u7684\u6703\u53CB\u79C1\u4EBA\u8A0A\u606F\u50B3\u9001\u6B0A", "key": "member_line_settings", "group": "system", "church": "M+", "owner": true, "symbol": "chat", "configurableHome": false, "searchTerms": ["LINE", "\u8A0A\u606F", "\u50B3\u9001", "\u6B0A\u9650"], "settingsId": "member-line-settings", "settingsGroup": "people" },
  "potluck": { "file": "potluck-admin.html", "title": "\u4E92\u52D5\u6599\u7406\u52DF\u96C6", "description": "\u6D3B\u52D5\u8A2D\u5B9A\u3001\u6599\u7406\u540D\u55AE\u8207\u611F\u6069\u9910\u684C\u7D71\u8A08", "key": "potluck", "group": "events", "church": "M+", "owner": true, "symbol": "heart", "configurableHome": false, "searchTerms": ["\u611F\u6069\u7BC0", "\u6599\u7406", "\u6D3B\u52D5\u7BA1\u7406"] },
  "finance_permission_settings": { "file": "admin-accounts.html?church=M%2B", "title": "\u540C\u5DE5\u6B0A\u9650\u8A2D\u5B9A", "description": "\u7D71\u4E00\u52FE\u9078\u6559\u6703\u529F\u80FD\u3001\u64CD\u4F5C\u8207\u8CA1\u52D9\u6B0A\u9650", "key": "finance_permission_settings", "group": "finance", "church": "M+", "owner": true, "symbol": "mplus-box", "configurableHome": false, "searchTerms": ["\u6388\u6B0A", "\u540C\u5DE5\u6B0A\u9650"] },
  "finance_accounting_reports": { "file": "finance-permissions.html#reports", "title": "\u6703\u8A08\u5831\u8868", "description": "\u67E5\u95B1\u8207\u532F\u51FA\u5DF2\u6838\u51C6\u8CA1\u52D9\u8CC7\u6599", "key": "finance_accounting_reports", "group": "finance", "church": "M+", "accountingReportAccess": true, "symbol": "mplus-box", "configurableHome": false, "searchTerms": ["\u6703\u8A08", "\u5831\u8868", "\u532F\u51FA"] },
  "school_staff_scheduling": { "file": "https://school.mchurch.online/?tab=schedules", "title": "\u73ED\u8868\u5B89\u6392", "description": "\u5B89\u6392\u8001\u5E2B\u8207\u5DE5\u8B80\u751F\u73ED\u8868\uFF0C\u50C5\u9650\u923A\u5EAD\u8207\u6069\u8339\u64CD\u4F5C", "key": "school_staff_scheduling", "group": "finance", "church": "M+", "symbol": "mplus-calendar", "configurableHome": false, "scheduleAccess": true, "searchTerms": ["\u6392\u73ED", "\u8001\u5E2B\u73ED\u8868", "\u5DE5\u8B80\u751F\u73ED\u8868"] },
  "school_payroll": { "file": "school-payroll.html?month=current", "title": "\u8AB2\u8F14\u85AA\u8CC7\u7D50\u7B97", "description": "\u6642\u85AA\u8A2D\u5B9A\u3001\u6708\u5E95\u7D50\u7B97\u3001\u7C3D\u5230\u8868\u8207\u9010\u7D1A\u5BE9\u6838", "key": "school_payroll", "group": "finance", "church": "M+", "symbol": "mplus-box", "configurableHome": false, "payrollAccess": true, "searchTerms": ["\u8001\u5E2B\u85AA\u8CC7", "\u5DE5\u8B80\u751F\u85AA\u6C34", "\u6BCF\u6708\u7C3D\u5230\u8868", "\u7D50\u7B97\u5BE9\u6838"] },
  "testimony_review": {
    "permission": "website_weekly",
    "file": "testimony-admin.html",
    "church": "M+",
    "icon": "\u2601",
    "title": "\u96F2\u5F69\u898B\u8B49",
    "description": "\u6587\u5B57\u3001\u5F71\u7247\u8207\u7167\u7247\u6295\u7A3F\u5BE9\u6838",
    "key": "testimony_review",
    "group": "media",
    "symbol": "book",
    "configurableHome": false,
    "searchTerms": ["\u898B\u8B49", "\u6295\u7A3F", "\u5206\u4EAB", "\u5BE9\u6838"],
    "settingsId": "testimony-review",
    "settingsGroup": "content"
  },
  "review_workflows": {
    "permission": "notification_settings",
    "file": "review-workflow-settings.html",
    "icon": "\u2705",
    "title": "\u5BE9\u6838\u6D41\u7A0B",
    "description": "\u521D\u5BE9\u3001\u8907\u5BE9\u8207\u901A\u77E5\u8A2D\u5B9A",
    "key": "review_workflows",
    "group": "system",
    "symbol": "check",
    "configurableHome": false,
    "searchTerms": [
      "\u521D\u5BE9",
      "\u8907\u5BE9",
      "\u5BE9\u6838\u4EBA"
    ],
    "settingsId": "review-workflows",
    "settingsGroup": "review"
  },
  "members": {
    "permission": "members",
    "file": "members.html",
    "icon": "\u{1F465}",
    "title": "\u6703\u53CB",
    "description": "\u6703\u53CB\u8207\u65B0\u670B\u53CB\u8CC7\u6599",
    "key": "members",
    "group": "pastoral",
    "symbol": "people",
    "configurableHome": true,
    "searchTerms": [
      "\u6703\u53CB\u540D\u518A"
    ]
  },
  "newcomer_care": {
    "permission": "newcomer_care",
    "file": "newcomer-care.html",
    "icon": "\u{1F331}",
    "title": "\u65B0\u670B\u53CB",
    "description": "\u806F\u7D61\u3001\u8FFD\u8E64\u8207\u5F8C\u7E8C\u95DC\u61F7",
    "key": "newcomer_care",
    "group": "pastoral",
    "symbol": "sprout",
    "configurableHome": true,
    "searchTerms": [
      "\u65B0\u670B\u53CB\u95DC\u61F7"
    ]
  },
  "church_albums": { "file": "church-albums.html", "title": "\u76F8\u7C3F", "description": "\u6559\u6703\u8207\u8AB2\u8F14\u7167\u7247\u3001\u8CC7\u6599\u593E\u53CA\u6A94\u6848\u4E0A\u50B3", "key": "church_albums", "permission": "church_albums", "group": "pastoral", "church": "M+", "symbol": "mplus-box", "configurableHome": false, "searchTerms": ["\u6559\u6703\u76F8\u7C3F", "\u8AB2\u8F14\u76F8\u7C3F", "\u7167\u7247", "\u4E0A\u50B3"] },
  "pastoral_workspace": {
    "file": "pastoral/workspace.html",
    "icon": "\u{1F91D}",
    "title": "\u540C\u5DE5\u5DE5\u4F5C\u5340",
    "description": "\u5DE5\u4F5C\u3001\u884C\u7A0B\u8207\u540C\u5DE5\u5DE5\u5177",
    "key": "pastoral_workspace",
    "group": "pastoral",
    "symbol": "people",
    "configurableHome": true,
    "searchTerms": [
      "\u540C\u5DE5\u5354\u4F5C"
    ]
  },
  "pastoral_workflow_survey": {
    "file": "pastoral/workflow-survey.html",
    "icon": "\u{1F4DD}",
    "title": "\u540C\u5DE5\u5DE5\u4F5C\u6D41\u7A0B\u8ABF\u67E5",
    "description": "\u8490\u96C6\u4F8B\u884C\u5DE5\u4F5C\u3001\u5361\u9EDE\u8207\u63D0\u9192\u504F\u597D",
    "key": "pastoral_workflow_survey",
    "group": "pastoral",
    "symbol": "check",
    "configurableHome": false,
    "searchTerms": ["\u540C\u5DE5\u554F\u5377", "\u5DE5\u4F5C\u6D41\u7A0B", "\u6BCF\u9031\u5DE5\u4F5C"]
  },
  "private_prayers": {
    "permission": "private_prayers",
    "file": "prayers.html",
    "icon": "\u{1F64F}",
    "title": "\u4EE3\u79B1\u8207\u95DC\u61F7",
    "description": "\u4EE3\u79B1\u4E8B\u9805\u8207\u5F8C\u7E8C\u95DC\u5FC3",
    "key": "private_prayers",
    "group": "pastoral",
    "symbol": "heart",
    "configurableHome": true,
    "searchTerms": [
      "\u4EE3\u79B1\u95DC\u61F7"
    ]
  },
  "pastoral_chats": {
    "permission": "pastoral_chats",
    "file": "pastoral-inbox.html",
    "icon": "\u{1F4AC}",
    "title": "\u95DC\u61F7\u8A0A\u606F",
    "description": "\u4E00\u5C0D\u4E00\u8A0A\u606F\u8207\u8DDF\u9032",
    "key": "pastoral_chats",
    "group": "pastoral",
    "symbol": "chat",
    "configurableHome": true,
    "searchTerms": [
      "\u7267\u990A\u8A0A\u606F"
    ]
  },
  "attendance": {
    "permission": "attendance",
    "file": "attendance.html",
    "icon": "\u2705",
    "title": "\u51FA\u5E2D\u767B\u8A18",
    "description": "\u805A\u6703\u51FA\u5E2D\u8207\u7D71\u8A08",
    "key": "attendance",
    "group": "service",
    "symbol": "check",
    "configurableHome": true,
    "searchTerms": [
      "\u805A\u6703\u9EDE\u540D"
    ]
  },
  "groups": {
    "permission": "groups",
    "file": "groups.html",
    "icon": "\u{1FAF6}",
    "title": "\u5C0F\u7D44\u8207\u5C0F\u5BB6",
    "description": "\u5206\u7D44\u3001\u7D44\u9577\u8207\u6210\u54E1",
    "key": "groups",
    "group": "pastoral",
    "symbol": "people",
    "configurableHome": true,
    "searchTerms": [
      "\u5C0F\u7D44\uFF0F\u5C0F\u5BB6"
    ]
  },
  "schedules": {
    "permission": "schedules",
    "file": "schedules.html",
    "icon": "\u{1F4C5}",
    "title": "\u670D\u4E8B\u5B89\u6392",
    "description": "\u4E3B\u65E5\u8207\u805A\u6703\u670D\u4E8B",
    "key": "schedules",
    "group": "service",
    "symbol": "calendar",
    "configurableHome": true,
    "searchTerms": [
      "\u670D\u4E8B\u6392\u73ED"
    ]
  },
  "spaces": {
    "permission": "spaces",
    "file": "spaces.html",
    "icon": "\u{1F4CD}",
    "title": "\u5834\u5730\u8207\u8A2D\u5099",
    "description": "\u7A7A\u9593\u3001\u8A2D\u5099\u8207\u9810\u7D04",
    "key": "spaces",
    "group": "service",
    "symbol": "pin",
    "configurableHome": true,
    "searchTerms": [
      "\u5834\u5730\u9810\u7D04"
    ],
    "settingsId": "space-settings",
    "settingsGroup": "church"
  },
  "inventory": {
    "permission": "inventory",
    "file": "inventory.html",
    "icon": "\u{1F4E6}",
    "title": "\u7269\u54C1\u8207\u501F\u7528",
    "description": "\u4F4D\u7F6E\u3001\u6578\u91CF\u8207\u501F\u9084",
    "key": "inventory",
    "group": "service",
    "symbol": "box",
    "configurableHome": true,
    "searchTerms": [
      "\u7269\u54C1\u6E05\u518A"
    ],
    "settingsId": "inventory-settings",
    "settingsGroup": "church"
  },
  "heat_camp": {
    "church": "M+",
    "permission": "heat_camp",
    "file": "heat-camp-admin.html",
    "icon": "\u{1F3C0}",
    "title": "\u71B1\u706B\u7C43\u7403\u71DF",
    "description": "\u5831\u540D\u3001\u7E73\u8CBB\u3001\u540D\u55AE\u8207\u5FD7\u5DE5",
    "key": "heat_camp",
    "group": "basketball",
    "symbol": "target",
    "configurableHome": true,
    "searchTerms": ["\u5FD7\u5DE5\u5831\u540D", "\u71B1\u706B\u7C43\u7403\u71DF\u5FD7\u5DE5"]
  },
  "website_weekly": {
    "permission": "website_weekly",
    "file": "website-maintenance.html",
    "icon": "\u{1F310}",
    "title": "\u4E3B\u65E5\u9031\u5831",
    "description": "\u9031\u5831\u3001\u9810\u544A\u5716\u8207\u670D\u4E8B\u8868",
    "key": "website_weekly",
    "group": "media",
    "symbol": "globe",
    "configurableHome": true,
    "searchTerms": [
      "\u6559\u6703\u7DB2\u7AD9\u7DAD\u8B77",
      "\u5B98\u7DB2",
      "\u7DB2\u7AD9",
      "\u9810\u544A\u5716",
      "\u4E3B\u65E5"
    ],
    "settingsId": "website-maintenance",
    "settingsGroup": "content"
  },
  "association_stories": { "church": "M+", "permission": "association_content", "file": "association-stories.html", "title": "\u5354\u6703\u7167\u7247\u8AAA\u6545\u4E8B", "description": "\u7167\u7247\u8207\u6545\u4E8B\u7522\u751F FB \u6587\u6848\uFF0C\u9001\u7267\u5E2B\uFF0F\u5E2B\u6BCD\u5BE9\u6838\u5F8C\u767C\u5E03\uFF0C\u53EF\u540C\u6B65\u5354\u6703\u6700\u65B0\u6D88\u606F", "key": "association_stories", "group": "media", "symbol": "globe", "configurableHome": false, "searchTerms": ["\u5354\u6703", "FB", "Facebook", "\u7167\u7247\u8AAA\u6545\u4E8B", "\u5E2B\u6BCD\u5BE9\u6838"], "settingsId": "association-stories", "settingsGroup": "content" },
  "association_news": {
    "church": "M+",
    "permission": "association_content",
    "file": "association-news.html",
    "icon": "\u{1F4F0}",
    "title": "\u5354\u6703\u7DB2\u7AD9",
    "description": "\u6700\u65B0\u6D88\u606F\u4E0A\u7A3F\uFF0C\u767C\u4F48\u5F8C\u76F4\u63A5\u986F\u793A\u65BC\u5354\u6703\u9996\u9801",
    "key": "association_news",
    "group": "media",
    "symbol": "globe",
    "configurableHome": true,
    "searchTerms": ["\u5354\u6703", "\u6700\u65B0\u6D88\u606F", "tcsc.org.tw", "\u4E0A\u7A3F"],
    "settingsId": "association-news",
    "settingsGroup": "content"
  },
  "website_group_resources": {
    "permission": "website_group_resources",
    "file": "group-resources-management.html",
    "icon": "\u{1F4DA}",
    "title": "\u5C0F\u7D44\u6559\u6750",
    "description": "\u6BCF\u9031\u6559\u6750\u8207\u805A\u6703\u5167\u5BB9",
    "key": "website_group_resources",
    "group": "media",
    "symbol": "book",
    "configurableHome": true,
    "searchTerms": [
      "\u5C0F\u7D44\u805A\u6703\u8CC7\u6E90"
    ],
    "settingsId": "group-resources",
    "settingsGroup": "content"
  },
  "tree_reading_admin": {
    "permission": "tree_reading_admin",
    "file": "daily-devotional-admin.html",
    "icon": "\u{1F333}",
    "title": "\u751F\u547D\u6A39",
    "description": "\u6BCF\u65E5\u9748\u4FEE\u8207\u8B80\u7D93\u9032\u5EA6",
    "key": "tree_reading_admin",
    "group": "media",
    "symbol": "tree",
    "configurableHome": true,
    "searchTerms": [
      "\u6BCF\u65E5\u9748\u4FEE\u751F\u547D\u6A39",
      "\u8B80\u7D93\u751F\u547D\u6A39",
      "\u6BCF\u65E5\u9748\u4FEE",
      "\u8B80\u7D93"
    ],
    "settingsId": "daily-devotional",
    "settingsGroup": "content"
  },
  "bibletree_admin": {
    "permission": "tree_reading_admin",
    "church": "M+",
    "file": "bibletree-admin.html",
    "icon": "\u{1F333}",
    "title": "\u8B80\u7D93\u6A39\u7BA1\u7406",
    "description": "\u73A9\u5BB6\u9032\u5EA6\u8207365\u65E5\u9748\u4FEE\u5167\u5BB9",
    "key": "bibletree_admin",
    "group": "events",
    "symbol": "tree",
    "configurableHome": false,
    "searchTerms": ["\u8B80\u7D93\u6A39", "RPG", "\u904A\u6232\u7BA1\u7406", "\u73A9\u5BB6", "365", "\u9748\u4FEE"]
  },
  "bibletree_devotional": {
    "permission": "tree_reading_admin",
    "church": "M+",
    "file": "bibletree-devotional-admin.html",
    "icon": "\u{1F333}",
    "title": "\u8B80\u7D93\u6A39365\u65E5\u9748\u4FEE",
    "description": "\u9010\u65E5\u6AA2\u8996\u3001\u4FEE\u8A02\u8207\u767C\u5E03\u9748\u4FEE\u5167\u5BB9",
    "key": "bibletree_devotional",
    "group": "events",
    "symbol": "tree",
    "configurableHome": false,
    "searchTerms": ["\u8B80\u7D93\u6A39", "365", "\u5168\u5E74\u9748\u4FEE", "\u7D93\u6587", "\u5167\u5BB9\u5BE9\u67E5"]
  },
  "bibletree_players": {
    "permission": "tree_reading_admin",
    "church": "M+",
    "file": "bibletree-players.html",
    "icon": "\u{1F465}",
    "title": "\u8B80\u7D93\u6A39\u73A9\u5BB6\u5217\u8868",
    "description": "\u73A9\u5BB6\u8CC7\u6599\u3001\u8B80\u7D93\u9032\u5EA6\u8207\u516C\u6E2C\u53C3\u8207",
    "key": "bibletree_players",
    "group": "events",
    "symbol": "people",
    "configurableHome": false,
    "searchTerms": ["\u73A9\u5BB6", "\u904A\u6232\u5E33\u865F", "\u8B80\u7D93\u6A39", "\u516C\u6E2C", "\u56DE\u994B"]
  },
  "life_tree_festivals": {
    "permission": "tree_reading_admin",
    "church": "M+",
    "file": "life-tree-festivals.html",
    "icon": "\u{1F333}",
    "title": "\u751F\u547D\u6A39\u7BC0\u6176\u9810\u89BD",
    "description": "\u4E5D\u7A2E\u7BC0\u6176\u5834\u666F\u8207\u6BCF\u65E5\u4E92\u52D5\u8A66\u73A9",
    "key": "life_tree_festivals",
    "group": "media",
    "symbol": "tree",
    "configurableHome": false,
    "searchTerms": ["\u7BC0\u6176", "\u751F\u547D\u6A39", "\u8056\u8A95\u71C8", "\u611F\u6069\u7BC0", "\u5149\u660E\u52C7\u58EB"],
    "settingsId": "life-tree-festivals",
    "settingsGroup": "content"
  },
  "binding_review": {
    "permission": "binding_review",
    "file": "binding-review.html",
    "icon": "\u{1F517}",
    "title": "LINE \u8EAB\u5206\u78BA\u8A8D",
    "description": "\u78BA\u8A8D\u6703\u53CB\u8207 LINE \u5E33\u865F",
    "key": "binding_review",
    "group": "system",
    "symbol": "link",
    "configurableHome": true,
    "searchTerms": [
      "LINE \u7D81\u5B9A\u5BE9\u6838"
    ],
    "settingsId": "binding-review",
    "settingsGroup": "people"
  },
  "notification_settings": {
    "permission": "notification_settings",
    "file": "notification-settings.html",
    "icon": "\u{1F514}",
    "title": "\u901A\u77E5\u8A2D\u5B9A",
    "description": "\u624B\u6A5F\u8207 LINE \u901A\u77E5",
    "key": "notification_settings",
    "group": "system",
    "symbol": "bell",
    "configurableHome": true,
    "searchTerms": [
      "LINE \u901A\u77E5\u8A2D\u5B9A",
      "\u901A\u77E5\u7BA1\u9053\u8A2D\u5B9A"
    ],
    "settingsId": "notification-settings",
    "settingsGroup": "review"
  },
  "school": {
    "file": "https://school.mchurch.online/",
    "icon": "\u{1F4DA}",
    "title": "\u8AB2\u8F14",
    "description": "\u5B78\u751F\u3001\u51FA\u5E2D\u8207\u8F14\u5C0E",
    "key": "school",
    "group": "school",
    "symbol": "book",
    "configurableHome": true,
    "searchTerms": []
  },
  "school_checkin": {
    "file": "https://school.mchurch.online/?tab=checkin",
    "icon": "\u{1F4F7}",
    "title": "\u8AB2\u8F14\u6253\u5361",
    "description": "\u5B78\u751F\u8207\u540C\u5DE5\u6253\u5361",
    "key": "school_checkin",
    "group": "school",
    "symbol": "camera",
    "configurableHome": true,
    "searchTerms": []
  },
  "school_schedules": {
    "file": "https://school.mchurch.online/?tab=schedules",
    "icon": "\u{1F5D3}\uFE0F",
    "title": "\u8AB2\u8F14\u5B89\u6392",
    "description": "\u8001\u5E2B\u8207\u540C\u5DE5\u5B89\u6392",
    "key": "school_schedules",
    "group": "school",
    "symbol": "calendar",
    "configurableHome": true,
    "searchTerms": []
  },
  "school_rollcall": {
    "file": "https://school.mchurch.online/?tab=rollcall",
    "icon": "\u2705",
    "title": "\u8AB2\u8F14\u51FA\u5E2D",
    "description": "\u6BCF\u65E5\u8AB2\u5802\u51FA\u5E2D",
    "key": "school_rollcall",
    "group": "school",
    "symbol": "check",
    "configurableHome": true,
    "searchTerms": []
  },
  "school_students": {
    "file": "https://school.mchurch.online/?tab=students",
    "icon": "\u{1F9D1}\u200D\u{1F393}",
    "title": "\u5B78\u751F",
    "description": "\u5B78\u751F\u8207\u540C\u5DE5\u8CC7\u6599",
    "key": "school_students",
    "group": "school",
    "symbol": "student",
    "configurableHome": true,
    "searchTerms": []
  },
  "school_counseling": {
    "file": "https://school.mchurch.online/?tab=counseling",
    "icon": "\u{1F49B}",
    "title": "\u500B\u5225\u8F14\u5C0E",
    "description": "\u8F14\u5C0E\u7D00\u9304\u8207\u8DDF\u9032",
    "key": "school_counseling",
    "group": "school",
    "symbol": "heart",
    "configurableHome": true,
    "searchTerms": []
  },
  "school_reports": {
    "file": "https://school.mchurch.online/?tab=print-center",
    "icon": "\u{1F5A8}\uFE0F",
    "title": "\u8AB2\u8F14\u5831\u8868",
    "description": "\u51FA\u5E2D\u8868\u8207\u5B78\u751F\u8CC7\u6599",
    "key": "school_reports",
    "group": "school",
    "symbol": "printer",
    "configurableHome": true,
    "searchTerms": []
  },
  "basketball": {
    "file": "https://mschurch-app.github.io/m-plus-basketball/",
    "icon": "\u{1F3C0}",
    "title": "\u7C43\u7403\u968A",
    "description": "\u7403\u54E1\u8207\u7403\u968A",
    "key": "basketball",
    "group": "basketball",
    "symbol": "target",
    "configurableHome": true,
    "searchTerms": []
  },
  "basketball_gamecenter": {
    "file": "https://mschurch-app.github.io/m-plus-basketball/?tab=gamecenter",
    "icon": "\u{1F3C6}",
    "title": "\u6BD4\u8CFD\u7D00\u9304",
    "description": "\u6BD4\u8CFD\u3001\u5F97\u5206\u8207\u72AF\u898F",
    "key": "basketball_gamecenter",
    "group": "basketball",
    "symbol": "trophy",
    "configurableHome": true,
    "searchTerms": []
  },
  "basketball_tactics": {
    "file": "https://mschurch-app.github.io/m-plus-basketball/?tab=tactics",
    "icon": "\u{1F4CB}",
    "title": "\u7C43\u7403\u6230\u8853",
    "description": "\u6230\u8853\u677F\u8207\u8A13\u7DF4\u5167\u5BB9",
    "key": "basketball_tactics",
    "group": "basketball",
    "symbol": "clipboard",
    "configurableHome": true,
    "searchTerms": []
  },
  "basketball_assignments": {
    "file": "https://mschurch-app.github.io/m-plus-basketball/?tab=assignments",
    "icon": "\u{1F3AF}",
    "title": "\u7403\u54E1\u4F5C\u696D",
    "description": "\u8A13\u7DF4\u4EFB\u52D9\u8207\u6210\u679C",
    "key": "basketball_assignments",
    "group": "basketball",
    "symbol": "target",
    "configurableHome": true,
    "searchTerms": []
  },
  "basketball_schedule": {
    "file": "https://mschurch-app.github.io/m-plus-basketball/?tab=schedule",
    "icon": "\u{1F4C6}",
    "title": "\u7403\u968A\u884C\u7A0B",
    "description": "\u7DF4\u7403\u8207\u6BD4\u8CFD",
    "key": "basketball_schedule",
    "group": "basketball",
    "symbol": "calendar",
    "configurableHome": true,
    "searchTerms": []
  },
  "basketball_daily": {
    "file": "https://mschurch-app.github.io/m-plus-basketball/?tab=dailystatus",
    "icon": "\u{1F4AA}",
    "title": "\u6BCF\u65E5\u72C0\u614B",
    "description": "\u8EAB\u9AD4\u8207\u8A13\u7DF4\u72C0\u614B",
    "key": "basketball_daily",
    "group": "basketball",
    "symbol": "bolt",
    "configurableHome": true,
    "searchTerms": []
  },
  "system_monitor": {
    "file": "system-monitor.html",
    "icon": "\u{1F4CA}",
    "title": "\u7CFB\u7D71\u72C0\u6CC1",
    "description": "\u7DB2\u7AD9\u3001\u670D\u52D9\u8207\u6392\u7A0B",
    "key": "system_monitor",
    "group": "system",
    "symbol": "chart",
    "configurableHome": true,
    "searchTerms": [
      "\u7CFB\u7D71\u76E3\u63A7\u4E2D\u5FC3"
    ]
  },
  "church_settings": {
    "file": "church-settings.html",
    "icon": "\u2699\uFE0F",
    "title": "\u6559\u6703\u8A2D\u5B9A",
    "description": "\u5802\u6703\u3001\u5E33\u865F\u8207\u529F\u80FD",
    "key": "church_settings",
    "group": "system",
    "symbol": "gear",
    "configurableHome": true,
    "searchTerms": [
      "\u7CFB\u7D71\u8A2D\u5B9A"
    ]
  },
  "pastoral_content": {
    "permission": "pastoral",
    "file": "pastoral-content.html",
    "icon": "\u2728",
    "title": "\u7267\u990A\u5716\u5361",
    "description": "\u795D\u79B1\u3001\u5C0F\u5361\u8207\u65B0\u670B\u53CB\u65C5\u7A0B",
    "key": "pastoral_content",
    "group": "media",
    "symbol": "sparkle",
    "configurableHome": false,
    "searchTerms": [
      "\u6559\u7267\u5167\u5BB9"
    ],
    "settingsId": "pastoral-content",
    "settingsGroup": "content"
  },
  "todays_message": {
    "permission": "pastoral",
    "file": "todays-message-settings.html",
    "icon": "\u2728",
    "title": "\u7D66\u4ECA\u5929\u7684\u4F60",
    "description": "\u6BCF\u65E5\u7D93\u6587\u8207\u795D\u798F\u5167\u5BB9",
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
    "icon": "\u{1F49B}",
    "title": "\u628A\u611B\u50B3\u51FA\u53BB",
    "description": "\u795D\u798F\u60C5\u5883\u8207\u5206\u4EAB\u5716\u7247",
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
    "icon": "\u{1F517}",
    "title": "LINE \u670D\u52D9\u9810\u89BD",
    "description": "\u6AA2\u67E5\u6703\u53CB\u670D\u52D9\u5167\u5BB9",
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
    "icon": "\u2699\uFE0F",
    "title": "\u540D\u7A31\u8207\u8868\u55AE",
    "description": "\u529F\u80FD\u540D\u7A31\u3001\u9806\u5E8F\u3001\u8FCE\u65B0\u8868\u55AE\u8207\u9078\u9805",
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
    "icon": "\u{1F465}",
    "title": "\u540C\u5DE5\u5E33\u865F\u8207\u6B0A\u9650",
    "description": "\u9078\u540C\u5DE5\u3001\u52FE\u9078\u529F\u80FD\u8207\u64CD\u4F5C\u6B0A\u9650",
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
    "icon": "\u25B6",
    "title": "\u670D\u52D9\u6388\u6B0A\u7BA1\u7406",
    "description": "YouTube\u3001Instagram\u3001\u6559\u6703\u8207\u5354\u6703 FB\u3001Google \u8207 LINE \u9023\u7DDA\u6388\u6B0A",
    "key": "media_publishing",
    "group": "media",
    "symbol": "play",
    "configurableHome": false,
    "searchTerms": [
      "IG",
      "Instagram",
      "YouTube",
      "\u5F71\u7247",
      "\u793E\u7FA4"
    ],
    "settingsId": "media-publishing",
    "settingsGroup": "content"
  },
  "sermon_preparation": {
    "permission": "website_weekly",
    "action": "edit",
    "church": "M+",
    "file": "sermon-preparation.html",
    "icon": "\u{1F4D6}",
    "title": "\u4FE1\u606F\u9810\u5099",
    "description": "\u7D20\u6750\u3001\u9818\u53D7\u3001\u5927\u7DB1\u8207\u8B1B\u7AE0",
    "key": "sermon_preparation",
    "group": "media",
    "symbol": "book",
    "configurableHome": true,
    "searchTerms": ["\u8B1B\u7AE0", "\u8B1B\u9053", "\u9810\u5099", "\u4FE1\u606F\u5DE5\u4F5C\u5BA4"],
    "settingsId": "sermon-preparation",
    "settingsGroup": "content"
  },
  "subtitle_library": {
    "permission": "website_weekly",
    "action": "edit",
    "church": "M+",
    "file": "youtube-subtitle-library.html",
    "icon": "\u{1F4DA}",
    "title": "\u5B57\u5E55\u8A5E\u5EAB",
    "description": "\u8FA8\u8B58\u932F\u5B57\u8207\u8B1B\u54E1\u7528\u8A9E",
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
    "icon": "\u{1F4C5}",
    "title": "\u670D\u4E8B\u610F\u9858\u8207\u5354\u8ABF",
    "description": "\u6BCF\u5169\u500B\u6708\u7684\u670D\u4E8B\u610F\u9858\u3001\u5019\u88DC\u8207\u6392\u73ED\u5354\u8ABF",
    "key": "service_signups",
    "group": "service",
    "symbol": "calendar",
    "configurableHome": false,
    "searchTerms": []
  },
  "thanksgiving_offering_admin": { "file": "thanksgiving-offering-admin.html", "title": "\u611F\u6069\u7BC0\u5949\u737B\u56DE\u5831", "description": "\u79C1\u4EBA\u5949\u737B\u56DE\u5831\u3001\u901A\u77E5\u6295\u905E\u8207\u8CA1\u52D9\u6838\u5C0D", "key": "thanksgiving_offering_admin", "group": "finance", "church": "M+", "offeringAccess": true, "symbol": "clipboard", "configurableHome": false, "searchTerms": ["\u611F\u6069\u7BC0", "\u5949\u737B\u56DE\u61C9", "\u672B\u4E94\u78BC", "\u532F\u6B3E", "\u5C0D\u5E33"] },
  "finance_projects": { "file": "finance-projects.html", "title": "\u5C08\u6848\u8207\u4E8B\u5DE5\u8A2D\u5B9A", "description": "\u5C08\u6848\u3001\u4E8B\u5DE5\u9805\u76EE\u3001\u6536\u5165\u79D1\u76EE\u8207\u7DDA\u4E0A\u6350\u6B3E\u5C0D\u61C9", "key": "finance_projects", "group": "finance", "church": "M+", "owner": true, "symbol": "clipboard", "configurableHome": false, "settingsGroup": "church", "settingsId": "finance-projects", "searchTerms": ["\u5C08\u6848", "\u4E8B\u5DE5", "\u6536\u5165\u79D1\u76EE", "\u6350\u6B3E\u9805\u76EE"] },
  "finance_receipts": {
    "church": "M+",
    "receiptAccess": true,
    "file": "finance-receipts.html",
    "title": "\u6536\u64DA\u958B\u7ACB",
    "description": "\u91D1\u9322\u8207\u7269\u54C1\u6536\u64DA\u3001\u958B\u7ACB\u53CA\u4F5C\u5EE2\u7D00\u9304",
    "key": "finance_receipts",
    "group": "finance",
    "symbol": "clipboard",
    "configurableHome": false,
    "searchTerms": ["\u6536\u64DA", "\u6350\u6B3E\u6536\u64DA", "\u6350\u7269", "\u91D1\u9322", "\u7269\u54C1", "\u6703\u8A08"]
  },
  "finance_expenses": {
    "church": "M+",
    "expenseAccess": true,
    "file": "finance-expenses.html",
    "icon": "\u{1F4CB}",
    "title": "\u652F\u51FA\u8A18\u5E33",
    "description": "\u8CBB\u7528\u63D0\u5831\u3001\u6191\u8B49\u6838\u5C0D\u3001\u5BE9\u6838\u8207\u4ED8\u6B3E\u7D00\u9304",
    "key": "finance_expenses",
    "group": "finance",
    "symbol": "clipboard",
    "configurableHome": false,
    "searchTerms": ["\u652F\u51FA", "\u8CBB\u7528", "\u8A18\u5E33", "\u6838\u92B7", "\u4ED8\u6B3E", "\u96F6\u7528\u91D1"]
  },
  "finance_cash": {
    "church": "M+",
    "financeAccess": true,
    "file": "finance-cash.html",
    "icon": "\u{1F4CB}",
    "title": "\u4E3B\u65E5\u5949\u737B",
    "description": "\u9010\u7B46\u767B\u9304\u5949\u737B\u3001\u6838\u5C0D\u8207\u5165\u5E33",
    "key": "finance_cash",
    "group": "finance",
    "symbol": "clipboard",
    "configurableHome": false,
    "searchTerms": ["\u8CA1\u52D9", "\u6703\u8A08", "\u5949\u737B", "\u9EDE\u6536", "\u73FE\u91D1"]
  },
  "service_quick_match": {
    "church": "M+",
    "permission": "schedules",
    "file": "service-signup-admin.html?match=1",
    "icon": "\u26A1",
    "title": "\u670D\u4E8B\u5FEB\u901F\u9069\u914D",
    "description": "\u4E8B\u5DE5\u9818\u8896\u53EF\u9810\u6392\u8CA0\u8CAC\u985E\u5225\u7684\u670D\u4E8B\u4EBA\u9078",
    "key": "service_quick_match",
    "group": "service",
    "symbol": "calendar",
    "configurableHome": false,
    "searchTerms": ["\u667A\u80FD\u914D\u5C0D", "\u5FEB\u901F\u914D\u5C0D", "\u4E8B\u5DE5\u9818\u8896"]
  }
});
var FUNCTION_GROUPS = freezeTree([
  { "key": "events", "title": "\u6D3B\u52D5", "note": "\u6D3B\u52D5\u53C3\u8207\u53CA\u904A\u6232\u73A9\u5BB6\u7BA1\u7406", "keys": ["potluck", "bibletree_admin", "bibletree_players", "bibletree_devotional"] },
  {
    "key": "pastoral",
    "title": "\u4EBA\u8207\u95DC\u61F7",
    "note": "\u6703\u53CB\u3001\u65B0\u670B\u53CB\u3001\u5C0F\u7D44\u8207\u95DC\u61F7",
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
    "title": "\u805A\u6703\u8207\u670D\u4E8B",
    "note": "\u51FA\u5E2D\u3001\u610F\u9858\u767B\u8A18\u3001\u6392\u73ED\u8207\u5834\u5730",
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
    "title": "\u6559\u6703\u8CA1\u52D9",
    "note": "M\uFF0B\u5949\u737B\u6536\u5165\u3001\u652F\u51FA\u8A18\u5E33\u8207\u6838\u5C0D",
    "keys": ["church_giving_preview", "association_donation_preview", "admin_workbench", "thanksgiving_offering_admin", "finance_projects", "finance_cash", "finance_expenses", "finance_receipts", "finance_permission_settings", "finance_accounting_reports", "school_staff_scheduling", "school_payroll"]
  },
  {
    "key": "media",
    "title": "\u5167\u5BB9\u8207\u767C\u5E03",
    "note": "\u9748\u4FEE\u3001\u9031\u5831\u3001\u6559\u6750\u8207\u793E\u7FA4\u5167\u5BB9",
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
    "title": "\u8AB2\u8F14",
    "note": "\u5B78\u751F\u3001\u51FA\u5E2D\u3001\u8F14\u5C0E\u8207\u5831\u8868",
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
    "title": "\u7C43\u7403\u4E8B\u5DE5",
    "note": "\u7C43\u7403\u968A\u3001\u8A13\u7DF4\u8207\u71B1\u706B\u7C43\u7403\u71DF",
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
    "title": "\u8A2D\u5B9A\u8207\u5DE5\u5177",
    "note": "\u5E33\u865F\u3001\u8EAB\u5206\u3001\u5BE9\u6838\u8207\u901A\u77E5",
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
    "title": "\u540C\u5DE5\u8207\u6B0A\u9650",
    "note": "\u9080\u8ACB\u540C\u5DE5\u3001\u78BA\u8A8D LINE \u8EAB\u5206\u8207\u4F7F\u7528\u6B0A\u9650",
    "keys": [
      "admin_accounts",
      "member_line_settings",
      "member_line_history",
      "binding_review"
    ]
  },
  {
    "key": "review",
    "title": "\u5BE9\u6838\u8207\u901A\u77E5",
    "note": "\u8A2D\u5B9A\u521D\u5BE9\u3001\u8907\u5BE9\u8207\u901A\u77E5\u65B9\u5F0F",
    "keys": [
      "review_workflows",
      "notification_settings"
    ]
  },
  {
    "key": "content",
    "title": "\u5167\u5BB9\u8207\u767C\u5E03",
    "note": "\u4E3B\u65E5\u3001\u9748\u4FEE\u3001\u8868\u55AE\u8207\u793E\u7FA4\u5167\u5BB9",
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
    "title": "\u5802\u6703\u8207\u5834\u5730",
    "note": "\u516C\u958B\u8CC7\u8A0A\u3001\u805A\u6703\u4F4D\u7F6E\u3001\u7A7A\u9593\u8207\u7269\u54C1",
    "keys": [
      "finance_projects",
      "spaces",
      "inventory"
    ]
  }
]);
var PERMISSION_LABELS = freezeTree({
  association_content: "\u5354\u6703\u5167\u5BB9\uFF08\u7167\u7247\u8AAA\u6545\u4E8B\uFF0F\u7DB2\u7AD9\u6D88\u606F\uFF09",
  church_albums: "\u76F8\u7C3F",
  "members": "\u6703\u53CB",
  "attendance": "\u51FA\u5E2D\u767B\u8A18",
  "groups": "\u5C0F\u7D44\u8207\u5C0F\u5BB6",
  "schedules": "\u670D\u4E8B\u5B89\u6392",
  "private_prayers": "\u4EE3\u79B1\u8207\u95DC\u61F7",
  "pastoral_chats": "\u95DC\u61F7\u8A0A\u606F\u8207\u5716\u5361",
  "spaces": "\u5834\u5730\u8207\u8A2D\u5099",
  "newcomer_care": "\u65B0\u670B\u53CB",
  "tree_reading_admin": "\u751F\u547D\u6A39",
  "binding_review": "LINE \u8EAB\u5206\u78BA\u8A8D",
  "notification_settings": "\u901A\u77E5\u8A2D\u5B9A",
  "website_weekly": "\u4E3B\u65E5\u9031\u5831",
  "website_group_resources": "\u5C0F\u7D44\u6559\u6750",
  "inventory": "\u7269\u54C1\u8207\u501F\u7528",
  "heat_camp": "\u71B1\u706B\u7C43\u7403\u71DF"
});
var ROLE_TEMPLATES = freezeTree({
  "pastor": {
    "label": "\u7267\u8005",
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
    "label": "\u5E2B\u6BCD",
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
    "label": "\u884C\u653F\u7BA1\u7406",
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
    "label": "\u5C0F\u7D44\uFF0F\u5C0F\u5BB6\u9577",
    "permissions": [
      "members",
      "attendance",
      "groups"
    ]
  },
  "care": {
    "label": "\u95DC\u61F7\u540C\u5DE5",
    "permissions": [
      "members",
      "private_prayers",
      "pastoral_chats",
      "newcomer_care"
    ]
  },
  "facilities": {
    "label": "\u7E3D\u52D9\u540C\u5DE5",
    "permissions": [
      "spaces",
      "inventory"
    ]
  },
  "custom": {
    "label": "\u81EA\u8A02\u6B0A\u9650",
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
  "view": "\u67E5\u770B",
  "create": "\u65B0\u589E",
  "edit": "\u4FEE\u6539",
  "delete": "\u522A\u9664",
  "export": "\u532F\u51FA",
  "approve": "\u5BE9\u6838",
  "manage": "\u7BA1\u7406\u8A2D\u5B9A"
});
var FRIENDLY_LABELS = freezeTree({
  "\u6703\u53CB\u540D\u518A": "\u6703\u53CB",
  "\u65B0\u670B\u53CB\u95DC\u61F7": "\u65B0\u670B\u53CB",
  "\u540C\u5DE5\u5354\u4F5C": "\u540C\u5DE5\u5DE5\u4F5C\u5340",
  "\u4EE3\u79B1\u95DC\u61F7": "\u4EE3\u79B1\u8207\u95DC\u61F7",
  "\u7267\u990A\u8A0A\u606F": "\u95DC\u61F7\u8A0A\u606F",
  "\u805A\u6703\u9EDE\u540D": "\u51FA\u5E2D\u767B\u8A18",
  "\u5C0F\u7D44\uFF0F\u5C0F\u5BB6": "\u5C0F\u7D44\u8207\u5C0F\u5BB6",
  "\u670D\u4E8B\u6392\u73ED": "\u670D\u4E8B\u5B89\u6392",
  "\u5834\u5730\u9810\u7D04": "\u5834\u5730\u8207\u8A2D\u5099",
  "\u7269\u54C1\u6E05\u518A": "\u7269\u54C1\u8207\u501F\u7528",
  "\u6559\u6703\u7DB2\u7AD9\u7DAD\u8B77": "\u4E3B\u65E5\u9031\u5831",
  "\u5C0F\u7D44\u805A\u6703\u8CC7\u6E90": "\u5C0F\u7D44\u6559\u6750",
  "\u6BCF\u65E5\u9748\u4FEE\u751F\u547D\u6A39": "\u751F\u547D\u6A39",
  "\u8B80\u7D93\u751F\u547D\u6A39": "\u751F\u547D\u6A39",
  "LINE \u7D81\u5B9A\u5BE9\u6838": "LINE \u8EAB\u5206\u78BA\u8A8D",
  "LINE \u901A\u77E5\u8A2D\u5B9A": "\u901A\u77E5\u8A2D\u5B9A",
  "\u901A\u77E5\u7BA1\u9053\u8A2D\u5B9A": "\u901A\u77E5\u8A2D\u5B9A",
  "\u6559\u7267\u5167\u5BB9": "\u7267\u990A\u5716\u5361",
  "\u7CFB\u7D71\u76E3\u63A7\u4E2D\u5FC3": "\u7CFB\u7D71\u72C0\u6CC1",
  "\u7CFB\u7D71\u8A2D\u5B9A": "\u6559\u6703\u8A2D\u5B9A"
});
var NAVIGATION_MODULES = freezeTree([
  {
    "key": "dashboard",
    "file": "admin-dashboard.html",
    "label": "\u9996\u9801",
    "icon": "\u{1F3E0}"
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

// church-os-giving-pages-20261120/app-icons.mjs?v=20261116-memberline1
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
  "\u{1F3E0}": "home",
  "\u2302": "home",
  "\u{1F465}": "people",
  "\u{1F91D}": "people",
  "\u{1FAF6}": "people",
  "\u{1F331}": "sprout",
  "\u{1F333}": "tree",
  "\u{1F517}": "link",
  "\u{1F514}": "bell",
  "\u2705": "check",
  "\u2713": "check",
  "\u{1F4C5}": "calendar",
  "\u{1F5D3}\uFE0F": "calendar",
  "\u{1F4C6}": "calendar",
  "\u{1F4E6}": "box",
  "\u{1F64F}": "heart",
  "\u{1F49B}": "heart",
  "\u{1F4AC}": "chat",
  "\u2728": "sparkle",
  "\u2605": "star",
  "\u2699": "gear",
  "\u2699\uFE0F": "gear",
  "\u{1F4CD}": "pin",
  "\u{1F310}": "globe",
  "\u{1F4DA}": "book",
  "\u{1F4CA}": "chart",
  "\u25A6": "grid",
  "\u25B6": "play",
  "\u{1F4F7}": "camera",
  "\u{1F9D1}\u200D\u{1F393}": "student",
  "\u{1F468}\u200D\u{1F393}": "student",
  "\u{1F469}\u200D\u{1F393}": "student",
  "\u{1F5A8}\uFE0F": "printer",
  "\u{1F5A8}": "printer",
  "\u{1F3C0}": "target",
  "\u{1F3C6}": "trophy",
  "\u{1F4CB}": "clipboard",
  "\u{1F3AF}": "target",
  "\u{1F4AA}": "bolt",
  "\u{1F6A8}": "alert",
  "\u23F0": "clock",
  "\u{1F39B}\uFE0F": "sliders",
  "\u{1F39B}": "sliders",
  "\u26EA": "church",
  "\u2022\u2022\u2022": "more",
  "\u{1F392}": "book",
  "\u2630": "sliders",
  "\u25CE": "people",
  "LINE": "link",
  "\u5B57": "book",
  "\u{1F305}": "sparkle",
  "\u{1F54A}\uFE0F": "heart",
  "\u2615": "sprout",
  "\u{1F48C}": "heart",
  "\u{1F3DB}\uFE0F": "church"
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

// church-os-giving-pages-20261120/app-function-definitions.mjs?v=20261116-admin1
function freezeTree2(value) {
  if (value && typeof value === "object") {
    Object.values(value).forEach(freezeTree2);
    Object.freeze(value);
  }
  return value;
}
var FUNCTION_CATALOG2 = freezeTree2({
  "church_giving_preview": { "file": "church-giving.html", "title": "\u6559\u6703\u5949\u737B\u9801\u9762\u9810\u89BD", "description": "\u55AE\u6B21\u8207\u5B9A\u671F\u5B9A\u984D\u4ECB\u9762\u9810\u89BD\uFF0C\u5C1A\u672A\u958B\u653E\u6536\u6B3E", "key": "church_giving_preview", "church": "M+", "group": "finance", "symbol": "heart", "owner": true, "configurableHome": false, "searchTerms": ["\u5949\u737B", "\u5B9A\u671F\u5B9A\u984D", "\u91D1\u6D41\u9810\u89BD"] },
  "association_donation_preview": { "file": "association-donate.html", "title": "\u5354\u6703\u6350\u6B3E\u9801\u9762\u9810\u89BD", "description": "\u5354\u6703\u5C08\u7528\u6350\u6B3E\u4ECB\u9762\u9810\u89BD\uFF0C\u5C1A\u672A\u958B\u653E\u6536\u6B3E", "key": "association_donation_preview", "church": "M+", "group": "finance", "symbol": "heart", "owner": true, "configurableHome": false, "searchTerms": ["\u5354\u6703", "\u6350\u6B3E", "\u5B9A\u671F\u5B9A\u984D"] },
  "admin_workbench": { "file": "admin-workbench.html", "title": "\u884C\u653F\u5F85\u8FA6", "description": "\u5F85\u6211\u8655\u7406\u3001\u6211\u9001\u51FA\u7684\u3001\u6838\u51C6\u5F85\u5B8C\u6210\u8207\u7570\u5E38\u8FFD\u8E64", "key": "admin_workbench", "church": "M+", "group": "finance", "symbol": "mplus-box", "configurableHome": false, "searchTerms": ["\u884C\u653F", "\u5F85\u8FA6", "\u903E\u671F", "\u7D50\u6848"] },
  "member_line_history": { "file": "member-line-history.html", "title": "LINE \u8A0A\u606F\u767C\u9001\u7D00\u9304", "description": "\u67E5\u8A62\u767C\u9001\u4EBA\u3001\u6536\u4EF6\u4EBA\u3001\u5168\u6587\u3001\u6642\u9593\u8207\u53D7\u7406\u72C0\u614B", "key": "member_line_history", "group": "system", "church": "M+", "owner": true, "symbol": "chat", "configurableHome": false, "searchTerms": ["LINE", "\u7D00\u9304", "\u8AB0\u767C\u7684", "\u8A0A\u606F"], "settingsId": "member-line-history", "settingsGroup": "people" },
  "member_line_settings": { "file": "member-line-settings.html", "title": "\u6703\u53CB LINE \u50B3\u9001\u6B0A\u9650", "description": "\u958B\u95DC\u500B\u5225\u540C\u5DE5\u7684\u6703\u53CB\u79C1\u4EBA\u8A0A\u606F\u50B3\u9001\u6B0A", "key": "member_line_settings", "group": "system", "church": "M+", "owner": true, "symbol": "chat", "configurableHome": false, "searchTerms": ["LINE", "\u8A0A\u606F", "\u50B3\u9001", "\u6B0A\u9650"], "settingsId": "member-line-settings", "settingsGroup": "people" },
  "potluck": { "file": "potluck-admin.html", "title": "\u4E92\u52D5\u6599\u7406\u52DF\u96C6", "description": "\u6D3B\u52D5\u8A2D\u5B9A\u3001\u6599\u7406\u540D\u55AE\u8207\u611F\u6069\u9910\u684C\u7D71\u8A08", "key": "potluck", "group": "events", "church": "M+", "owner": true, "symbol": "heart", "configurableHome": false, "searchTerms": ["\u611F\u6069\u7BC0", "\u6599\u7406", "\u6D3B\u52D5\u7BA1\u7406"] },
  "finance_permission_settings": { "file": "admin-accounts.html?church=M%2B", "title": "\u540C\u5DE5\u6B0A\u9650\u8A2D\u5B9A", "description": "\u7D71\u4E00\u52FE\u9078\u6559\u6703\u529F\u80FD\u3001\u64CD\u4F5C\u8207\u8CA1\u52D9\u6B0A\u9650", "key": "finance_permission_settings", "group": "finance", "church": "M+", "owner": true, "symbol": "mplus-box", "configurableHome": false, "searchTerms": ["\u6388\u6B0A", "\u540C\u5DE5\u6B0A\u9650"] },
  "finance_accounting_reports": { "file": "finance-permissions.html#reports", "title": "\u6703\u8A08\u5831\u8868", "description": "\u67E5\u95B1\u8207\u532F\u51FA\u5DF2\u6838\u51C6\u8CA1\u52D9\u8CC7\u6599", "key": "finance_accounting_reports", "group": "finance", "church": "M+", "accountingReportAccess": true, "symbol": "mplus-box", "configurableHome": false, "searchTerms": ["\u6703\u8A08", "\u5831\u8868", "\u532F\u51FA"] },
  "school_staff_scheduling": { "file": "https://school.mchurch.online/?tab=schedules", "title": "\u73ED\u8868\u5B89\u6392", "description": "\u5B89\u6392\u8001\u5E2B\u8207\u5DE5\u8B80\u751F\u73ED\u8868\uFF0C\u50C5\u9650\u923A\u5EAD\u8207\u6069\u8339\u64CD\u4F5C", "key": "school_staff_scheduling", "group": "finance", "church": "M+", "symbol": "mplus-calendar", "configurableHome": false, "scheduleAccess": true, "searchTerms": ["\u6392\u73ED", "\u8001\u5E2B\u73ED\u8868", "\u5DE5\u8B80\u751F\u73ED\u8868"] },
  "school_payroll": { "file": "school-payroll.html?month=current", "title": "\u8AB2\u8F14\u85AA\u8CC7\u7D50\u7B97", "description": "\u6642\u85AA\u8A2D\u5B9A\u3001\u6708\u5E95\u7D50\u7B97\u3001\u7C3D\u5230\u8868\u8207\u9010\u7D1A\u5BE9\u6838", "key": "school_payroll", "group": "finance", "church": "M+", "symbol": "mplus-box", "configurableHome": false, "payrollAccess": true, "searchTerms": ["\u8001\u5E2B\u85AA\u8CC7", "\u5DE5\u8B80\u751F\u85AA\u6C34", "\u6BCF\u6708\u7C3D\u5230\u8868", "\u7D50\u7B97\u5BE9\u6838"] },
  "testimony_review": {
    "permission": "website_weekly",
    "file": "testimony-admin.html",
    "church": "M+",
    "icon": "\u2601",
    "title": "\u96F2\u5F69\u898B\u8B49",
    "description": "\u6587\u5B57\u3001\u5F71\u7247\u8207\u7167\u7247\u6295\u7A3F\u5BE9\u6838",
    "key": "testimony_review",
    "group": "media",
    "symbol": "book",
    "configurableHome": false,
    "searchTerms": ["\u898B\u8B49", "\u6295\u7A3F", "\u5206\u4EAB", "\u5BE9\u6838"],
    "settingsId": "testimony-review",
    "settingsGroup": "content"
  },
  "review_workflows": {
    "permission": "notification_settings",
    "file": "review-workflow-settings.html",
    "icon": "\u2705",
    "title": "\u5BE9\u6838\u6D41\u7A0B",
    "description": "\u521D\u5BE9\u3001\u8907\u5BE9\u8207\u901A\u77E5\u8A2D\u5B9A",
    "key": "review_workflows",
    "group": "system",
    "symbol": "check",
    "configurableHome": false,
    "searchTerms": [
      "\u521D\u5BE9",
      "\u8907\u5BE9",
      "\u5BE9\u6838\u4EBA"
    ],
    "settingsId": "review-workflows",
    "settingsGroup": "review"
  },
  "members": {
    "permission": "members",
    "file": "members.html",
    "icon": "\u{1F465}",
    "title": "\u6703\u53CB",
    "description": "\u6703\u53CB\u8207\u65B0\u670B\u53CB\u8CC7\u6599",
    "key": "members",
    "group": "pastoral",
    "symbol": "people",
    "configurableHome": true,
    "searchTerms": [
      "\u6703\u53CB\u540D\u518A"
    ]
  },
  "newcomer_care": {
    "permission": "newcomer_care",
    "file": "newcomer-care.html",
    "icon": "\u{1F331}",
    "title": "\u65B0\u670B\u53CB",
    "description": "\u806F\u7D61\u3001\u8FFD\u8E64\u8207\u5F8C\u7E8C\u95DC\u61F7",
    "key": "newcomer_care",
    "group": "pastoral",
    "symbol": "sprout",
    "configurableHome": true,
    "searchTerms": [
      "\u65B0\u670B\u53CB\u95DC\u61F7"
    ]
  },
  "church_albums": { "file": "church-albums.html", "title": "\u76F8\u7C3F", "description": "\u6559\u6703\u8207\u8AB2\u8F14\u7167\u7247\u3001\u8CC7\u6599\u593E\u53CA\u6A94\u6848\u4E0A\u50B3", "key": "church_albums", "permission": "church_albums", "group": "pastoral", "church": "M+", "symbol": "mplus-box", "configurableHome": false, "searchTerms": ["\u6559\u6703\u76F8\u7C3F", "\u8AB2\u8F14\u76F8\u7C3F", "\u7167\u7247", "\u4E0A\u50B3"] },
  "pastoral_workspace": {
    "file": "pastoral/workspace.html",
    "icon": "\u{1F91D}",
    "title": "\u540C\u5DE5\u5DE5\u4F5C\u5340",
    "description": "\u5DE5\u4F5C\u3001\u884C\u7A0B\u8207\u540C\u5DE5\u5DE5\u5177",
    "key": "pastoral_workspace",
    "group": "pastoral",
    "symbol": "people",
    "configurableHome": true,
    "searchTerms": [
      "\u540C\u5DE5\u5354\u4F5C"
    ]
  },
  "pastoral_workflow_survey": {
    "file": "pastoral/workflow-survey.html",
    "icon": "\u{1F4DD}",
    "title": "\u540C\u5DE5\u5DE5\u4F5C\u6D41\u7A0B\u8ABF\u67E5",
    "description": "\u8490\u96C6\u4F8B\u884C\u5DE5\u4F5C\u3001\u5361\u9EDE\u8207\u63D0\u9192\u504F\u597D",
    "key": "pastoral_workflow_survey",
    "group": "pastoral",
    "symbol": "check",
    "configurableHome": false,
    "searchTerms": ["\u540C\u5DE5\u554F\u5377", "\u5DE5\u4F5C\u6D41\u7A0B", "\u6BCF\u9031\u5DE5\u4F5C"]
  },
  "private_prayers": {
    "permission": "private_prayers",
    "file": "prayers.html",
    "icon": "\u{1F64F}",
    "title": "\u4EE3\u79B1\u8207\u95DC\u61F7",
    "description": "\u4EE3\u79B1\u4E8B\u9805\u8207\u5F8C\u7E8C\u95DC\u5FC3",
    "key": "private_prayers",
    "group": "pastoral",
    "symbol": "heart",
    "configurableHome": true,
    "searchTerms": [
      "\u4EE3\u79B1\u95DC\u61F7"
    ]
  },
  "pastoral_chats": {
    "permission": "pastoral_chats",
    "file": "pastoral-inbox.html",
    "icon": "\u{1F4AC}",
    "title": "\u95DC\u61F7\u8A0A\u606F",
    "description": "\u4E00\u5C0D\u4E00\u8A0A\u606F\u8207\u8DDF\u9032",
    "key": "pastoral_chats",
    "group": "pastoral",
    "symbol": "chat",
    "configurableHome": true,
    "searchTerms": [
      "\u7267\u990A\u8A0A\u606F"
    ]
  },
  "attendance": {
    "permission": "attendance",
    "file": "attendance.html",
    "icon": "\u2705",
    "title": "\u51FA\u5E2D\u767B\u8A18",
    "description": "\u805A\u6703\u51FA\u5E2D\u8207\u7D71\u8A08",
    "key": "attendance",
    "group": "service",
    "symbol": "check",
    "configurableHome": true,
    "searchTerms": [
      "\u805A\u6703\u9EDE\u540D"
    ]
  },
  "groups": {
    "permission": "groups",
    "file": "groups.html",
    "icon": "\u{1FAF6}",
    "title": "\u5C0F\u7D44\u8207\u5C0F\u5BB6",
    "description": "\u5206\u7D44\u3001\u7D44\u9577\u8207\u6210\u54E1",
    "key": "groups",
    "group": "pastoral",
    "symbol": "people",
    "configurableHome": true,
    "searchTerms": [
      "\u5C0F\u7D44\uFF0F\u5C0F\u5BB6"
    ]
  },
  "schedules": {
    "permission": "schedules",
    "file": "schedules.html",
    "icon": "\u{1F4C5}",
    "title": "\u670D\u4E8B\u5B89\u6392",
    "description": "\u4E3B\u65E5\u8207\u805A\u6703\u670D\u4E8B",
    "key": "schedules",
    "group": "service",
    "symbol": "calendar",
    "configurableHome": true,
    "searchTerms": [
      "\u670D\u4E8B\u6392\u73ED"
    ]
  },
  "spaces": {
    "permission": "spaces",
    "file": "spaces.html",
    "icon": "\u{1F4CD}",
    "title": "\u5834\u5730\u8207\u8A2D\u5099",
    "description": "\u7A7A\u9593\u3001\u8A2D\u5099\u8207\u9810\u7D04",
    "key": "spaces",
    "group": "service",
    "symbol": "pin",
    "configurableHome": true,
    "searchTerms": [
      "\u5834\u5730\u9810\u7D04"
    ],
    "settingsId": "space-settings",
    "settingsGroup": "church"
  },
  "inventory": {
    "permission": "inventory",
    "file": "inventory.html",
    "icon": "\u{1F4E6}",
    "title": "\u7269\u54C1\u8207\u501F\u7528",
    "description": "\u4F4D\u7F6E\u3001\u6578\u91CF\u8207\u501F\u9084",
    "key": "inventory",
    "group": "service",
    "symbol": "box",
    "configurableHome": true,
    "searchTerms": [
      "\u7269\u54C1\u6E05\u518A"
    ],
    "settingsId": "inventory-settings",
    "settingsGroup": "church"
  },
  "heat_camp": {
    "church": "M+",
    "permission": "heat_camp",
    "file": "heat-camp-admin.html",
    "icon": "\u{1F3C0}",
    "title": "\u71B1\u706B\u7C43\u7403\u71DF",
    "description": "\u5831\u540D\u3001\u7E73\u8CBB\u3001\u540D\u55AE\u8207\u5FD7\u5DE5",
    "key": "heat_camp",
    "group": "basketball",
    "symbol": "target",
    "configurableHome": true,
    "searchTerms": ["\u5FD7\u5DE5\u5831\u540D", "\u71B1\u706B\u7C43\u7403\u71DF\u5FD7\u5DE5"]
  },
  "website_weekly": {
    "permission": "website_weekly",
    "file": "website-maintenance.html",
    "icon": "\u{1F310}",
    "title": "\u4E3B\u65E5\u9031\u5831",
    "description": "\u9031\u5831\u3001\u9810\u544A\u5716\u8207\u670D\u4E8B\u8868",
    "key": "website_weekly",
    "group": "media",
    "symbol": "globe",
    "configurableHome": true,
    "searchTerms": [
      "\u6559\u6703\u7DB2\u7AD9\u7DAD\u8B77",
      "\u5B98\u7DB2",
      "\u7DB2\u7AD9",
      "\u9810\u544A\u5716",
      "\u4E3B\u65E5"
    ],
    "settingsId": "website-maintenance",
    "settingsGroup": "content"
  },
  "association_stories": { "church": "M+", "permission": "association_content", "file": "association-stories.html", "title": "\u5354\u6703\u7167\u7247\u8AAA\u6545\u4E8B", "description": "\u7167\u7247\u8207\u6545\u4E8B\u7522\u751F FB \u6587\u6848\uFF0C\u9001\u7267\u5E2B\uFF0F\u5E2B\u6BCD\u5BE9\u6838\u5F8C\u767C\u5E03\uFF0C\u53EF\u540C\u6B65\u5354\u6703\u6700\u65B0\u6D88\u606F", "key": "association_stories", "group": "media", "symbol": "globe", "configurableHome": false, "searchTerms": ["\u5354\u6703", "FB", "Facebook", "\u7167\u7247\u8AAA\u6545\u4E8B", "\u5E2B\u6BCD\u5BE9\u6838"], "settingsId": "association-stories", "settingsGroup": "content" },
  "association_news": {
    "church": "M+",
    "permission": "association_content",
    "file": "association-news.html",
    "icon": "\u{1F4F0}",
    "title": "\u5354\u6703\u7DB2\u7AD9",
    "description": "\u6700\u65B0\u6D88\u606F\u4E0A\u7A3F\uFF0C\u767C\u4F48\u5F8C\u76F4\u63A5\u986F\u793A\u65BC\u5354\u6703\u9996\u9801",
    "key": "association_news",
    "group": "media",
    "symbol": "globe",
    "configurableHome": true,
    "searchTerms": ["\u5354\u6703", "\u6700\u65B0\u6D88\u606F", "tcsc.org.tw", "\u4E0A\u7A3F"],
    "settingsId": "association-news",
    "settingsGroup": "content"
  },
  "website_group_resources": {
    "permission": "website_group_resources",
    "file": "group-resources-management.html",
    "icon": "\u{1F4DA}",
    "title": "\u5C0F\u7D44\u6559\u6750",
    "description": "\u6BCF\u9031\u6559\u6750\u8207\u805A\u6703\u5167\u5BB9",
    "key": "website_group_resources",
    "group": "media",
    "symbol": "book",
    "configurableHome": true,
    "searchTerms": [
      "\u5C0F\u7D44\u805A\u6703\u8CC7\u6E90"
    ],
    "settingsId": "group-resources",
    "settingsGroup": "content"
  },
  "tree_reading_admin": {
    "permission": "tree_reading_admin",
    "file": "daily-devotional-admin.html",
    "icon": "\u{1F333}",
    "title": "\u751F\u547D\u6A39",
    "description": "\u6BCF\u65E5\u9748\u4FEE\u8207\u8B80\u7D93\u9032\u5EA6",
    "key": "tree_reading_admin",
    "group": "media",
    "symbol": "tree",
    "configurableHome": true,
    "searchTerms": [
      "\u6BCF\u65E5\u9748\u4FEE\u751F\u547D\u6A39",
      "\u8B80\u7D93\u751F\u547D\u6A39",
      "\u6BCF\u65E5\u9748\u4FEE",
      "\u8B80\u7D93"
    ],
    "settingsId": "daily-devotional",
    "settingsGroup": "content"
  },
  "bibletree_admin": {
    "permission": "tree_reading_admin",
    "church": "M+",
    "file": "bibletree-admin.html",
    "icon": "\u{1F333}",
    "title": "\u8B80\u7D93\u6A39\u7BA1\u7406",
    "description": "\u73A9\u5BB6\u9032\u5EA6\u8207365\u65E5\u9748\u4FEE\u5167\u5BB9",
    "key": "bibletree_admin",
    "group": "events",
    "symbol": "tree",
    "configurableHome": false,
    "searchTerms": ["\u8B80\u7D93\u6A39", "RPG", "\u904A\u6232\u7BA1\u7406", "\u73A9\u5BB6", "365", "\u9748\u4FEE"]
  },
  "bibletree_devotional": {
    "permission": "tree_reading_admin",
    "church": "M+",
    "file": "bibletree-devotional-admin.html",
    "icon": "\u{1F333}",
    "title": "\u8B80\u7D93\u6A39365\u65E5\u9748\u4FEE",
    "description": "\u9010\u65E5\u6AA2\u8996\u3001\u4FEE\u8A02\u8207\u767C\u5E03\u9748\u4FEE\u5167\u5BB9",
    "key": "bibletree_devotional",
    "group": "events",
    "symbol": "tree",
    "configurableHome": false,
    "searchTerms": ["\u8B80\u7D93\u6A39", "365", "\u5168\u5E74\u9748\u4FEE", "\u7D93\u6587", "\u5167\u5BB9\u5BE9\u67E5"]
  },
  "bibletree_players": {
    "permission": "tree_reading_admin",
    "church": "M+",
    "file": "bibletree-players.html",
    "icon": "\u{1F465}",
    "title": "\u8B80\u7D93\u6A39\u73A9\u5BB6\u5217\u8868",
    "description": "\u73A9\u5BB6\u8CC7\u6599\u3001\u8B80\u7D93\u9032\u5EA6\u8207\u516C\u6E2C\u53C3\u8207",
    "key": "bibletree_players",
    "group": "events",
    "symbol": "people",
    "configurableHome": false,
    "searchTerms": ["\u73A9\u5BB6", "\u904A\u6232\u5E33\u865F", "\u8B80\u7D93\u6A39", "\u516C\u6E2C", "\u56DE\u994B"]
  },
  "life_tree_festivals": {
    "permission": "tree_reading_admin",
    "church": "M+",
    "file": "life-tree-festivals.html",
    "icon": "\u{1F333}",
    "title": "\u751F\u547D\u6A39\u7BC0\u6176\u9810\u89BD",
    "description": "\u4E5D\u7A2E\u7BC0\u6176\u5834\u666F\u8207\u6BCF\u65E5\u4E92\u52D5\u8A66\u73A9",
    "key": "life_tree_festivals",
    "group": "media",
    "symbol": "tree",
    "configurableHome": false,
    "searchTerms": ["\u7BC0\u6176", "\u751F\u547D\u6A39", "\u8056\u8A95\u71C8", "\u611F\u6069\u7BC0", "\u5149\u660E\u52C7\u58EB"],
    "settingsId": "life-tree-festivals",
    "settingsGroup": "content"
  },
  "binding_review": {
    "permission": "binding_review",
    "file": "binding-review.html",
    "icon": "\u{1F517}",
    "title": "LINE \u8EAB\u5206\u78BA\u8A8D",
    "description": "\u78BA\u8A8D\u6703\u53CB\u8207 LINE \u5E33\u865F",
    "key": "binding_review",
    "group": "system",
    "symbol": "link",
    "configurableHome": true,
    "searchTerms": [
      "LINE \u7D81\u5B9A\u5BE9\u6838"
    ],
    "settingsId": "binding-review",
    "settingsGroup": "people"
  },
  "notification_settings": {
    "permission": "notification_settings",
    "file": "notification-settings.html",
    "icon": "\u{1F514}",
    "title": "\u901A\u77E5\u8A2D\u5B9A",
    "description": "\u624B\u6A5F\u8207 LINE \u901A\u77E5",
    "key": "notification_settings",
    "group": "system",
    "symbol": "bell",
    "configurableHome": true,
    "searchTerms": [
      "LINE \u901A\u77E5\u8A2D\u5B9A",
      "\u901A\u77E5\u7BA1\u9053\u8A2D\u5B9A"
    ],
    "settingsId": "notification-settings",
    "settingsGroup": "review"
  },
  "school": {
    "file": "https://school.mchurch.online/",
    "icon": "\u{1F4DA}",
    "title": "\u8AB2\u8F14",
    "description": "\u5B78\u751F\u3001\u51FA\u5E2D\u8207\u8F14\u5C0E",
    "key": "school",
    "group": "school",
    "symbol": "book",
    "configurableHome": true,
    "searchTerms": []
  },
  "school_checkin": {
    "file": "https://school.mchurch.online/?tab=checkin",
    "icon": "\u{1F4F7}",
    "title": "\u8AB2\u8F14\u6253\u5361",
    "description": "\u5B78\u751F\u8207\u540C\u5DE5\u6253\u5361",
    "key": "school_checkin",
    "group": "school",
    "symbol": "camera",
    "configurableHome": true,
    "searchTerms": []
  },
  "school_schedules": {
    "file": "https://school.mchurch.online/?tab=schedules",
    "icon": "\u{1F5D3}\uFE0F",
    "title": "\u8AB2\u8F14\u5B89\u6392",
    "description": "\u8001\u5E2B\u8207\u540C\u5DE5\u5B89\u6392",
    "key": "school_schedules",
    "group": "school",
    "symbol": "calendar",
    "configurableHome": true,
    "searchTerms": []
  },
  "school_rollcall": {
    "file": "https://school.mchurch.online/?tab=rollcall",
    "icon": "\u2705",
    "title": "\u8AB2\u8F14\u51FA\u5E2D",
    "description": "\u6BCF\u65E5\u8AB2\u5802\u51FA\u5E2D",
    "key": "school_rollcall",
    "group": "school",
    "symbol": "check",
    "configurableHome": true,
    "searchTerms": []
  },
  "school_students": {
    "file": "https://school.mchurch.online/?tab=students",
    "icon": "\u{1F9D1}\u200D\u{1F393}",
    "title": "\u5B78\u751F",
    "description": "\u5B78\u751F\u8207\u540C\u5DE5\u8CC7\u6599",
    "key": "school_students",
    "group": "school",
    "symbol": "student",
    "configurableHome": true,
    "searchTerms": []
  },
  "school_counseling": {
    "file": "https://school.mchurch.online/?tab=counseling",
    "icon": "\u{1F49B}",
    "title": "\u500B\u5225\u8F14\u5C0E",
    "description": "\u8F14\u5C0E\u7D00\u9304\u8207\u8DDF\u9032",
    "key": "school_counseling",
    "group": "school",
    "symbol": "heart",
    "configurableHome": true,
    "searchTerms": []
  },
  "school_reports": {
    "file": "https://school.mchurch.online/?tab=print-center",
    "icon": "\u{1F5A8}\uFE0F",
    "title": "\u8AB2\u8F14\u5831\u8868",
    "description": "\u51FA\u5E2D\u8868\u8207\u5B78\u751F\u8CC7\u6599",
    "key": "school_reports",
    "group": "school",
    "symbol": "printer",
    "configurableHome": true,
    "searchTerms": []
  },
  "basketball": {
    "file": "https://mschurch-app.github.io/m-plus-basketball/",
    "icon": "\u{1F3C0}",
    "title": "\u7C43\u7403\u968A",
    "description": "\u7403\u54E1\u8207\u7403\u968A",
    "key": "basketball",
    "group": "basketball",
    "symbol": "target",
    "configurableHome": true,
    "searchTerms": []
  },
  "basketball_gamecenter": {
    "file": "https://mschurch-app.github.io/m-plus-basketball/?tab=gamecenter",
    "icon": "\u{1F3C6}",
    "title": "\u6BD4\u8CFD\u7D00\u9304",
    "description": "\u6BD4\u8CFD\u3001\u5F97\u5206\u8207\u72AF\u898F",
    "key": "basketball_gamecenter",
    "group": "basketball",
    "symbol": "trophy",
    "configurableHome": true,
    "searchTerms": []
  },
  "basketball_tactics": {
    "file": "https://mschurch-app.github.io/m-plus-basketball/?tab=tactics",
    "icon": "\u{1F4CB}",
    "title": "\u7C43\u7403\u6230\u8853",
    "description": "\u6230\u8853\u677F\u8207\u8A13\u7DF4\u5167\u5BB9",
    "key": "basketball_tactics",
    "group": "basketball",
    "symbol": "clipboard",
    "configurableHome": true,
    "searchTerms": []
  },
  "basketball_assignments": {
    "file": "https://mschurch-app.github.io/m-plus-basketball/?tab=assignments",
    "icon": "\u{1F3AF}",
    "title": "\u7403\u54E1\u4F5C\u696D",
    "description": "\u8A13\u7DF4\u4EFB\u52D9\u8207\u6210\u679C",
    "key": "basketball_assignments",
    "group": "basketball",
    "symbol": "target",
    "configurableHome": true,
    "searchTerms": []
  },
  "basketball_schedule": {
    "file": "https://mschurch-app.github.io/m-plus-basketball/?tab=schedule",
    "icon": "\u{1F4C6}",
    "title": "\u7403\u968A\u884C\u7A0B",
    "description": "\u7DF4\u7403\u8207\u6BD4\u8CFD",
    "key": "basketball_schedule",
    "group": "basketball",
    "symbol": "calendar",
    "configurableHome": true,
    "searchTerms": []
  },
  "basketball_daily": {
    "file": "https://mschurch-app.github.io/m-plus-basketball/?tab=dailystatus",
    "icon": "\u{1F4AA}",
    "title": "\u6BCF\u65E5\u72C0\u614B",
    "description": "\u8EAB\u9AD4\u8207\u8A13\u7DF4\u72C0\u614B",
    "key": "basketball_daily",
    "group": "basketball",
    "symbol": "bolt",
    "configurableHome": true,
    "searchTerms": []
  },
  "system_monitor": {
    "file": "system-monitor.html",
    "icon": "\u{1F4CA}",
    "title": "\u7CFB\u7D71\u72C0\u6CC1",
    "description": "\u7DB2\u7AD9\u3001\u670D\u52D9\u8207\u6392\u7A0B",
    "key": "system_monitor",
    "group": "system",
    "symbol": "chart",
    "configurableHome": true,
    "searchTerms": [
      "\u7CFB\u7D71\u76E3\u63A7\u4E2D\u5FC3"
    ]
  },
  "church_settings": {
    "file": "church-settings.html",
    "icon": "\u2699\uFE0F",
    "title": "\u6559\u6703\u8A2D\u5B9A",
    "description": "\u5802\u6703\u3001\u5E33\u865F\u8207\u529F\u80FD",
    "key": "church_settings",
    "group": "system",
    "symbol": "gear",
    "configurableHome": true,
    "searchTerms": [
      "\u7CFB\u7D71\u8A2D\u5B9A"
    ]
  },
  "pastoral_content": {
    "permission": "pastoral",
    "file": "pastoral-content.html",
    "icon": "\u2728",
    "title": "\u7267\u990A\u5716\u5361",
    "description": "\u795D\u79B1\u3001\u5C0F\u5361\u8207\u65B0\u670B\u53CB\u65C5\u7A0B",
    "key": "pastoral_content",
    "group": "media",
    "symbol": "sparkle",
    "configurableHome": false,
    "searchTerms": [
      "\u6559\u7267\u5167\u5BB9"
    ],
    "settingsId": "pastoral-content",
    "settingsGroup": "content"
  },
  "todays_message": {
    "permission": "pastoral",
    "file": "todays-message-settings.html",
    "icon": "\u2728",
    "title": "\u7D66\u4ECA\u5929\u7684\u4F60",
    "description": "\u6BCF\u65E5\u7D93\u6587\u8207\u795D\u798F\u5167\u5BB9",
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
    "icon": "\u{1F49B}",
    "title": "\u628A\u611B\u50B3\u51FA\u53BB",
    "description": "\u795D\u798F\u60C5\u5883\u8207\u5206\u4EAB\u5716\u7247",
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
    "icon": "\u{1F517}",
    "title": "LINE \u670D\u52D9\u9810\u89BD",
    "description": "\u6AA2\u67E5\u6703\u53CB\u670D\u52D9\u5167\u5BB9",
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
    "icon": "\u2699\uFE0F",
    "title": "\u540D\u7A31\u8207\u8868\u55AE",
    "description": "\u529F\u80FD\u540D\u7A31\u3001\u9806\u5E8F\u3001\u8FCE\u65B0\u8868\u55AE\u8207\u9078\u9805",
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
    "icon": "\u{1F465}",
    "title": "\u540C\u5DE5\u5E33\u865F\u8207\u6B0A\u9650",
    "description": "\u9078\u540C\u5DE5\u3001\u52FE\u9078\u529F\u80FD\u8207\u64CD\u4F5C\u6B0A\u9650",
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
    "icon": "\u25B6",
    "title": "\u670D\u52D9\u6388\u6B0A\u7BA1\u7406",
    "description": "YouTube\u3001Instagram\u3001\u6559\u6703\u8207\u5354\u6703 FB\u3001Google \u8207 LINE \u9023\u7DDA\u6388\u6B0A",
    "key": "media_publishing",
    "group": "media",
    "symbol": "play",
    "configurableHome": false,
    "searchTerms": [
      "IG",
      "Instagram",
      "YouTube",
      "\u5F71\u7247",
      "\u793E\u7FA4"
    ],
    "settingsId": "media-publishing",
    "settingsGroup": "content"
  },
  "sermon_preparation": {
    "permission": "website_weekly",
    "action": "edit",
    "church": "M+",
    "file": "sermon-preparation.html",
    "icon": "\u{1F4D6}",
    "title": "\u4FE1\u606F\u9810\u5099",
    "description": "\u7D20\u6750\u3001\u9818\u53D7\u3001\u5927\u7DB1\u8207\u8B1B\u7AE0",
    "key": "sermon_preparation",
    "group": "media",
    "symbol": "book",
    "configurableHome": true,
    "searchTerms": ["\u8B1B\u7AE0", "\u8B1B\u9053", "\u9810\u5099", "\u4FE1\u606F\u5DE5\u4F5C\u5BA4"],
    "settingsId": "sermon-preparation",
    "settingsGroup": "content"
  },
  "subtitle_library": {
    "permission": "website_weekly",
    "action": "edit",
    "church": "M+",
    "file": "youtube-subtitle-library.html",
    "icon": "\u{1F4DA}",
    "title": "\u5B57\u5E55\u8A5E\u5EAB",
    "description": "\u8FA8\u8B58\u932F\u5B57\u8207\u8B1B\u54E1\u7528\u8A9E",
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
    "icon": "\u{1F4C5}",
    "title": "\u670D\u4E8B\u610F\u9858\u8207\u5354\u8ABF",
    "description": "\u6BCF\u5169\u500B\u6708\u7684\u670D\u4E8B\u610F\u9858\u3001\u5019\u88DC\u8207\u6392\u73ED\u5354\u8ABF",
    "key": "service_signups",
    "group": "service",
    "symbol": "calendar",
    "configurableHome": false,
    "searchTerms": []
  },
  "thanksgiving_offering_admin": { "file": "thanksgiving-offering-admin.html", "title": "\u611F\u6069\u7BC0\u5949\u737B\u56DE\u5831", "description": "\u79C1\u4EBA\u5949\u737B\u56DE\u5831\u3001\u901A\u77E5\u6295\u905E\u8207\u8CA1\u52D9\u6838\u5C0D", "key": "thanksgiving_offering_admin", "group": "finance", "church": "M+", "offeringAccess": true, "symbol": "clipboard", "configurableHome": false, "searchTerms": ["\u611F\u6069\u7BC0", "\u5949\u737B\u56DE\u61C9", "\u672B\u4E94\u78BC", "\u532F\u6B3E", "\u5C0D\u5E33"] },
  "finance_projects": { "file": "finance-projects.html", "title": "\u5C08\u6848\u8207\u4E8B\u5DE5\u8A2D\u5B9A", "description": "\u5C08\u6848\u3001\u4E8B\u5DE5\u9805\u76EE\u3001\u6536\u5165\u79D1\u76EE\u8207\u7DDA\u4E0A\u6350\u6B3E\u5C0D\u61C9", "key": "finance_projects", "group": "finance", "church": "M+", "owner": true, "symbol": "clipboard", "configurableHome": false, "settingsGroup": "church", "settingsId": "finance-projects", "searchTerms": ["\u5C08\u6848", "\u4E8B\u5DE5", "\u6536\u5165\u79D1\u76EE", "\u6350\u6B3E\u9805\u76EE"] },
  "finance_receipts": {
    "church": "M+",
    "receiptAccess": true,
    "file": "finance-receipts.html",
    "title": "\u6536\u64DA\u958B\u7ACB",
    "description": "\u91D1\u9322\u8207\u7269\u54C1\u6536\u64DA\u3001\u958B\u7ACB\u53CA\u4F5C\u5EE2\u7D00\u9304",
    "key": "finance_receipts",
    "group": "finance",
    "symbol": "clipboard",
    "configurableHome": false,
    "searchTerms": ["\u6536\u64DA", "\u6350\u6B3E\u6536\u64DA", "\u6350\u7269", "\u91D1\u9322", "\u7269\u54C1", "\u6703\u8A08"]
  },
  "finance_expenses": {
    "church": "M+",
    "expenseAccess": true,
    "file": "finance-expenses.html",
    "icon": "\u{1F4CB}",
    "title": "\u652F\u51FA\u8A18\u5E33",
    "description": "\u8CBB\u7528\u63D0\u5831\u3001\u6191\u8B49\u6838\u5C0D\u3001\u5BE9\u6838\u8207\u4ED8\u6B3E\u7D00\u9304",
    "key": "finance_expenses",
    "group": "finance",
    "symbol": "clipboard",
    "configurableHome": false,
    "searchTerms": ["\u652F\u51FA", "\u8CBB\u7528", "\u8A18\u5E33", "\u6838\u92B7", "\u4ED8\u6B3E", "\u96F6\u7528\u91D1"]
  },
  "finance_cash": {
    "church": "M+",
    "financeAccess": true,
    "file": "finance-cash.html",
    "icon": "\u{1F4CB}",
    "title": "\u4E3B\u65E5\u5949\u737B",
    "description": "\u9010\u7B46\u767B\u9304\u5949\u737B\u3001\u6838\u5C0D\u8207\u5165\u5E33",
    "key": "finance_cash",
    "group": "finance",
    "symbol": "clipboard",
    "configurableHome": false,
    "searchTerms": ["\u8CA1\u52D9", "\u6703\u8A08", "\u5949\u737B", "\u9EDE\u6536", "\u73FE\u91D1"]
  },
  "service_quick_match": {
    "church": "M+",
    "permission": "schedules",
    "file": "service-signup-admin.html?match=1",
    "icon": "\u26A1",
    "title": "\u670D\u4E8B\u5FEB\u901F\u9069\u914D",
    "description": "\u4E8B\u5DE5\u9818\u8896\u53EF\u9810\u6392\u8CA0\u8CAC\u985E\u5225\u7684\u670D\u4E8B\u4EBA\u9078",
    "key": "service_quick_match",
    "group": "service",
    "symbol": "calendar",
    "configurableHome": false,
    "searchTerms": ["\u667A\u80FD\u914D\u5C0D", "\u5FEB\u901F\u914D\u5C0D", "\u4E8B\u5DE5\u9818\u8896"]
  }
});
var FUNCTION_GROUPS2 = freezeTree2([
  { "key": "events", "title": "\u6D3B\u52D5", "note": "\u6D3B\u52D5\u53C3\u8207\u53CA\u904A\u6232\u73A9\u5BB6\u7BA1\u7406", "keys": ["potluck", "bibletree_admin", "bibletree_players", "bibletree_devotional"] },
  {
    "key": "pastoral",
    "title": "\u4EBA\u8207\u95DC\u61F7",
    "note": "\u6703\u53CB\u3001\u65B0\u670B\u53CB\u3001\u5C0F\u7D44\u8207\u95DC\u61F7",
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
    "title": "\u805A\u6703\u8207\u670D\u4E8B",
    "note": "\u51FA\u5E2D\u3001\u610F\u9858\u767B\u8A18\u3001\u6392\u73ED\u8207\u5834\u5730",
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
    "title": "\u6559\u6703\u8CA1\u52D9",
    "note": "M\uFF0B\u5949\u737B\u6536\u5165\u3001\u652F\u51FA\u8A18\u5E33\u8207\u6838\u5C0D",
    "keys": ["church_giving_preview", "association_donation_preview", "admin_workbench", "thanksgiving_offering_admin", "finance_projects", "finance_cash", "finance_expenses", "finance_receipts", "finance_permission_settings", "finance_accounting_reports", "school_staff_scheduling", "school_payroll"]
  },
  {
    "key": "media",
    "title": "\u5167\u5BB9\u8207\u767C\u5E03",
    "note": "\u9748\u4FEE\u3001\u9031\u5831\u3001\u6559\u6750\u8207\u793E\u7FA4\u5167\u5BB9",
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
    "title": "\u8AB2\u8F14",
    "note": "\u5B78\u751F\u3001\u51FA\u5E2D\u3001\u8F14\u5C0E\u8207\u5831\u8868",
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
    "title": "\u7C43\u7403\u4E8B\u5DE5",
    "note": "\u7C43\u7403\u968A\u3001\u8A13\u7DF4\u8207\u71B1\u706B\u7C43\u7403\u71DF",
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
    "title": "\u8A2D\u5B9A\u8207\u5DE5\u5177",
    "note": "\u5E33\u865F\u3001\u8EAB\u5206\u3001\u5BE9\u6838\u8207\u901A\u77E5",
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
    "title": "\u540C\u5DE5\u8207\u6B0A\u9650",
    "note": "\u9080\u8ACB\u540C\u5DE5\u3001\u78BA\u8A8D LINE \u8EAB\u5206\u8207\u4F7F\u7528\u6B0A\u9650",
    "keys": [
      "admin_accounts",
      "member_line_settings",
      "member_line_history",
      "binding_review"
    ]
  },
  {
    "key": "review",
    "title": "\u5BE9\u6838\u8207\u901A\u77E5",
    "note": "\u8A2D\u5B9A\u521D\u5BE9\u3001\u8907\u5BE9\u8207\u901A\u77E5\u65B9\u5F0F",
    "keys": [
      "review_workflows",
      "notification_settings"
    ]
  },
  {
    "key": "content",
    "title": "\u5167\u5BB9\u8207\u767C\u5E03",
    "note": "\u4E3B\u65E5\u3001\u9748\u4FEE\u3001\u8868\u55AE\u8207\u793E\u7FA4\u5167\u5BB9",
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
    "title": "\u5802\u6703\u8207\u5834\u5730",
    "note": "\u516C\u958B\u8CC7\u8A0A\u3001\u805A\u6703\u4F4D\u7F6E\u3001\u7A7A\u9593\u8207\u7269\u54C1",
    "keys": [
      "finance_projects",
      "spaces",
      "inventory"
    ]
  }
]);
var PERMISSION_LABELS2 = freezeTree2({
  association_content: "\u5354\u6703\u5167\u5BB9\uFF08\u7167\u7247\u8AAA\u6545\u4E8B\uFF0F\u7DB2\u7AD9\u6D88\u606F\uFF09",
  church_albums: "\u76F8\u7C3F",
  "members": "\u6703\u53CB",
  "attendance": "\u51FA\u5E2D\u767B\u8A18",
  "groups": "\u5C0F\u7D44\u8207\u5C0F\u5BB6",
  "schedules": "\u670D\u4E8B\u5B89\u6392",
  "private_prayers": "\u4EE3\u79B1\u8207\u95DC\u61F7",
  "pastoral_chats": "\u95DC\u61F7\u8A0A\u606F\u8207\u5716\u5361",
  "spaces": "\u5834\u5730\u8207\u8A2D\u5099",
  "newcomer_care": "\u65B0\u670B\u53CB",
  "tree_reading_admin": "\u751F\u547D\u6A39",
  "binding_review": "LINE \u8EAB\u5206\u78BA\u8A8D",
  "notification_settings": "\u901A\u77E5\u8A2D\u5B9A",
  "website_weekly": "\u4E3B\u65E5\u9031\u5831",
  "website_group_resources": "\u5C0F\u7D44\u6559\u6750",
  "inventory": "\u7269\u54C1\u8207\u501F\u7528",
  "heat_camp": "\u71B1\u706B\u7C43\u7403\u71DF"
});
var ROLE_TEMPLATES2 = freezeTree2({
  "pastor": {
    "label": "\u7267\u8005",
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
    "label": "\u5E2B\u6BCD",
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
    "label": "\u884C\u653F\u7BA1\u7406",
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
    "label": "\u5C0F\u7D44\uFF0F\u5C0F\u5BB6\u9577",
    "permissions": [
      "members",
      "attendance",
      "groups"
    ]
  },
  "care": {
    "label": "\u95DC\u61F7\u540C\u5DE5",
    "permissions": [
      "members",
      "private_prayers",
      "pastoral_chats",
      "newcomer_care"
    ]
  },
  "facilities": {
    "label": "\u7E3D\u52D9\u540C\u5DE5",
    "permissions": [
      "spaces",
      "inventory"
    ]
  },
  "custom": {
    "label": "\u81EA\u8A02\u6B0A\u9650",
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
  "view": "\u67E5\u770B",
  "create": "\u65B0\u589E",
  "edit": "\u4FEE\u6539",
  "delete": "\u522A\u9664",
  "export": "\u532F\u51FA",
  "approve": "\u5BE9\u6838",
  "manage": "\u7BA1\u7406\u8A2D\u5B9A"
});
var FRIENDLY_LABELS2 = freezeTree2({
  "\u6703\u53CB\u540D\u518A": "\u6703\u53CB",
  "\u65B0\u670B\u53CB\u95DC\u61F7": "\u65B0\u670B\u53CB",
  "\u540C\u5DE5\u5354\u4F5C": "\u540C\u5DE5\u5DE5\u4F5C\u5340",
  "\u4EE3\u79B1\u95DC\u61F7": "\u4EE3\u79B1\u8207\u95DC\u61F7",
  "\u7267\u990A\u8A0A\u606F": "\u95DC\u61F7\u8A0A\u606F",
  "\u805A\u6703\u9EDE\u540D": "\u51FA\u5E2D\u767B\u8A18",
  "\u5C0F\u7D44\uFF0F\u5C0F\u5BB6": "\u5C0F\u7D44\u8207\u5C0F\u5BB6",
  "\u670D\u4E8B\u6392\u73ED": "\u670D\u4E8B\u5B89\u6392",
  "\u5834\u5730\u9810\u7D04": "\u5834\u5730\u8207\u8A2D\u5099",
  "\u7269\u54C1\u6E05\u518A": "\u7269\u54C1\u8207\u501F\u7528",
  "\u6559\u6703\u7DB2\u7AD9\u7DAD\u8B77": "\u4E3B\u65E5\u9031\u5831",
  "\u5C0F\u7D44\u805A\u6703\u8CC7\u6E90": "\u5C0F\u7D44\u6559\u6750",
  "\u6BCF\u65E5\u9748\u4FEE\u751F\u547D\u6A39": "\u751F\u547D\u6A39",
  "\u8B80\u7D93\u751F\u547D\u6A39": "\u751F\u547D\u6A39",
  "LINE \u7D81\u5B9A\u5BE9\u6838": "LINE \u8EAB\u5206\u78BA\u8A8D",
  "LINE \u901A\u77E5\u8A2D\u5B9A": "\u901A\u77E5\u8A2D\u5B9A",
  "\u901A\u77E5\u7BA1\u9053\u8A2D\u5B9A": "\u901A\u77E5\u8A2D\u5B9A",
  "\u6559\u7267\u5167\u5BB9": "\u7267\u990A\u5716\u5361",
  "\u7CFB\u7D71\u76E3\u63A7\u4E2D\u5FC3": "\u7CFB\u7D71\u72C0\u6CC1",
  "\u7CFB\u7D71\u8A2D\u5B9A": "\u6559\u6703\u8A2D\u5B9A"
});
var NAVIGATION_MODULES2 = freezeTree2([
  {
    "key": "dashboard",
    "file": "admin-dashboard.html",
    "label": "\u9996\u9801",
    "icon": "\u{1F3E0}"
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

// church-os-giving-pages-20261120/app-ui.mjs?v=20261116-admin1
function setStatus(node, message, { tone = "neutral", busy = false } = {}) {
  node.textContent = message;
  node.dataset.tone = tone;
  node.setAttribute("aria-busy", String(busy));
  node.hidden = !message;
}

// church-os-giving-pages-20261120/giving-pages.mjs
var $ = (selector) => document.querySelector(selector);
var form = $("#giving-form");
var association = document.body.dataset.organization === "association";
var org = association ? "\u793E\u5718\u6CD5\u4EBA\u53F0\u7063\u57FA\u7763\u6559\u793E\u6703\u95DC\u61F7\u5354\u6703" : "M+ \u5927\u96C5\u6559\u6703";
var noun = association ? "\u6350\u6B3E" : "\u5949\u737B";
var purposes = association ? ["\u5152\u5C11\u966A\u4F34", "\u71DF\u990A\u665A\u9910", "\u5BB6\u5EAD\u95DC\u61F7", "\u5354\u6703\u6574\u9AD4\u670D\u52D9"] : ["\u5341\u4E00\u5949\u737B", "\u611F\u6069\u5949\u737B", "\u5BA3\u6559\u4E8B\u5DE5", "\u6559\u6703\u6574\u9AD4\u4E8B\u5DE5"];
var payments = { credit: "\u4FE1\u7528\u5361", linepay: "LINE Pay", atm: "ATM \u865B\u64EC\u5E33\u865F", barcode: "\u8D85\u5546\u689D\u78BC" };
var receipts = { single: "\u55AE\u7B46\u96FB\u5B50\u6536\u64DA", annual: "\u5E74\u5EA6\u5F59\u6574\u6536\u64DA", none: "\u4E0D\u7D22\u53D6\u6536\u64DA" };
var money = (value) => "NT$ " + Number(value || 0).toLocaleString("zh-TW");
var monthly = () => form.elements.frequency.value === "monthly";
var currentStep = 0;
var previousPayment = "credit";
var previousReceipt = "single";
var lastFrequency = "once";
var priorFocus = null;
for (const node of document.querySelectorAll("[data-icon]")) node.append(createAppIcon(node.dataset.icon, "giving-shared-icon"));
for (const name of purposes) {
  const option = document.createElement("option");
  option.value = name;
  option.textContent = name;
  form.elements.purpose.append(option);
}
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
  $("#summary-frequency").textContent = m ? "\u6BCF\u6708\u5B9A\u671F\u5B9A\u984D" : "\u55AE\u6B21" + noun;
  $("#summary-purpose").textContent = form.elements.purpose.value;
  $("#summary-payment").textContent = payments[form.elements.payment.value];
  $("#summary-recurring").hidden = !m;
  $("#summary-recurring").textContent = `\u9810\u89BD\u8A2D\u5B9A\uFF1A\u6BCF\u6708 ${form.elements.charge_day.value} \u65E5\uFF0C\u5171 ${form.elements.periods.value} \u671F\u3002`;
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
  }
  $("#recurring-settings").hidden = !m;
  for (const radio of form.querySelectorAll('input[name="payment"]')) radio.disabled = m && radio.value !== "credit";
  $("#amount-legend").textContent = m ? "\u6BCF\u6708\u652F\u6301\u91D1\u984D" : "\u9078\u64C7\u91D1\u984D";
  $("#linepay-note").textContent = m ? "\u5B9A\u671F\u6263\u6B3E\u5F85\u5C08\u7528\u6388\u6B0A\u6838\u51C6" : "\u4F7F\u7528 LINE Pay \u4ED8\u6B3E";
  $("#payment-note").textContent = m ? "\u5B9A\u671F\u81EA\u52D5\u6263\u6B3E\u9810\u89BD\u63A1\u4FE1\u7528\u5361\u3002LINE Pay \u9808\u53E6\u7533\u8ACB\u9810\u5148\u6388\u6B0A\uFF1BATM\uFF0F\u8D85\u5546\u689D\u78BC\u9700\u8981\u81EA\u884C\u7E73\u6B3E\u3002" : "\u9019\u88E1\u53EF\u4EE5\u9810\u89BD\u4ED8\u6B3E\u9078\u64C7\uFF0C\u76EE\u524D\u4E0D\u6703\u5C0E\u5411\u4ED8\u6B3E\u6216\u5EFA\u7ACB\u7E73\u6B3E\u5E33\u865F\u3002";
  $("#receipt-fields").hidden = form.elements.receipt.value === "none";
  form.elements.receipt_title.disabled = form.elements.receipt.value === "none";
  form.elements.email.required = form.elements.receipt.value !== "none";
  $("#email-required").textContent = form.elements.email.required ? "\u5FC5\u586B" : "\u9078\u586B";
  updateSummary();
}
function fail(message, input) {
  setStatus($("#form-status"), message, { tone: "error" });
  input.focus();
  return false;
}
function validAmount() {
  const field = form.elements.amount, value = Number(field.value);
  if (!field.value || !Number.isSafeInteger(value) || value < 1 || value > 9999999) return fail("\u8ACB\u8F38\u5165 1 \u81F3 9,999,999 \u5143\u4E4B\u9593\u7684\u6574\u6578\u91D1\u984D\u3002", field);
  return true;
}
function validReceipt() {
  const name = form.elements.donor_name, email = form.elements.email;
  if (!name.value.trim()) return fail("\u8ACB\u586B\u5BEB\u59D3\u540D\uFF0C\u65B9\u4FBF\u6838\u5C0D\u652F\u6301\u8207\u6536\u64DA\u8CC7\u6599\u3002", name);
  if (!email.checkValidity()) return fail(email.validity.valueMissing ? "\u8ACB\u586B\u5BEB Email\uFF0C\u4EE5\u4FBF\u5BC4\u9001\u96FB\u5B50\u6536\u64DA\u3002" : "\u8ACB\u78BA\u8A8D Email \u683C\u5F0F\u662F\u5426\u6B63\u78BA\u3002", email);
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
  const data = [["\u652F\u6301\u55AE\u4F4D", org], ["\u652F\u6301\u7528\u9014", form.elements.purpose.value], ["\u652F\u6301\u65B9\u5F0F", monthly() ? "\u6BCF\u6708\u5B9A\u671F\u5B9A\u984D" : "\u55AE\u6B21" + noun], ["\u6BCF" + (monthly() ? "\u6708" : "\u7B46") + "\u91D1\u984D", money(form.elements.amount.value)], ["\u4ED8\u6B3E\u65B9\u5F0F", payments[form.elements.payment.value]]];
  if (monthly()) data.push(["\u9810\u8A08\u6263\u6B3E\u65E5", `\u6BCF\u6708 ${form.elements.charge_day.value} \u65E5\uFF08\u5F85\u6B63\u5F0F\u6388\u6B0A\u78BA\u8A8D\uFF09`], ["\u652F\u6301\u671F\u6578", form.elements.periods.value + " \u671F"]);
  data.push(["\u59D3\u540D", form.elements.donor_name.value.trim()], ["Email", form.elements.email.value.trim() || "\u672A\u586B\u5BEB"], ["\u6536\u64DA\u65B9\u5F0F", receipts[form.elements.receipt.value]]);
  if (form.elements.receipt.value !== "none") data.push(["\u6536\u64DA\u62AC\u982D", form.elements.receipt_title.value.trim() || form.elements.donor_name.value.trim()]);
  data.push(["\u516C\u958B\u59D3\u540D", form.elements.anonymous.checked ? "\u4E0D\u516C\u958B" : "\u4F9D\u6B63\u5F0F\u5FB5\u4FE1\u544A\u77E5\u8207\u540C\u610F\u8FA6\u7406"]);
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

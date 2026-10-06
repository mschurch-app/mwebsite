# 資料庫與 Supabase

盤點日期：2026-10-07

## 資料庫

- 服務：Supabase / PostgreSQL。
- 由網站程式碼設定與已連線 Supabase 專案核對的專案 reference：`aqanuwilmvdtlzuqlrau`。
- 本次透過 Supabase MCP 進行唯讀盤點：`public` schema 有 84 張資料表；已列出的 public tables 均啟用 RLS。專案回報有 125 筆 migration 記錄，最新一筆為 `20261006152254_heat_camp_no_receipt`。
- 此盤點只確認結構、RLS 開關與 migration 歷史，沒有讀取業務資料列，也沒有修改資料庫。

## 主要資料表與關係

依表名、外鍵和網站程式碼辨識的主要領域：

- 教會與會友：`churches`、`members`、`groups`、`attendance_records`、`service_schedules`。
- 公開網站：`website_weekly_bulletins`、`website_content_posts`；多筆資料以 `church_id` 關聯 `churches`。
- 牧養與通知：`pastoral_staff`、`pastoral_newcomer_care_cases`、`pastoral_notification_deliveries`、`app_notifications`。
- 講道工作流程：`sermon_social_drafts`、`sermon_subtitle_segments`、`sermon_youtube_workflows`、`sermon_archive_queue`。
- 籃球營與金流：`camps`、`camp_registrations`；另有金流 RPC/migration 歷史。
- 庫存：`inventory_locations`、`inventory_items`、`inventory_loans`、`inventory_movements`。

此處列舉的是重要領域，不是完整 schema 字典；完整欄位、外鍵和 policy 應以 migration 原始檔為準。

## Migration 管理方式

- 本 repository 沒有 `supabase/migrations/` 或 `supabase/config.toml`，無法在這個 repository 重建正式資料庫 schema。
- `README.md` 指向另一個 Church OS repository 的 migration 檔作為網站週報資料表建置方式；因此目前 schema/migration 的主要維護位置是外部 repository。
- Supabase 服務端 migration 清單已透過唯讀 MCP 查到 125 筆歷史；部署端實際由誰、用何種 CI 流程套用，仍需到 Church OS repository 核對。
- 所有未來 schema、function、trigger 或 RLS 變更，都應在權威 migration repository 建立有序 migration，並同步更新本文件或加上跨 repository 參照。

## RLS 與權限

- 已確認 public schema 列出的 84 張表都啟用 RLS。
- 開啟 RLS 不代表政策本身已正確；本次沒有逐一檢查每個政策、function 的 `SECURITY DEFINER` 行為或 Storage 權限。
- 公開網站透過受限 RPC 取得已發布內容，README 說明排班表不直接公開。
- Edge Function 需使用的高權限 key 必須留在 Supabase secrets，不可寫入 HTML、JavaScript、Git、日誌或本文件。

## 資料庫修改注意事項

- 正式環境變更前，先確認 Church OS 的權威 migration、部署順序與備份/回復方法。
- 不直接對正式資料執行 DROP、TRUNCATE、大量 DELETE/UPDATE 或 destructive migration。
- 先在 staging 驗證 migration、RLS 和 RPC，再依正式發布流程執行。
- 記錄 migration 名稱、版本、影響範圍、驗證結果與回復方式；不在 Codex 日誌寫業務資料或 secret。

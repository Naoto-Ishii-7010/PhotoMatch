# スケジュール管理 仕様書

**実装フェーズ**: Phase 1 (MVP)  
**担当サービス**: Schedule_Service  
**関連モジュール**: Booking_Service

---

## 要件 5: スケジュール管理

- **ユーザーストーリー:** フォトグラファーとして、撮影対応可能な日時をカレンダーで管理したい。そうすることで、依頼者に正確な空き状況を提示できる。

### 受け入れ基準

1. THE Schedule_Service SHALL フォトグラファーが対応可能な日時スロットを登録・更新・削除できる機能を提供する
2. THE Schedule_Service SHALL カレンダー形式で空き状況を表示する
3. WHEN 予約が確定したとき、THE Schedule_Service SHALL 該当日時スロットを「予約済み」に変更する
4. WHILE 日時スロットが「予約済み」の状態のとき、THE Schedule_Service SHALL 同一スロットへの新規予約を拒否する
5. IF フォトグラファーが予約済みスロットを削除しようとしたとき、THEN THE Schedule_Service SHALL「予約済みのスロットは削除できません」という警告を表示する

# プロフィール管理 仕様書

**実装フェーズ**: Phase 1 (MVP)  
**担当サービス**: Profile_Service  
**関連モジュール**: Auth_Service

---

## 要件 2: プロフィール管理

- **ユーザーストーリー:** 登録ユーザーとして、自己紹介・アイコン・本人確認書類を登録・更新したい。そうすることで、信頼性の高いプロフィールを維持できる。

### 受け入れ基準

1. THE Profile_Service SHALL ユーザーが表示名・自己紹介文・アイコン画像を登録・更新できる機能を提供する
2. WHEN アイコン画像がアップロードされたとき、THE Profile_Service SHALL 画像を JPEG または PNG 形式で最大 5MB まで受け付ける
3. IF アップロードされた画像が 5MB を超えるとき、THEN THE Profile_Service SHALL「ファイルサイズは 5MB 以下にしてください」というエラーを返す
4. THE Profile_Service SHALL 本人確認書類（運転免許証・パスポート・マイナンバーカード）の画像アップロードを受け付ける
5. WHEN 本人確認書類が提出されたとき、THE Profile_Service SHALL 書類のステータスを「審査中」に設定する
6. WHEN 管理者が本人確認を承認したとき、THE Profile_Service SHALL プロフィールに「本人確認済み」バッジを付与する

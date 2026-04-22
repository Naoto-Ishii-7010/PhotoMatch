# ポートフォリオ登録 仕様書

**実装フェーズ**: Phase 1 (MVP)  
**担当サービス**: Portfolio_Service  
**関連モジュール**: Auth_Service

---

## 要件 4: ポートフォリオ登録

- **ユーザーストーリー:** フォトグラファーとして、過去の作品・スキル・機材情報を登録したい。そうすることで、依頼者に自分の実力をアピールできる。

### 受け入れ基準

1. THE Portfolio_Service SHALL フォトグラファーが作品画像・キャプション・撮影ジャンルを登録できる機能を提供する
2. THE Portfolio_Service SHALL 1 アカウントあたり最大 100 枚の作品画像を保存する
3. WHEN 作品画像がアップロードされたとき、THE Portfolio_Service SHALL JPEG・PNG・WebP 形式で最大 20MB まで受け付ける
4. IF アップロードされた画像が 20MB を超えるとき、THEN THE Portfolio_Service SHALL「ファイルサイズは 20MB 以下にしてください」というエラーを返す
5. THE Portfolio_Service SHALL フォトグラファーが使用機材・スキルタグを登録できる機能を提供する
6. THE Portfolio_Service SHALL 登録された作品をフォトグラファーのプロフィールページに公開する

# レビュー・評価 仕様書

**実装フェーズ**: Phase 2 (収益化・品質向上)  
**担当サービス**: Review_Service  
**関連モジュール**: Booking_Service, Delivery_Service

---

## 要件 15: レビュー投稿

- **ユーザーストーリー:** 依頼者として、撮影後に感想と星評価を投稿したい。そうすることで、他の依頼者がフォトグラファーを選ぶ際の参考情報を提供できる。

### 受け入れ基準

1. WHEN 依頼者が受領完了を承認したとき、THE Review_Service SHALL レビュー投稿フォームを提示する
2. THE Review_Service SHALL 1〜5 の星評価とテキストコメント（最大 500 文字）の投稿を受け付ける
3. THE Review_Service SHALL 1 つの取引に対して 1 件のレビューのみ受け付ける
4. IF 依頼者が同一取引に対して 2 件目のレビューを投稿しようとしたとき、THEN THE Review_Service SHALL「この取引のレビューはすでに投稿されています」というエラーを返す
5. THE Review_Service SHALL フォトグラファーのプロフィールページに平均評価スコアとレビュー一覧を表示する

/**
 * 機能紹介セクション
 * - PDFのP5〜P9: ジャンル選択・ホーム検索・ポートフォリオ詳細・チャット・スケジュール・売上管理
 */

/** 機能カードのProps型 */
type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
};

/** 機能カードコンポーネント */
function FeatureCard({ icon, title, description, badge }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-lp-gold/40 hover:shadow-md transition-all group">
      {/* アイコンエリア */}
      <div className="w-12 h-12 rounded-xl bg-lp-cream flex items-center justify-center mb-4 group-hover:bg-lp-gold/10 transition-colors">
        {icon}
      </div>

      {/* バッジ */}
      {badge && (
        <span className="inline-block text-xs font-semibold text-lp-gold bg-lp-gold/10 px-2 py-0.5 rounded-full mb-2">
          {badge}
        </span>
      )}

      <h3 className="text-base font-bold text-lp-dark mb-2">{title}</h3>
      <p className="text-lp-gray text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-lp-cream py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-lp-dark mb-4">
            充実した機能
          </h2>
          <p className="text-lp-gray text-lg max-w-xl mx-auto leading-relaxed">
            フォト体験をもっとスムーズに、もっと楽しく。
          </p>
        </div>

        {/* 機能グリッド */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 依頼者向け機能 */}
          <div className="sm:col-span-2 lg:col-span-3">
            <p className="text-xs font-bold text-lp-gold uppercase tracking-widest mb-4">
              依頼者向け機能
            </p>
          </div>

          <FeatureCard
            title="パーソナライズ検索"
            description="「家族写真」「SNS」「風景」など興味ジャンルを最大3つ選択。あなた好みのフォトグラファーをすぐ見つけられます。"
            badge="ジャンル選択"
            icon={
              <svg
                className="w-6 h-6 text-lp-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            }
          />

          <FeatureCard
            title="ポートフォリオ閲覧"
            description="最大10枚のスライダー形式で作品を確認。経歴・実績・★評価を可視化し、安心して購買決定できます。"
            badge="詳細画面"
            icon={
              <svg
                className="w-6 h-6 text-lp-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            }
          />

          <FeatureCard
            title="チャット"
            description="撮影前の打ち合わせから場所・カット数の相談まで、アプリ内チャットですべて完結します。"
            badge="リアルタイム"
            icon={
              <svg
                className="w-6 h-6 text-lp-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            }
          />

          {/* フォトグラファー向け機能 */}
          <div className="sm:col-span-2 lg:col-span-3 mt-4">
            <p className="text-xs font-bold text-lp-green uppercase tracking-widest mb-4">
              フォトグラファー向け機能
            </p>
          </div>

          <FeatureCard
            title="スケジュール管理"
            description="撮影対応可能な日時をカレンダーで設定。予約が入ったら自動でブロックされ、ダブルブッキングを防止します。"
            badge="カレンダー連携"
            icon={
              <svg
                className="w-6 h-6 text-lp-green"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            }
          />

          <FeatureCard
            title="売上・振込管理"
            description="プラットフォーム手数料（20%）を差し引いた売上の確認と振込申請を一元化。月次レポートも確認できます。"
            badge="ダッシュボード"
            icon={
              <svg
                className="w-6 h-6 text-lp-green"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
          />

          <FeatureCard
            title="写真納品機能"
            description="撮影データをアップロードしてURL共有。依頼者が受領確認ボタンを押すと、自動的に売上に反映されます。"
            badge="クラウドストレージ"
            icon={
              <svg
                className="w-6 h-6 text-lp-green"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}

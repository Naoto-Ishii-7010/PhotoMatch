/**
 * ターゲットユーザーセクション
 * - PDFのP3: 依頼者（ゲスト）とフォトグラファー（ホスト）の2ペルソナを紹介
 */

/** ペルソナカードのProps型 */
type PersonaCardProps = {
  role: string;
  subtitle: string;
  personas: string[];
  needs: string;
  accentColor: "gold" | "green";
  iconPath: string;
};

/** ペルソナカードコンポーネント */
function PersonaCard({
  role,
  subtitle,
  personas,
  needs,
  accentColor,
  iconPath,
}: PersonaCardProps) {
  const accentClasses = {
    gold: {
      bg: "bg-lp-gold/10",
      border: "border-lp-gold/30",
      icon: "text-lp-gold",
      iconBg: "bg-lp-gold/20",
      tag: "bg-lp-gold/10 text-lp-gold",
    },
    green: {
      bg: "bg-lp-green/10",
      border: "border-lp-green/30",
      icon: "text-lp-green",
      iconBg: "bg-lp-green/20",
      tag: "bg-lp-green/10 text-lp-green",
    },
  };

  const cls = accentClasses[accentColor];

  return (
    <div className={`rounded-3xl p-8 lg:p-10 border ${cls.bg} ${cls.border}`}>
      {/* アイコン */}
      <div
        className={`w-20 h-20 rounded-2xl ${cls.iconBg} flex items-center justify-center mb-6 mx-auto`}
      >
        <svg
          className={`w-10 h-10 ${cls.icon}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d={iconPath}
          />
        </svg>
      </div>

      {/* ロール名 */}
      <h3 className="text-2xl font-bold text-lp-dark text-center mb-1">
        {role}
      </h3>
      <p className="text-lp-gray text-sm text-center mb-8">{subtitle}</p>

      {/* ペルソナ */}
      <div className="mb-6">
        <p className="text-xs font-semibold text-lp-gray uppercase tracking-wider mb-3">
          Persona
        </p>
        <div className="flex flex-wrap gap-2">
          {personas.map((p) => (
            <span
              key={p}
              className={`text-sm px-3 py-1 rounded-full font-medium ${cls.tag}`}
            >
              {p}
            </span>
          ))}
        </div>
      </div>

      {/* ニーズ */}
      <div>
        <p className="text-xs font-semibold text-lp-gray uppercase tracking-wider mb-3">
          Need
        </p>
        <p className="text-lp-dark text-base leading-relaxed">{needs}</p>
      </div>
    </div>
  );
}

export default function TargetUsersSection() {
  return (
    <section className="bg-lp-cream py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-lp-dark mb-4">
            あなたはどちらですか？
          </h2>
          <p className="text-lp-gray text-lg max-w-xl mx-auto leading-relaxed">
            PhotoMatch
            は依頼者にもフォトグラファーにも、それぞれの価値を届けます。
          </p>
        </div>

        {/* 2カラムカード */}
        <div className="grid md:grid-cols-2 gap-8">
          <PersonaCard
            role="依頼者（ゲスト）"
            subtitle="撮影を依頼したいあなたへ"
            personas={[
              "七五三・家族写真",
              "結婚式・記念日",
              "SNS用ポートレート",
              "法人マーケティング",
              "広報・PR撮影",
            ]}
            needs="特定のシーンで高品質な写真を、手軽に依頼したい。"
            accentColor="gold"
            iconPath="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
          <PersonaCard
            role="フォトグラファー（ホスト）"
            subtitle="スキルを活かしたいあなたへ"
            personas={[
              "フリーランスのプロ",
              "スキルを活かしたいハイアマチュア",
              "副業カメラマン",
            ]}
            needs="自身のスキルで収益化を図り、スケジュールと納品を簡単に管理したい。"
            accentColor="green"
            iconPath="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </div>
      </div>
    </section>
  );
}

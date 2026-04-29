import Link from "next/link";

/**
 * Hostsセクション
 * - 活躍中のホスト・作品例を表示
 */
export default function HostsSection() {
  const hosts = [
    {
      tag: "Portrait",
      title: "ナチュラルな表情を引き出すプロフィール撮影",
      rating: "4.9",
      reviews: "128件",
      location: "東京",
      name: "Takeshi",
      experience: "趣味歴6年",
      price: "¥3,000〜",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&q=80",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
    },
    {
      tag: "Family",
      title: "お子様の自然な笑顔。公園でのファミリー撮影",
      rating: "4.8",
      reviews: "96件",
      location: "神奈川",
      name: "Misaki",
      experience: "週末ホスト",
      price: "¥4,500〜",
      image:
        "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=400&fit=crop&q=80",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80",
    },
    {
      tag: "Pet",
      title: "愛犬・愛猫の魅力を最大限に。ペット専門",
      rating: "5.0",
      reviews: "67件",
      location: "大阪",
      name: "Haru",
      experience: "ペット歴8年",
      price: "¥3,500〜",
      image:
        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=400&fit=crop&q=80",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=80",
    },
    {
      tag: "Couple",
      title: "記念日・カップルフォトを想い出に残します",
      rating: "4.7",
      reviews: "52件",
      location: "京都",
      name: "Ryo",
      experience: "副業ホスト",
      price: "¥5,000〜",
      image:
        "https://images.unsplash.com/photo-1529636798458-92182e662485?w=400&h=400&fit=crop&q=80",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* セクションヘッダー */}
        <div className="flex justify-between items-end flex-wrap gap-4 mb-9">
          <div>
            <div className="font-[family-name:var(--font-playfair)] text-sm text-lp-brand tracking-[0.3em] font-bold uppercase mb-2 text-left">
              Host Samples
            </div>
            <h2 className="font-[family-name:var(--font-noto-serif)] text-[32px] leading-[1.4] text-lp-ink">
              活躍中のホスト・作品例
            </h2>
          </div>
          <Link
            href="#"
            className="text-[13px] text-lp-brand font-bold hover:underline"
          >
            もっと見る →
          </Link>
        </div>

        {/* ホストグリッド */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4.5">
          {hosts.map((host, index) => (
            <div
              key={index}
              className="border border-lp-line rounded-2xl overflow-hidden bg-white hover:-translate-y-0.5 hover:shadow-[0_1px_2px_rgba(40,32,22,0.04),0_8px_24px_rgba(40,32,22,0.08)] transition-all duration-200"
            >
              {/* サムネイル */}
              <div
                className="h-[180px] bg-cover bg-center relative"
                style={{ backgroundImage: `url('${host.image}')` }}
              >
                <span className="absolute top-3 left-3 bg-white/95 text-lp-ink px-2.5 py-1 rounded-md text-[11px] font-bold">
                  {host.tag}
                </span>
              </div>

              {/* コンテンツ */}
              <div className="p-4.5">
                <div className="text-sm font-bold leading-[1.5] mb-3 min-h-[42px] text-lp-ink">
                  {host.title}
                </div>

                {/* メタ情報 */}
                <div className="flex items-center justify-between text-xs text-lp-ink-muted mb-3">
                  <span>
                    ⭐ {host.rating} ({host.reviews})
                  </span>
                  <span>{host.location}</span>
                </div>

                {/* ユーザー情報 */}
                <div className="flex items-center gap-2 text-xs text-lp-ink-soft mb-3">
                  <div
                    className="w-6 h-6 rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${host.avatar}')` }}
                  />
                  {host.name} / {host.experience}
                </div>

                {/* 価格 */}
                <div className="pt-3 border-t border-dashed border-lp-line flex items-center justify-between">
                  <span className="font-[family-name:var(--font-noto-serif)] font-bold text-lp-brand text-sm">
                    {host.price}
                  </span>
                  <span className="bg-[#fff3ec] text-lp-accent text-[10px] font-bold px-2 py-0.5 rounded">
                    相談制
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

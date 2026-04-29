import Link from "next/link";

/**
 * UseCasesセクション
 * - 利用シーンのグリッド表示
 */
export default function UseCasesSection() {
  const useCases = [
    {
      title: "家族・こども",
      price: "¥3,000〜",
      image:
        "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop&q=80",
    },
    {
      title: "カップル・記念日",
      price: "¥4,000〜",
      image:
        "https://images.unsplash.com/photo-1529636798458-92182e662485?w=400&h=300&fit=crop&q=80",
    },
    {
      title: "プロフィール写真",
      price: "¥2,500〜",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop&q=80",
    },
    {
      title: "ペット撮影",
      price: "¥3,000〜",
      image:
        "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop&q=80",
    },
    {
      title: "結婚・七五三",
      price: "¥8,000〜",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop&q=80",
    },
    {
      title: "スポーツ・イベント",
      price: "¥5,000〜",
      image:
        "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=300&fit=crop&q=80",
    },
    {
      title: "ビジネス用",
      price: "¥3,500〜",
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&h=300&fit=crop&q=80",
    },
    {
      title: "SNS用",
      price: "¥2,000〜",
      image:
        "https://images.unsplash.com/photo-1464863979621-258859e62245?w=400&h=300&fit=crop&q=80",
    },
  ];

  return (
    <section className="py-24 bg-lp-cream">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <div className="font-[family-name:var(--font-playfair)] text-sm text-lp-brand tracking-[0.3em] font-bold uppercase mb-3.5">
            Use Cases
          </div>
          <h2 className="font-[family-name:var(--font-noto-serif)] font-black text-[clamp(28px,3.8vw,44px)] leading-[1.4] mb-5 text-lp-ink">
            こんなシーンで、使われています
          </h2>
          <p className="text-lp-ink-soft max-w-[680px] mx-auto text-[15px]">
            プロに頼むほどじゃないけれど、ちゃんといい写真が欲しい。そんな時に。
          </p>
        </div>

        {/* ユースケースグリッド */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4.5">
          {useCases.map((useCase, index) => (
            <Link
              key={index}
              href="#"
              className="bg-white rounded-2xl overflow-hidden border border-lp-line hover:-translate-y-1 hover:shadow-[0_4px_8px_rgba(40,32,22,0.06),0_24px_60px_rgba(40,32,22,0.18)] hover:border-lp-brand-2 transition-all duration-200"
            >
              {/* サムネイル */}
              <div
                className="h-[130px] bg-cover bg-center relative"
                style={{ backgroundImage: `url('${useCase.image}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* コンテンツ */}
              <div className="p-4 pb-4.5">
                <h4 className="text-[15px] font-bold mb-1 text-lp-ink">
                  {useCase.title}
                </h4>
                <div className="text-xs text-lp-brand font-bold">
                  相談制{" "}
                  <em className="font-medium text-lp-ink-muted not-italic ml-1.5">
                    目安 {useCase.price}
                  </em>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * YouDecideセクション
 * - 価格と場所を依頼者が決められることを強調
 */
export default function YouDecideSection() {
  return (
    <section className="py-24 bg-lp-ink text-lp-cream relative overflow-hidden">
      {/* 背景グラデーション */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(216, 92, 58, 0.18), transparent 40%), radial-gradient(circle at 80% 80%, rgba(212, 169, 85, 0.14), transparent 40%)",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <div className="font-[family-name:var(--font-playfair)] text-sm text-lp-gold tracking-[0.3em] font-bold uppercase mb-3.5">
            You Decide Everything
          </div>
          <h2 className="font-[family-name:var(--font-noto-serif)] font-black text-[clamp(28px,3.8vw,44px)] leading-[1.4] text-lp-cream mb-5">
            依頼者のあなたが、
            <br />
            すべてを決められる。
          </h2>
          <p className="text-lp-cream/75 max-w-[680px] mx-auto text-[15px]">
            PhotoMatchは、従来の撮影サービスと違って、価格も場所も依頼者主導。
            <br />
            あなたの都合に、ホストが合わせる仕組みです。
          </p>
        </div>

        {/* カードグリッド */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1080px] mx-auto">
          {/* カード1: 価格 */}
          <div className="bg-lp-cream/6 border border-lp-cream/15 rounded-3xl overflow-hidden backdrop-blur-md">
            <div
              className="h-[220px] bg-cover bg-center relative"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&q=80')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-lp-ink/70 to-transparent" />
            </div>
            <div className="p-7 pb-8">
              <div className="font-[family-name:var(--font-playfair)] text-[56px] font-black text-lp-gold/90 leading-none mb-2">
                01
              </div>
              <h3 className="font-[family-name:var(--font-noto-serif)] text-[26px] text-lp-cream mb-3.5 leading-[1.4]">
                価格は、あなたが決める。
              </h3>
              <p className="text-sm text-lp-cream/75 mb-5">
                「¥5,000で撮ってくれる方いませんか？」——希望予算を投稿するだけ。興味を持ったホストから提案が届き、相談して価格を最終合意します。従来の固定料金制ではない、新しい仕組みです。
              </p>
              <div className="bg-lp-gold/12 border-l-[3px] border-lp-gold px-4 py-3 rounded text-[13px] text-lp-cream/90 italic">
                <strong className="block text-lp-gold text-[11px] font-black tracking-widest not-italic mb-1">
                  EXAMPLE
                </strong>
                「家族写真、公園で1時間、¥6,000でお願いしたいです」
              </div>
            </div>
          </div>

          {/* カード2: 場所 */}
          <div className="bg-lp-cream/6 border border-lp-cream/15 rounded-3xl overflow-hidden backdrop-blur-md">
            <div
              className="h-[220px] bg-cover bg-center relative"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&q=80')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-lp-ink/70 to-transparent" />
            </div>
            <div className="p-7 pb-8">
              <div className="font-[family-name:var(--font-playfair)] text-[56px] font-black text-lp-gold/90 leading-none mb-2">
                02
              </div>
              <h3 className="font-[family-name:var(--font-noto-serif)] text-[26px] text-lp-cream mb-3.5 leading-[1.4]">
                場所も、あなたが決める。
              </h3>
              <p className="text-sm text-lp-cream/75 mb-5">
                スタジオに行く必要なし。あなたの思い出の場所、自宅、近所の公園、サッカー場、海辺——撮って欲しい場所を自由に指定できます。ホストがそこまで来てくれます。
              </p>
              <div className="bg-lp-gold/12 border-l-[3px] border-lp-gold px-4 py-3 rounded text-[13px] text-lp-cream/90 italic">
                <strong className="block text-lp-gold text-[11px] font-black tracking-widest not-italic mb-1">
                  EXAMPLE
                </strong>
                「いつも家族でピクニックする◯◯公園で撮ってほしい」
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

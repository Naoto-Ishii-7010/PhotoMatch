import Link from "next/link";

/**
 * DualCtaセクション
 * - ゲストとホストの両方へのCTA
 */
export default function DualCtaSection() {
  return (
    <section
      className="py-[100px] bg-cover bg-center text-lp-cream relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(42, 37, 32, 0.85), rgba(42, 37, 32, 0.9)), url('https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1600&h=900&fit=crop&q=80')",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* セクションヘッダー */}
        <div className="text-center mb-10">
          <div className="font-[family-name:var(--font-playfair)] text-sm text-lp-gold tracking-[0.3em] font-bold uppercase mb-3.5">
            Join PhotoMatch
          </div>
          <h2 className="font-[family-name:var(--font-noto-serif)] font-black text-[clamp(28px,3.8vw,44px)] leading-[1.4] text-lp-cream">
            あなたは、どちらで使いますか？
          </h2>
        </div>

        {/* デュアルカード */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1000px] mx-auto mt-10">
          {/* ゲストカード */}
          <div className="p-10 pb-8 rounded-3xl bg-lp-cream/8 border border-lp-cream/15 border-t-4 border-t-lp-guest backdrop-blur-md text-center hover:-translate-y-1 hover:bg-lp-cream/12 transition-all duration-250">
            <div className="w-20 h-20 rounded-full bg-lp-cream/15 flex items-center justify-center text-4xl mx-auto mb-4">
              📷
            </div>
            <h3 className="font-[family-name:var(--font-noto-serif)] text-[26px] text-lp-cream mb-2">
              撮ってほしい方
            </h3>
            <div className="text-[13px] text-lp-gold font-bold mb-5.5 tracking-wide">
              目安 ¥2,000〜 / 価格も場所もあなたが決める
            </div>
            <ul className="list-none text-left max-w-[320px] mx-auto mb-7 space-y-1.5">
              <li className="text-[13px] text-lp-cream/90 pl-6 relative leading-[1.7] before:content-['✓'] before:absolute before:left-0 before:top-0.5 before:text-lp-gold before:font-black before:text-sm">
                プロに頼まなくていい。手頃に素敵な写真を残せる
              </li>
              <li className="text-[13px] text-lp-cream/90 pl-6 relative leading-[1.7] before:content-['✓'] before:absolute before:left-0 before:top-0.5 before:text-lp-gold before:font-black before:text-sm">
                予算と場所を提示するだけ。ホストから提案が届く
              </li>
              <li className="text-[13px] text-lp-cream/90 pl-6 relative leading-[1.7] before:content-['✓'] before:absolute before:left-0 before:top-0.5 before:text-lp-gold before:font-black before:text-sm">
                事前チャット・ポートフォリオ・レビューで安心確認
              </li>
              <li className="text-[13px] text-lp-cream/90 pl-6 relative leading-[1.7] before:content-['✓'] before:absolute before:left-0 before:top-0.5 before:text-lp-gold before:font-black before:text-sm">
                満足できなければ返金保証あり
              </li>
            </ul>
            <Link
              href="/auth/register?role=requester"
              className="inline-flex items-center justify-center w-full px-[30px] py-4 rounded-full text-[15px] font-bold text-white bg-lp-guest shadow-[0_8px_20px_rgba(45,107,99,0.3)] hover:-translate-y-0.5 hover:brightness-105 transition-all duration-200"
            >
              無料で依頼を投稿する →
            </Link>
          </div>

          {/* ホストカード */}
          <div className="p-10 pb-8 rounded-3xl bg-lp-cream/8 border border-lp-cream/15 border-t-4 border-t-lp-host backdrop-blur-md text-center hover:-translate-y-1 hover:bg-lp-cream/12 transition-all duration-250">
            <div className="w-20 h-20 rounded-full bg-lp-cream/15 flex items-center justify-center text-4xl mx-auto mb-4">
              ✨
            </div>
            <h3 className="font-[family-name:var(--font-noto-serif)] text-[26px] text-lp-cream mb-2">
              撮りたい方
            </h3>
            <div className="text-[13px] text-lp-gold font-bold mb-5.5 tracking-wide">
              自分で価格を決められる / 相談制
            </div>
            <ul className="list-none text-left max-w-[320px] mx-auto mb-7 space-y-1.5">
              <li className="text-[13px] text-lp-cream/90 pl-6 relative leading-[1.7] before:content-['✓'] before:absolute before:left-0 before:top-0.5 before:text-lp-gold before:font-black before:text-sm">
                趣味のカメラが副収入に。月数万円の実績多数
              </li>
              <li className="text-[13px] text-lp-cream/90 pl-6 relative leading-[1.7] before:content-['✓'] before:absolute before:left-0 before:top-0.5 before:text-lp-gold before:font-black before:text-sm">
                スマホ・手持ち機材からスタートOK
              </li>
              <li className="text-[13px] text-lp-cream/90 pl-6 relative leading-[1.7] before:content-['✓'] before:absolute before:left-0 before:top-0.5 before:text-lp-gold before:font-black before:text-sm">
                週末だけ・月に数回だけでも稼働可能
              </li>
              <li className="text-[13px] text-lp-cream/90 pl-6 relative leading-[1.7] before:content-['✓'] before:absolute before:left-0 before:top-0.5 before:text-lp-gold before:font-black before:text-sm">
                審査は簡単・本人確認のみ
              </li>
            </ul>
            <Link
              href="/auth/register?role=photographer"
              className="inline-flex items-center justify-center w-full px-[30px] py-4 rounded-full text-[15px] font-bold text-white bg-lp-host shadow-[0_8px_20px_rgba(196,122,46,0.3)] hover:-translate-y-0.5 hover:brightness-105 transition-all duration-200"
            >
              無料でホスト登録する →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

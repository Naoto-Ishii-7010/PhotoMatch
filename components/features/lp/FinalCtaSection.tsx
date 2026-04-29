import Link from "next/link";

/**
 * FinalCtaセクション
 * - 最終CTA（無料ではじめる）
 */
export default function FinalCtaSection() {
  return (
    <section
      className="py-[110px] text-center bg-cover bg-center text-white relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(138, 106, 58, 0.92), rgba(106, 80, 40, 0.92)), url('https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1600&h=900&fit=crop&q=80')",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-[family-name:var(--font-noto-serif)] text-[clamp(32px,4.2vw,50px)] leading-[1.35] mb-4.5">
          写真の、新しいカタチ。
          <br />
          まずは、無料ではじめてみませんか。
        </h2>
        <p className="opacity-90 mb-9 text-base">
          登録は30秒。クレジットカード登録も不要です。
        </p>
        <Link
          href="/auth/register"
          className="inline-flex items-center justify-center px-10 py-4.5 rounded-full text-base font-bold text-lp-ink bg-lp-cream shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 transition-all duration-200"
        >
          無料ではじめる →
        </Link>
        <div className="text-xs mt-5 opacity-75">
          ※初回ご利用の方には¥500割引クーポンをプレゼント中
        </div>
      </div>
    </section>
  );
}

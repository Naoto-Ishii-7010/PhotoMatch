import Link from "next/link";

/**
 * 最終CTAセクション
 * - PDFのP12: 新規会員登録訴求（KGI: 新規会員登録数の最大化）
 */
export default function CtaSection() {
  return (
    <section className="bg-lp-dark py-20 lg:py-28 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-lp-gold/5 -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-lp-green/5 translate-y-1/2" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* ヘッドライン */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          さあ、はじめましょう。
        </h2>
        <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          PhotoMatch に登録して、理想のフォトグラファーと出会う体験を。
          <br className="hidden sm:block" />
          依頼も受注も、すべてここから。
        </p>

        {/* CTAボタン群 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/auth/register"
            className="inline-flex items-center justify-center bg-lp-gold text-white px-10 py-4 rounded-full text-base font-semibold hover:opacity-90 transition-opacity shadow-lg"
          >
            無料で登録する
          </Link>
          <Link
            href="/auth/register?role=photographer"
            className="inline-flex items-center justify-center border border-white/30 text-white px-10 py-4 rounded-full text-base font-medium hover:bg-white/10 transition-colors"
          >
            フォトグラファーとして登録
          </Link>
        </div>

        {/* 補足テキスト */}
        <p className="text-white/40 text-xs mt-6">
          登録無料・クレジットカード不要・いつでも退会可能
        </p>
      </div>
    </section>
  );
}

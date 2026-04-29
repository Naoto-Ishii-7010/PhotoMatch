import Link from "next/link";

/**
 * LPヘッダー
 * - ロゴ（テキスト）と新規登録・ログインCTAボタンを配置
 * - スクロール後も常に上部固定（sticky）
 */
export default function LpHeader() {
  return (
    <header className="sticky top-0 z-50 bg-lp-cream/95 backdrop-blur-xl border-b border-lp-line">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[64px]">
        {/* ロゴ */}
        <Link
          href="/lp"
          className="font-[family-name:var(--font-noto-serif)] font-black text-[22px] tracking-tight"
        >
          <span className="text-black">Photo</span>
          <span className="text-lp-brand">Match</span>
        </Link>

        {/* ナビゲーション（PCのみ表示） */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          <Link
            href="#what"
            className="text-lp-ink-soft hover:text-lp-brand transition-colors duration-200"
          >
            サービスとは
          </Link>
          <Link
            href="#stories"
            className="text-lp-ink-soft hover:text-lp-brand transition-colors duration-200"
          >
            こんな方に
          </Link>
          <Link
            href="#price"
            className="text-lp-ink-soft hover:text-lp-brand transition-colors duration-200"
          >
            料金の仕組み
          </Link>
          <Link
            href="#safety"
            className="text-lp-ink-soft hover:text-lp-brand transition-colors duration-200"
          >
            安心・安全
          </Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-2.5">
          <Link
            href="/auth/login"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-[13px] font-bold border-[1.5px] border-lp-ink text-lp-ink bg-transparent hover:bg-lp-ink hover:text-white transition-all duration-200"
          >
            ログイン
          </Link>
          <Link
            href="/auth/register"
            className="inline-flex items-center justify-center px-[30px] py-2.5 rounded-full text-[15px] font-bold text-white bg-lp-accent shadow-[0_8px_20px_rgba(216,92,58,0.35)] hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(216,92,58,0.45)] transition-all duration-200"
          >
            無料ではじめる
          </Link>
        </div>
      </div>
    </header>
  );
}

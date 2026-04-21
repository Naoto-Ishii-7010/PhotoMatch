import Link from "next/link";
import { ThemeToggle } from "../../ui/ThemeToggle";

/**
 * LPヘッダー
 * - ロゴ（テキスト）と新規登録・ログインCTAボタンを配置
 * - スクロール後も常に上部固定（sticky）
 * - ダークモード切り替えボタンを配置
 */
export default function LpHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-lp-cream/95 backdrop-blur-sm border-b border-lp-gold-light transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* ロゴ */}
        <Link href="/lp" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-lp-dark">
            Photo
            <span className="text-lp-gold">Match</span>
          </span>
        </Link>

        {/* ナビゲーション（PCのみ表示） */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-lp-gray">
          <Link
            href="#how-it-works"
            className="hover:text-lp-dark transition-colors"
          >
            使い方
          </Link>
          <Link
            href="#features"
            className="hover:text-lp-dark transition-colors"
          >
            機能
          </Link>
          <Link href="#safety" className="hover:text-lp-dark transition-colors">
            安心・安全
          </Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          {/* テーマ切り替えボタン */}
          <ThemeToggle />
          <Link
            href="/auth/login"
            className="text-sm text-lp-dark hover:text-lp-gold transition-colors hidden sm:block"
          >
            ログイン
          </Link>
          <Link
            href="/auth/register"
            className="text-sm bg-lp-gold text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity font-medium"
          >
            無料登録
          </Link>
        </div>
      </div>
    </header>
  );
}

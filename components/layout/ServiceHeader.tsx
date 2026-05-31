import Link from "next/link";
import UserMenu from "@/components/layout/UserMenu";
import type { AuthenticatedUser } from "@/server/auth/auth-context";

type ServiceHeaderProps = {
  user: AuthenticatedUser | null;
};

export default function ServiceHeader({ user }: ServiceHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-lp-line">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center gap-8 h-[64px]">
        {/* ロゴ */}
        <Link
          href="/"
          className="shrink-0 font-[family-name:var(--font-noto-serif)] font-black text-[22px] tracking-tight"
        >
          <span className="text-black">Photo</span>
          <span className="text-lp-brand">Match</span>
        </Link>

        {/* ナビゲーション（PCのみ・ロゴ直後に左寄せ） */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium flex-1">
          <Link
            href="/search"
            className="text-lp-ink-soft hover:text-lp-ink transition-colors duration-200"
          >
            フォトグラファーを探す
          </Link>
          <Link
            href="/jobs"
            className="text-lp-ink-soft hover:text-lp-ink transition-colors duration-200"
          >
            案件を探す
          </Link>
          {user && (
            <Link
              href="/requests/new"
              className="text-lp-ink-soft hover:text-lp-ink transition-colors duration-200"
            >
              依頼する
            </Link>
          )}
          {user && (
            <Link
              href="/chats"
              className="text-lp-ink-soft hover:text-lp-ink transition-colors duration-200"
            >
              チャット
            </Link>
          )}
        </nav>

        {/* 右側：ログイン状態で出し分け */}
        <div className="ml-auto flex items-center gap-2.5">
          {user ? (
            <UserMenu user={user} />
          ) : (
            <Link
              href="/login"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-[13px] font-bold text-lp-ink border-[1.5px] border-lp-ink hover:bg-lp-ink hover:text-white transition-all duration-200"
            >
              ログイン
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

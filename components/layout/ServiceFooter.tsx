import Link from "next/link";

export default function ServiceFooter() {
  return (
    <footer className="hidden md:block border-t border-lp-line bg-white">
      <div className="max-w-[1200px] mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/"
          className="font-[family-name:var(--font-noto-serif)] font-black text-[18px] tracking-tight"
        >
          <span className="text-black">Photo</span>
          <span className="text-lp-brand">Match</span>
        </Link>

        <nav className="flex items-center gap-6 text-xs text-lp-ink-muted">
          <Link href="#" className="hover:text-lp-ink transition-colors">
            利用規約
          </Link>
          <Link href="#" className="hover:text-lp-ink transition-colors">
            プライバシーポリシー
          </Link>
          <Link href="/lp" className="hover:text-lp-ink transition-colors">
            サービスについて
          </Link>
        </nav>

        <p className="text-xs text-lp-ink-muted">
          © {new Date().getFullYear()} PhotoMatch
        </p>
      </div>
    </footer>
  );
}

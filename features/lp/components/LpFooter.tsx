import Link from "next/link";

/**
 * LPフッター
 * - コピーライト・主要リンク・サービス概要を配置
 */
export default function LpFooter() {
  return (
    <footer className="bg-lp-ink text-lp-cream/60 py-10 pb-7 text-xs">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex justify-between flex-wrap gap-6 items-start">
          <div>
            <div className="font-[family-name:var(--font-noto-serif)] font-black text-[20px] text-lp-cream mb-2">
              Photo<span className="text-lp-gold">Match</span>
            </div>
            <div className="mt-2">
              プロじゃなくていい。いい写真は、もっと気軽に。
            </div>
          </div>
          <div className="flex flex-wrap gap-4.5">
            <Link
              href="#"
              className="text-lp-cream/70 hover:text-lp-cream transition-colors"
            >
              サービスについて
            </Link>
            <Link
              href="#"
              className="text-lp-cream/70 hover:text-lp-cream transition-colors"
            >
              使い方
            </Link>
            <Link
              href="#"
              className="text-lp-cream/70 hover:text-lp-cream transition-colors"
            >
              料金
            </Link>
            <Link
              href="#"
              className="text-lp-cream/70 hover:text-lp-cream transition-colors"
            >
              運営会社
            </Link>
            <Link
              href="#"
              className="text-lp-cream/70 hover:text-lp-cream transition-colors"
            >
              お問い合わせ
            </Link>
            <Link
              href="#"
              className="text-lp-cream/70 hover:text-lp-cream transition-colors"
            >
              プライバシーポリシー
            </Link>
          </div>
        </div>
        <div className="mt-7 text-center">
          © 2026 PhotoMatch. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

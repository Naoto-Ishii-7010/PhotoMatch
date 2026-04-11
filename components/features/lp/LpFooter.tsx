import Link from "next/link";

/**
 * LPフッター
 * - コピーライト・主要リンク・サービス概要を配置
 */
export default function LpFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-lp-dark text-white/60 py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* ロゴ・説明 */}
          <div className="lg:col-span-2">
            <Link href="/lp" className="inline-block mb-4">
              <span className="text-xl font-bold text-white">
                Photo<span className="text-lp-gold">Match</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              写真を依頼したいゲストと、スキルを提供するホストを繋ぐ次世代フォトマッチングプラットフォーム。
            </p>
          </div>

          {/* サービスリンク */}
          <div>
            <p className="text-white text-sm font-semibold mb-4">サービス</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#how-it-works"
                  className="hover:text-white transition-colors"
                >
                  使い方
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="hover:text-white transition-colors"
                >
                  機能紹介
                </Link>
              </li>
              <li>
                <Link
                  href="#safety"
                  className="hover:text-white transition-colors"
                >
                  安心・安全
                </Link>
              </li>
              <li>
                <Link
                  href="/auth/register"
                  className="hover:text-white transition-colors"
                >
                  無料登録
                </Link>
              </li>
            </ul>
          </div>

          {/* サポートリンク */}
          <div>
            <p className="text-white text-sm font-semibold mb-4">サポート</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  よくある質問
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  利用規約
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* コピーライト */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            © {currentYear} PhotoMatch. All rights reserved.
          </p>
          <p className="text-xs">Made in Japan</p>
        </div>
      </div>
    </footer>
  );
}

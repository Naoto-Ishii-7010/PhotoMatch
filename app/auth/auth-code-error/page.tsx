import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "認証エラー | PhotoMatch",
  description: "認証処理中にエラーが発生した場合の案内ページです。",
};

export default function AuthCodeErrorPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-lp-cream px-6 py-16 text-lp-ink">
      <div className="w-full max-w-lg rounded-3xl border border-lp-line bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-semibold tracking-[0.2em] text-lp-accent">
          AUTH ERROR
        </p>
        <h1 className="mt-4 font-playfair text-3xl font-bold">
          認証を完了できませんでした
        </h1>
        <p className="mt-4 text-sm leading-7 text-lp-ink-soft sm:text-base">
          お手数ですが、時間をおいてもう一度お試しください。
          解決しない場合は、ログイン画面から再度認証をやり直してください。
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/login"
            className="inline-flex items-center rounded-full bg-lp-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-lp-brand-dark"
          >
            ログイン画面へ戻る
          </Link>
        </div>
      </div>
    </main>
  );
}

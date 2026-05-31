"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import GoogleSignInButton from "@/features/auth/components/GoogleSignInButton";

/**
 * ログイン／新規登録フォームパネル
 * - mode=signup のとき新規登録モードで表示
 * - セッション切れ（expired=1）のときエラーバナーを表示
 */
export default function LoginForm() {
  const searchParams = useSearchParams();
  const isSignUp = searchParams.get("mode") === "signup";
  const isExpired = searchParams.get("expired") === "1";

  return (
    <div className="flex w-full flex-col items-center justify-center bg-[#fff8f3] px-8 py-16 shadow-[-4px_0px_24px_0px_rgba(0,0,0,0.02)] lg:w-2/5 lg:min-h-screen">
      <div className="flex w-full max-w-[416px] flex-col gap-6">
        {/* ロゴ */}
        <div className="pb-6">
          <Link
            href="/lp"
            className="text-[24px] font-bold tracking-[-0.6px] text-lp-brand hover:opacity-80 transition-opacity"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            PhotoMatch
          </Link>
        </div>

        {/* セッション切れバナー */}
        {isExpired && (
          <div className="flex gap-3 rounded-lg border border-[#ffdad6] bg-[rgba(255,218,214,0.5)] p-4 shadow-sm">
            <span className="mt-0.5 shrink-0 text-[#93000a]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
            </span>
            <div className="flex flex-col gap-1">
              <p
                className="text-[20px] font-medium leading-tight text-[#93000a]"
                style={{ fontFamily: "var(--font-zen-kaku, sans-serif)" }}
              >
                セッションの有効期限が切れました
              </p>
              <p
                className="text-[14px] leading-relaxed text-[rgba(147,0,10,0.9)]"
                style={{ fontFamily: "var(--font-zen-kaku, sans-serif)" }}
              >
                安全のため、自動的にログアウトしました。お手数ですが、再度ログインをお願いいたします。
              </p>
            </div>
          </div>
        )}

        {/* 挨拶・説明 */}
        <div className="flex flex-col gap-2 pb-2">
          <h1
            className="text-[32px] font-medium text-[#211b11]"
            style={{ fontFamily: "var(--font-zen-kaku, sans-serif)" }}
          >
            {isSignUp ? "はじめまして" : "おかえりなさい"}
          </h1>
          <p
            className="text-[14px] leading-relaxed text-[#4e453a]"
            style={{ fontFamily: "var(--font-zen-kaku, sans-serif)" }}
          >
            {isSignUp
              ? "アカウントを作成して、あなたにぴったりのフォトグラファーを見つけましょう。"
              : "ログインして、あなたにぴったりのフォトグラファーを見つけましょう。"}
          </p>
        </div>

        {/* Googleログインボタン */}
        <GoogleSignInButton variant="login" redirectAfterSignIn="/">
          {isSignUp ? "Googleで新規登録" : "Googleでログイン"}
        </GoogleSignInButton>

        {/* 切り替えリンク */}
        <div className="flex flex-col gap-4 border-t border-[rgba(210,196,182,0.3)] pt-8">
          <p
            className="text-center text-[14px] text-[#4e453a]"
            style={{ fontFamily: "var(--font-zen-kaku, sans-serif)" }}
          >
            {isSignUp ? (
              <>
                すでにアカウントをお持ちの場合は{" "}
                <Link
                  href="/login"
                  className="font-medium text-lp-brand underline-offset-2 hover:underline"
                >
                  ログインはこちら
                </Link>
              </>
            ) : (
              <>
                アカウントをお持ちでない場合は{" "}
                <Link
                  href="/login?mode=signup"
                  className="font-medium text-lp-brand underline-offset-2 hover:underline"
                >
                  新規登録はこちら
                </Link>
              </>
            )}
          </p>

          {/* フッターリンク */}
          <div
            className="flex items-center justify-center gap-4 text-[12px] text-[rgba(78,69,58,0.7)]"
            style={{ fontFamily: "var(--font-zen-kaku, sans-serif)" }}
          >
            <Link href="#" className="hover:text-lp-ink-soft transition-colors">
              お困りの方へ（ヘルプ）
            </Link>
            <span className="text-[rgba(78,69,58,0.3)] text-base leading-none">
              •
            </span>
            <Link href="#" className="hover:text-lp-ink-soft transition-colors">
              利用規約
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

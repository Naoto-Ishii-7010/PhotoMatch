"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FiCamera } from "react-icons/fi";
import GoogleSignInButton from "@/features/auth/components/GoogleSignInButton";

/**
 * モバイル用ログインカードのコンテンツ
 * - mode=signup のとき新規登録モードで表示
 */
export default function MobileLoginCard() {
  const searchParams = useSearchParams();
  const isSignUp = searchParams.get("mode") === "signup";

  return (
    <>
      {/* ブランドヘッダー */}
      <div className="mb-6 flex flex-col items-center gap-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lp-brand shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
          <FiCamera className="h-5 w-5 text-white" aria-hidden="true" />
        </div>
        <h1
          className="text-[32px] font-bold tracking-[-0.8px] text-lp-brand"
          style={{ fontFamily: "var(--font-playfair, serif)" }}
        >
          PhotoMatch
        </h1>
        <p
          className="text-center text-[14px] leading-relaxed text-[#4e453a]"
          style={{ fontFamily: "var(--font-zen-kaku, sans-serif)" }}
        >
          {isSignUp
            ? "アカウントを作成して、素敵な写真体験を始めましょう。"
            : "お帰りなさい。素敵な写真体験を続けましょう。"}
        </p>
      </div>

      {/* Googleログインボタン */}
      <div className="mb-6">
        <GoogleSignInButton variant="login" redirectAfterSignIn="/">
          {isSignUp ? "Googleで新規登録" : "Googleでログイン"}
        </GoogleSignInButton>
      </div>

      {/* 切り替えリンク */}
      <div
        className="flex flex-col items-center gap-1 text-[14px]"
        style={{ fontFamily: "var(--font-zen-kaku, sans-serif)" }}
      >
        <span className="text-[#4e453a]">
          {isSignUp
            ? "すでにアカウントをお持ちですか？"
            : "アカウントをお持ちでないですか？"}
        </span>
        <Link
          href={isSignUp ? "/login" : "/login?mode=signup"}
          className="font-medium text-lp-brand underline-offset-2 hover:underline"
        >
          {isSignUp ? "ログイン" : "新規登録"}
        </Link>
      </div>
    </>
  );
}

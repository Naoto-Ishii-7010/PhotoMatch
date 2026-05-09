"use client";

import type { ReactNode } from "react";
import { FcGoogle } from "react-icons/fc";
import { createClient } from "@/lib/supabase/client";

type GoogleSignInButtonProps = {
  children?: ReactNode;
  className?: string;
  variant?: "default" | "lpHeader";
};

const baseClassName =
  "inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(15,23,42,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-400 disabled:cursor-not-allowed disabled:opacity-60";

const variantClassNames = {
  default: {
    container: "w-full",
    button: "",
  },
  lpHeader: {
    container: "w-auto",
    button:
      "w-auto rounded-full border-[1.5px] border-lp-ink bg-transparent px-5 py-2.5 text-[13px] font-bold text-lp-ink shadow-none hover:translate-y-0 hover:bg-lp-ink hover:text-white hover:shadow-none focus-visible:ring-lp-ink/40",
  },
} as const;

export default function GoogleSignInButton({
  children = "Googleでサインイン",
  className = "",
  variant = "default",
}: GoogleSignInButtonProps) {
  const variantClassName = variantClassNames[variant];

  const handleSignIn = async () => {
    try {
      const supabase = createClient();
      const next = `${window.location.pathname}${window.location.search}`;
      const redirectTo = `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}`;
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo,
        },
      });

      if (error) {
        console.error("Google sign-in failed", error);
      }
    } catch (error) {
      console.error("Google sign-in failed", error);
    }
  };

  return (
    <div className={variantClassName.container}>
      <button
        type="button"
        onClick={handleSignIn}
        className={`${baseClassName} ${variantClassName.button} ${className}`.trim()}
      >
        <FcGoogle aria-hidden="true" className="h-[18px] w-[18px] shrink-0" />
        <span>{children}</span>
      </button>
    </div>
  );
}

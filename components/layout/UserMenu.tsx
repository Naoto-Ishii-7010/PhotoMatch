"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoNotificationsOutline } from "react-icons/io5";
import { signOut } from "@/features/auth/actions/sign-out";
import type { AuthenticatedUser } from "@/server/auth/auth-context";

type UserMenuProps = {
  user: AuthenticatedUser;
};

export default function UserMenu({ user }: UserMenuProps) {
  const [open, setOpen] = useState(false);
  const initial = (user.displayName ?? user.email).charAt(0).toUpperCase();

  const handleSignOut = async () => {
    setOpen(false);
    await signOut();
  };

  return (
    <div className="flex items-center gap-3">
      {/* 通知アイコン（バッジは後続タスクで実装） */}
      <Link
        href="/notifications"
        className="relative p-2 rounded-full text-lp-ink-soft hover:text-lp-ink hover:bg-lp-cream transition-colors"
        aria-label="通知"
      >
        <IoNotificationsOutline className="w-5 h-5" />
      </Link>

      {/* アバター・ドロップダウン */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="w-9 h-9 rounded-full overflow-hidden bg-lp-brand text-white text-sm font-bold flex items-center justify-center hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lp-brand focus-visible:ring-offset-2"
          aria-label="アカウントメニュー"
          aria-expanded={open}
          aria-haspopup="menu"
        >
          {user.avatarUrl ? (
            <Image
              src={user.avatarUrl}
              alt={user.displayName ?? user.email}
              width={36}
              height={36}
              className="w-full h-full object-cover"
            />
          ) : (
            initial
          )}
        </button>

        {open && (
          <>
            {/* 背景オーバーレイ（クリックで閉じる） */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            <div
              role="menu"
              className="absolute right-0 top-11 z-50 w-48 rounded-xl border border-lp-line bg-white shadow-lg py-1"
            >
              <Link
                href="/profile"
                role="menuitem"
                className="block px-4 py-2.5 text-sm text-lp-ink hover:bg-lp-cream transition-colors"
                onClick={() => setOpen(false)}
              >
                マイページ
              </Link>
              <Link
                href="/settings"
                role="menuitem"
                className="block px-4 py-2.5 text-sm text-lp-ink hover:bg-lp-cream transition-colors"
                onClick={() => setOpen(false)}
              >
                設定
              </Link>
              <hr className="my-1 border-lp-line" />
              <button
                type="button"
                role="menuitem"
                onClick={handleSignOut}
                className="w-full text-left px-4 py-2.5 text-sm text-lp-ink hover:bg-lp-cream transition-colors"
              >
                ログアウト
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

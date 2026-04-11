// Auth.js（next-auth v4）のセッション型を拡張する
// user.id と user.role をセッションで使用できるようにする

import type { DefaultSession } from "next-auth";

// ユーザーロール定義
type UserRole = "REQUESTER" | "PHOTOGRAPHER" | "ADMIN";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role?: UserRole;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: UserRole;
  }
}

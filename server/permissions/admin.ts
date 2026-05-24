import "server-only";

import { UserRole } from "@/lib/generated/prisma/client";
import { requireRole } from "@/server/auth/auth-context";
import type { AuthContext } from "@/server/auth/auth-context";

// 管理者ロールを必須とする認証ガード
// 管理者以外のユーザーが呼び出した場合は AuthorizationError をスローする
// 未認証の場合は AuthenticationRequiredError をスローする
// Server Action・Route Handler の先頭で呼び出すこと
export async function requireAdmin(): Promise<AuthContext> {
  return requireRole([UserRole.ADMIN]);
}

import "server-only";

import type { User, UserRole } from "@/lib/generated/prisma/client";
import { UserRole as UserRoleEnum } from "@/lib/generated/prisma/client";

export function hasRequiredRole(
  userRole: UserRole,
  allowedRoles: readonly UserRole[],
) {
  return allowedRoles.includes(userRole);
}

// ユーザーが管理者ロールを持つかどうかを判定する
export function isAdmin(user: Pick<User, "role">): boolean {
  return user.role === UserRoleEnum.ADMIN;
}

import "server-only";

import type { UserRole } from "@/lib/generated/prisma/client";

export function hasRequiredRole(
  userRole: UserRole,
  allowedRoles: readonly UserRole[],
) {
  return allowedRoles.includes(userRole);
}

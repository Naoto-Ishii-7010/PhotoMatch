import "server-only";

import type { User, UserRole } from "@/lib/generated/prisma/client";
import { UserStatus } from "@/lib/generated/prisma/client";
import { createClient } from "@/lib/supabase/server";
import { hasRequiredRole } from "@/server/permissions/roles";
import { prisma } from "@/server/db";
import { syncAuthUser } from "@/server/auth/sync-auth-user";
import {
  AuthenticationRequiredError,
  AuthorizationError,
  SuspendedAccountError,
} from "@/server/auth/errors";

export type AuthenticatedUser = Pick<
  User,
  "id" | "email" | "role" | "status" | "termsAcceptedAt" | "privacyAcceptedAt"
>;

export type AuthContext = {
  authUserId: string;
  user: AuthenticatedUser;
};

const authContextUserSelect = {
  id: true,
  email: true,
  role: true,
  status: true,
  termsAcceptedAt: true,
  privacyAcceptedAt: true,
} as const;

export function assertUserIsActive(user: Pick<User, "status">) {
  if (user.status === UserStatus.SUSPENDED) {
    throw new SuspendedAccountError();
  }
}

async function getOrSyncAppUser(
  authUserId: string,
): Promise<AuthenticatedUser> {
  const existingUser = await prisma.user.findUnique({
    where: { id: authUserId },
    select: authContextUserSelect,
  });

  if (existingUser) {
    return existingUser;
  }

  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user || data.user.id !== authUserId) {
    throw new Error("Authenticated Supabase user could not be loaded.");
  }

  const syncedUser = await syncAuthUser(data.user);

  return {
    id: syncedUser.id,
    email: syncedUser.email,
    role: syncedUser.role,
    status: syncedUser.status,
    termsAcceptedAt: syncedUser.termsAcceptedAt,
    privacyAcceptedAt: syncedUser.privacyAcceptedAt,
  };
}

export async function getAuthContext(): Promise<AuthContext | null> {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();

  if (error) {
    return null;
  }

  const authUserId = data?.claims?.sub;

  if (typeof authUserId !== "string" || authUserId.length === 0) {
    return null;
  }

  const user = await getOrSyncAppUser(authUserId);

  return {
    authUserId,
    user,
  };
}

export async function requireAuth(): Promise<AuthContext> {
  const authContext = await getAuthContext();

  if (!authContext) {
    throw new AuthenticationRequiredError();
  }

  assertUserIsActive(authContext.user);

  return authContext;
}

export async function requireRole(
  allowedRoles: readonly UserRole[],
): Promise<AuthContext> {
  const authContext = await requireAuth();

  if (!hasRequiredRole(authContext.user.role, allowedRoles)) {
    throw new AuthorizationError();
  }

  return authContext;
}

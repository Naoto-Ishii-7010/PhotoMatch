import { afterEach, describe, expect, it, vi } from "vitest";
import { UserRole, UserStatus } from "@/lib/generated/prisma/client";
import {
  AuthenticationRequiredError,
  AuthorizationError,
  SuspendedAccountError,
  getAuthContext,
  requireAuth,
  requireRole,
} from "@/server/auth";
import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/server/db";
import { syncAuthUser } from "@/server/auth/sync-auth-user";

vi.mock("@/lib/supabase/server", () => ({
  createClient: vi.fn(),
}));

vi.mock("@/server/db", () => ({
  prisma: {
    user: {
      findUnique: vi.fn(),
    },
  },
}));

vi.mock("@/server/auth/sync-auth-user", () => ({
  syncAuthUser: vi.fn(),
}));

const createClientMock = vi.mocked(createClient);
const findUniqueMock = vi.mocked(prisma.user.findUnique);
const syncAuthUserMock = vi.mocked(syncAuthUser);

const activeUser = {
  id: "user-1",
  email: "user@example.com",
  role: UserRole.USER,
  status: UserStatus.ACTIVE,
  termsAcceptedAt: null,
  privacyAcceptedAt: null,
};

function createSupabaseClientMock() {
  return {
    auth: {
      getClaims: vi.fn(),
      getUser: vi.fn(),
      signOut: vi.fn(),
    },
  };
}

describe("server/auth/auth-context", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("returns null when the request is unauthenticated", async () => {
    const supabase = createSupabaseClientMock();
    supabase.auth.getClaims.mockResolvedValue({
      data: { claims: null },
      error: null,
    });
    createClientMock.mockResolvedValue(supabase as never);

    await expect(getAuthContext()).resolves.toBeNull();
    expect(findUniqueMock).not.toHaveBeenCalled();
  });

  it("returns an auth context when the app user already exists", async () => {
    const supabase = createSupabaseClientMock();
    supabase.auth.getClaims.mockResolvedValue({
      data: { claims: { sub: activeUser.id } },
      error: null,
    });
    createClientMock.mockResolvedValue(supabase as never);
    findUniqueMock.mockResolvedValue(activeUser as never);

    await expect(getAuthContext()).resolves.toEqual({
      authUserId: activeUser.id,
      user: activeUser,
    });
    expect(supabase.auth.getUser).not.toHaveBeenCalled();
    expect(syncAuthUserMock).not.toHaveBeenCalled();
  });

  it("syncs the app user when Supabase auth exists but the app record is missing", async () => {
    const supabase = createSupabaseClientMock();
    const authUser = {
      id: activeUser.id,
      email: activeUser.email,
      user_metadata: {
        full_name: "User Example",
        avatar_url: "https://example.com/avatar.png",
      },
    };

    supabase.auth.getClaims.mockResolvedValue({
      data: { claims: { sub: activeUser.id } },
      error: null,
    });
    supabase.auth.getUser.mockResolvedValue({
      data: { user: authUser },
      error: null,
    });
    createClientMock.mockResolvedValue(supabase as never);
    findUniqueMock.mockResolvedValue(null);
    syncAuthUserMock.mockResolvedValue({
      ...activeUser,
      displayName: "User Example",
      avatarUrl: "https://example.com/avatar.png",
      bio: null,
      activityPrefecture: null,
      activityCity: null,
      genres: [],
      createdAt: new Date("2026-01-01T00:00:00.000Z"),
      updatedAt: new Date("2026-01-01T00:00:00.000Z"),
    } as never);

    await expect(getAuthContext()).resolves.toEqual({
      authUserId: activeUser.id,
      user: activeUser,
    });
    expect(supabase.auth.getUser).toHaveBeenCalledTimes(1);
    expect(syncAuthUserMock).toHaveBeenCalledWith(authUser);
  });

  it("throws when authentication is required but no session exists", async () => {
    const supabase = createSupabaseClientMock();
    supabase.auth.getClaims.mockResolvedValue({
      data: { claims: null },
      error: null,
    });
    createClientMock.mockResolvedValue(supabase as never);

    await expect(requireAuth()).rejects.toBeInstanceOf(
      AuthenticationRequiredError,
    );
  });

  it("throws for suspended users before returning an auth context", async () => {
    const supabase = createSupabaseClientMock();
    supabase.auth.getClaims.mockResolvedValue({
      data: { claims: { sub: activeUser.id } },
      error: null,
    });
    createClientMock.mockResolvedValue(supabase as never);
    findUniqueMock.mockResolvedValue({
      ...activeUser,
      status: UserStatus.SUSPENDED,
    } as never);

    await expect(requireAuth()).rejects.toBeInstanceOf(SuspendedAccountError);
  });

  it("throws when the signed-in user does not have a required role", async () => {
    const supabase = createSupabaseClientMock();
    supabase.auth.getClaims.mockResolvedValue({
      data: { claims: { sub: activeUser.id } },
      error: null,
    });
    createClientMock.mockResolvedValue(supabase as never);
    findUniqueMock.mockResolvedValue(activeUser as never);

    await expect(requireRole([UserRole.ADMIN])).rejects.toBeInstanceOf(
      AuthorizationError,
    );
  });

  it("returns the auth context when the signed-in user has a required role", async () => {
    const supabase = createSupabaseClientMock();
    const adminUser = { ...activeUser, role: UserRole.ADMIN };

    supabase.auth.getClaims.mockResolvedValue({
      data: { claims: { sub: adminUser.id } },
      error: null,
    });
    createClientMock.mockResolvedValue(supabase as never);
    findUniqueMock.mockResolvedValue(adminUser as never);

    await expect(requireRole([UserRole.ADMIN])).resolves.toEqual({
      authUserId: adminUser.id,
      user: adminUser,
    });
  });
});

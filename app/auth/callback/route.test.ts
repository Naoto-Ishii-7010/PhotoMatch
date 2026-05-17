import { afterEach, describe, expect, it, vi } from "vitest";
import { UserRole, UserStatus } from "@/lib/generated/prisma/client";
import { GET } from "@/app/auth/callback/route";
import { createClient } from "@/lib/supabase/server";
import { syncAuthUser } from "@/server/auth/sync-auth-user";

vi.mock("@/lib/supabase/server", () => ({
  createClient: vi.fn(),
}));

vi.mock("@/server/auth/sync-auth-user", () => ({
  syncAuthUser: vi.fn(),
}));

vi.mock("@/server/auth", () => {
  class SuspendedAccountError extends Error {
    constructor(message = "This account is suspended.") {
      super(message);
      this.name = "SuspendedAccountError";
    }
  }

  return {
    SuspendedAccountError,
    assertUserIsActive: vi.fn((user: { status: string }) => {
      if (user.status === "SUSPENDED") {
        throw new SuspendedAccountError();
      }
    }),
  };
});

const createClientMock = vi.mocked(createClient);
const syncAuthUserMock = vi.mocked(syncAuthUser);

function createSupabaseClientMock() {
  return {
    auth: {
      exchangeCodeForSession: vi.fn(),
      getUser: vi.fn(),
      signOut: vi.fn(),
    },
  };
}

describe("app/auth/callback/route", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("signs out suspended users and redirects them to the auth error page", async () => {
    const supabase = createSupabaseClientMock();
    const authUser = {
      id: "user-1",
      email: "user@example.com",
      user_metadata: {},
    };

    supabase.auth.exchangeCodeForSession.mockResolvedValue({ error: null });
    supabase.auth.getUser.mockResolvedValue({
      data: { user: authUser },
      error: null,
    });
    createClientMock.mockResolvedValue(supabase as never);
    syncAuthUserMock.mockResolvedValue({
      id: authUser.id,
      email: authUser.email,
      displayName: null,
      avatarUrl: null,
      bio: null,
      activityPrefecture: null,
      activityCity: null,
      genres: [],
      role: UserRole.USER,
      status: UserStatus.SUSPENDED,
      termsAcceptedAt: null,
      privacyAcceptedAt: null,
      createdAt: new Date("2026-01-01T00:00:00.000Z"),
      updatedAt: new Date("2026-01-01T00:00:00.000Z"),
    } as never);

    const response = await GET(
      new Request("https://example.com/auth/callback?code=test-code"),
    );

    expect(supabase.auth.signOut).toHaveBeenCalledTimes(1);
    expect(response.headers.get("location")).toBe(
      "https://example.com/auth/auth-code-error",
    );
  });

  it("redirects active users to the validated next path", async () => {
    const supabase = createSupabaseClientMock();
    const authUser = {
      id: "user-1",
      email: "user@example.com",
      user_metadata: {},
    };

    supabase.auth.exchangeCodeForSession.mockResolvedValue({ error: null });
    supabase.auth.getUser.mockResolvedValue({
      data: { user: authUser },
      error: null,
    });
    createClientMock.mockResolvedValue(supabase as never);
    syncAuthUserMock.mockResolvedValue({
      id: authUser.id,
      email: authUser.email,
      displayName: null,
      avatarUrl: null,
      bio: null,
      activityPrefecture: null,
      activityCity: null,
      genres: [],
      role: UserRole.USER,
      status: UserStatus.ACTIVE,
      termsAcceptedAt: null,
      privacyAcceptedAt: null,
      createdAt: new Date("2026-01-01T00:00:00.000Z"),
      updatedAt: new Date("2026-01-01T00:00:00.000Z"),
    } as never);

    const response = await GET(
      new Request(
        "https://example.com/auth/callback?code=test-code&next=/dashboard",
      ),
    );

    expect(supabase.auth.signOut).not.toHaveBeenCalled();
    expect(response.headers.get("location")).toBe(
      "https://example.com/dashboard",
    );
  });
});

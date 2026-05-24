import { describe, expect, it, vi } from "vitest";
import { UserRole, UserStatus } from "@/lib/generated/prisma/client";
import {
  AuthenticationRequiredError,
  AuthorizationError,
  SuspendedAccountError,
} from "@/server/auth";
import { requireAdmin } from "@/server/permissions/admin";

vi.mock("@/server/auth/auth-context", () => ({
  requireRole: vi.fn(),
}));

const { requireRole } = await import("@/server/auth/auth-context");
const requireRoleMock = vi.mocked(requireRole);

const adminAuthContext = {
  authUserId: "admin-1",
  user: {
    id: "admin-1",
    email: "admin@example.com",
    role: UserRole.ADMIN,
    status: UserStatus.ACTIVE,
    termsAcceptedAt: null,
    privacyAcceptedAt: null,
  },
};

describe("server/permissions/admin", () => {
  it("管理者ユーザーの場合は AuthContext を返す", async () => {
    requireRoleMock.mockResolvedValue(adminAuthContext);

    await expect(requireAdmin()).resolves.toEqual(adminAuthContext);
    expect(requireRoleMock).toHaveBeenCalledWith([UserRole.ADMIN]);
  });

  it("管理者以外のユーザーの場合は AuthorizationError をスローする", async () => {
    requireRoleMock.mockRejectedValue(new AuthorizationError());

    await expect(requireAdmin()).rejects.toBeInstanceOf(AuthorizationError);
  });

  it("未認証の場合は AuthenticationRequiredError をスローする", async () => {
    requireRoleMock.mockRejectedValue(new AuthenticationRequiredError());

    await expect(requireAdmin()).rejects.toBeInstanceOf(
      AuthenticationRequiredError,
    );
  });

  it("停止済みアカウントの場合は SuspendedAccountError をスローする", async () => {
    requireRoleMock.mockRejectedValue(new SuspendedAccountError());

    await expect(requireAdmin()).rejects.toBeInstanceOf(SuspendedAccountError);
  });
});

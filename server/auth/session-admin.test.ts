import { afterEach, describe, expect, it, vi } from "vitest";
import { revokeAllSessions, restoreSession } from "@/server/auth/session-admin";
import { createAdminClient } from "@/lib/supabase/admin";

vi.mock("@/lib/supabase/admin", () => ({
  createAdminClient: vi.fn(),
}));

const createAdminClientMock = vi.mocked(createAdminClient);

function createSupabaseAdminClientMock() {
  return {
    auth: {
      admin: {
        updateUserById: vi.fn(),
      },
    },
  };
}

describe("server/auth/session-admin", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("revokeAllSessions", () => {
    it("ban_duration: '876000h' で updateUserById を呼び出す", async () => {
      const supabase = createSupabaseAdminClientMock();
      supabase.auth.admin.updateUserById.mockResolvedValue({ error: null });
      createAdminClientMock.mockReturnValue(supabase as never);

      await revokeAllSessions("user-1");

      expect(supabase.auth.admin.updateUserById).toHaveBeenCalledWith(
        "user-1",
        { ban_duration: "876000h" },
      );
    });

    it("updateUserById がエラーを返した場合はスローする", async () => {
      const supabase = createSupabaseAdminClientMock();
      supabase.auth.admin.updateUserById.mockResolvedValue({
        error: { message: "ユーザーが見つかりません" },
      });
      createAdminClientMock.mockReturnValue(supabase as never);

      await expect(revokeAllSessions("user-1")).rejects.toThrow(
        "Supabase セッション失効に失敗しました",
      );
    });
  });

  describe("restoreSession", () => {
    it("ban_duration: 'none' で updateUserById を呼び出す", async () => {
      const supabase = createSupabaseAdminClientMock();
      supabase.auth.admin.updateUserById.mockResolvedValue({ error: null });
      createAdminClientMock.mockReturnValue(supabase as never);

      await restoreSession("user-1");

      expect(supabase.auth.admin.updateUserById).toHaveBeenCalledWith(
        "user-1",
        { ban_duration: "none" },
      );
    });

    it("updateUserById がエラーを返した場合はスローする", async () => {
      const supabase = createSupabaseAdminClientMock();
      supabase.auth.admin.updateUserById.mockResolvedValue({
        error: { message: "ユーザーが見つかりません" },
      });
      createAdminClientMock.mockReturnValue(supabase as never);

      await expect(restoreSession("user-1")).rejects.toThrow(
        "Supabase セッション停止解除に失敗しました",
      );
    });
  });
});

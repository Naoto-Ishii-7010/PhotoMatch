import { describe, expect, it } from "vitest";
import { UserRole } from "@/lib/generated/prisma/client";
import { isAdmin } from "@/server/permissions/roles";

describe("server/permissions/roles", () => {
  describe("isAdmin", () => {
    it("ADMIN ロールのユーザーに対して true を返す", () => {
      expect(isAdmin({ role: UserRole.ADMIN })).toBe(true);
    });

    it("USER ロールのユーザーに対して false を返す", () => {
      expect(isAdmin({ role: UserRole.USER })).toBe(false);
    });
  });
});

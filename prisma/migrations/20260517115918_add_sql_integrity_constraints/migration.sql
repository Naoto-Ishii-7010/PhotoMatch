-- Prevent self-referential relationships that application code already treats as invalid.
ALTER TABLE "Follow"
  ADD CONSTRAINT "Follow_no_self_follow_chk"
  CHECK ("followerId" <> "followeeId");

ALTER TABLE "DirectRequest"
  ADD CONSTRAINT "DirectRequest_no_self_request_chk"
  CHECK ("requesterId" <> "photographerId");

-- Only one pending direct request can exist per requester/photographer pair.
CREATE UNIQUE INDEX "DirectRequest_pending_pair_unique_idx"
  ON "DirectRequest" ("requesterId", "photographerId")
  WHERE "status" = 'PENDING';

-- A chat room must belong to exactly one job context.
ALTER TABLE "ChatRoom"
  ADD CONSTRAINT "ChatRoom_exactly_one_request_ref_chk"
  CHECK (num_nonnulls("directRequestId", "openRequestId") = 1);

-- Reports may retain history after target deletion via SET NULL, but they must never point to multiple targets.
ALTER TABLE "Report"
  ADD CONSTRAINT "Report_at_most_one_target_chk"
  CHECK (
    num_nonnulls(
      "reportedUserId",
      "reportedDirectRequestId",
      "reportedOpenRequestId",
      "reportedMessageId"
    ) <= 1
  );

ALTER TABLE "Report"
  ADD CONSTRAINT "Report_target_type_match_chk"
  CHECK (
    num_nonnulls(
      "reportedUserId",
      "reportedDirectRequestId",
      "reportedOpenRequestId",
      "reportedMessageId"
    ) = 0 OR
    ("targetType" = 'USER' AND "reportedUserId" IS NOT NULL) OR
    ("targetType" = 'DIRECT_REQUEST' AND "reportedDirectRequestId" IS NOT NULL) OR
    ("targetType" = 'OPEN_REQUEST' AND "reportedOpenRequestId" IS NOT NULL) OR
    ("targetType" = 'MESSAGE' AND "reportedMessageId" IS NOT NULL)
  );

ALTER TABLE "Report"
  ADD CONSTRAINT "Report_resolution_state_chk"
  CHECK (
    (
      "status" IN ('OPEN', 'REVIEWING') AND
      "resolvedByAdminId" IS NULL AND
      "resolvedAt" IS NULL AND
      "resolutionType" IS NULL AND
      "resolutionNote" IS NULL
    ) OR
    (
      "status" IN ('RESOLVED', 'DISMISSED') AND
      "resolvedByAdminId" IS NOT NULL AND
      "resolvedAt" IS NOT NULL AND
      "resolutionType" IS NOT NULL
    )
  );

-- Audit logs may outlive deleted targets via SET NULL, but they must never point to multiple targets.
ALTER TABLE "AuditLog"
  ADD CONSTRAINT "AuditLog_at_most_one_target_chk"
  CHECK (
    num_nonnulls(
      "targetUserId",
      "targetReportId",
      "targetDirectRequestId",
      "targetOpenRequestId",
      "targetChatRoomId"
    ) <= 1
  );

ALTER TABLE "AuditLog"
  ADD CONSTRAINT "AuditLog_action_target_match_chk"
  CHECK (
    num_nonnulls(
      "targetUserId",
      "targetReportId",
      "targetDirectRequestId",
      "targetOpenRequestId",
      "targetChatRoomId"
    ) = 0 OR
    (
      "actionType" IN ('USER_SUSPEND', 'USER_RESTORE') AND
      "targetUserId" IS NOT NULL
    ) OR
    (
      "actionType" IN ('REPORT_RESOLVE', 'REPORT_DISMISS') AND
      "targetReportId" IS NOT NULL
    ) OR
    (
      "actionType" = 'REQUEST_CANCEL' AND
      num_nonnulls("targetDirectRequestId", "targetOpenRequestId") = 1
    )
  );

-- System notifications have no typed target, all others require one.
ALTER TABLE "Notification"
  ADD CONSTRAINT "Notification_target_type_match_chk"
  CHECK (
    ("targetType" = 'SYSTEM' AND "targetId" IS NULL) OR
    ("targetType" IN ('DIRECT_REQUEST', 'OPEN_REQUEST', 'CHAT_ROOM', 'USER') AND "targetId" IS NOT NULL)
  );

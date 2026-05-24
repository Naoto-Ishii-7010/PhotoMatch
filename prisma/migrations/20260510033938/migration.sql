-- CreateEnum
CREATE TYPE "Genre" AS ENUM ('PORTRAIT', 'FAMILY_ANNIVERSARY', 'WEDDING', 'CEREMONY', 'SPORTS_ACTION', 'PET', 'LANDSCAPE_NATURE', 'ARCHITECTURE_INTERIOR', 'FOOD_PRODUCT', 'EVENT_PARTY', 'OTHER');

-- CreateEnum
CREATE TYPE "Prefecture" AS ENUM ('HOKKAIDO', 'AOMORI', 'IWATE', 'MIYAGI', 'AKITA', 'YAMAGATA', 'FUKUSHIMA', 'IBARAKI', 'TOCHIGI', 'GUNMA', 'SAITAMA', 'CHIBA', 'TOKYO', 'KANAGAWA', 'NIIGATA', 'TOYAMA', 'ISHIKAWA', 'FUKUI', 'YAMANASHI', 'NAGANO', 'GIFU', 'SHIZUOKA', 'AICHI', 'MIE', 'SHIGA', 'KYOTO', 'OSAKA', 'HYOGO', 'NARA', 'WAKAYAMA', 'TOTTORI', 'SHIMANE', 'OKAYAMA', 'HIROSHIMA', 'YAMAGUCHI', 'TOKUSHIMA', 'KAGAWA', 'EHIME', 'KOCHI', 'FUKUOKA', 'SAGA', 'NAGASAKI', 'KUMAMOTO', 'OITA', 'MIYAZAKI', 'KAGOSHIMA', 'OKINAWA');

-- CreateEnum
CREATE TYPE "PortfolioVisibility" AS ENUM ('PUBLIC', 'PRIVATE');

-- CreateEnum
CREATE TYPE "DirectRequestStatus" AS ENUM ('PENDING', 'MATCHED', 'IN_PROGRESS', 'COMPLETION_PENDING', 'COMPLETED', 'CANCELED');

-- CreateEnum
CREATE TYPE "DirectRequestCancelReason" AS ENUM ('PHOTOGRAPHER_DECLINED', 'APPROVAL_EXPIRED', 'REQUESTER_CANCELED', 'PHOTOGRAPHER_CANCELED', 'ADMIN_CANCELED');

-- CreateEnum
CREATE TYPE "OpenRequestStatus" AS ENUM ('OPEN', 'PROPOSAL_RECEIVED', 'MATCHED', 'IN_PROGRESS', 'COMPLETION_PENDING', 'COMPLETED', 'CANCELED');

-- CreateEnum
CREATE TYPE "OpenRequestCancelReason" AS ENUM ('NO_SELECTION_EXPIRED', 'NO_PROPOSALS', 'REQUESTER_CANCELED', 'PHOTOGRAPHER_CANCELED', 'ADMIN_CANCELED');

-- CreateEnum
CREATE TYPE "ProposalStatus" AS ENUM ('SUBMITTED', 'WITHDRAWN', 'ACCEPTED', 'REJECTED', 'CANCELED');

-- CreateEnum
CREATE TYPE "MessageType" AS ENUM ('USER', 'SYSTEM');

-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('DIRECT_REQUEST_RECEIVED', 'DIRECT_REQUEST_ACCEPTED', 'DIRECT_REQUEST_DECLINED', 'DIRECT_REQUEST_EXPIRED', 'OPEN_REQUEST_PROPOSAL_RECEIVED', 'PROPOSAL_ACCEPTED', 'PROPOSAL_REJECTED', 'OPEN_REQUEST_CLOSED', 'MESSAGE_RECEIVED', 'JOB_COMPLETION_PENDING', 'JOB_COMPLETED', 'JOB_CANCELED', 'FOLLOW_RECEIVED', 'ACCOUNT_SUSPENDED');

-- CreateEnum
CREATE TYPE "NotificationTargetType" AS ENUM ('DIRECT_REQUEST', 'OPEN_REQUEST', 'CHAT_ROOM', 'USER', 'SYSTEM');

-- CreateEnum
CREATE TYPE "ReportTargetType" AS ENUM ('USER', 'DIRECT_REQUEST', 'OPEN_REQUEST', 'MESSAGE');

-- CreateEnum
CREATE TYPE "ReportReason" AS ENUM ('SPAM', 'INAPPROPRIATE_CONTENT', 'OFF_PLATFORM_CONTACT', 'OTHER');

-- CreateEnum
CREATE TYPE "ReportStatus" AS ENUM ('OPEN', 'REVIEWING', 'RESOLVED', 'DISMISSED');

-- CreateEnum
CREATE TYPE "ReportResolutionType" AS ENUM ('NO_ACTION', 'WARNED', 'USER_SUSPENDED', 'REQUEST_CANCELED');

-- CreateEnum
CREATE TYPE "AdminActionType" AS ENUM ('USER_SUSPEND', 'USER_RESTORE', 'REPORT_RESOLVE', 'REPORT_DISMISS', 'REQUEST_CANCEL');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "activityCity" TEXT,
ADD COLUMN     "activityPrefecture" "Prefecture",
ADD COLUMN     "bio" TEXT,
ADD COLUMN     "genres" "Genre"[] DEFAULT ARRAY[]::"Genre"[],
ADD COLUMN     "privacyAcceptedAt" TIMESTAMP(3),
ADD COLUMN     "termsAcceptedAt" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "Portfolio" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "imagePath" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "genre" "Genre" NOT NULL,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "visibility" "PortfolioVisibility" NOT NULL DEFAULT 'PRIVATE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Portfolio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DirectRequest" (
    "id" UUID NOT NULL,
    "requesterId" UUID NOT NULL,
    "photographerId" UUID NOT NULL,
    "genre" "Genre" NOT NULL,
    "preferredDate" TIMESTAMP(3) NOT NULL,
    "prefecture" "Prefecture" NOT NULL,
    "city" TEXT NOT NULL,
    "budgetYen" INTEGER NOT NULL,
    "note" TEXT,
    "status" "DirectRequestStatus" NOT NULL DEFAULT 'PENDING',
    "cancelReason" "DirectRequestCancelReason",
    "approvalDeadlineAt" TIMESTAMP(3) NOT NULL,
    "matchedAt" TIMESTAMP(3),
    "startedAt" TIMESTAMP(3),
    "completionRequestedByRequesterAt" TIMESTAMP(3),
    "completionRequestedByPhotographerAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "canceledAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DirectRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OpenRequest" (
    "id" UUID NOT NULL,
    "requesterId" UUID NOT NULL,
    "matchedProposalId" UUID,
    "matchedPhotographerId" UUID,
    "genre" "Genre" NOT NULL,
    "preferredDate" TIMESTAMP(3) NOT NULL,
    "prefecture" "Prefecture" NOT NULL,
    "city" TEXT NOT NULL,
    "budgetYen" INTEGER NOT NULL,
    "note" TEXT,
    "applicationDeadlineAt" TIMESTAMP(3) NOT NULL,
    "status" "OpenRequestStatus" NOT NULL DEFAULT 'OPEN',
    "cancelReason" "OpenRequestCancelReason",
    "matchedAt" TIMESTAMP(3),
    "startedAt" TIMESTAMP(3),
    "completionRequestedByRequesterAt" TIMESTAMP(3),
    "completionRequestedByPhotographerAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "canceledAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OpenRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Proposal" (
    "id" UUID NOT NULL,
    "openRequestId" UUID NOT NULL,
    "photographerId" UUID NOT NULL,
    "priceYen" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "status" "ProposalStatus" NOT NULL DEFAULT 'SUBMITTED',
    "withdrawnAt" TIMESTAMP(3),
    "acceptedAt" TIMESTAMP(3),
    "rejectedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Proposal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatRoom" (
    "id" UUID NOT NULL,
    "requesterId" UUID NOT NULL,
    "photographerId" UUID NOT NULL,
    "directRequestId" UUID,
    "openRequestId" UUID,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ChatRoom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" UUID NOT NULL,
    "chatRoomId" UUID NOT NULL,
    "senderId" UUID,
    "type" "MessageType" NOT NULL DEFAULT 'USER',
    "body" TEXT NOT NULL,
    "readAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Follow" (
    "followerId" UUID NOT NULL,
    "followeeId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Follow_pkey" PRIMARY KEY ("followerId","followeeId")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "actorUserId" UUID,
    "type" "NotificationType" NOT NULL,
    "targetType" "NotificationTargetType" NOT NULL,
    "targetId" UUID,
    "linkPath" TEXT NOT NULL,
    "readAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Report" (
    "id" UUID NOT NULL,
    "reporterId" UUID NOT NULL,
    "targetType" "ReportTargetType" NOT NULL,
    "reason" "ReportReason" NOT NULL,
    "comment" TEXT,
    "status" "ReportStatus" NOT NULL DEFAULT 'OPEN',
    "resolutionType" "ReportResolutionType",
    "resolutionNote" TEXT,
    "resolvedByAdminId" UUID,
    "resolvedAt" TIMESTAMP(3),
    "reportedUserId" UUID,
    "reportedDirectRequestId" UUID,
    "reportedOpenRequestId" UUID,
    "reportedMessageId" UUID,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" UUID NOT NULL,
    "actorAdminId" UUID NOT NULL,
    "actionType" "AdminActionType" NOT NULL,
    "reason" TEXT,
    "metadata" JSONB NOT NULL,
    "targetUserId" UUID,
    "targetReportId" UUID,
    "targetDirectRequestId" UUID,
    "targetOpenRequestId" UUID,
    "targetChatRoomId" UUID,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Portfolio_userId_visibility_idx" ON "Portfolio"("userId", "visibility");

-- CreateIndex
CREATE INDEX "Portfolio_genre_visibility_idx" ON "Portfolio"("genre", "visibility");

-- CreateIndex
CREATE INDEX "Portfolio_updatedAt_idx" ON "Portfolio"("updatedAt");

-- CreateIndex
CREATE INDEX "DirectRequest_requesterId_status_idx" ON "DirectRequest"("requesterId", "status");

-- CreateIndex
CREATE INDEX "DirectRequest_photographerId_status_idx" ON "DirectRequest"("photographerId", "status");

-- CreateIndex
CREATE INDEX "DirectRequest_status_approvalDeadlineAt_idx" ON "DirectRequest"("status", "approvalDeadlineAt");

-- CreateIndex
CREATE UNIQUE INDEX "OpenRequest_matchedProposalId_key" ON "OpenRequest"("matchedProposalId");

-- CreateIndex
CREATE INDEX "OpenRequest_requesterId_status_idx" ON "OpenRequest"("requesterId", "status");

-- CreateIndex
CREATE INDEX "OpenRequest_matchedPhotographerId_idx" ON "OpenRequest"("matchedPhotographerId");

-- CreateIndex
CREATE INDEX "OpenRequest_status_applicationDeadlineAt_idx" ON "OpenRequest"("status", "applicationDeadlineAt");

-- CreateIndex
CREATE INDEX "OpenRequest_prefecture_applicationDeadlineAt_idx" ON "OpenRequest"("prefecture", "applicationDeadlineAt");

-- CreateIndex
CREATE INDEX "Proposal_photographerId_status_idx" ON "Proposal"("photographerId", "status");

-- CreateIndex
CREATE INDEX "Proposal_openRequestId_status_idx" ON "Proposal"("openRequestId", "status");

-- CreateIndex
CREATE UNIQUE INDEX "Proposal_openRequestId_photographerId_key" ON "Proposal"("openRequestId", "photographerId");

-- CreateIndex
CREATE UNIQUE INDEX "ChatRoom_directRequestId_key" ON "ChatRoom"("directRequestId");

-- CreateIndex
CREATE UNIQUE INDEX "ChatRoom_openRequestId_key" ON "ChatRoom"("openRequestId");

-- CreateIndex
CREATE INDEX "ChatRoom_requesterId_idx" ON "ChatRoom"("requesterId");

-- CreateIndex
CREATE INDEX "ChatRoom_photographerId_idx" ON "ChatRoom"("photographerId");

-- CreateIndex
CREATE INDEX "Message_chatRoomId_createdAt_idx" ON "Message"("chatRoomId", "createdAt");

-- CreateIndex
CREATE INDEX "Message_senderId_createdAt_idx" ON "Message"("senderId", "createdAt");

-- CreateIndex
CREATE INDEX "Follow_followeeId_createdAt_idx" ON "Follow"("followeeId", "createdAt");

-- CreateIndex
CREATE INDEX "Notification_userId_readAt_createdAt_idx" ON "Notification"("userId", "readAt", "createdAt");

-- CreateIndex
CREATE INDEX "Notification_targetType_targetId_idx" ON "Notification"("targetType", "targetId");

-- CreateIndex
CREATE INDEX "Report_status_createdAt_idx" ON "Report"("status", "createdAt");

-- CreateIndex
CREATE INDEX "Report_reporterId_createdAt_idx" ON "Report"("reporterId", "createdAt");

-- CreateIndex
CREATE INDEX "Report_targetType_idx" ON "Report"("targetType");

-- CreateIndex
CREATE INDEX "AuditLog_actorAdminId_createdAt_idx" ON "AuditLog"("actorAdminId", "createdAt");

-- CreateIndex
CREATE INDEX "AuditLog_actionType_createdAt_idx" ON "AuditLog"("actionType", "createdAt");

-- CreateIndex
CREATE INDEX "User_activityPrefecture_idx" ON "User"("activityPrefecture");

-- AddForeignKey
ALTER TABLE "Portfolio" ADD CONSTRAINT "Portfolio_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DirectRequest" ADD CONSTRAINT "DirectRequest_requesterId_fkey" FOREIGN KEY ("requesterId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DirectRequest" ADD CONSTRAINT "DirectRequest_photographerId_fkey" FOREIGN KEY ("photographerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OpenRequest" ADD CONSTRAINT "OpenRequest_requesterId_fkey" FOREIGN KEY ("requesterId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OpenRequest" ADD CONSTRAINT "OpenRequest_matchedPhotographerId_fkey" FOREIGN KEY ("matchedPhotographerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OpenRequest" ADD CONSTRAINT "OpenRequest_matchedProposalId_fkey" FOREIGN KEY ("matchedProposalId") REFERENCES "Proposal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proposal" ADD CONSTRAINT "Proposal_openRequestId_fkey" FOREIGN KEY ("openRequestId") REFERENCES "OpenRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proposal" ADD CONSTRAINT "Proposal_photographerId_fkey" FOREIGN KEY ("photographerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatRoom" ADD CONSTRAINT "ChatRoom_requesterId_fkey" FOREIGN KEY ("requesterId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatRoom" ADD CONSTRAINT "ChatRoom_photographerId_fkey" FOREIGN KEY ("photographerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatRoom" ADD CONSTRAINT "ChatRoom_directRequestId_fkey" FOREIGN KEY ("directRequestId") REFERENCES "DirectRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatRoom" ADD CONSTRAINT "ChatRoom_openRequestId_fkey" FOREIGN KEY ("openRequestId") REFERENCES "OpenRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_chatRoomId_fkey" FOREIGN KEY ("chatRoomId") REFERENCES "ChatRoom"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follow" ADD CONSTRAINT "Follow_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follow" ADD CONSTRAINT "Follow_followeeId_fkey" FOREIGN KEY ("followeeId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_actorUserId_fkey" FOREIGN KEY ("actorUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_reporterId_fkey" FOREIGN KEY ("reporterId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_resolvedByAdminId_fkey" FOREIGN KEY ("resolvedByAdminId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_reportedUserId_fkey" FOREIGN KEY ("reportedUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_reportedDirectRequestId_fkey" FOREIGN KEY ("reportedDirectRequestId") REFERENCES "DirectRequest"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_reportedOpenRequestId_fkey" FOREIGN KEY ("reportedOpenRequestId") REFERENCES "OpenRequest"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_reportedMessageId_fkey" FOREIGN KEY ("reportedMessageId") REFERENCES "Message"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_actorAdminId_fkey" FOREIGN KEY ("actorAdminId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_targetUserId_fkey" FOREIGN KEY ("targetUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_targetReportId_fkey" FOREIGN KEY ("targetReportId") REFERENCES "Report"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_targetDirectRequestId_fkey" FOREIGN KEY ("targetDirectRequestId") REFERENCES "DirectRequest"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_targetOpenRequestId_fkey" FOREIGN KEY ("targetOpenRequestId") REFERENCES "OpenRequest"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_targetChatRoomId_fkey" FOREIGN KEY ("targetChatRoomId") REFERENCES "ChatRoom"("id") ON DELETE SET NULL ON UPDATE CASCADE;

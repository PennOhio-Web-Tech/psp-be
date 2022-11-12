-- AlterTable
ALTER TABLE "File" ADD COLUMN     "engagementDraftId" TEXT,
ALTER COLUMN "engagementId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "EngagementDraft" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "engagementTitle" TEXT,
    "engagementSummary" TEXT,
    "associatedProgram" TEXT,
    "soldierInput" TEXT,
    "soldiersNeeded" TEXT,
    "preferredDivision" TEXT,
    "mos" TEXT,
    "requirements" TEXT[],
    "armyImpact" TEXT,
    "cft" INTEGER,
    "engagementRequest" TEXT,
    "feedbackType" TEXT,
    "eventStartDate" TIMESTAMP(3),
    "eventEndDate" TIMESTAMP(3),
    "eventTitle" TEXT,
    "eventDescription" TEXT,
    "dueDate" TIMESTAMP(3),
    "dueDateTitle" TEXT,
    "addressOne" TEXT,
    "addressTwo" TEXT,
    "city" TEXT,
    "state" TEXT,
    "zip" TEXT,
    "funding" TEXT,
    "otherInfo" TEXT,
    "requestorName" TEXT,
    "requestorEmail" TEXT,
    "requestorPhone" TEXT,
    "requestorTitle" TEXT,
    "requestorOrganization" TEXT,
    "freeFormQuestion" TEXT,

    CONSTRAINT "EngagementDraft_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_engagementDraftId_fkey" FOREIGN KEY ("engagementDraftId") REFERENCES "EngagementDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EngagementDraft" ADD CONSTRAINT "EngagementDraft_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

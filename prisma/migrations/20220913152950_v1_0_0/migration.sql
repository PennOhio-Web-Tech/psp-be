-- CreateEnum
CREATE TYPE "FeedbackTypes" AS ENUM ('testFeedbackSubmission', 'freeFeedbackSubmission', 'inputFeedbackSubmission');

-- CreateTable
CREATE TABLE "organizations" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "organizations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "firstName" VARCHAR(100) NOT NULL,
    "lastName" VARCHAR(100) NOT NULL,
    "initials" VARCHAR(2) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "organizationId" TEXT,
    "roleId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles" (
    "id" SERIAL NOT NULL,
    "type" VARCHAR(32) NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "organization_access" (
    "organizationId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT true,
    "write" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "organization_access_pkey" PRIMARY KEY ("userId","organizationId")
);

-- CreateTable
CREATE TABLE "engagements" (
    "id" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "locationId" TEXT,
    "demographicId" TEXT NOT NULL,
    "engagementDetailId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "crossFunctionalTeamId" INTEGER NOT NULL,
    "requestorId" TEXT NOT NULL,
    "shortId" TEXT,
    "feedbackConfigId" TEXT,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "engagements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "locations" (
    "id" TEXT NOT NULL,
    "addressOne" TEXT NOT NULL,
    "addressTwo" TEXT,
    "city" TEXT NOT NULL,
    "state" VARCHAR(2) NOT NULL,
    "zip" INTEGER NOT NULL,

    CONSTRAINT "locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "engagement_details" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "associatedProgram" TEXT NOT NULL,
    "armyImpact" TEXT NOT NULL,
    "fundingDetails" TEXT,
    "otherInformation" TEXT,

    CONSTRAINT "engagement_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cross_functional_teams" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cross_functional_teams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "demographics" (
    "id" TEXT NOT NULL,
    "soldierInput" TEXT NOT NULL,
    "soldiersNeeded" INTEGER NOT NULL,
    "mos" TEXT NOT NULL,

    CONSTRAINT "demographics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "requirements" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "requirements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "requestor_information" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "organization" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "requestor_information_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "events" (
    "id" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "engagementId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "due_dates" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "engagementId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "due_dates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feedback_configs" (
    "id" TEXT NOT NULL,
    "feedbackType" "FeedbackTypes" NOT NULL,
    "isHumanResearch" BOOLEAN NOT NULL,
    "hasSubmissions" BOOLEAN NOT NULL,
    "freeFormQuestion" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "feedback_configs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "test_feedback_submissions" (
    "id" TEXT NOT NULL,
    "feedbackConfigId" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "testFeedbackResponseId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "test_feedback_submissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestFeedbackResponses" (
    "id" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "customResponse" TEXT,
    "results" TEXT NOT NULL,
    "anticipatedResults" TEXT NOT NULL,
    "conditionsConstraints" TEXT NOT NULL,
    "metExpectations" TEXT NOT NULL,
    "notMetExpectations" TEXT NOT NULL,
    "otherOpportunities" TEXT NOT NULL,
    "additionalThoughts" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TestFeedbackResponses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "input_feedback_submissions" (
    "id" TEXT NOT NULL,
    "feedbackConfigId" TEXT NOT NULL,
    "inputFeedbackResponseId" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "input_feedback_submissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "input_feedback_responses" (
    "id" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "customResponse" TEXT,
    "opportunities" TEXT NOT NULL,
    "processSolution" TEXT NOT NULL,
    "notAsked" TEXT NOT NULL,
    "responseViews" TEXT NOT NULL,
    "additionalThoughts" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "input_feedback_responses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "free_feedbacks_submissions" (
    "id" TEXT NOT NULL,
    "feedbackConfigId" TEXT NOT NULL,
    "freeFeedbackResponseId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "rating" TEXT NOT NULL,

    CONSTRAINT "free_feedbacks_submissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FreeFeedbackResponses" (
    "id" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "response" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FreeFeedbackResponses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "File" (
    "id" TEXT NOT NULL,
    "engagementId" TEXT NOT NULL,
    "blobName" TEXT NOT NULL,
    "containerName" TEXT NOT NULL,
    "path" TEXT NOT NULL,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DemographicToRequirement" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "organizations_name_key" ON "organizations"("name");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "roles_type_key" ON "roles"("type");

-- CreateIndex
CREATE UNIQUE INDEX "engagements_locationId_key" ON "engagements"("locationId");

-- CreateIndex
CREATE UNIQUE INDEX "engagements_demographicId_key" ON "engagements"("demographicId");

-- CreateIndex
CREATE UNIQUE INDEX "engagements_engagementDetailId_key" ON "engagements"("engagementDetailId");

-- CreateIndex
CREATE UNIQUE INDEX "engagements_requestorId_key" ON "engagements"("requestorId");

-- CreateIndex
CREATE UNIQUE INDEX "engagements_shortId_key" ON "engagements"("shortId");

-- CreateIndex
CREATE UNIQUE INDEX "engagements_feedbackConfigId_key" ON "engagements"("feedbackConfigId");

-- CreateIndex
CREATE UNIQUE INDEX "cross_functional_teams_name_key" ON "cross_functional_teams"("name");

-- CreateIndex
CREATE UNIQUE INDEX "requirements_content_key" ON "requirements"("content");

-- CreateIndex
CREATE UNIQUE INDEX "test_feedback_submissions_testFeedbackResponseId_key" ON "test_feedback_submissions"("testFeedbackResponseId");

-- CreateIndex
CREATE UNIQUE INDEX "input_feedback_submissions_inputFeedbackResponseId_key" ON "input_feedback_submissions"("inputFeedbackResponseId");

-- CreateIndex
CREATE UNIQUE INDEX "free_feedbacks_submissions_freeFeedbackResponseId_key" ON "free_feedbacks_submissions"("freeFeedbackResponseId");

-- CreateIndex
CREATE UNIQUE INDEX "_DemographicToRequirement_AB_unique" ON "_DemographicToRequirement"("A", "B");

-- CreateIndex
CREATE INDEX "_DemographicToRequirement_B_index" ON "_DemographicToRequirement"("B");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organizations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "organization_access" ADD CONSTRAINT "organization_access_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organizations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "organization_access" ADD CONSTRAINT "organization_access_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "engagements" ADD CONSTRAINT "engagements_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organizations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "engagements" ADD CONSTRAINT "engagements_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "engagements" ADD CONSTRAINT "engagements_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "locations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "engagements" ADD CONSTRAINT "engagements_engagementDetailId_fkey" FOREIGN KEY ("engagementDetailId") REFERENCES "engagement_details"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "engagements" ADD CONSTRAINT "engagements_crossFunctionalTeamId_fkey" FOREIGN KEY ("crossFunctionalTeamId") REFERENCES "cross_functional_teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "engagements" ADD CONSTRAINT "engagements_demographicId_fkey" FOREIGN KEY ("demographicId") REFERENCES "demographics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "engagements" ADD CONSTRAINT "engagements_requestorId_fkey" FOREIGN KEY ("requestorId") REFERENCES "requestor_information"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "engagements" ADD CONSTRAINT "engagements_feedbackConfigId_fkey" FOREIGN KEY ("feedbackConfigId") REFERENCES "feedback_configs"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_engagementId_fkey" FOREIGN KEY ("engagementId") REFERENCES "engagements"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "due_dates" ADD CONSTRAINT "due_dates_engagementId_fkey" FOREIGN KEY ("engagementId") REFERENCES "engagements"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "test_feedback_submissions" ADD CONSTRAINT "test_feedback_submissions_feedbackConfigId_fkey" FOREIGN KEY ("feedbackConfigId") REFERENCES "feedback_configs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "test_feedback_submissions" ADD CONSTRAINT "test_feedback_submissions_testFeedbackResponseId_fkey" FOREIGN KEY ("testFeedbackResponseId") REFERENCES "TestFeedbackResponses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "input_feedback_submissions" ADD CONSTRAINT "input_feedback_submissions_feedbackConfigId_fkey" FOREIGN KEY ("feedbackConfigId") REFERENCES "feedback_configs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "input_feedback_submissions" ADD CONSTRAINT "input_feedback_submissions_inputFeedbackResponseId_fkey" FOREIGN KEY ("inputFeedbackResponseId") REFERENCES "input_feedback_responses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "free_feedbacks_submissions" ADD CONSTRAINT "free_feedbacks_submissions_feedbackConfigId_fkey" FOREIGN KEY ("feedbackConfigId") REFERENCES "feedback_configs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "free_feedbacks_submissions" ADD CONSTRAINT "free_feedbacks_submissions_freeFeedbackResponseId_fkey" FOREIGN KEY ("freeFeedbackResponseId") REFERENCES "FreeFeedbackResponses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_engagementId_fkey" FOREIGN KEY ("engagementId") REFERENCES "engagements"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DemographicToRequirement" ADD CONSTRAINT "_DemographicToRequirement_A_fkey" FOREIGN KEY ("A") REFERENCES "demographics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DemographicToRequirement" ADD CONSTRAINT "_DemographicToRequirement_B_fkey" FOREIGN KEY ("B") REFERENCES "requirements"("id") ON DELETE CASCADE ON UPDATE CASCADE;

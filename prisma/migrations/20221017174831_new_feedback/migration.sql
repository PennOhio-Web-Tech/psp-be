/*
  Warnings:

  - You are about to drop the column `feedbackType` on the `EngagementDraft` table. All the data in the column will be lost.
  - You are about to drop the column `feedbackConfigId` on the `engagements` table. All the data in the column will be lost.
  - You are about to drop the `FreeFeedbackResponses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TestFeedbackResponses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `feedback_configs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `free_feedbacks_submissions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `input_feedback_responses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `input_feedback_submissions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `test_feedback_submissions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "element_options" DROP CONSTRAINT "element_options_formElementId_fkey";

-- DropForeignKey
ALTER TABLE "engagements" DROP CONSTRAINT "engagements_feedbackConfigId_fkey";

-- DropForeignKey
ALTER TABLE "form_elements" DROP CONSTRAINT "form_elements_formTemplateId_fkey";

-- DropForeignKey
ALTER TABLE "free_feedbacks_submissions" DROP CONSTRAINT "free_feedbacks_submissions_feedbackConfigId_fkey";

-- DropForeignKey
ALTER TABLE "free_feedbacks_submissions" DROP CONSTRAINT "free_feedbacks_submissions_freeFeedbackResponseId_fkey";

-- DropForeignKey
ALTER TABLE "input_feedback_submissions" DROP CONSTRAINT "input_feedback_submissions_feedbackConfigId_fkey";

-- DropForeignKey
ALTER TABLE "input_feedback_submissions" DROP CONSTRAINT "input_feedback_submissions_inputFeedbackResponseId_fkey";

-- DropForeignKey
ALTER TABLE "test_feedback_submissions" DROP CONSTRAINT "test_feedback_submissions_feedbackConfigId_fkey";

-- DropForeignKey
ALTER TABLE "test_feedback_submissions" DROP CONSTRAINT "test_feedback_submissions_testFeedbackResponseId_fkey";

-- DropIndex
DROP INDEX "engagements_feedbackConfigId_key";

-- AlterTable
ALTER TABLE "EngagementDraft" DROP COLUMN "feedbackType",
ADD COLUMN     "formTemplateId" TEXT,
ADD COLUMN     "noFeedback" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "engagements" DROP COLUMN "feedbackConfigId",
ADD COLUMN     "hasSubmissions" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "noFeedback" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "FreeFeedbackResponses";

-- DropTable
DROP TABLE "TestFeedbackResponses";

-- DropTable
DROP TABLE "feedback_configs";

-- DropTable
DROP TABLE "free_feedbacks_submissions";

-- DropTable
DROP TABLE "input_feedback_responses";

-- DropTable
DROP TABLE "input_feedback_submissions";

-- DropTable
DROP TABLE "test_feedback_submissions";

-- DropEnum
DROP TYPE "FeedbackTypes";

-- AddForeignKey
ALTER TABLE "form_elements" ADD CONSTRAINT "form_elements_formTemplateId_fkey" FOREIGN KEY ("formTemplateId") REFERENCES "form_templates"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "element_options" ADD CONSTRAINT "element_options_formElementId_fkey" FOREIGN KEY ("formElementId") REFERENCES "form_elements"("id") ON DELETE CASCADE ON UPDATE CASCADE;

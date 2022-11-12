-- AlterTable
ALTER TABLE "engagements" ADD COLUMN     "formSnapshotId" TEXT,
ADD COLUMN     "formTemplateId" TEXT;

-- CreateTable
CREATE TABLE "form_elements" (
    "id" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "formTemplateId" TEXT NOT NULL,
    "required" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "form_elements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "form_templates" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "organizationId" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isPlatform" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "form_templates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "element_options" (
    "id" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "formElementId" TEXT NOT NULL,

    CONSTRAINT "element_options_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "form_snapshot" (
    "id" TEXT NOT NULL,
    "snapshot" JSONB NOT NULL,

    CONSTRAINT "form_snapshot_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "engagements" ADD CONSTRAINT "engagements_formTemplateId_fkey" FOREIGN KEY ("formTemplateId") REFERENCES "form_templates"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "engagements" ADD CONSTRAINT "engagements_formSnapshotId_fkey" FOREIGN KEY ("formSnapshotId") REFERENCES "form_snapshot"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "form_elements" ADD CONSTRAINT "form_elements_formTemplateId_fkey" FOREIGN KEY ("formTemplateId") REFERENCES "form_templates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "form_templates" ADD CONSTRAINT "form_templates_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organizations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "form_templates" ADD CONSTRAINT "form_templates_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "element_options" ADD CONSTRAINT "element_options_formElementId_fkey" FOREIGN KEY ("formElementId") REFERENCES "form_elements"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

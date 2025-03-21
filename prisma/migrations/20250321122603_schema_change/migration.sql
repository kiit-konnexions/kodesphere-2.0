/*
  Warnings:

  - You are about to drop the column `deploymentLink` on the `Submission` table. All the data in the column will be lost.
  - You are about to drop the column `githubLink` on the `Submission` table. All the data in the column will be lost.
  - Added the required column `submissionData` to the `Submission` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Submission" DROP COLUMN "deploymentLink",
DROP COLUMN "githubLink",
ADD COLUMN     "submissionData" JSONB NOT NULL;

/*
  Warnings:

  - You are about to drop the column `leaderEmail` on the `Submission` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Submission_leaderEmail_key";

-- AlterTable
ALTER TABLE "Submission" DROP COLUMN "leaderEmail";

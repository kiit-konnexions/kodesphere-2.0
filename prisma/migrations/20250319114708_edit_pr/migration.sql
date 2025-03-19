/*
  Warnings:

  - Made the column `phone` on table `Participant` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Participant" ALTER COLUMN "phone" SET NOT NULL;

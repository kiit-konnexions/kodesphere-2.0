-- CreateEnum
CREATE TYPE "TRACKS" AS ENUM ('WEB', 'APP', 'ML');

-- CreateTable
CREATE TABLE "Team" (
    "TeamId" TEXT NOT NULL,
    "TeamName" TEXT NOT NULL,
    "Track" "TRACKS" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("TeamId")
);

-- CreateTable
CREATE TABLE "Participant" (
    "UserId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "rollNo" TEXT NOT NULL,
    "phone" TEXT,
    "leader" BOOLEAN NOT NULL,
    "TeamId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Participant_pkey" PRIMARY KEY ("UserId")
);

-- CreateTable
CREATE TABLE "Submission" (
    "TeamId" TEXT NOT NULL,
    "leaderEmail" TEXT NOT NULL,
    "githubLink" TEXT NOT NULL,
    "deploymentLink" TEXT,
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Submission_pkey" PRIMARY KEY ("TeamId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Team_TeamName_key" ON "Team"("TeamName");

-- CreateIndex
CREATE UNIQUE INDEX "Participant_email_key" ON "Participant"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Submission_leaderEmail_key" ON "Submission"("leaderEmail");

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_TeamId_fkey" FOREIGN KEY ("TeamId") REFERENCES "Team"("TeamId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_TeamId_fkey" FOREIGN KEY ("TeamId") REFERENCES "Team"("TeamId") ON DELETE RESTRICT ON UPDATE CASCADE;

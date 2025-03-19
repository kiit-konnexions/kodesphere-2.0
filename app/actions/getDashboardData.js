"use server";

import prisma from "@/lib/prisma";

export async function getDashboardData(loggedInEmail) {
  const participantData = await prisma.participant.findFirst({
    where: {
      email: loggedInEmail,
    },
  });

  const TEAMID = participantData?.TeamId ;

  const teamDetails = await prisma.team.findFirst({
    where: {
      TeamId: TEAMID,
    },
  });

  // console.log(teamDetails);

  const teamParticipants = await prisma.participant.findMany({
    where: {
      TeamId: TEAMID,
    },
  });

  // console.log(teamParticipants);

  return {
    teamDetails,
    teamParticipants,
  };
}

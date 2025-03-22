"use server";

import prisma from "@/lib/prisma";
import { checkRateLimit } from "./rateLimit";

export async function getDashboardData(loggedInEmail) {

  const rateLimit = await checkRateLimit();
    if(!rateLimit){
        console.log("Rate limit exceeded")
        return false
    }

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

  await prisma.$disconnect();

  return {
    teamDetails,
    teamParticipants,
  };
}

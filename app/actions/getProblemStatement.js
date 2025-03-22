"use server";

import prisma from "@/lib/prisma";
import {checkRateLimit} from "./rateLimit";

export async function getProblemStatements(loggedInEmail) {

    const rateLimit = await checkRateLimit();
    if (!rateLimit) {
        console.log("Rate limit exceeded")
        return false
    }

    const participantData = await prisma.participant.findFirst({
        where: {
            email: loggedInEmail,
        },
    });

    const TEAMID = participantData?.TeamId;

    // const TEAMID = "3a34acaf-b42e-4d55-af53-8066c0ab3fa1";
    const teamDetails = await prisma.team.findFirst({
        where: {
            TeamId: TEAMID,
        },
    });

    await prisma.$disconnect();

    return teamDetails;
}

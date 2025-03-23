"use server";
import prisma from "@/lib/prisma";
import { checkRateLimit } from "./rateLimit";

export async function checkReg(email) {
  const rateLimit = await checkRateLimit();
  if (!rateLimit) {
    console.log("Rate limit exceeded");
    return false;
  }
  try {
    const result = await prisma.participant.findUnique({
      where: {
        email: email,
      },
    });
    await prisma.$disconnect();
    if (result) {
      return { success: true, tid: result.TeamId };
    }
    return { success: false, message: "Participant not found" };
  } catch (error) {}
  return { success: false };
}

"use server";

import prisma from "@/lib/prisma";
import { checkRateLimit } from "./rateLimit";

export async function setSubmissionData(submissionFormData, TeamId){
     const rateLimit = await checkRateLimit();
        if(!rateLimit){
            console.log("Rate limit exceeded")
            return false
        }
    try{
        await prisma.submission.create({
            data:{
                TeamId: TeamId,
                submissionData: submissionFormData
            }
        })

        return ({success:true})

    }catch(e){
        console.log(e);
        return({status:false})
    }finally{
        prisma.$disconnect();
    }
}
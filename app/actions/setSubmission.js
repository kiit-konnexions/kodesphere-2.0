"use server";

import prisma from "@/lib/prisma";
import { checkRateLimit } from "./rateLimit";

export async function setSubmissionData(githubUrl, deploymentUrl, TeamId){
     const rateLimit = await checkRateLimit();
        if(!rateLimit){
            console.log("Rate limit exceeded")
            return false
        }
    try{
        await prisma.submission.create({
            data:{
                TeamId:TeamId,
                githubLink:githubUrl,
                deploymentLink:deploymentUrl
            }
        })

        return ({success:true})

    }catch(e){
        console.log(e);
        return({status:false})
    }
}
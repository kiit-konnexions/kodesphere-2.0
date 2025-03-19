"use server";
import prisma from "@/lib/prisma";
import { TRACKS } from "@prisma/client";
import { checkRateLimit } from "./rateLimit";

export async function registerTeam(teamName, track, members, leaderMail){
    // console.log(teamName, track, members, leaderMail);

    const rateLimit = await checkRateLimit();
    if(!rateLimit){
        return {success:false, message:"Rate Limit Exceeded! Too many Requests !"}
    }

    let Ftrack;
    if(track === "web"){
        Ftrack = TRACKS.WEB;
    }else if(track === "app"){
        Ftrack = TRACKS.APP;
    }else{
        Ftrack = TRACKS.ML;
    }
    try{
        const teamData = await prisma.team.create({
            data:{
                TeamName:teamName,
                Track:Ftrack,
            }
        })
        members.map(async (member)=>{
            await prisma.participant.create({
                data:{
                    email:member.email,
                    name:member.name,
                    rollNo:member.roll,
                    phone:member.phone,
                    leader: (member.email === leaderMail),
                    TeamId: teamData.TeamId,
                }
            })
        })
        return {success:true, message:"Team created Successfully!"};
    }catch(e){
        console.log(e);
        return {success:false, message:"Error creating team"};
    }

    return true
}
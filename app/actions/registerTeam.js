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

    const generateUID = () => {
        return Array.from({ length: 6 }, () => 
          String.fromCharCode(65 + Math.floor(Math.random() * 26)) // A-Z
        ).join('');
    };

    const getUniqueUID = async () => {
        let uid;
        let exists = true;
      
        while (exists) {
          uid = generateUID();
          const existingRecord = await prisma.team.findUnique({
            where: { 
                TeamId:uid
             }
          });
      
          exists = !!existingRecord; // True if found, loop continues
        }
      
        return uid;
    };

    const checkMember = async () => {

        for(let i=0;i<members.length;i++){
            let cpd = await prisma.participant.findUnique({
                where:{
                    email:members[i].email,
                }
            })
            if(cpd){
                return true;
            }
        }

        return false;
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
        const ctd = await prisma.team.findUnique({
            where:{
                TeamName:teamName
            }
        })
        if(ctd){
            return ({success:false, message:"Team Name Already Taken !"})
        }    
    
        const mch = await checkMember();

        if(mch){
            return ({success:false, message:"Someone from the team is already registered !"})
        }
        
        const tid = await getUniqueUID();
        const teamData = await prisma.team.create({
            data:{
                TeamId:tid,
                TeamName:teamName,
                Track:Ftrack,
            }
        })
        members.map(async (member)=>{
            await prisma.participant.create({
                data:{
                    email:member.email,
                    name:member.name,
                    rollNo:member.email.split('@')[0],
                    phone:member.phone,
                    leader: (member.email === leaderMail),
                    TeamId: teamData.TeamId,
                }
            })
        })
        return {success:true, message:"Team created Successfully!", id:teamData.TeamId};
    }catch(e){
        console.log(e);
        return {success:false, message:"Something went wrong"};
    }finally{
        await prisma.$disconnect();
    }

}
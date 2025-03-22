"use server"
import prisma from "@/lib/prisma";


export async function getIdCards(temaId){
    try{
        const participants = await prisma.participant.findMany({
            where:{
                TeamId:temaId,
            },
            include:{
                Team: true,
            }
        })
        if(participants){
            return ({success:true,data:participants});
        }
        return  ({success:false,data:null});
    }catch(e){
        console.log(e)
        return  ({success:false,data:null});
    }finally{
        await prisma.$disconnect();
    }
}
'use client'

import { getIdCards } from "@/app/actions/getIdCards";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
const page = () => {
  const {teamId} = useParams();
  console.log(teamId)

  const [participants, setParticipants] = useState(null)

  const getDetails = async () => {
    const pd = await getIdCards(teamId);
    if(pd.success){
      setParticipants(pd.data);
    }
  }

  useEffect(()=>{
    getDetails();
  },[])

  
  return (
    <div className="flex min-h-screen flex-wrap items-center justify-center gap-10 bg-gray-200 p-2">
    {participants && participants?.map((participant)=>(<div key={participant.UserId} className="w-[450px] md:w-[350px] relative pointer-events-none select-none p-0">
        <img src="/idcard.png" className="h-full w-full rounded-xl" alt="idcard" />
        <h1 className="absolute top-[45%] text-2xl font-bold left-[5%] font-poppins text-[#345969]">
          {participant.name}
        </h1>
        <p className="font-poppins absolute top-[55%] text-xl text-black font-bold left-[5%]">{participant.Team.TeamName}{" - "}{participant.Team.TeamId}</p>
      </div>))}
    {!participants && <span>
        Team Details Not Found
      </span>}
    </div>
  );
};

export default page;

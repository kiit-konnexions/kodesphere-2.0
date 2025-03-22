'use client'

import { getIdCards } from "@/app/actions/getIdCards";
import { Space_Grotesk } from "next/font/google";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

const page = () => {
  const {teamId} = useParams();

  const [participants, setParticipants] = useState(null);
  const [loading, setLoading] = useState(false);

  const getDetails = async () => {
    setLoading(true);
    const pd = await getIdCards(teamId);
    if(pd.success){
      setParticipants(pd.data);
    }
    setLoading(false);
  }

  useEffect(()=>{
    getDetails();
  },[])

  
  return (
    <div className={`${spaceGrotesk.className} flex min-h-screen flex-wrap items-center justify-center gap-10 bg-gray-200 p-2`}>
    {participants && participants?.map((participant)=>(<div key={participant.UserId} className="w-[450px] md:w-[350px] relative pointer-events-none select-none p-0">
        <img src="/idcard.png" className="h-full w-full rounded-xl shadow-xl" alt="idcard" />
        <h1 className="absolute top-[45%] text-2xl font-bold left-[5%] font-poppins text-[#345969]">
          {participant.name.split(" ")[0]}<br/>
          {participant.name.split(" ").slice(1,participant.name.split(" ").length).map((p)=>(
            p+" "
          ))}
        </h1>
        <p className="font-poppins absolute top-[58%] text-xl text-black font-bold left-[5%]">{participant.Team.TeamName}{" - "}{participant.Team.TeamId}</p>
      </div>))}
    {participants===null && !loading && <span>
        Team Details Not Found
      </span>}

    {loading && <span>
        Loading ID Cards...
      </span>}
    </div>
  );
};

export default page;

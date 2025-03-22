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
    {participants && participants?.map((participant)=>(<div key={participant.UserId} className="w-[380px] md:w-[280px] relative pointer-events-none select-none p-0">
        <img src="/strap.png" className="h-full w-full translate-y-4" alt="idcard-strap" />
        <img src="/idcard.png" className="h-full w-full rounded-xl shadow-xl" alt="idcard" />
        <h1 className="absolute top-[68%] font-bold left-[5%] font-poppins text-black flex flex-col items-start justify-start">
          <span className="text-4xl font-bold">
            {participant.name.split(" ")[0]}
          </span>
          <span className="text-xl font-normal text-black/60">
            {participant.name.split(" ").slice(1,participant.name.split(" ").length).map((p)=>(
              p+" "
            ))}
          </span>
        </h1>
        {/* <p className="font-poppins absolute top-[60%] text-sm text-black font-bold left-[5%]">{participant.Team.TeamName}{" - "}{participant.Team.TeamId}</p> */}
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

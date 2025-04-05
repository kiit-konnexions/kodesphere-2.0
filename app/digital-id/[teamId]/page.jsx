"use client";

import { getIdCards } from "@/app/actions/getIdCards";
import { Space_Grotesk } from "next/font/google";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

const page = () => {
  const { teamId } = useParams();

  const [participants, setParticipants] = useState(null);
  const [loading, setLoading] = useState(false);

  const getDetails = async () => {
    setLoading(true);
    const pd = await getIdCards(teamId);
    if (pd.success) {
      setParticipants(pd.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <>
      <div className="overflow-hidden">
        {participants && (
          <div className="flex flex-col items-center justify-center p-2 bg-white z-50">
            <img
              src="/kodespherelogo.png"
              alt="kdsphr"
              className="w-[400px] h-[100px]"
            />
            <span className="font-lg font-bold z-50">
              Your pass to the one and only Kodessphere 2.0 is here 😍
            </span>
          </div>
        )}
      </div>
      <div className="flex h-full w-full md:flex-row flex-col items-center justify-center p-5 gap-18 mt-7 bg-neutral-100 rounded-2xl overflow-hidden">
        {participants &&
          participants?.map((participant) => (
            <div
              key={participant.UserId}
              className="md:translate-y-[-100px] w-[380px] md:w-[280px] relative pointer-events-none select-none p-0"
            >
              <img
                src="/strap.png"
                className="h-full w-full translate-y-7"
                alt="idcard-strap"
              />
              <img
                src="/idcard.png"
                className="h-full w-full rounded-xl shadow-xl"
                alt="idcard"
              />
              <h1 className="absolute top-[68%] font-bold left-[5%] font-poppins text-black flex flex-col items-start justify-start">
                <span className="text-4xl font-bold">
                  {participant.name.split(" ")[0]}
                </span>
                <span className="text-xl font-normal text-black/60">
                  {participant.name
                    .split(" ")
                    .slice(1, participant.name.split(" ").length)
                    .map((p) => p + " ")}
                </span>
              </h1>
              <p className="font-poppins absolute top-[83%] text-lg text-black font-bold left-[5%]">
                {participant.Team.TeamName}
              </p>
            </div>
          ))}
      </div>
      {participants === null && !loading && (
        <span className="self-center">Team Details Not Found</span>
      )}

      {loading && (
        <span className="self-center justify-self-center">
          Loading ID Cards...
        </span>
      )}
    </>
  );
};

export default page;

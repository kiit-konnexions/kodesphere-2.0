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
    <div
      className={`${spaceGrotesk.className} flex min-h-screen items-center justify-center gap-10 bg-gray-200 py-0 md:px-8 px-1 md:flex-row flex-col`}
    >
      {participants && (
        <div className="flex flex-col items-start justify-start p-8">
          {/* <span className="text-7xl font-bold font-gray-600">Kodessphere 2.0</span> */}
          <img
            src="/kodespherelogo.png"
            alt="kdsphr"
            className="w-full h-[100px]"
          />
          <span className="font-lg font-bold">
            Your pass to the one and only Kodessphere 2.0 is here 😍
          </span>
        </div>
      )}
      <div className="flex h-full w-fit md:flex-row flex-col items-start justify-end gap-5">
        {participants &&
          participants?.map((participant) => (
            <div
              key={participant.UserId}
              className="md:translate-y-[-100px] w-[380px] md:w-[280px] relative pointer-events-none select-none p-0"
            >
              <img
                src="/strap.png"
                className="h-full w-full translate-y-4"
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
    </div>
  );
};

export default page;

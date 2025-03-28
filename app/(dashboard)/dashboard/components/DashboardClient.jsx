"use client";

import {useEffect, useState} from "react";
import ClientAnimatedTitle from "@/components/client/ClientAnimatedTitle";
import MemberCard from "@/app/(dashboard)/dashboard/components/MemberCard";
import {spaceGrotesk} from "@/app/(dashboard)/dashboard/page";
import ChessGridBackground from "@/components/ChessGridBackground";

export default function DashboardClient({teamName, teamMembers, teamDetails}) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <>
            <ChessGridBackground/>

            <main className="relative z-10 flex-1 p-6 mt-16 mb-8 md:p-12 bg-transparent sm:mt-0">
                {/* Header section with title */}
                <div className="flex flex-col items-start justify-between gap-6 mt-4 mb-12 sm:flex-row">
                    <div
                        className={`transform transition-all duration-500 ${
                            isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                        } max-w-full`}
                    >
                        <ClientAnimatedTitle text="DASHBOARD"/>
                        <p className="mt-1 text-gray-600">Congrats on making this far! ✨</p>
                    </div>
                </div>

            {/* Team section */}
                <div
                    className={`mb-8 max-w-lg transform transition-all duration-500 delay-200
                    ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                >
                    <div className="relative">
                        <span
                            className="absolute z-10 px-3 py-1 text-xs font-semibold tracking-wider text-gray-700 uppercase bg-gray-100 border border-gray-300 rounded-none -top-3 left-4">
                            Team
                        </span>
                        <div className="p-6 bg-white border border-gray-200 rounded-none">
                            <h2 className={`text-2xl font-bold font-jetbrains-mono uppercase break-words ${spaceGrotesk.className}`}>
                                {teamName}
                            </h2>
                            <p className={`mt-2 text-sm font-medium tracking-wider text-gray-500 uppercase ${spaceGrotesk.className}`}>
                                {teamDetails?.TeamId || "T000000"}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Members section */}
                <div
                    className={`max-w-lg transform transition-all duration-500 delay-300
                    ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                >
                    <h3 className="pl-2 mb-4 text-lg font-semibold tracking-wide text-gray-700 uppercase border-l-4 border-gray-400">
                        Members
                    </h3>

                    <div className="grid gap-4">
                        {teamMembers?.map((member, index) => (
                            <MemberCard
                                key={member.rollNo}
                                member={member}
                                spaceGrotesk={spaceGrotesk}
                                index={index}
                                isLoaded={isLoaded}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
}

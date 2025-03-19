"use client";

import { useEffect, useState } from "react";
import CountdownTimer from "@/app/components/CountdownTimer";
import ClientAnimatedTitle from "@/app/components/client/ClientAnimatedTitle";
import MemberCard from "@/app/(dashboard)/dashboard/components/MemberCard";

export default function DashboardClient({ teamName, teamMembers, spaceGrotesk }) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <main className="flex-1 p-4 md:p-6 bg-gray-50 relative z-10 mt-16 sm:mt-0 mb-8">
            {/* Header section with title and countdown */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8 mt-4">
                <div
                    className={`transform transition-all duration-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} max-w-full`}>
                    <ClientAnimatedTitle text="DASHBOARD" />
                    <p className="mt-1 text-gray-600">
                        Congrats on making this far! ✨
                    </p>
                </div>

                <div className={`bg-white p-4 rounded-none shadow-lg w-full sm:w-auto aspect-auto
                transform transition-all duration-500 delay-100 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    <CountdownTimer/>
                </div>
            </div>

            {/* Team section */}
            <div className={`mb-8 max-w-lg transform transition-all duration-500 delay-200
            ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <div className="relative">
                    <span className="absolute -top-3 left-4 px-3 py-1 text-xs font-semibold uppercase tracking-wider
                    bg-gray-100 text-gray-700 rounded-none z-10 border border-gray-300">
                        Team
                    </span>
                    <div className="p-6 rounded-none bg-white border-gray-200 border">
                        <h2 className={`text-2xl font-bold font-jetbrains-mono uppercase break-words ${spaceGrotesk.className}`}>{teamName}</h2>
                    </div>
                </div>
            </div>

            {/* Members section */}
            <div className={`max-w-lg transform transition-all duration-500 delay-300
            ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <h3 className="text-lg font-semibold mb-4 uppercase tracking-wide pl-2 border-l-4
                border-gray-400 text-gray-700">
                    Members
                </h3>

                <div className="grid gap-4">
                    {teamMembers.map((member, index) => (
                        <MemberCard
                            key={member.id}
                            member={member}
                            spaceGrotesk={spaceGrotesk}
                            index={index}
                            isLoaded={isLoaded}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}

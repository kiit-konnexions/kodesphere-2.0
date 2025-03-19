"use client";

import { Space_Grotesk } from 'next/font/google';
import { useEffect, useState } from "react";
import SideBar from "@/app/components/SideBar";
import CountdownTimer from "@/app/components/CountdownTimer";
import { useTheme } from "@/app/components/ThemeProvider";
import AnimatedTitle from "@/app/components/AnimatedTitle";

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
});

function DashboardPage() {
  const teamName = "Dumbledore's Army";
  const teamMembers = [
    { id: "2205007", name: "Harry Potter", isLeader: true },
    { id: "2205009", name: "Ron Weasley", isLeader: false },
    { id: "2205010", name: "Hermione Granger", isLeader: false },
  ];

  const { darkMode } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
      <div className={`flex min-h-screen ${darkMode ? 'bg-zinc-800 text-white' : 'bg-gray-50 text-black'}`}>
        <SideBar/>

        {/* Chess piece background (placeholder) */}
        <div className="fixed bottom-0 right-0 w-64 h-64 opacity-10 pointer-events-none z-0">
          {/* Will be replaced with actual chess pieces */}
        </div>

        <main className={`flex-1 p-4 md:p-6 ${darkMode ? 'bg-zinc-800' : 'bg-gray-50'} relative z-10 mt-16 sm:mt-0 mb-8`}>
          {/* Header section with title and countdown */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8 mt-4">
            <div className={`transform transition-all duration-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} max-w-full`}>
              <AnimatedTitle text="DASHBOARD" triggerOnLoad={isLoaded} />
              <p className={`mt-1 ${darkMode ? 'text-zinc-400' : 'text-gray-600'}`}>
                Congrats on making this far! ✨
              </p>
            </div>

            <div className={`${darkMode ? 'bg-zinc-700' : 'bg-white'} p-4 rounded-none shadow-lg w-full sm:w-auto aspect-auto
                    transform transition-all duration-500 delay-100 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <CountdownTimer />
            </div>
          </div>

          {/* Team section */}
          <div className={`mb-8 max-w-lg transform transition-all duration-500 delay-200
                ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="relative">
                        <span className={`absolute -top-3 left-4 px-3 py-1 text-xs font-semibold uppercase tracking-wider
                        ${darkMode ? 'bg-zinc-800 text-zinc-300' : 'bg-gray-100 text-gray-700'} rounded-none z-10 border
                        ${darkMode ? 'border-zinc-600' : 'border-gray-300'}`}>
                            Team
                        </span>
              <div className={`p-6 rounded-none ${darkMode ? 'bg-zinc-700 border-zinc-600' : 'bg-white border-gray-200'}
                        border `}>
                <h2 className={`text-2xl font-bold font-jetbrains-mono uppercase break-words ${spaceGrotesk.className}`}>{teamName}</h2>
              </div>
            </div>
          </div>

          {/* Members section */}
          <div className={`max-w-lg transform transition-all duration-500 delay-300
                ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <h3 className={`text-lg font-semibold mb-4 uppercase tracking-wide pl-2 border-l-4
                    ${darkMode ? 'border-zinc-500 text-zinc-300' : 'border-gray-400 text-gray-700'}`}>
              Members
            </h3>

            <div className="grid gap-4">
              {teamMembers.map((member, index) => (
                  <div key={member.id}
                       className={`p-4 rounded-none ${
                           darkMode ? 'bg-zinc-700 border-zinc-600' : 'bg-white border-gray-200'
                       } border
                                transform transition-all duration-500 ${index === 0 ? 'delay-[400ms]' : 'delay-[500ms]'}
                                ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-none flex items-center justify-center
                                    ${darkMode ? 'bg-zinc-800' : 'bg-gray-100'} flex-shrink-0`}>
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M16 15H8C5.79086 15 4 16.7909 4 19V21H20V19C20 16.7909 18.2091 15 16 15Z" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <div className={`font-semibold break-words ${spaceGrotesk.className}`}>{member.name}</div>
                          <div className={`${darkMode ? 'text-zinc-400' : 'text-gray-500'} text-sm font-mono mt-1 sm:mt-0`}>
                            {member.id}
                          </div>
                        </div>

                        {member.isLeader && (
                            <div className="mt-2">
                                                <span className={`inline-block px-2 py-0.5 text-xs rounded-none ${
                                                    darkMode ? 'bg-zinc-800 text-yellow-300' : 'bg-gray-100 text-yellow-700'
                                                } border ${darkMode ? 'border-zinc-700' : 'border-gray-200'}`}>
                                                    Leader
                                                </span>
                            </div>
                        )}
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </main>
      </div>
  );
}

export default DashboardPage;
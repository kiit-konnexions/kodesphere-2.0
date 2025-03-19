"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/app/components/SideBar";
import CountdownTimer from "@/app/components/CountdownTimer";
import { useTheme } from "@/app/components/ThemeProvider";
import AnimatedTitle from "@/app/components/AnimatedTitle";

// Sample rules data
const rules = [
  "All team members must be registered on the Kodesphere platform before the start of the hackathon.",
  "Code submissions must be original work created during the hackathon period.",
  "Teams may use open-source libraries and frameworks, but must disclose all dependencies.",
  "Submissions must address the provided problem statement and meet the minimum requirements.",
  "All code must be submitted before the deadline. Late submissions will not be accepted."
];

// Rules Container Component
const RulesContainer = ({ rules, darkMode }) => {
  return (
      <div className={`
      ${darkMode ? 'bg-zinc-700/60' : 'bg-gray-100'} 
      p-8 
      rounded-none 
      border ${darkMode ? 'border-zinc-600' : 'border-gray-200'}
      transition-all 
      duration-300
      w-full
      mt-10
      shadow-sm
    `}>
        <ol className="list-none space-y-8 pl-0">
          {rules.map((rule, index) => (
              <li key={index} className="flex">
                <div className="mr-6 flex-shrink-0">
              <span className={`inline-flex items-center justify-center h-10 w-10 
                ${darkMode ? 'bg-zinc-800' : 'bg-white'} 
                border ${darkMode ? 'border-zinc-600' : 'border-gray-300'}`}>
                {index + 1}
              </span>
                </div>
                <div className="flex-1">
                  <p className="text-base leading-relaxed">{rule}</p>
                </div>
              </li>
          ))}
        </ol>
      </div>
  );
};

function RulesPage() {
  const { darkMode } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
      <div className={`flex min-h-screen ${darkMode ? 'bg-zinc-800 text-white' : 'bg-white text-black'}`}>
        <Sidebar/>

        <main className={`flex-1 p-6 md:p-12 ${darkMode ? 'bg-zinc-800' : 'bg-white'} relative z-10 mt-16 sm:mt-0 mb-8`}>
          {/* Header section with title and countdown */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-12 mt-4">
            <div className={`transform transition-all duration-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} max-w-full`}>
              <AnimatedTitle text="RULES" triggerOnLoad={isLoaded} />
            </div>

            <div className={`
                      ${darkMode ? 'bg-zinc-700/90' : 'bg-gray-100'} 
                      p-5 
                      rounded-none 
                      border ${darkMode ? 'border-zinc-600' : 'border-gray-200'}
                      shadow-sm 
                      w-full 
                      sm:w-auto
                      transform transition-all duration-500 delay-100 
                      ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                    `}>
              <CountdownTimer />
            </div>
          </div>

          {/* Rules Container */}
          <div className={`transform transition-all duration-500 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <RulesContainer rules={rules} darkMode={darkMode} />
          </div>
        </main>
      </div>
  );
}

export default RulesPage;

"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/app/components/SideBar";
import CountdownTimer from "@/app/components/CountdownTimer";
import AnimatedTitle from "@/app/components/AnimatedTitle";
import {Space_Grotesk} from "next/font/google";

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    display: 'swap',
});

// Sample problem statements data structure
const problemStatements = [
    {
        id: "problem1",
        title: "Post-Quantum Cryptography Algorithms",
        domain: "Cybersecurity",
        description: "Research and design cryptographic algorithms that are resistant to attacks from quantum computers. This project involves evaluating existing post-quantum cryptography schemes and proposing improvements or new algorithms. .Your task is to develop a secure system that can intercept and analyze network traffic without being detected. The solution should be able to identify potential threats and vulnerabilities in real-time while maintaining complete stealth...",
        // Optional image - can be null/undefined
        imageSrc: "https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=cover,w=1200,h=635,q=80/https://builtin.com/sites/www.builtin.com/files/2024-10/cybersecurity.png"
    },
    // More problems can be added here
];

// Domain Badge Component
const DomainBadge = ({ domain }) => {
    return (
        <div className={`
      bg-gray-100 
      px-8 py-5 
      rounded-none
      border border-gray-200
      flex 
      items-center 
      justify-between
      transition-all 
      duration-300
      w-full
      max-w-md
    `}>
            <div className="flex items-center gap-4">
                <span className={`font-bold ${spaceGrotesk.className}`}>{domain}</span>
            </div>
            <div>
                <code className="text-lg">&lt;/&gt;</code>
            </div>
        </div>
    );
};

// Problem Statement Detail Component
const ProblemStatementDetail = ({ problem }) => {
    if (!problem) return null;

    const isImageUrl = problem.imageSrc?.startsWith('http');
    const imageSource = isImageUrl ? problem.imageSrc : problem.imageSrc;

    return (
        <div className={`
      bg-gray-100 
      p-8 
      rounded-none 
      border border-gray-200
      transition-all 
      duration-300
      w-full
      overflow-hidden
      mt-10
    `}>
            <h2 className={`text-2xl font-bold mb-8  ${spaceGrotesk.className}`}>{problem.title}</h2>

            <div className="flex flex-col md:flex-row gap-10">
                <div className="w-full md:w-2/3">
                    <p className="mb-4 leading-relaxed">{problem.description}</p>
                </div>

                {imageSource ? (
                    <div className="w-full md:w-1/3 flex justify-center items-start">
                        <div className={`border border-gray-300 rounded-none overflow-hidden`}>
                            <img
                                src={imageSource}
                                alt={`Illustration for ${problem.title}`}
                                className="w-full h-auto object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML = `
                                        <div class="relative w-full h-full aspect-square">
                                            <div class="absolute inset-0 flex items-center justify-center">
                                                <div class="w-full h-0.5 bg-gray-400 transform rotate-45"></div>
                                                <div class="w-full h-0.5 bg-gray-400 transform -rotate-45"></div>
                                            </div>
                                        </div>
                                    `;
                                }}
                            />
                        </div>
                    </div>
                ) : (
                    <div className="w-full md:w-1/3 flex justify-center items-start">
                        <div className={`border border-gray-300 aspect-square w-full max-w-xs`}>
                            <div className="relative w-full h-full">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className={`w-full h-0.5 bg-gray-400 transform rotate-45`}></div>
                                    <div className={`w-full h-0.5 bg-gray-400 transform -rotate-45`}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// Main Problem Statement Page
function ProblemStatementPage({ problemId = "problem1" }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentProblem, setCurrentProblem] = useState(null);

    useEffect(() => {
        setIsLoaded(true);
        // Find the problem with the matching ID
        const problem = problemStatements.find(p => p.id === problemId);
        setCurrentProblem(problem);
    }, [problemId]);

    if (!currentProblem) {
        return <div>Problem statement not found</div>;
    }

    return (
        <div className="flex min-h-screen bg-white text-black">
            <Sidebar/>

            <main className="flex-1 p-6 md:p-12 bg-white relative z-10 mt-16 sm:mt-0 mb-8">
                {/* Header section with title and countdown */}
                <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-12 mt-4">
                    <div className={`transform transition-all duration-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} max-w-full`}>
                        <AnimatedTitle text="PROBLEM STATEMENT" triggerOnLoad={isLoaded} />
                    </div>

                    <div className={`
                      bg-gray-100 
                      p-5 
                      rounded-none 
                      border border-gray-200
                      shadow-sm 
                      w-full 
                      sm:w-auto
                      transform transition-all duration-500 delay-100 
                      ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                    `}>
                        <CountdownTimer />
                    </div>
                </div>

                {/* Domain Badge */}
                <div className={`transform transition-all duration-500 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    <DomainBadge domain={currentProblem.domain} />
                </div>

                {/* Problem Statement Details */}
                <div className={`transform transition-all duration-500 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    <ProblemStatementDetail problem={currentProblem} />
                </div>
            </main>
        </div>
    );
}

export default ProblemStatementPage;
import Sidebar from "@/app/components/SideBar";
import AnimatedTitle from "@/app/components/AnimatedTitle";
import { Space_Grotesk } from "next/font/google";
import DomainBadge from "./components/DomainBadge";
import ProblemStatementDetail from "./components/ProblemStatementDetail";
import ClientWrapper from "./components/ClientWrapper";
import { getProblemStatements } from "./data/problemStatements";
import CountdownWrapper from "@/app/(dashboard)/problem-statements/components/CountdownWrapper";

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    display: 'swap',
});


export default function ProblemStatementPage({ searchParams }) {
    // Get problemId from URL query params or default to "problem1"
    const problemId = searchParams?.id || "problem1";
    
    // Get problem data - this now happens on the server
    const problemStatements = getProblemStatements();
    const currentProblem = problemStatements.find(p => p.id === problemId);
    
    if (!currentProblem) {
        return <div>Problem statement not found</div>;
    }

    return (
        <div className="flex min-h-screen bg-white text-black">
            <Sidebar/>

            <main className="flex-1 p-6 md:p-12 bg-white relative z-10 mt-16 sm:mt-0 mb-8">
                {/* Header section with title and countdown */}
                <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-12 mt-4">
                    <div className="max-w-full">
                        {/* AnimatedTitle will be client component */}
                        <ClientWrapper>
                            <AnimatedTitle text="PROBLEM STATEMENT" />
                        </ClientWrapper>
                    </div>

                    <div className="bg-gray-100 p-5 rounded-none border border-gray-200 shadow-sm w-full sm:w-auto">
                        {/* CountdownTimer is a client component */}
                        <ClientWrapper>
                            <CountdownWrapper />
                        </ClientWrapper>
                    </div>
                </div>

                {/* Domain Badge */}
                <div>
                    <DomainBadge domain={currentProblem.domain} spaceGrotesk={spaceGrotesk} />
                </div>

                {/* Problem Statement Details */}
                <div>
                    <ProblemStatementDetail problem={currentProblem} spaceGrotesk={spaceGrotesk} />
                </div>
            </main>
        </div>
    );
}

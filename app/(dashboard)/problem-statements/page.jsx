import Sidebar from "@/components/SideBar";
import AnimatedTitle from "@/components/AnimatedTitle";
import DomainBadge from "./components/DomainBadge";
import ProblemStatementDetail from "./components/ProblemStatementDetail";
import ClientWrapper from "./components/ClientWrapper";
import {getProblemStatementsDescriptions} from "./data/problemStatements";
import {getProblemStatements} from "@/app/actions/getProblemStatement";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import CountdownRibbon from "@/components/CountdownRibbon";

export default async function ProblemStatementPage() {
    // const session = await getServerSession(authOptions);
    //
    //
    // const teamDetails = await getProblemStatements(session?.user.email);

    const problemStatements = getProblemStatementsDescriptions();
    const currentProblem = problemStatements[0];

    // if (!session || !teamDetails) {
    //     return (
    //         <span className='w-screen h-screen flex items-center justify-center text-xl text-center'>
    //     401 | Unauthorized 🙅‍♂️
    //   </span>
    //     )
    // }

    if (!currentProblem) {
        return <div>Problem statement not found</div>;
    }

    return (
        <div className="flex min-h-screen text-black bg-gray-50">
            <Sidebar/>
            <CountdownRibbon/>

            <main className="relative z-10 flex-1 p-6 mt-16 mb-8 bg-gray-50 md:p-12 sm:mt-0">
                <div className="flex flex-col items-start justify-between gap-6 mt-4 mb-12 sm:flex-row">
                    <div className="max-w-full">
                        <ClientWrapper>
                            <AnimatedTitle text="PROBLEM STATEMENT"/>
                        </ClientWrapper>
                    </div>
                </div>

                {/* Domain Badge */}
                <div>
                    <DomainBadge domain={"WEB" || teamDetails.Track}/>
                </div>

                {/* Problem Statement Details */}
                <div>
                    <ProblemStatementDetail problem={currentProblem}/>
                </div>
            </main>
        </div>
    );
}

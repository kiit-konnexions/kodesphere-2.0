import Sidebar from "@/app/components/SideBar";
import AnimatedTitle from "@/app/components/AnimatedTitle";
import { Space_Grotesk } from "next/font/google";
import DomainBadge from "./components/DomainBadge";
import ProblemStatementDetail from "./components/ProblemStatementDetail";
import ClientWrapper from "./components/ClientWrapper";
import { getProblemStatementsDescriptions } from "./data/problemStatements";
import CountdownWrapper from "@/app/(dashboard)/problem-statements/components/CountdownWrapper";
import { getProblemStatements } from "@/app/actions/getProblemStatement";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export default async function ProblemStatementPage() {
  // const loggedInEmail = await getServerSession();
  // const teamDetails = await getProblemStatements(loggedInEmail);
  const teamDetails = await getProblemStatements();

  const problemStatements = getProblemStatementsDescriptions();
  const currentProblem = problemStatements.find((p) => p.domain === teamDetails.Track);

  if (!currentProblem) {
    return <div>Problem statement not found</div>;
  }

  return (
    <div className="flex min-h-screen text-black bg-white">
      <Sidebar />

      <main className="relative z-10 flex-1 p-6 mt-16 mb-8 bg-white md:p-12 sm:mt-0">
        <div className="flex flex-col items-start justify-between gap-6 mt-4 mb-12 sm:flex-row">
          <div className="max-w-full">
            <ClientWrapper>
              <AnimatedTitle text="PROBLEM STATEMENT" />
            </ClientWrapper>
          </div>

          <div className="w-full p-5 bg-gray-100 border border-gray-200 rounded-none shadow-sm sm:w-auto">
            <ClientWrapper>
              <CountdownWrapper />
            </ClientWrapper>
          </div>
        </div>

        {/* Domain Badge */}
        <div>
          <DomainBadge domain={teamDetails.Track} spaceGrotesk={spaceGrotesk} />
        </div>

        {/* Problem Statement Details */}
        <div>
          <ProblemStatementDetail problem={currentProblem} spaceGrotesk={spaceGrotesk} />
        </div>
      </main>
    </div>
  );
}

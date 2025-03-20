import { Suspense } from "react";
import Sidebar from "@/components/SideBar";
import ClientAnimatedTitle from "@/components/client/ClientAnimatedTitle";
import ClientCountdownTimer from "@/components/client/ClientCountdownTimer";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SubmissionForm from "@/components/SubmissionForm";
import { getSubmission } from "@/app/actions/getSubmission";

// PageHeader component for consistent header styling across pages
const PageHeader = ({ title, showCountdown = true }) => {
  return (
    <header
      className="flex flex-col items-start justify-between gap-6 mt-4 mb-12 sm:flex-row"
      aria-labelledby="page-title"
    >
      <div className="max-w-full">
        <Suspense fallback={<div className="w-64 h-10 bg-gray-200 animate-pulse" aria-hidden="true"></div>}>
          <ClientAnimatedTitle text={title} id="page-title" />
        </Suspense>
      </div>

      {showCountdown && (
        <div className="w-full p-5 bg-gray-100 border border-gray-200 rounded-none shadow-sm sm:w-auto">
          <ClientCountdownTimer targetDate="April 2, 2025" />
        </div>
      )}
    </header>
  );
};

async function SubmissionPage() {
  const session = await getServerSession(authOptions);
  const submission = await getSubmission(session?.user.email);
  
      if(!session){
          return(
              <span className='w-screen h-screen flex items-center justify-center text-xl text-center'>
                401 | Unauthorized 🙅‍♂️
              </span>
            )
      }
  return (
    <div className="flex min-h-screen text-black bg-white">
      <Sidebar />

      <main className="relative z-10 flex-1 p-6 mt-16 mb-8 bg-white md:p-12 sm:mt-0">
        <PageHeader title="SUBMISSION" />
        <SubmissionForm submissionStat={submission.status} teamId={submission.TEAMID}/>
      </main>
    </div>
  );
}

export default SubmissionPage;

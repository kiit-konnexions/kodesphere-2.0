import {Suspense} from "react";
import Sidebar from "@/components/SideBar";
import ClientAnimatedTitle from "@/components/client/ClientAnimatedTitle";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import SubmissionForm from "@/components/SubmissionForm";
import {getSubmission} from "@/app/actions/getSubmission";
import CountdownRibbon from "@/components/CountdownRibbon";
import {getDashboardData} from "@/app/actions/getDashboardData";

// PageHeader component for consistent header styling across pages
const PageHeader = ({title}) => {
    return (
        <header
            className="flex flex-col items-start justify-between gap-6 mt-4 mb-12 sm:flex-row"
            aria-labelledby="page-title"
        >
            <div className="max-w-full">
                <Suspense fallback={<div className="w-64 h-10 bg-gray-50 animate-pulse" aria-hidden="true"></div>}>
                    <ClientAnimatedTitle text={title} id="page-title"/>
                </Suspense>
            </div>
        </header>
    );
};

async function SubmissionPage() {
    const session = await getServerSession(authOptions);
    const submission = await getSubmission(session?.user.email);

    if (!session) {
        return (
            <span className='w-screen h-screen flex items-center justify-center text-xl text-center'>
                401 | Unauthorized 🙅‍♂️
              </span>
        )
    }
    const {teamDetails} = await getDashboardData(session?.user.email);

    return (
        <div className="flex min-h-screen text-black bg-gray-50">
            <Sidebar teamDetails={teamDetails}/>
            <CountdownRibbon />

            <main className="relative z-10 flex-1 p-6 mt-16 mb-8  md:p-12 sm:mt-0">
                <PageHeader title="SUBMISSION"/>
                <SubmissionForm submissionStat={submission.status} teamId={submission.TEAMID}/>
            </main>
        </div>
    );
}

export default SubmissionPage;

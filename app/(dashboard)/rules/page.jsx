import {Suspense} from "react";
import Sidebar from "@/components/SideBar";
import ClientAnimatedTitle from "@/components/client/ClientAnimatedTitle";
import ClientCountdownTimer from "@/components/client/ClientCountdownTimer";
import {getRules} from "@/app/(dashboard)/rules/data/data";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {spaceGrotesk} from "@/app/(dashboard)/dashboard/page";

const rules = getRules();

// PageHeader component for consistent header styling across pages
const PageHeader = ({title, showCountdown = true}) => {
    return (<header className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-12 mt-4"
                    aria-labelledby="page-title">
        <div className="max-w-full">
            <Suspense fallback={<div className="h-10 w-64 bg-gray-200 animate-pulse" aria-hidden="true"></div>}>
                <ClientAnimatedTitle text={title} id="page-title"/>
            </Suspense>
        </div>

        {showCountdown && (
            <div className="bg-gray-100 p-5 rounded-none border border-gray-200 shadow-sm w-full sm:w-auto">
                <ClientCountdownTimer targetDate="April 2, 2025"/>
            </div>)}
    </header>);
};

// Rules Container Component
const RulesContainer = ({rules}) => {
    return (
        <section
            aria-labelledby="rules-heading"
            className={`bg-gray-100 p-8 rounded-none border border-gray-200 w-full mt-10 shadow-sm ${spaceGrotesk.className}`}
        >
            <h2 id="rules-heading" className="sr-only">Hackathon Rules</h2>
            <ol className="list-none space-y-8 pl-0" aria-label="List of hackathon rules">
                {rules.map((rule, index) => (<li key={index} className="flex items-start">
                    <div className="mr-6 flex-shrink-0">
                          <span
                              className="inline-flex items-center justify-center h-10 w-10 bg-white border border-gray-300 font-medium"
                              aria-hidden="true"
                          >
                            {index + 1}
                          </span>
                    </div>
                    <div className="flex-1">
                        <p className="text-base leading-relaxed">{rule}</p>
                    </div>
                </li>))}
            </ol>
        </section>
    );
};

async function RulesPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        return (<span className='w-screen h-screen flex items-center justify-center text-xl text-center'>
                  401 | Unauthorized 🙅‍♂️
                </span>)
    }
    return (<div className="flex min-h-screen bg-white text-black">
        <Sidebar/>

        <main className="flex-1 p-6 md:p-12 bg-white relative z-10 mt-16 sm:mt-0 mb-8">
            <PageHeader title="RULES"/>
            <RulesContainer rules={rules}/>
        </main>
    </div>);
}

export default RulesPage;

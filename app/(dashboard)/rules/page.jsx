import {Suspense} from "react";
import Sidebar from "@/components/SideBar";
import ClientAnimatedTitle from "@/components/client/ClientAnimatedTitle";
import {getRules} from "@/app/(dashboard)/rules/data/data";
import {spaceGrotesk} from "@/app/(dashboard)/dashboard/page";
import CountdownRibbon from "@/components/CountdownRibbon";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {getServerSession} from "next-auth";
import {getDashboardData} from "@/app/actions/getDashboardData";

const rules = getRules();

// PageHeader component for consistent header styling across pages
const PageHeader = ({title}) => {
    return (
        <header className="flex flex-col items-start justify-between gap-6 mt-4 mb-12 sm:flex-row"
                aria-labelledby="page-title">
            <div className="max-w-full">
                <Suspense fallback={<div className="h-10 w-64 bg-gray-200 animate-pulse" aria-hidden="true"></div>}>
                    <ClientAnimatedTitle text={title} id="page-title"/>
                </Suspense>
            </div>

        </header>
    );
};

// Rules Container Component
const RulesContainer = ({rules}) => {
    return (
        <section
            aria-labelledby="rules-heading"
            className={`bg-gray-100 p-8 rounded-none border border-gray-200 w-full mt-10 transition-all duration-300 ${spaceGrotesk.className}`}
        >
            <h2 id="rules-heading" className="sr-only">Hackathon Rules</h2>
            <ol className="list-none space-y-6" aria-label="List of hackathon rules">
                {rules.map((rule, index) => (
                    <li key={index} className="flex items-start group p-3 transition-all duration-200">
                        <div className="mr-5 flex-shrink-0">
                            <span
                                className="inline-flex items-center justify-center h-10 w-10 bg-white border border-gray-300 font-medium group-hover:border-gray-400 group-hover:bg-gray-50 transition-all duration-200"
                                aria-hidden="true"
                            >
                                {index + 1}
                            </span>
                        </div>
                        <div className="flex-1 pt-1.5">
                            <p className="text-base leading-relaxed">{rule}</p>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    );
};

async function RulesPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        return (
            <span className='w-screen h-screen flex items-center justify-center text-xl text-center'>
                  401 | Unauthorized 🙅‍♂️
            </span>
        )
    }

    const {teamDetails} = await getDashboardData(session?.user.email);

    return (
        <div className="flex min-h-screen bg-gray-50 text-black">
            <Sidebar teamDetails={teamDetails}/>
            <CountdownRibbon/>

            <main className="relative z-10 flex-1 p-6 mt-16 mb-8  md:p-12 sm:mt-0">
                <PageHeader title="RULES"/>
                <RulesContainer rules={rules}/>
            </main>
        </div>
    );
}

export default RulesPage;

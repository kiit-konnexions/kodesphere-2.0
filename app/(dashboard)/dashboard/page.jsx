import {Space_Grotesk} from 'next/font/google';
import SideBar from "@/app/components/SideBar";
import DashboardClient from "@/app/(dashboard)/dashboard/components/DashboardClient";
import {getTeamData} from "@/app/(dashboard)/dashboard/data/teamService";

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    display: 'swap',
});

async function DashboardPage() {
    // In the future, this can be replaced with an actual API call
    const { teamName, teamMembers } = await getTeamData();

    return (
        <div className="flex min-h-screen bg-gray-50 text-black">
            <SideBar/>

            {/* Chess piece background (placeholder) */}
            <div className="fixed bottom-0 right-0 w-64 h-64 opacity-10 pointer-events-none z-0">
                {/* Will be replaced with actual chess pieces */}
            </div>

            <DashboardClient 
                teamName={teamName} 
                teamMembers={teamMembers} 
                spaceGrotesk={spaceGrotesk}
            />
        </div>
    );
}

export default DashboardPage;

import {Space_Grotesk} from "next/font/google";
import SideBar from "@/components/SideBar";
import DashboardClient from "@/app/(dashboard)/dashboard/components/DashboardClient";
import CountdownRibbon from "@/components/CountdownRibbon";
import {getServerSession} from "next-auth";
import {getDashboardData} from "@/app/actions/getDashboardData";

export const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    display: "swap",
});


async function DashboardPage() {
    // const session = await getServerSession(authOptions);
    // const {teamDetails, teamParticipants} = await getDashboardData(session?.user.email);
    //
    // if (!session || !teamDetails || !teamParticipants) {
    //     return (
    //         <span className='w-screen h-screen flex items-center justify-center text-xl text-center'>
    //       401 | Unauthorized 🙅‍♂️
    //     </span>
    //     )
    // }

    // Dummy team details
    const teamDetails = {
        TeamName: "Code Crusaders",
        TeamId: "T123456"
    };

    // Dummy team participants
    const teamParticipants = [
        {
            name: "Jane Smith",
            rollNo: "20CS1001",
            email: "jane.smith@example.com",
            role: "Team Leader",
            branch: "Computer Science"
        },
        {
            name: "John Doe",
            rollNo: "20CS1002",
            email: "john.doe@example.com",
            role: "Frontend Developer",
            branch: "Computer Science"
        },
        {
            name: "Alex Johnson",
            rollNo: "20EC1003",
            email: "alex.johnson@example.com",
            role: "Backend Developer",
            branch: "Electronics"
        },
        {
            name: "Sam Wilson",
            rollNo: "20AI1004",
            email: "sam.wilson@example.com",
            role: "UI/UX Designer",
            branch: "AI & ML"
        }
    ];

    return (
        <div className="flex min-h-screen text-black bg-gray-50">
            <SideBar teamDetails={teamDetails}/>
            <CountdownRibbon/>


            {/* Chess piece background (placeholder) */}
            <div className="fixed bottom-0 right-0 z-0 w-64 h-64 pointer-events-none opacity-10">
                {/* Will be replaced with actual chess pieces */}
            </div>

            <DashboardClient
                teamName={teamDetails.TeamName}
                teamMembers={teamParticipants}
                teamDetails={teamDetails}
            />
        </div>
    );
}

export default DashboardPage;

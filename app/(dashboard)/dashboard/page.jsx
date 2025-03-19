import { Space_Grotesk } from "next/font/google";
import SideBar from "@/app/components/SideBar";
import DashboardClient from "@/app/(dashboard)/dashboard/components/DashboardClient";
import { getDashboardData } from "@/app/actions/getDashboardData";
import { getServerSession } from "next-auth";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

async function DashboardPage() {
  // const loggedInEmail = await getServerSession();
  // const { teamDetails, teamParticipants } = await getDashboardData(loggedInEmail);
  const { teamDetails, teamParticipants } = await getDashboardData();

  return (
    <div className="flex min-h-screen text-black bg-gray-50">
      <SideBar />

      {/* Chess piece background (placeholder) */}
      <div className="fixed bottom-0 right-0 z-0 w-64 h-64 pointer-events-none opacity-10">
        {/* Will be replaced with actual chess pieces */}
      </div>

      <DashboardClient teamName={teamDetails.TeamName} teamMembers={teamParticipants} spaceGrotesk={spaceGrotesk} />
    </div>
  );
}

export default DashboardPage;

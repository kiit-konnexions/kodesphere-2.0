import CountDownTimer from "../../components/countdown-timer";
import AppNavbar from "../../components/side-navbar";

function DashboardPage() {
  const teamMembers = [
    { id: 1, name: "Member 1", isLeader: true },
    { id: 2, name: "Member 2", isLeader: false },
    { id: 3, name: "Member 3", isLeader: false },
  ];

  return (
    <div className="flex min-h-screen">
      <AppNavbar></AppNavbar>
      <main className="flex-1 overflow-y-auto overflow-x-hidden h-screen p-8">
        <section className="grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-semibold">Dashboard</h1>
            <p>Congratulations on making it this far!</p>
          </div>
          <CountDownTimer />
        </section>

        <section className="grid gap-4 mt-10">
          <h2 className="text-2xl font-semibold">Team: Team name</h2>
          <p className="text-lg text-neutral-600">Team ID: d7d239e0411697129ee32da140d31f9c</p>
          <div>
            <h2 className="text-xl font-semibold mb-4">Members</h2>
            <ul className="grid gap-4">
              {teamMembers.map((member) => (
                <li key={member.id}>
                  <div className="bg-neutral-100 border border-neutral-300 w-4/12 flex items-center justify-start gap-4 p-2 rounded">
                    <div className="flex flex-col items-start p-4">
                      <h3>
                        {member.name}
                        {member.isLeader && <span className="ml-2 bg-amber-200 rounded px-2 py-1">Leader</span>}
                      </h3>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default DashboardPage;

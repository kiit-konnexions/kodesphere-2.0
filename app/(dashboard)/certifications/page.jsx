import AppNavbar from "../../components/side-navbar";

const certificationTexts = [
  {
    type: "Participation",
    description: "You have successfully participated in the event.",
  },
  {
    type: "Achievement",
    description: "You have achieved a victorious spot in the event.",
  },
];

function CertificationsPage() {
  return (
    <div className="flex min-h-screen">
      <AppNavbar></AppNavbar>
      <main className="flex-1 overflow-y-auto overflow-x-hidden h-screen p-8">
        <section className="grid gap-2">
          <h1 className="text-4xl font-semibold">Certificates</h1>
        </section>

        <section className="grid gap-4 mt-10">
          {certificationTexts.map((cert, index) => (
            <div className="rounded-2xl bg-neutral-100 p-8 flex items-center justify-between" key={index}>
              <div className="space-y-4">
                <h2 className="text-xl">Certificate of {cert.type}</h2>
                <p>{cert.description}</p>
              </div>
              <div>
                <button className="bg-neutral-500 text-white px-4 py-2 rounded">Download</button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default CertificationsPage;

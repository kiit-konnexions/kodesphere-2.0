import AppNavbar from "../../components/side-navbar";

function ProblemStatement() {
  return (
    <div className="flex min-h-screen">
      <AppNavbar></AppNavbar>
      <main className="flex-1 overflow-y-auto overflow-x-hidden h-screen p-8">
        <section className="grid gap-2">
          <h1 className="text-4xl font-semibold">Problem Statement</h1>
          <div className="bg-neutral-200/80 p-4 rounded w-4/12 lg:w-6/12 space-y-2 mt-6">
            <p className="text-xl">Domain</p>
            <p className="text-neutral-600">Web Development</p>
          </div>
        </section>

        <section className="grid gap-4 mt-10">
          <h2 className="text-2xl font-semibold">Heading</h2>
          <p className="text-lg text-neutral-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sed consequatur reprehenderit pariatur ullam
            vero, earum quae numquam? Quisquam nulla, beatae vitae esse iusto sed blanditiis nemo possimus minima harum?
          </p>
        </section>
      </main>
    </div>
  );
}

export default ProblemStatement;

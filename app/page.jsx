import LoginSection from "@/components/fragments/LoginSection";
import SideInfoBar from "@/components/fragments/SideInfoBar";

function Landing() {
  return (
    <div className="md:flex h-svh gap-4 p-2 md:p-6 bg-neutral-100">
      {/* Left part */}
      <SideInfoBar />
      {/*Right Part */}
      <LoginSection />
    </div>
  );
}

export default Landing;

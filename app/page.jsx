import LoginSection from "@/components/fragments/LoginSection";
import SideInfoBar from "@/components/fragments/SideInfoBar";

function Landing() {
  return (
    <div className="md:flex gap-4 h-svh overflow-y-auto md:overflow-y-hidden bg-neutral-100">
      {/* Left part */}
      <SideInfoBar />
      {/*Right Part */}
      <LoginSection />
    </div>
  );
}

export default Landing;

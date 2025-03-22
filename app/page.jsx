import LoginSection from "@/components/fragments/LoginSection";
import SideInfoBar from "@/components/fragments/SideInfoBar";

function Landing() {
  return (
    <div className="flex h-svh gap-4 p-6 bg-neutral-100">
      {/* Left part */}
      <SideInfoBar />
      {/*Right Part */}
      <LoginSection />
    </div>
  );
}

export default Landing;

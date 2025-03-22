import LoginSection from "@/components/fragments/LoginSection";
import SideInfoBar from "@/components/fragments/SideInfoBar";

function Landing() {


  return (
    <div className="min-h-screen">
      <div className="p-2 flex md:flex-row flex-col gap-4 min-h-screen bg-gray-200">
        {/* Left part */}
        <SideInfoBar/>
        {/*Right Part */}
        <LoginSection/>
      </div>
    </div>
  );
}

export default Landing;

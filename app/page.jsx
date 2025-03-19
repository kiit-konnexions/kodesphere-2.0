import LoginSection from "@/components/fragments/LoginSection";
import SideInfoBar from "@/components/fragments/SideInfoBar";

function Landing() {


  return (
    <div className="bg-gray-200 md:h-screen min-h-screen w-screen">
      <div className="md:p-8 p-2 flex md:flex-row flex-col gap-4 md:h-screen min-h-screen">
        {/* Left part */}
        <SideInfoBar/>
        {/*Right Part */}
        <LoginSection/>
      </div>
    </div>
  );
}

export default Landing;

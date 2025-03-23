"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SideInfoBar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const router = useRouter();

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const navigateToContact = () => {
    router.push("/contacts");
  };

  return (
    <div className="md:w-[370px] w-full h-fit md:h-full shrink-0 pl-0 py-4 md:pr-0 md:pl-4">
      <div className="w-full h-full p-4 bg-white rounded-xl flex flex-col">
        <div className="mt-2 mb-6">
          <div className="flex items-center justify-between w-full flex-wrap">
            <img className="w-auto h-[45px] shrink-0" src="/images/ksaclogo.png" />
            <img className="w-auto h-[60px] shrink-0" src="/images/konnexionslogo.png" />
          </div>

          <img src="/images/kodesphereBanner.jpg" className="mt-4 w-full h-auto rounded-md" />

          <img src="/kodespherelogo.png" className="h-16 rounded-xl mt-5" />

          <div className="mt-2">
            <p className={`text-sm font-medium text-neutral-500 transition-all duration-300 leading-7 line-clamp-4`}>
              Get ready to ignite your coding passion! Konnexions is rolling out the red carpet for the epic hackathon experience, Kodessphere.
              Prepare to dive into a whirlwind of innovation, teamwork, and the latest tech marvels. Whether you're a coding wizard or a rising star,
              seize this moment to dazzle and redefine the digital landscape. Don't let this opportunity slip through your fingertips! Secure your
              spot now —register fast!
            </p>
            {/* Read More Button */}
            <button onClick={toggleText} className="mt-2 text-sm float-right font-semibold text-neutral-500 hover:text-neutral-800">
              Read more
            </button>
          </div>

          {/* Event Details */}
          <div className="mt-12 self-start flex flex-col gap-4">
            <p className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M8.829 12.524c.11-.134.39-.274.671-.274a.75.75 0 0 1 .75.75c0 .265-.077.425-.177.521c-.102.098-.329.229-.823.229a.75.75 0 0 0 0 1.5c.494 0 .721.131.823.229c.1.097.177.256.177.521a.75.75 0 0 1-.75.75c-.28 0-.56-.14-.671-.274a.75.75 0 1 0-1.158.954c.44.534 1.176.82 1.829.82A2.25 2.25 0 0 0 11.75 16c0-.522-.149-1.068-.538-1.5c.39-.432.538-.978.538-1.5a2.25 2.25 0 0 0-2.25-2.25c-.653 0-1.389.286-1.829.82a.75.75 0 0 0 1.158.954M14.5 17.5v-4.751l-.398.211a.75.75 0 0 1-.704-1.324l1.218-.648l.009-.005c.036-.02.1-.054.162-.08a.9.9 0 0 1 .455-.066a.87.87 0 0 1 .597.359a.87.87 0 0 1 .155.433c.006.066.006.139.006.18V17.5a.75.75 0 0 1-1.5 0"
                ></path>
                <path
                  fill="currentColor"
                  d="M10.367 2.75h3.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v4.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057h-3.266c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.867c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M4.75 9.5v4.6c0 1.133 0 1.937.052 2.566c.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.63.051 1.434.052 2.566.052h3.2c1.133 0 1.937 0 2.566-.052c.62-.05 1.005-.147 1.31-.302a3.25 3.25 0 0 0 1.42-1.42c.155-.305.251-.69.302-1.31c.051-.63.052-1.434.052-2.566V9.5zM9.5 5.75a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2z"
                ></path>
              </svg>
              <span className="text-neutral-600">31st March, 2025</span>
            </p>
            <p className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} color="currentColor">
                  <path d="M22 10.5v-.783c0-1.94 0-2.909-.586-3.512c-.586-.602-1.528-.602-3.414-.602h-2.079c-.917 0-.925-.002-1.75-.415L10.84 3.521c-1.391-.696-2.087-1.044-2.828-1.02S6.6 2.918 5.253 3.704l-1.227.716c-.989.577-1.483.866-1.754 1.346C2 6.246 2 6.83 2 7.999v8.217c0 1.535 0 2.303.342 2.73c.228.285.547.476.9.54c.53.095 1.18-.284 2.478-1.042c.882-.515 1.73-1.05 2.785-.905c.884.122 1.705.68 2.495 1.075M8 2.5v15m7-12v4"></path>
                  <path d="M17.5 12c2.435 0 4.5 2.017 4.5 4.463c0 2.485-2.098 4.23-4.036 5.415a.94.94 0 0 1-.927 0C15.102 20.681 13 18.957 13 16.463C13 14.016 15.065 12 17.5 12m0 4.5h.009"></path>
                </g>
              </svg>
              <span className="text-neutral-600">Campus 14, KiiT University</span>
            </p>
          </div>
        </div>
        {/* Logo Section */}

        {/* Buttons Section */}
        <div className="flex justify-between w-full mt-auto">
          <button className="text-black font-medium flex items-center gap-2 hover:underline" onClick={navigateToContact}>
            <img src="/icons/call.svg" alt="contact" className="h-[20px]" />
            Contact Us
          </button>
          <Link href="/event-guide.pdf" className="text-black font-medium flex items-center gap-2 hover:underline">
            <img src="/icons/guide.svg" alt="event_guide" className="h-[20px]" />
            Event Guide
          </Link>
        </div>

        {isExpanded && (
          <div className="fixed z-10 inset-0 h-full w-full bg-gradient-to-b from-transparent to-black/50 flex items-center justify-center">
            <div className="w-full max-w-lg bg-white rounded-xl">
              <div className="flex items-center justify-between px-5">
                <img src="/kodespherelogo.png" className="h-12 rounded-xl mt-5 -ml-1" />
                <button className="h-10 w-10 flex items-center justify-center bg-neutral-100 text-neutral-700 rounded-full" onClick={toggleText}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6" viewBox="0 0 24 24">
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit={10}
                      strokeWidth={2}
                      d="m7.757 16.243l8.486-8.486m0 8.486L7.757 7.757"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="px-5 pb-7 mt-2">
                <p className="text-sm leading-7 text-neutral-500">
                  Get ready to ignite your coding passion! Konnexions is rolling out the red carpet for the epic hackathon experience, Kodessphere.
                  Prepare to dive into a whirlwind of innovation, teamwork, and the latest tech marvels. Whether you're a coding wizard or a rising
                  star, seize this moment to dazzle and redefine the digital landscape. Don't let this opportunity slip through your fingertips!
                  Secure your spot now —register fast!
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideInfoBar;

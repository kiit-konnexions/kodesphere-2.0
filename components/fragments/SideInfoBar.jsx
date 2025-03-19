"use client";
import { useState } from "react";

const SideInfoBar = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleText = () => {
      setIsExpanded(!isExpanded);
    };
  return (
    <div className="xl:w-[25%] w-full h-full p-4 bg-white rounded-xl flex flex-col items-center">
          <div className="flex items-center justify-between w-full">
            <img className="w-auto h-[40px]" src="/images/ksaclogo.jpg" />
            <img className="w-auto h-[50px]" src="/images/konnexlogo.jpg" />
          </div>
          {/* Kodesphere Poster */}
          <img
            src="/images/kodesphereBanner.jpg"
            className="mt-5 w-full h-auto rounded-xl"
          />

          <p className="mt-5 text-gray-600 leading-7 min-h-[150px] overflow-scroll">
            Get Ready to ignite your coding passion! Konnexions is rolling out
            red carpet for the epic hackathon experience, Kodesphere. Prepare to
            dive into a whirlwind of innovation, teamwork, and the latest tech
            marvels. Whether you're a
            {isExpanded && (
              <span>
                coding wizard or a rising star, seize this moment to dazzle and
                redefine the digital landscape. Don't let this opportunity slip
                through your fingertips! Secure your spot now - register fast!
                coding wizard or a rising star, seize this moment to dazzle and
                redefine the digital landscape. Don't let this opportunity slip
                through your fingertips! Secure your spot now - register fast!
              </span>
            )}
            {/* "Read more" / "Read less" text toggle */}
            <span className={isExpanded ? "hidden" : "inline"}>...</span>
          </p>

          <button
            onClick={toggleText}
            className="font-bold text-gray-800 hover:underline self-end"
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>

          <div className="mt-10 self-start flex flex-col gap-2">
            <p className="flex items-center justify-start gap-3">
              <img src="/icons/calender.svg" alt="calender" className="w-auto h-[20px]" />
              31st March, 2024
            </p>
            <p className="flex items-center justify-start gap-3">
              <img src="/icons/location.svg" alt="calender" className="w-auto h-[20px]" />
              Campus 14, KIIT University
            </p>
          </div>

          <div className="flex items-end justify-between h-full w-full mt-10">
            <button className=" text-black rounded hover:underline flex items-center justify-center gap-2 cursor-pointer">
              <img src="/icons/call.svg" alt="contactus" className="w-auto h-[20px]"/>
              Contact Us
            </button>
            <button className=" text-black rounded hover:underline flex items-center justify-center gap-2 cursor-pointer">
            <img src="/icons/guide.svg" alt="contactus" className="w-auto h-[20px]"/>
              Event Guide
            </button>
          </div>
        </div>
  )
}

export default SideInfoBar

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SideInfoBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const navigateToContact = () => {
    router.push("/contacts");
  };

  return (
    <div className="md:w-[25%] w-full min-h-screen p-4 bg-white rounded-xl flex flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-between w-full flex-wrap">
        <img className="w-auto h-[40px]" src="/images/ksaclogo.png" />
        <img className="w-auto h-[50px]" src="/images/konnexionslogo.png" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <img
          src="/images/kodesphereBanner.jpg"
          className="mt-5 w-full h-auto rounded-xl"
        />

        <img
          src="/kodespherelogo.png"
          className="w-full h-auto rounded-xl"
        />
      </div>

      {/* Kodesphere Poster */}

      {/* Description Section */}
      <div className="mt-10 text-gray-600 leading-7">
        <p className={`text-sm transition-all duration-300 ${isExpanded ? "max-h-full" : "line-clamp-3"}`}>
          Get ready to ignite your coding passion! Konnexions is rolling out
          the red carpet for an epic hackathon experience, Kodessphere. Prepare
          to dive into a whirlwind of innovation, teamwork, and the latest tech
          marvels. Whether you're a
          {isExpanded && (
            <span>
              {" "}
              coding wizard or a rising star, seize this moment to dazzle and
              redefine the digital landscape. Don't let this opportunity slip
              through your fingertips! Secure your spot now - register fast!
            </span>
          )}
        </p>
        {/* Read More Button */}
        <button
          onClick={toggleText}
          className="mt-2 text-blue-600 font-semibold hover:underline"
        >
          {isExpanded ? "Read less" : "Read more"}
        </button>
      </div>

      {/* Event Details */}
      <div className="mt-6 self-start flex flex-col gap-2">
        <p className="flex items-center gap-3">
          <img src="/icons/calender.svg" alt="calendar" className="w-auto h-[20px]" />
          31st March, 2025
        </p>
        <p className="flex items-center gap-3">
          <img src="/icons/location.svg" alt="location" className="w-auto h-[20px]" />
          Campus 14, KIIT University
        </p>
      </div>
      </div>
      {/* Logo Section */}


      {/* Buttons Section */}
      <div className="flex justify-between w-full mt-[135px]">
        <button
          className="text-black font-medium flex items-center gap-2 hover:underline"
          onClick={navigateToContact}
        >
          <img src="/icons/call.svg" alt="contact" className="h-[20px]" />
          Contact Us
        </button>
        <Link href="/event-guide" className="text-black font-medium flex items-center gap-2 hover:underline">
          <img src="/icons/guide.svg" alt="event_guide" className="h-[20px]" />
          Event Guide
        </Link>
      </div>
    </div>
  );
};

export default SideInfoBar;
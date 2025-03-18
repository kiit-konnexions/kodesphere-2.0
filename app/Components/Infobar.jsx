'use client'
import React, { useState } from 'react';

function Infobar() {
  const [isExpanded, setIsExpanded] = useState(false); 

  const toggleText = () => {
    setIsExpanded(!isExpanded); 
  };

  return (
    <div className=" ">
      {/* Left part */}
      <div className="w-[36%] p-[4%] bg-white rounded">
        <div className=" flex">
            <img className=" " src="/ksac.png" />
           <img className=" " src=" "/>
        </div>
        {/* Kodesphere Poster */}
        <img src="/event_logo.png" className=" " />
        {/* Kodesphere Logo */}
        <img src=" " className="w-[50%] mt-4" />

        <p className="mt-[4%] text-gray-600">
          Get Ready to ignite your coding passion! Konnexions is rolling out red carpet for the epic hackathon experience, Kodesphere. Prepare to dive into a whirlwind of innovation, teamwork, and the latest tech marvels. Whether you're a
          {isExpanded && (
            <span>
             coding wizard or a rising star, seize this moment to dazzle and redefine the digital landscape. Don't let this opportunity slip through your fingertips! Secure your spot now - register fast! coding wizard or a rising star, seize this moment to dazzle and redefine the digital landscape. Don't let this opportunity slip through your fingertips! Secure your spot now - register fast!
            </span>
          )}

          {/* "Read more" / "Read less" text toggle */}
          <span className={isExpanded ? 'hidden' : 'inline'}>...</span>
        </p>

        <button onClick={toggleText} className="mt-[2%] text-blue-500 hover:underline">
          {isExpanded ? 'Read less' : 'Read more'}
        </button>

        <div className="mt-[8%]">
          <p>31st March, 2024</p>
          <p>Campus 14, KIIT University</p>
          
        </div>

        <div className="mt-[28%] space-x-[40%]">
          <button className=" text-black rounded hover:underline">Contact Us</button>
          <button className=" text-black rounded hover:underline">Event Guide</button>
        </div>
      </div>
    </div>
  );
}

export default Infobar;
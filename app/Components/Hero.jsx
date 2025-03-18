'use client'
import React, { useState } from 'react';

function Hero() {
  const [isExpanded, setIsExpanded] = useState(false); 

  const toggleText = () => {
    setIsExpanded(!isExpanded); 
  };

  return (
    <div className=" bg-gray-100">
    <div className=" p-[4%] flex gap-[4%]">
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

      {/*Right Part */}
      <div className=" w-[68%] h-[16%] rounded bg-white">
        <div className=" bg-white p-[4%]">
        <h2 className=" text-2xl font-semibold flex gap-[2%]"><svg xmlns="http://www.w3.org/2000/svg" width="0.98em" height="1em" viewBox="0 0 256 262"><path fill="#4285f4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"/><path fill="#34a853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"/><path fill="#fbbc05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"/><path fill="#eb4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"/></svg>Sign in</h2>

        <p>To register, please sign in with your KIIT Gmail account.</p>

        <p className="bg-yellow-100 text-yellow-800 rounded-md mt-[4%]">Only 1 team member needs to register the team.(The person registering for the team should be the team leader)</p>
        <button className=" bg-gray-200 rounded mt-[4%] px-[4%] hover:bg-green" >Sign in with google</button>
        </div>
    </div>
    </div>
    </div>
  );
}

export default Hero;
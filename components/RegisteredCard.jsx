import React from "react";
import EventDateCounter from "./EventDateCounter";
import Link from "next/link";

function RegisteredCard({ tid }) {
  return (
    <div className="w-full grid grid-cols-3 gap-4">
      <div className="bg-white col-span-3 rounded-xl py-6">
        <div className="w-full bg-white rounded-2xl transform transition-all">
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-green-100 p-4 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h2 className="text-2xl font-bold text-gray-900">Registration Confirmed!</h2>
            <p className="text-neutral-600 mt-3 leading-7 text-sm max-w-sm mx-auto">
              You're all set and ready to go. We're excited to see you at Campus 14!
            </p>
            <div className="mt-5">
              <EventDateCounter />
            </div>
            <Link
              href={`/digital-id/${tid}`}
              className="w-fit mx-auto text-base flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-xl font-medium transition-all hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="18" height="16" x="3" y="4" rx="2" />
                <path d="M7 12h10" />
                <path d="M7 16h10" />
                <path d="M7 8h4" />
              </svg>
              View Digital ID Card
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="bg-white rounded-xl h-full relative p-6">
        <div className="h-full w-full flex justify-end">
          <img src="/idcard.png" className="h-[200px] rounded-md" alt="" />
        </div>
      </div> */}
    </div>
  );
}

export default RegisteredCard;

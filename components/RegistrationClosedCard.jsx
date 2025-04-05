import React from "react";
import EventDateCounter from "./EventDateCounter";

function RegistrationClosedCard() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white md:col-span-3 rounded-xl py-10">
        <div className="w-full bg-white rounded-2xl transform transition-all">
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-red-100 p-4 mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-12 w-12 text-red-600" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>

            <h2 className="text-2xl font-bold text-gray-900">Registrations are Closed!</h2>
            <p className="text-neutral-600 mt-3 leading-7 text-sm max-w-sm mx-auto">
              Better luck next time! See you next year with the same spirit and enthusiasm!
            </p>
            <div className="mt-5">
              <EventDateCounter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationClosedCard;
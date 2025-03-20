"use client"
import React from "react";
import { Phone } from "lucide-react";

const teamMembers = [
  { name: "Priyangsu", img: "/images/priyangsu.jpeg", phone: "tel:+919647045453" },
  { name: "Ruhani", img: "/images/ruhani.jpg", phone: "tel:+918910080131" },
  { name: "Sushant", img:"/images/sushant.jpg", phone: "tel:+918651476642" },
  { name: "Ayushi", img: "/images/ayushi.png", phone: "tel:+918984939351" },
  { name: "Bhavishya", img: "/images/bhavishya.jpg", phone: "tel:+918506090909" },
  { name: "Khushal", img: "/images/khushal.jpg", phone: "tel:+918368066348" },
];


const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-5 text-center">
      <h1 className="text-3xl font-semibold mt-10">
        Contact Us <span className="text-pink-400">✲</span> OC Team
      </h1>
      <p className="text-gray-600 mt-2">
        You can reach us any time, we are all ears to your queries and suggestions.
      </p>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 max-w-4xl">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-100 p-5 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            <img
              src={member.img || "https://via.placeholder.com/100"}
              alt={member.name}
              className="w-28 h-28 object-cover rounded-md shadow-sm"
            />
            <a
              href={member.phone}
              className="mt-[-10px] p-2 bg-white border-2 border-gray-300 rounded-full shadow-md hover:bg-gray-200 transition"
            >
              <Phone size={20} color="black" />
            </a>
            <p className="mt-2 font-medium">{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;

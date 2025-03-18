"use client";

import { rasieHand } from "@/app/actions/raisehand";
import { useState } from "react";

const RaiseHand = ({ teamName, domainName, setRaiseHandDialog }) => {
  const [roomNumber, setRoomNumber] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const NotifyRaisedHand = async () => {
    setLoading(true);
    if(roomNumber!==""){
        const data = {
          teamName: teamName,
          roomNumber: roomNumber,
          domainName: domainName,
        };
        const response = await rasieHand(data);
        setMessage(response.message);
        setLoading(false);
    }else{
        setMessage("Please Enter Room Number!");
        setLoading(false);
    }
  };
  return (
    <div className="w-screen bg-black/30 h-screen flex items-center justify-center fixed top-0 left-0">
      <div className="w-[400px] h-[300px] bg-white p-8 rounded-xl shadow-lg flex flex-col items-center justify-center gap-5">
        <button
          onClick={() => {
            setRaiseHandDialog(false);
          }}
          className="text-sm bg-black text-white rounded-xl p-2 self-end cursor-pointer "
        >
          ❌
        </button>
        <input
          type="text"
          className="bg-transparent border-gray-500 text-black text-center border text-2xl px-2 py-3 outline-blue-400 rounded-xl"
          placeholder="Room Name"
          value={roomNumber}
          onChange={(e)=>setRoomNumber(e.target.value)}
        />
        {!loading?<button
          className="px-8 py-4 bg-black text-white border-black border cursor-pointer"
          onClick={NotifyRaisedHand}
        >
          Raise Hand
        </button>
        :
        <span
          className="px-8 py-4 bg-black text-white border-black border cursor-pointer"
          onClick={NotifyRaisedHand}
        >
          Asking for Help...
        </span>
        }
        <span className="text-lg text-black text-center">{message}</span>
      </div>
    </div>
  );
};

export default RaiseHand;

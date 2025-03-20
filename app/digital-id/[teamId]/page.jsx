import React from "react";

const page = ({ firstName, lastName, group }) => {
  return (
    <div className="w-[450px] md:w-[350px] relative pointer-events-none select-none">
      <img src="/idcard.png" className="h-full w-full" alt="idcard" />
      <div className="absolute bottom-[70px] md:bottom-[85px] left-9 md:left-11">
        <h1 className="text-[20px] font-semibold font-poppins text-[#345969]">
          {`${firstName} ${lastName}`}
        </h1>
        <p className="font-poppins text-white">{group}</p>
      </div>
    </div>
  );
};

export default page;

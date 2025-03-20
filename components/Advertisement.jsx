/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

function Advertisement({ close }) {
  return (
    <div className="fixed inset-0 h-full w-full bg-black/60 flex items-end md:items-center md:justify-center">
      <div className="w-full min-h-[60%] max-w-[450px] h-fit bg-white pb-7 md:pb-1 md:rounded-lg">
        <div className="p-3">
          <img src="/og-image-800.png" className="rounded" alt="" />
        </div>
        <div className="p-4 md:px-6">
          <h1 className="font-medium text-xl text-center">
            Fasten your seatbelts 🥳
          </h1>
          <p className="text-sm text-neutral-600 mt-2 leading-7 text-center">
            Kodessphere 2025 is finally happening. We are looking forward to
            seeing you and your team at the event.
          </p>

          <div className="grid grid-cols-2 gap-3 mt-6">
            <div className="flex items-center justify-center">
              <Button onClick={() => close()} className="w-full">
                Close
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <Link href={"/"} className="w-full">
                <Button className="w-full bg-black text-white">Register</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advertisement;

"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import RegistrationForm from "../RegistrationForm";
import RegistrationWrapper from "../RegistrationWrapper";
import Image from "next/image";
import PopupModal from "../PopupModal";

const LoginSection = () => {
  const { data: session, status } = useSession();
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <div className="w-full h-fit min-h-svh md:h-svh md:overflow-y-auto py-4 md:pr-4">
      <div className="bg-white md:rounded-xl px-4 py-8 md:p-6">
        <div>
          {status == "authenticated" ? (
            <div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-9"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M6.002 4a1.998 1.998 0 1 1 3.996 0a1.998 1.998 0 0 1-3.996 0M8 3.002a.998.998 0 1 0 0 1.996a.998.998 0 0 0 0-1.996M11 4.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m1.5-.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m-9-1a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M3 4.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M4.268 7A2 2 0 0 0 4 8H2v2.5a1.5 1.5 0 0 0 2.096 1.377c.074.331.19.647.34.942A2.5 2.5 0 0 1 1 10.5V8a1 1 0 0 1 1-1zm7.296 5.819A2.5 2.5 0 0 0 15 10.5V8a1 1 0 0 0-1-1h-2.268c.17.294.268.635.268 1h2v2.5a1.5 1.5 0 0 1-2.096 1.377q-.114.498-.34.942M6 6.999a1 1 0 0 0-1 1V11a3 3 0 0 0 6 0V8a1 1 0 0 0-1-1zm0 1h4V11a2 2 0 0 1-4 0z"
                  />
                </svg>
                <h1 className="text-2xl font-semibold text-neutral-800">
                  Greetings
                </h1>
              </div>
              <p className="mt-4 text-sm md:text-base text-neutral-600 leading-7">
                Please fill the form below to register your team. Min 2 and Max
                3 members are allowed in a team.
              </p>
            </div>
          ) : status == "unauthenticated" ? (
            <div>
              <div className="flex w-fit items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7"
                  viewBox="0 0 256 262"
                >
                  <path
                    fill="#4285f4"
                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                  />
                  <path
                    fill="#34a853"
                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                  />
                  <path
                    fill="#fbbc05"
                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
                  />
                  <path
                    fill="#eb4335"
                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                  />
                </svg>
                <h1 className="text-2xl font-semibold">Sign In</h1>
              </div>
              <p className="mt-4 text-base text-neutral-600">
                To register, please sign in with your KIIT Gmail account.
              </p>
            </div>
          ) : null}
        </div>

        <p className="bg-yellow-100 text-sm md:text-base mt-4 w-fit rounded-md md:rounded-full text-yellow-800 px-3 py-2">
          Only 1 team member needs to register the team.
        </p>

        <div className="mt-5">
          {status == "unauthenticated" ? (
            <div className="flex items-center w-full mt-3">
              <button
                onClick={() => signIn("google", { callbackUrl: "/" })}
                className="flex items-center gap-2 bg-neutral-100 py-3 px-4 rounded-full hover:bg-gray-300 trasnsition-all ease-in-out duration-300 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M21.594 11.08H12.32v2.746h6.656c-.356 3.812-3.457 5.46-6.462 5.46c-3.813 0-7.205-2.972-7.205-7.27c0-4.135 3.23-7.27 7.205-7.27c3.037 0 4.879 1.971 4.879 1.971l1.874-1.97S16.748 2 12.386 2C6.634 1.968 2.24 6.782 2.24 11.984C2.24 17.024 6.376 22 12.483 22c5.395 0 9.272-3.651 9.272-9.111c.033-1.131-.161-1.81-.161-1.81"
                  ></path>
                </svg>
                <span>Sign in with google</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              {/* <Link
                href="/register"
                className=" bg-gray-200 p-3 rounded-xl hover:bg-gray-400 trasnsition-all ease-in-out duration-300 cursor-pointer"
              >
                Register
              </Link> */}
              <button
                onClick={() => signOut()}
                className="flex items-center gap-2 bg-neutral-100 py-3 px-4 rounded-full hover:bg-gray-300 trasnsition-all ease-in-out duration-300 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 rotate-180"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m12.59 13l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4-4a1 1 0 0 0 .21-.33a1 1 0 0 0 0-.76a1 1 0 0 0-.21-.33l-4-4a1 1 0 1 0-1.42 1.42l2.3 2.29H3a1 1 0 0 0 0 2ZM12 2a10 10 0 0 0-9 5.55a1 1 0 0 0 1.8.9A8 8 0 1 1 12 20a7.93 7.93 0 0 1-7.16-4.45a1 1 0 0 0-1.8.9A10 10 0 1 0 12 2"
                  />
                </svg>
                <span>Sign Out</span>
              </button>
            </div>
          )}
        </div>
      </div>
      {status == "authenticated" && (
        <div className="mt-4">
          <RegistrationWrapper />
        </div>
      )}
      <div className="bg-white md:rounded-xl px-4 py-8 mt-4 md:p-6">
        <h1 className="text-2xl font-semibold">Event Partners</h1>
        <div className="bg-white rounded-xl h-4xl flex items-center gap-4 mt-3 ml-5">
          <Link href="https://www.biggiesburger.com/">
            <Image
              src="/biggies.png"
              alt="starbucks"
              height={115}
              width={115}
              className="rounded-xl"
            />
          </Link>
          <Link href="https://tsb-stores.starbucksindia.net/location/odisha/bhubaneswar/patia">
            <Image
              src="/st1.png"
              alt="starbucks"
              height={200}
              width={200}
              className="rounded-xl"
            />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center min-h-screen bg-transparent">
        <PopupModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default LoginSection;

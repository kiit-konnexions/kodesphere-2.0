"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { registerTeam } from "@/app/actions/registerTeam";
// import {useRouter} from 'next/navigation';
import toast, { Toaster } from "react-hot-toast";
import { sendEmail } from "@/app/actions/sendEmail";
import { sendTeleReg } from "@/app/actions/sendTeleReg";

export default function RegistrationForm({ setIsRegistered, setTid }) {
  // const router = useRouter();
  const [teamName, setTeamName] = useState("");
  const [loading, setLoading] = useState(false);
  const { data: session, status } = useSession();
  const [track, setTrack] = useState("web");
  const [members, setMembers] = useState([{ id: 1, name: session?.user?.name || "", phone: "", email: session?.user?.email || "" }]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (session?.user) {
      setMembers((members) =>
        members.map((member) => (member.id === 1 ? { ...member, name: session.user.name || "", email: session.user.email || "" } : member))
      );
    }
  }, [session]);

  const addMember = () => {
    const newId = members.length > 0 ? Math.max(...members.map((m) => m.id)) + 1 : 1;
    setMembers([...members, { id: newId, name: "", phone: "", email: "" }]);

    // Clear teamSize error when adding a new member
    if (errors.teamSize) {
      setErrors({ ...errors, teamSize: null });
    }
  };

  const removeMembers = (id) => {
    setMembers(members.filter((member) => member.id !== id));
  };

  const updateMember = (id, field, value) => {
    setMembers(members.map((member) => (member.id === id ? { ...member, [field]: value } : member)));

    // Clear field error when user starts typing
    if (errors[`member-${id}-${field}`]) {
      setErrors({ ...errors, [`member-${id}-${field}`]: null });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Team size validation (minimum 2 members)
    if (members.length < 2) {
      newErrors.teamSize = "Your team must have at least 2 members";
      isValid = false;
    }

    // Team name validation
    if (!teamName?.trim()) {
      newErrors.teamName = "Team name is required";
      isValid = false;
    }

    // Members validation
    members.forEach((member) => {
      // Existing validation code remains the same
      if (!member.name?.trim()) {
        newErrors[`member-${member.id}-name`] = "Name is required";
        isValid = false;
      }

      if (!member.email?.trim()) {
        newErrors[`member-${member.id}-email`] = "Email is required";
        isValid = false;
      } else if (!member.email?.includes("@kiit.ac.in")) {
        newErrors[`member-${member.id}-email`] = "Must be a valid KIIT email address";
        isValid = false;
      }

      if (!member.phone?.trim()) {
        newErrors[`member-${member.id}-phone`] = "Phone number is required";
        isValid = false;
      } else if (member.phone && !/^[0-9]{10}$/.test(member.phone)) {
        newErrors[`member-${member.id}-phone`] = "Must be a valid 10-digit phone number";
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setLoading(true);
    try {
      const res = await registerTeam(teamName, track, members, session?.user.email);
      if (res.success) {
        await sendEmail(members, res.id, teamName);
        await sendTeleReg(res.id, teamName, members, track);
        toast.success(res.message);
        setTid(res.id);
        setIsRegistered(true);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full rounded-xl bg-white h-fit">
      <Toaster />

      <form onSubmit={handleSubmit} className="p-6 rounded-xl" noValidate>
        <section>
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M4.116 11q-.667 0-1.141-.475T2.5 9.385v-3.27q0-.666.475-1.14t1.14-.475h8.077q.344 0 .576.232t.232.576v4.884q0 .343-.232.576t-.576.232zm0-1H12V5.5H4.116q-.27 0-.443.173t-.173.443v3.269q0 .269.173.442t.443.173m0 9.5q-.667 0-1.141-.475t-.475-1.14v-3.27q0-.666.475-1.14T4.115 13h10.077q.344 0 .576.232t.232.576v4.884q0 .344-.232.576t-.576.232zm0-1H14V14H4.116q-.27 0-.443.173t-.173.443v3.269q0 .269.173.442t.443.173M17 11h-1.192q-.343 0-.576-.232T15 10.192V5.308q0-.343.232-.576t.576-.232h4.275q.426 0 .67.351q.243.351.082.755l-1.566 4.01h.739q.434 0 .67.366q.238.366.076.77l-2.977 8.475q-.063.156-.19.215t-.264.027t-.23-.134t-.093-.27zM3.5 10V5.5zm0 8.5V14zm3-10.75q0-.325-.213-.537T5.75 7t-.537.213T5 7.75t.213.538t.537.212t.538-.213t.212-.537M5.75 17q.325 0 .538-.213t.212-.537t-.213-.537t-.537-.213t-.537.213T5 16.25t.213.538t.537.212"
              />
            </svg>
            <h1 className="text-xl font-semibold text-neutral-800">Team & member information</h1>
          </div>
          <div className="mt-10">
            <label htmlFor="teamName" className="block text-sm/6 font-semibold">
              Team Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="teamName"
              value={teamName}
              onChange={(e) => {
                setTeamName(e.target.value);
                if (errors.teamName) setErrors({ ...errors, teamName: null });
              }}
              className={`mt-2.5 block w-full rounded-md px-3.5 py-2 text-base outline-1 -outline-offset-1 ${
                errors.teamName ? "outline-red-500" : "outline-gray-300"
              } placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black`}
              required
            />
            {errors.teamName && <p className="text-red-500 text-sm mt-1">{errors.teamName}</p>}
          </div>

          <div className="mt-5">
            <label htmlFor="track" className="block text-sm/6 font-semibold">
              Select Track <span className="text-red-500">*</span>
            </label>
            <select
              id="track"
              value={track}
              onChange={(e) => setTrack(e.target.value)}
              className="mt-2 w-full rounded-md bg-white h-12 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6"
              required
            >
              <option value="web">Web Development</option>
              <option value="app">App Development</option>
              <option value="ml">Machine Learning</option>
            </select>
          </div>
        </section>

        <section className="mt-10">
          <div className="flex items-center gap-2">
            <h2 className="text-base/7 font-semibold">Member Details</h2>
            <div className="group relative">
              <span className="bg-gray-50 text-gray-800 text-xs px-2.5 py-1 rounded-full border border-gray-200 drop-shadow-[0_1px_1px_rgba(0,0,0,0.03)] font-medium inline-flex items-center gap-1">
                {members.length}/3 members added
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3.5 h-3.5 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </span>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1.5 hidden group-hover:block opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black text-white text-xs px-2 py-1 rounded shadow-md whitespace-nowrap z-10 pointer-events-none">
                Minimum: 2 | Maximum: 3
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-black"></div>
              </div>
            </div>
          </div>
          <p className="mt-1 text-sm/6 pb-4">Please provide the details of all team members</p>
          {errors.teamSize && <p className="text-red-500 text-sm mb-3 font-medium">{errors.teamSize}</p>}

          <div id="membersList">
            {members.map((member, index) => (
              <div key={member.id} className="flex flex-col mb-5 pb-10">
                {index > 0 && (
                  <div className="w-full px-2 mb-8 -mt-4">
                    <hr className="border-0 border-t-2 border-dotted border-gray-300" />
                  </div>
                )}
                {member.id > 1 && (
                  <div className="flex self-end">
                    <button
                      type="button"
                      onClick={() => {
                        removeMembers(member.id);
                      }}
                      className="rounded-md border border-black px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-xs hover:bg-gray-100 flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                      Remove
                    </button>
                  </div>
                )}
                <div className="mb-4">
                  <label htmlFor={`memberName${member.id}`} className="block text-sm/6 font-semibold">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id={`memberName${member.id}`}
                    value={member.name}
                    onChange={(e) => updateMember(member.id, "name", e.target.value)}
                    className={`mt-2.5 block w-full rounded-md px-3.5 py-2 text-base outline-1 -outline-offset-1 ${
                      errors[`member-${member.id}-name`] ? "outline-red-500" : "outline-gray-300"
                    } placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black`}
                    required
                  />
                  {errors[`member-${member.id}-name`] && <p className="text-red-500 text-sm mt-1">{errors[`member-${member.id}-name`]}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor={`memberEmail${member.id}`} className="block text-sm/6 font-semibold">
                    Email (KIIT MAIL) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id={`memberEmail${member.id}`}
                    value={member.email}
                    onChange={(e) => updateMember(member.id, "email", e.target.value)}
                    className={`mt-2.5 block w-full rounded-md px-3.5 py-2 text-base outline-1 -outline-offset-1 ${
                      errors[`member-${member.id}-email`] ? "outline-red-500" : "outline-gray-300"
                    } placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black`}
                    required
                  />
                  {errors[`member-${member.id}-email`] && <p className="text-red-500 text-sm mt-1">{errors[`member-${member.id}-email`]}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor={`memberRoll${member.id}`} className="block text-sm/6 font-semibold">
                    Roll Number
                  </label>
                  <input
                    type="text"
                    id={`memberRoll${member.id}`}
                    value={member.email ? member.email.split("@")[0] : ""}
                    readOnly
                    className="mt-2.5 block w-full rounded-md px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black bg-gray-50"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor={`memberPhone${member.id}`} className="block text-sm/6 font-semibold">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id={`memberPhone${member.id}`}
                    value={member.phone}
                    onChange={(e) => updateMember(member.id, "phone", e.target.value)}
                    className={`mt-2.5 block w-full rounded-md px-3.5 py-2 text-base outline-1 -outline-offset-1 ${
                      errors[`member-${member.id}-phone`] ? "outline-red-500" : "outline-gray-300"
                    } placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black`}
                    required
                    placeholder="10-digit number"
                  />
                  {errors[`member-${member.id}-phone`] && <p className="text-red-500 text-sm mt-1">{errors[`member-${member.id}-phone`]}</p>}
                </div>
              </div>
            ))}
          </div>

          {members.length < 3 && (
            <div className="flex justify-end mb-5">
              <button
                type="button"
                onClick={addMember}
                className="block rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                + Add Member
              </button>
            </div>
          )}
        </section>
        <div className="flex gap-x-3 h-6 items-center">
          <div className="flex shrink-0 items-center">
            <div className="group grid size-4 grid-cols-1">
              <input
                required
                id="terms"
                name="terms"
                type="checkbox"
                aria-describedby="terms-description"
                className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-black checked:bg-black indeterminate:border-black indeterminate:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
              />
              <svg
                fill="none"
                viewBox="0 0 14 14"
                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
              >
                <path
                  d="M3 8L6 11L11 3.5"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-0 group-has-checked:opacity-100"
                />
                <path
                  d="M3 7H11"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-0 group-has-indeterminate:opacity-100"
                />
              </svg>
            </div>
          </div>
          <label className="text-sm/6 text-gray-600">
            Accept{" "}
            <a href="#" className="font-semibold hover:underline">
              Terms & Conditions
            </a>
            . <span className="text-red-500">*</span>
          </label>
        </div>
        <button
          type="submit"
          className={`mt-10 block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs ${
            loading ? "bg-gray-600 cursor-not-allowed" : "bg-black hover:bg-neutral-800"
          }`}
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}

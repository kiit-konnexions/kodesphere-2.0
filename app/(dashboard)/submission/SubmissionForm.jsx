'use client';
import { setSubmissionData } from "@/app/actions/setSubmission";
import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { spaceGrotesk } from "@/app/(dashboard)/dashboard/page";
import AppForm from "./AppForm";
import WebAndMLForm from "./WebAndMLForm";
import { AlertTriangleIcon } from "lucide-react";

const initialStateApp = {
  githubLink: "",
  apkLink: ""
}

const initialStateWebML = {
  githubLink: "",
  deploymentLink: ""
}

function SubmissionForm({ submissionStat, teamId, track }) {
  const [submission, setSubmission] = useState(submissionStat)
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState(track === "APP" ? initialStateApp : initialStateWebML);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (!teamId) {
      toast.error("Team Details Not Found !");
      return
    }
    // console.log(formData)
    const sub = await setSubmissionData(formData, teamId);
    if (sub.success) {
      toast.success("Submission Successful !");
      setLoading(false);
      setSubmission(true);
    } else {
      toast.error("Unable to Submit !");
      setLoading(false);
    }
  };

  if (submission) {
    return (
      <section
        aria-labelledby="submission-success"
        className={`bg-gray-100 p-8 rounded-none border border-gray-200 w-full mt-10 ${spaceGrotesk.className}`}
      >
        <div className="flex flex-col items-center justify-center py-10">
          <div className="relative w-16 h-16 mb-6">
            <div className="absolute inset-0 bg-green-100 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="text-green-600">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
          </div>

          <h2 id="submission-success" className="text-2xl font-mono font-bold text-center mb-3">
            SUBMISSION SUCCESSFUL
          </h2>

          <p className="text-gray-600 text-center mb-6 max-w-md">
            Your project has been successfully submitted. Thank you for your participation.
          </p>

          <div className="w-full max-w-xs">
            <div className="relative overflow-hidden chess-btn">
              <button
                onClick={() => window.location.href = '/dashboard'}
                className="relative z-10 block w-full px-4 py-3 font-mono text-sm text-center text-black border border-black transition-colors duration-200 bg-white hover:bg-gray-100"
              >
                Return to Dashboard
              </button>
              <div className="absolute inset-0 transition-transform duration-300 ease-out transform -translate-x-full bg-gray-200 slide-fill"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      aria-labelledby="submission-form"
      className={`bg-gray-100 p-8 rounded-none border border-gray-200 w-full mt-10 ${spaceGrotesk.className}`}
    >
      <h2 id="submission-form" className="text-xl font-semibold mb-6 {}">Project Submission - {track}</h2>
      <Toaster />
      <div className="w-full">
        {track === "APP" ? (
          <AppForm loading={loading} formData={formData} handleSubmit={handleSubmit} handleInputChange={handleInputChange} />
        ) : (
          <WebAndMLForm loading={loading} formData={formData} handleSubmit={handleSubmit} handleInputChange={handleInputChange} track={track} />
        )
        }
        <div className="flex items-center my-3">
          <AlertTriangleIcon className="size-4 mr-2 text-gray-600" />
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Note:</span> You can submit only once.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SubmissionForm;

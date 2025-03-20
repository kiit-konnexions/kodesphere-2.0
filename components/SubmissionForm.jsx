'use client';
import { setSubmissionData } from "@/app/actions/setSubmission";
import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

function SubmissionForm({submissionStat, teamId}) {
  const [submission, setSubmission] = useState(submissionStat)
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    githubLink: "",
    deploymentLink: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if(!teamId){
      toast.error("Team Details Not Found !");
      return
    }

    const sub = await setSubmissionData(formData.githubLink,formData.deploymentLink,teamId);
    if(sub.success){
      toast.success("Submission Successful !");
      setLoading(false);
      setSubmission(true);
    }else{
      toast.error("Unable to Submit !");
      setLoading(false);
    }
  };

  if(submission){
    return(
      <div>
        <span>
          Already Submitted !
        </span>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center">
      <Toaster />
      <div className="w-full max-w-md p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="githubLink" className="block text-sm font-medium text-gray-700 mb-1">
              GitHub Link:
            </label>
            <input
              type="url"
              id="githubLink"
              name="githubLink"
              placeholder="https://github.com/your-repo"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={formData.githubLink}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="deploymentLink" className="block text-sm font-medium text-gray-700 mb-1">
              Deployment Link (optional):
            </label>
            <input
              type="url"
              id="deploymentLink"
              name="deploymentLink"
              placeholder="https://your-deployment.com"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={formData.deploymentLink}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Note:</span> You can submit only once.
            </p>
          </div>
{          !loading?<button
            type="submit"
            className="mt-5 w-full cursor-pointer px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            Submit
          </button>
          :
          <button
            disabled
            className="mt-5 w-full cursor-pointer px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            Submitting
          </button>
          }
        </form>
      </div>
    </div>
  );
}

export default SubmissionForm;

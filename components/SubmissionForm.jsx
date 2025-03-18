'use client';
import React, { useState } from "react";
import { Button } from "@nextui-org/react";

function SubmissionForm() {
  const [formData, setFormData] = useState({
    githubLink: "",
    deploymentLink: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.githubLink) {
      alert("GitHub link is required.");
      return;
    }
    console.log("Form submitted:", formData);
    alert("Project submitted successfully!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Project Submission</h1>
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
            <Button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SubmissionForm;

'use client';
import {setSubmissionData} from "@/app/actions/setSubmission";
import React, {useState} from "react";
import toast, {Toaster} from 'react-hot-toast';

function SubmissionForm({submissionStat, teamId}) {
    const [submission, setSubmission] = useState(submissionStat)
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        githubLink: "",
        deploymentLink: "",
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    };

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        if (!teamId) {
            toast.error("Team Details Not Found !");
            return
        }

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
            <div className="w-full flex items-center justify-center">
        <span className="text-2xl font-bold flex items-center gap-2">
          <img src="/icons/check.svg" className="w-[30px] h-[30px]"/>
          SUBMITTED !
        </span>
            </div>
        )
    }

    return (
        <section
            aria-labelledby="submission-form"
            className="bg-gray-100 p-8 rounded-none border border-gray-200 w-full mt-10"
        >
            <h2 id="submission-form" className="text-xl font-semibold mb-6 {}">Project Submission</h2>
            <Toaster/>
            <div className="w-full">
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="githubLink" className="block mb-2 text-sm font-medium text-gray-700">
                            GitHub Link:
                        </label>
                        <div className="flex items-center border border-gray-300 bg-white">
                            <div className="p-2 bg-gray-50 border-r border-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round">
                                    <path
                                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </div>
                            <input
                                type="url"
                                id="githubLink"
                                name="githubLink"
                                placeholder="https://github.com/your-repo"
                                className="w-full p-3 focus:outline-none focus:ring-1 focus:ring-black"
                                value={formData.githubLink}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-8">
                        <label htmlFor="deploymentLink" className="block mb-2 text-sm font-medium text-gray-700">
                            Deployment Link (optional):
                        </label>
                        <div className="flex items-center border border-gray-300 bg-white">
                            <div className="p-2 bg-gray-50 border-r border-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="2" y1="12" x2="22" y2="12"></line>
                                    <path
                                        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                </svg>
                            </div>
                            <input
                                type="url"
                                id="deploymentLink"
                                name="deploymentLink"
                                placeholder="https://your-deployment.com"
                                className="w-full p-3 focus:outline-none focus:ring-1 focus:ring-black"
                                value={formData.deploymentLink}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="flex items-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="mr-2">
                            <path
                                d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                            <line x1="12" y1="9" x2="12" y2="13"></line>
                            <line x1="12" y1="17" x2="12.01" y2="17"></line>
                        </svg>
                        <p className="text-sm text-gray-600">
                            <span className="font-semibold">Note:</span> You can submit only once.
                        </p>
                    </div>

                    {!loading ? (
                        <button
                            type="submit"
                            className="w-full md:w-auto px-8 py-3 text-white bg-black border border-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                        >
                            <div className="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="mr-2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="17 8 12 3 7 8"></polyline>
                                    <line x1="12" y1="3" x2="12" y2="15"></line>
                                </svg>
                                Submit Project
                            </div>
                        </button>
                    ) : (
                        <button
                            disabled
                            className="w-full md:w-auto px-8 py-3 text-white bg-gray-700 border border-gray-700 focus:outline-none"
                        >
                            <div className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                            strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor"
                                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Submitting
                            </div>
                        </button>
                    )}
                </form>
            </div>
        </section>
    );
}

export default SubmissionForm;

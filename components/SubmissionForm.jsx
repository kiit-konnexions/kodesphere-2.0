'use client';
import {setSubmissionData} from "@/app/actions/setSubmission";
import React, {useState} from "react";
import toast, {Toaster} from 'react-hot-toast';
import {spaceGrotesk} from "@/app/(dashboard)/dashboard/page";

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
            <section
                aria-labelledby="submission-success"
                className={`bg-gray-100 p-4 sm:p-6 md:p-8 rounded-none border border-gray-200 w-full mt-4 sm:mt-8 ${spaceGrotesk.className}`}
            >
                <div className="flex flex-col items-center justify-center py-6 md:py-10">
                    <div className="relative w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6">
                        <div className="absolute inset-0 bg-green-100 rounded-full animate-pulse"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                 className="text-green-600">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                        </div>
                    </div>

                    <h2 id="submission-success"
                        className="text-xl md:text-2xl font-mono font-bold text-center mb-2 md:mb-3">
                        SUBMISSION SUCCESSFUL
                    </h2>

                    <p className="text-sm md:text-base text-gray-600 text-center mb-4 md:mb-6 max-w-md px-2">
                        Your project has been successfully submitted. Thank you for your participation.
                    </p>

                    <div className="w-full max-w-xs">
                        <div className="relative overflow-hidden chess-btn">
                            <button
                                onClick={() => window.location.href = '/dashboard'}
                                className="relative z-10 block w-full px-4 py-2 md:py-3 font-mono text-sm text-center text-black border border-black transition-colors duration-200 bg-white hover:bg-gray-100"
                            >
                                Return to Dashboard
                            </button>
                            <div
                                className="absolute inset-0 transition-transform duration-300 ease-out transform -translate-x-full bg-gray-200 slide-fill"></div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section
            aria-labelledby="submission-form"
            className={`bg-gray-100 p-4 sm:p-6 md:p-8 rounded-none border border-gray-200 w-full mt-4 sm:mt-8 ${spaceGrotesk.className}`}
        >
            <h2 id="submission-form" className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Project Submission</h2>
            <Toaster/>
            <div className="w-full">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4 md:mb-6">
                        <label htmlFor="githubLink" className="block mb-1 md:mb-2 text-sm font-medium text-gray-700">
                            GitHub Link:
                        </label>
                        <div className="flex items-center border border-gray-300 bg-white">
                            <div className="p-2 bg-gray-50 border-r border-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
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
                                className="w-full p-2 md:p-3 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                                value={formData.githubLink}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-5 md:mb-8">
                        <label htmlFor="deploymentLink"
                               className="block mb-1 md:mb-2 text-sm font-medium text-gray-700">
                            Deployment Link (optional):
                        </label>
                        <div className="flex items-center border border-gray-300 bg-white">
                            <div className="p-2 bg-gray-50 border-r border-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
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
                                className="w-full p-2 md:p-3 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                                value={formData.deploymentLink}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="flex items-start mb-4 md:mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="mr-2 mt-1 flex-shrink-0">
                            <path
                                d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                            <line x1="12" y1="9" x2="12" y2="13"></line>
                            <line x1="12" y1="17" x2="12.01" y2="17"></line>
                        </svg>
                        <p className="text-xs md:text-sm text-gray-600">
                            <span className="font-semibold">Note:</span> You can submit only once. Make sure the link is
                            public.
                        </p>
                    </div>

                    {!loading ? (
                        <button
                            type="submit"
                            className="w-full px-6 py-2 md:py-3 text-white bg-black border border-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black text-sm"
                        >
                            <div className="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
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
                            className="w-full px-6 py-2 md:py-3 text-white bg-gray-700 border border-gray-700 focus:outline-none text-sm"
                        >
                            <div className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
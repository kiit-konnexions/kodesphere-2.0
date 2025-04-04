"use client";

import {rasieHand} from "@/app/actions/raisehand";
import {useEffect, useRef, useState} from "react";

const RaiseHand = ({teamName, domainName, setRaiseHandDialog, setNotification}) => {
    const [roomNumber, setRoomNumber] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const popupRef = useRef(null);

    // Handle escape key press
    useEffect(() => {
        const handleEscKey = (event) => {
            if (event.key === "Escape") {
                setRaiseHandDialog(false);
            }
        };

        document.addEventListener("keydown", handleEscKey);
        return () => document.removeEventListener("keydown", handleEscKey);
    }, [setRaiseHandDialog]);

    // Handle outside click
    const handleOverlayClick = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            setRaiseHandDialog(false);
        }
    };

    const NotifyRaisedHand = async () => {
        setLoading(true);
        if (roomNumber !== "") {
            const data = {
                teamName: teamName,
                roomNumber: roomNumber,
                domainName: domainName,
            };
            const response = await rasieHand(data);
            setLoading(false);
            if(response.success){
                setRaiseHandDialog(false);
            }
            setNotification({
                show: true,
                message: response.message,
                subtitle: "",
            });
            setTimeout(() => {
                setNotification({show: false, message: "", subtitle: ""});
            }, 3000);
        } else {
            setMessage("Please select your room!");
            setLoading(false);
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={handleOverlayClick}
        >
            <div
                ref={popupRef}
                className="w-[90%] sm:w-[360px] md:w-[400px] bg-white border border-gray-200 shadow-lg font-space-grotesk"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between border-b border-gray-200 p-3 sm:p-4 bg-gray-50">
                    <h2 className="text-lg sm:text-xl font-semibold">Request Assistance</h2>
                    <button
                        onClick={() => setRaiseHandDialog(false)}
                        className="p-1.5 sm:p-2 bg-gray-100 border border-gray-300 hover:bg-gray-200 focus:outline-none"
                        aria-label="Close"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                <div className="p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6">
                    <div className="mb-1 sm:mb-2">
                        <label htmlFor="roomNumber" className="block mb-1.5 sm:mb-2 text-sm font-medium text-gray-700">
                            Room Number:
                        </label>
                        <div className="flex items-center border border-gray-300 bg-white">
                            <div className="p-1.5 sm:p-2 bg-gray-50 border-r border-gray-300">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3 21.0001L14 21V5.98924C14 4.6252 14 3.94318 13.7187 3.47045C13.472 3.05596 13.0838 2.74457 12.6257 2.59368C12.1032 2.42159 11.4374 2.56954 10.1058 2.86544L7.50582 3.44322C6.6117 3.64191 6.16464 3.74126 5.83093 3.98167C5.53658 4.19373 5.30545 4.48186 5.1623 4.8152C5 5.19312 5 5.65108 5 6.56702V21.0001M13.994 5.00007H15.8C16.9201 5.00007 17.4802 5.00007 17.908 5.21805C18.2843 5.4098 18.5903 5.71576 18.782 6.09209C19 6.51991 19 7.07996 19 8.20007V21.0001H21M11 12.0001H11.01"
                                        stroke="#000000" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="relative w-full">
                                <select
                                    id="roomNumber"
                                    value={roomNumber}
                                    onChange={(e) => setRoomNumber(e.target.value)}
                                    className="w-full p-2 sm:p-3 bg-white appearance-none focus:outline-none focus:ring-1 focus:ring-black pr-8 text-sm"
                                >
                                    <option value="" disabled>Select room number</option>
                                    <option value="LH 301">Room LH-301</option>
                                    <option value="LH 302">Room LH-302</option>
                                    <option value="LH 303">Room LH-303</option>
                                    <option value="LH 304">Room LH-304</option>
                                    <option value="WL 301">Room WL-301</option>
                                    <option value="WL 302">Room WL-302</option>
                                </select>
                                <div
                                    className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path fillRule="evenodd"
                                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start mb-3 sm:mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="mr-1.5 sm:mr-2 mt-0.5 flex-shrink-0">
                            <path
                                d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                            <path d="M9 18h6"></path>
                            <path d="M10 22h4"></path>
                        </svg>
                        <p className="text-xs sm:text-sm text-gray-600">
                            <span className="font-semibold">Note:</span> A volunteer will assist you shortly.
                        </p>
                    </div>

                    {message && <div className="text-center text-red-600 text-xs sm:text-sm mb-2">{message}</div>}

                    {!loading ? (
                        <button
                            onClick={NotifyRaisedHand}
                            className="w-full p-2.5 sm:p-3 text-white bg-black border border-black hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-black flex items-center justify-center text-sm"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" className="mr-1.5 sm:mr-2 mb-0.5"
                                 stroke="currentColor">
                                <path
                                    d="M14 3.5V11V4.5C14 3.67157 14.6716 3 15.5 3C16.3284 3 17 3.67157 17 4.5V11V7.5C17 6.67157 17.6716 6 18.5 6C19.3284 6 20 6.67157 20 7.5V16C20 19.3137 17.3137 22 14 22H12.8727C11.3483 22 9.88112 21.4198 8.76904 20.3772L3.81045 15.7285C3.09365 15.0565 3.0754 13.9246 3.77016 13.2298C4.44939 12.5506 5.55063 12.5506 6.22985 13.2298L8.00001 15V6.5C8.00001 5.67157 8.67158 5 9.50001 5C10.3284 5 11 5.67157 11 6.5V11V3.5C11 2.67157 11.6716 2 12.5 2C13.3284 2 14 2.67157 14 3.5Z"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Raise Hand
                        </button>
                    ) : (
                        <button
                            disabled
                            className="w-full p-2.5 sm:p-3 text-white bg-gray-700 border border-gray-700 focus:outline-none flex items-center justify-center text-sm"
                        >
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                        strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor"
                                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Asking for Help...
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RaiseHand;
"use client";

import {rasieHand} from "@/app/actions/raisehand";
import {useState} from "react";

const RaiseHand = ({teamName, domainName, setRaiseHandDialog, setNotification}) => {
    const [roomNumber, setRoomNumber] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const NotifyRaisedHand = async () => {
        setLoading(true);
        if (roomNumber !== "") {
            const data = {
                teamName: teamName,
                roomNumber: roomNumber,
                domainName: domainName,
            };
            const response = await rasieHand(data);
        // setMessage(response.message);
            setLoading(false);
            setNotification({
                show: true,
                message: response.message,
                subtitle: "",
            });
            setTimeout(() => {
                setNotification({show: false, message: "", subtitle: ""});
            }, 3000);
        } else {
            setMessage("Please Enter Room Number!");
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="w-[400px] bg-white border border-gray-200 shadow-lg font-space-grotesk">
                <div className="flex items-center justify-between border-b border-gray-200 p-4 bg-gray-50">
                    <h2 className="text-xl font-semibold">Request Assistance</h2>
                    <button
                        onClick={() => setRaiseHandDialog(false)}
                        className="p-2 bg-gray-100 border border-gray-300 hover:bg-gray-200 focus:outline-none"
                        aria-label="Close"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                <div className="p-8 flex flex-col gap-6">
                    <div className="mb-2">
                        <label htmlFor="roomNumber" className="block mb-2 text-sm font-medium text-gray-700">
                            Room Number:
                        </label>
                        <div className="flex items-center border border-gray-300 bg-white">
                            <div className="p-2 bg-gray-50 border-r border-gray-300">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3 21.0001L14 21V5.98924C14 4.6252 14 3.94318 13.7187 3.47045C13.472 3.05596 13.0838 2.74457 12.6257 2.59368C12.1032 2.42159 11.4374 2.56954 10.1058 2.86544L7.50582 3.44322C6.6117 3.64191 6.16464 3.74126 5.83093 3.98167C5.53658 4.19373 5.30545 4.48186 5.1623 4.8152C5 5.19312 5 5.65108 5 6.56702V21.0001M13.994 5.00007H15.8C16.9201 5.00007 17.4802 5.00007 17.908 5.21805C18.2843 5.4098 18.5903 5.71576 18.782 6.09209C19 6.51991 19 7.07996 19 8.20007V21.0001H21M11 12.0001H11.01"
                                        stroke="#000000" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <input
                                type="text"
                                id="roomNumber"
                                placeholder="Enter your room number"
                                className="w-full p-3 focus:outline-none focus:ring-1 focus:ring-black"
                                value={roomNumber}
                                onChange={(e) => setRoomNumber(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex items-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="mr-2">
                            <path
                                d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                            <path d="M9 18h6"></path>
                            <path d="M10 22h4"></path>
                        </svg>
                        <p className="text-sm text-gray-600">
                            <span className="font-semibold">Note:</span> A volunteer will assist you shortly.
                        </p>
                    </div>

                    {message && <div className="text-center text-red-600 mb-2">{message}</div>}

                    {!loading ? (
                        <button
                            onClick={NotifyRaisedHand}
                            className="w-full p-3 text-white bg-black border border-black hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-black flex items-center justify-center"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" className="mr-2 mb-0.5" stroke="currentColor">
                                <path
                                    d="M14 3.5V11V4.5C14 3.67157 14.6716 3 15.5 3C16.3284 3 17 3.67157 17 4.5V11V7.5C17 6.67157 17.6716 6 18.5 6C19.3284 6 20 6.67157 20 7.5V16C20 19.3137 17.3137 22 14 22H12.8727C11.3483 22 9.88112 21.4198 8.76904 20.3772L3.81045 15.7285C3.09365 15.0565 3.0754 13.9246 3.77016 13.2298C4.44939 12.5506 5.55063 12.5506 6.22985 13.2298L8.00001 15V6.5C8.00001 5.67157 8.67158 5 9.50001 5C10.3284 5 11 5.67157 11 6.5V11V3.5C11 2.67157 11.6716 2 12.5 2C13.3284 2 14 2.67157 14 3.5Z"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Raise Hand
                        </button>
                    ) : (
                        <button
                            disabled
                            className="w-full p-3 text-white bg-gray-700 border border-gray-700 focus:outline-none flex items-center justify-center"
                        >
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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

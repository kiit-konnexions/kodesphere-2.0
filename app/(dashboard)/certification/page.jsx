"use client";

import {useEffect, useState} from "react";
import Sidebar from "@/app/components/SideBar";
import CountdownTimer from "@/app/components/CountdownTimer";
import AnimatedTitle from "@/app/components/AnimatedTitle";

// Certificate Preview Component
const CertificatePreview = ({ participantName, isLocked }) => {
    return (
        <div className={`relative w-full max-w-4xl mx-auto ${isLocked ? 'select-none' : ''}`}>
            {/* Certificate container with square corners */}
            <div className={`
                border-4 border-gray-300
                rounded-none
                aspect-[1.4/1]
                transition-all
                duration-300
                relative
                overflow-hidden
            `}>
                {/* Certificate image from URL */}
                <img
                    src="https://images.template.net/424005/Award-Certificate-Template-edit-online.png"
                    alt="Certificate Template"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />

                {/* Overlay if locked */}
                {isLocked && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* Very light blur overlay */}
                        <div className="absolute inset-0 bg-black/15"
                             style={{
                                 backdropFilter: 'blur(8px)',
                                 WebkitBackdropFilter: 'blur(8px)',
                                 transform: 'scale(0.98) scale(1.02)',  // Very minimal pixelation
                                 filter: 'brightness(0.98)'
                             }}>
                        </div>

                        {/* Lock message box */}
                        <div className={`
                  relative z-10
                  p-8
                  rounded-none 
                  bg-white/90
                  border border-gray-300
                  shadow-xl
                  max-w-md
                  w-full
                  text-center
                `}>
                            <div className="text-5xl mb-6">🔒</div>
                            <h3 className="text-xl font-bold mb-3">Certificate Locked</h3>
                            <p className="mb-8 opacity-90">Your certificate will be available for download after your successful participation.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// Download Button Component
const DownloadButton = ({isLocked, handleDownload}) => {
    return (
        <div className="mt-8 text-center">
            <button
                onClick={handleDownload}
                disabled={isLocked}
                className={`
              ${isLocked ? 'bg-gray-200 text-gray-400' : 'bg-green-600 hover:bg-green-700 text-white'}
              px-8 py-4
              rounded-none
              border ${isLocked ? 'border-gray-300' : 'border-green-600'}
              font-bold
              transition-colors
              duration-300
              flex
              items-center
              justify-center
              gap-3
              mx-auto
              min-w-[220px]
            `}
            >
                {isLocked ? (
                    <>
                        <span>Download Locked</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             viewBox="0 0 16 16">
                            <path
                                d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                        </svg>
                    </>
                ) : (
                    <>
                        <span>Download Certificate</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             viewBox="0 0 16 16">
                            <path
                                d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                            <path
                                d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                        </svg>
                    </>
                )}
            </button>
            {isLocked && (
                <p className="mt-3 text-sm text-gray-500">
                    Available after the hackathon ends
                </p>
            )}
        </div>
    );
};

function CertificatePage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLocked, setIsLocked] = useState(true);
    const [participantName] = useState("Sahil Choudhary");

    // Check if the current date is after April 2, 2025
    useEffect(() => {
        setIsLoaded(true);

        const unlockDate = new Date('2025-04-02T00:00:00');
        const currentDate = new Date();

        if (currentDate >= unlockDate) {
            setIsLocked(false);
        }
    }, []);

    // Handle certificate download
    const handleDownload = () => {
        if (isLocked) return;

        // This is where you would generate the certificate for download
        // For now, we'll simulate it with a simple SVG
        const certificateContent = `
        <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="white" stroke="black" stroke-width="10" />
            <text x="400" y="100" font-family="Arial" font-size="40" text-anchor="middle" font-weight="bold">CERTIFICATE OF PARTICIPATION</text>
            <text x="400" y="180" font-family="Arial" font-size="30" text-anchor="middle">This certifies that</text>
            <text x="400" y="250" font-family="Arial" font-size="40" text-anchor="middle" font-weight="bold">${participantName}</text>
            <text x="400" y="320" font-family="Arial" font-size="20" text-anchor="middle">has successfully participated in the Kodesphere Hackathon</text>
            <text x="400" y="350" font-family="Arial" font-size="20" text-anchor="middle">and demonstrated exceptional skills in problem-solving and innovation.</text>
            <text x="200" y="500" font-family="Arial" font-size="16" text-anchor="middle">Date: April 2, 2025</text>
            <text x="600" y="500" font-family="Arial" font-size="16" text-anchor="middle">Kodesphere Team</text>
            <line x1="120" y1="490" x2="280" y2="490" stroke="black" stroke-width="2" />
            <line x1="520" y1="490" x2="680" y2="490" stroke="black" stroke-width="2" />
        </svg>
        `;

        // Create a downloadable link
        const element = document.createElement("a");
        const file = new Blob([certificateContent], {type: 'image/svg+xml'});
        element.href = URL.createObjectURL(file);
        element.download = `Kodesphere-Certificate-${participantName.replace(/\s+/g, '-')}-${Date.now()}.svg`;

        // Append to the DOM, trigger click, and then remove
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    return (
        <div className="flex min-h-screen bg-white text-black">
            <Sidebar/>

            <main className="flex-1 p-6 md:p-12 bg-white relative z-10 mt-16 sm:mt-0 mb-8">
                {/* Header section with title and countdown */}
                <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-12 mt-4">
                    <div
                        className={`transform transition-all duration-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} max-w-full`}>
                        <AnimatedTitle text="CERTIFICATE" triggerOnLoad={isLoaded}/>
                    </div>

                    <div className={`
                      bg-gray-100
                      p-5 
                      rounded-none 
                      border border-gray-300
                      shadow-sm 
                      w-full 
                      sm:w-auto
                      transform transition-all duration-500 delay-100 
                      ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                    `}>
                        <CountdownTimer targetDate="April 2, 2025"/>
                    </div>
                </div>

                {/* Certificate message */}
                <div
                    className={`transform transition-all duration-500 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} mb-10 max-w-2xl mx-auto text-center`}
                >
                    <h2 className="text-2xl font-bold mb-4">Konnexions Society - Kodesphere v2.0 Certificate</h2>
                    <p className="text-gray-600">
                        Thank you for your interest in the Kodesphere Hackathon! A certificate will
                        be available for download after the event concludes.
                    </p>
                </div>

                {/* Certificate Preview */}
                <div
                    className={`transform transition-all duration-500 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    <CertificatePreview
                        participantName={participantName}
                        isLocked={isLocked}
                    />
                </div>

                {/* Download Button */}
                <div
                    className={`transform transition-all duration-500 delay-400 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    <DownloadButton
                        isLocked={isLocked}
                        handleDownload={handleDownload}
                    />
                </div>
            </main>
        </div>
    );
}

export default CertificatePage;
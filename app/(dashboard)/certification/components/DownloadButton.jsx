"use client";

import { useState } from "react";
import {spaceGrotesk} from "@/app/(dashboard)/dashboard/page";

export default function DownloadButton({ isLocked, participantName }) {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = () => {
        if (isLocked) return;
        setIsDownloading(true);

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

        const element = document.createElement("a");
        const file = new Blob([certificateContent], {type: 'image/svg+xml'});
        element.href = URL.createObjectURL(file);
        element.download = `Kodesphere-Certificate-${participantName.replace(/\s+/g, '-')}-${Date.now()}.svg`;

        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);

        setTimeout(() => {
            setIsDownloading(false);
        }, 1000);
    };

    return (
        <div className="mt-8 text-center">
            <button
                onClick={handleDownload}
                disabled={isLocked || isDownloading}
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
          ${spaceGrotesk.className}
        `}
            >
                {isLocked ? (
                    <>
                        <span>Download Locked</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                        </svg>
                    </>
                ) : (
                    <>
                        <span>{isDownloading ? "Preparing..." : "Download Certificate"}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
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
}
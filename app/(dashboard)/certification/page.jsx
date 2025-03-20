import {Suspense} from "react";
import Sidebar from "@/components/SideBar";
import CountdownTimer from "@/components/CountdownTimer";
import ClientAnimatedTitle from "@/components/client/ClientAnimatedTitle";
import DownloadButton from "@/app/(dashboard)/certification/components/DownloadButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";

// Certificate Preview Component
const CertificatePreview = ({participantName, isLocked}) => {
    return (
        <div className={`relative w-full max-w-4xl mx-auto ${isLocked ? 'select-none' : ''}`}>
            <div className={`
                      border-4 border-gray-300
                      rounded-none
                      aspect-[1.4/1]
                      transition-all
                      duration-300
                      relative
                      overflow-hidden
                  `}>
                <img
                    src="https://images.template.net/424005/Award-Certificate-Template-edit-online.png"
                    alt="Certificate Template"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />

                {isLocked && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute inset-0 bg-black/15"
                             style={{
                                 backdropFilter: 'blur(8px)',
                                 WebkitBackdropFilter: 'blur(8px)',
                                 transform: 'scale(0.98) scale(1.02)',
                                 filter: 'brightness(0.98)'
                             }}>
                        </div>

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
                            <h3 className="text-xl font-bold mb-3">{participantName}&apos;s Certificate Locked</h3>
                            <p className="mb-8 opacity-90">Your certificate will be available for download after your
                                successful participation.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// Server-side check if certificate is locked
function isCertificateLocked() {
    const unlockDate = new Date('2025-04-02T00:00:00');
    const currentDate = new Date();
    return currentDate < unlockDate;
}

export default async function CertificatePage() {
    // Get data on the server

    const session = await getServerSession(authOptions);
    const participant = await prisma.participant.findFirst({
        where:{
            email:session?.user.email
        }
    })

    const participantName = participant?.name; // In a real app, this would come from a database or session
    const isLocked = isCertificateLocked();

    if(!session || !participant){
        return(
            <span className='w-screen h-screen flex items-center justify-center text-xl text-center'>
              401 | Unauthorized 🙅‍♂️
            </span>
          )
    }

    return (
        <div className="flex min-h-screen bg-white text-black">
            <Sidebar/>

            <main className="flex-1 p-6 md:p-12 bg-white relative z-10 mt-16 sm:mt-0 mb-8">
                {/* Header section with title and countdown */}
                <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-12 mt-4">
                    <div className="transform translate-y-0 opacity-100 max-w-full">
                        <Suspense fallback={<div className="h-10 w-64 bg-gray-200 animate-pulse"></div>}>
                            <ClientAnimatedTitle text="CERTIFICATE"/>
                        </Suspense>
                    </div>

                    <div className="bg-gray-100 p-5 rounded-none border border-gray-300 shadow-sm w-full sm:w-auto">
                        <CountdownTimer targetDate="April 2, 2025"/>
                    </div>
                </div>

                {/* Certificate message */}
                <div className="mb-10 max-w-2xl mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-4">Konnexions Society - Kodesphere v2.0 Certificate</h2>
                    <p className="text-gray-600">
                        Thank you for your interest in the Kodesphere Hackathon! A certificate will
                        be available for download after the event concludes.
                    </p>
                </div>

                {/* Certificate Preview */}
                <div>
                    <CertificatePreview
                        participantName={participantName}
                        isLocked={isLocked}
                    />
                </div>

                {/* Download Button */}
                <div>
                    <DownloadButton
                        isLocked={isLocked}
                        participantName={participantName}
                    />
                </div>
            </main>
        </div>
    );
}
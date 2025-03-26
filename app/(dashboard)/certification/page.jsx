import {Suspense} from "react";
import Sidebar from "@/components/SideBar";
import ClientAnimatedTitle from "@/components/client/ClientAnimatedTitle";
import DownloadButton from "@/app/(dashboard)/certification/components/DownloadButton";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import {spaceGrotesk} from "@/app/(dashboard)/dashboard/page";
import CountdownRibbon from "@/components/CountdownRibbon";
import {getDashboardData} from "@/app/actions/getDashboardData";

// Certificate Preview Component
const CertificatePreview = ({participantName, isLocked}) => {
    return (
        <div className={`relative w-full max-w-4xl mx-auto ${isLocked ? 'select-none' : ''}`}>
            <div className={`
                      border-2 sm:border-4 border-gray-300
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
                    <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-4">
                        <div className="absolute inset-0 bg-black/15"
                             style={{
                                 backdropFilter: 'blur(8px)',
                                 WebkitBackdropFilter: 'blur(8px)',
                                 transform: 'scale(0.98)',
                                 filter: 'brightness(0.98)'
                             }}>
                        </div>

                        <div className={`
                                  relative z-10
                                  p-4 sm:p-6 md:p-8
                                  rounded-none
                                  bg-white/90
                                  border border-gray-300
                                  shadow-xl
                                  w-full
                                  max-w-[85%] sm:max-w-md
                                  text-center
                                `}>
                            <div className="text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 md:mb-6">
                                <span
                                    className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gray-100">
                                    🔒
                                </span>
                            </div>
                            <h3 className={`text-base sm:text-lg md:text-xl font-bold mb-2 ${spaceGrotesk.className}`}>
                                {participantName}&apos;s Certificate Locked
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base mb-3 sm:mb-5 opacity-90">
                                Your certificate will be available for download after your successful participation.
                            </p>
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
    // // Get data on the server
    // const session = await getServerSession(authOptions);
    // // const {teamDetails} = await getDashboardData(session?.user.email);
    // const participant = await prisma.participant.findFirst({
    //     where: {
    //         email: session?.user.email
    //     }
    // })

    const participantName = "Sahil" || participant?.name; // In a real app, this would come from a database or session
    const isLocked = isCertificateLocked();

    // if (!session || !participant) {
    //     return (
    //         <span className='w-screen h-screen flex items-center justify-center text-xl text-center'>
    //           401 | Unauthorized 🙅‍♂️
    //         </span>
    //     )
    // }

    return (
        <div className="flex min-h-screen bg-gray-50 text-black">
            <Sidebar/>
            <CountdownRibbon/>

            <main className="relative z-10 flex-1 p-6 mt-16 mb-8 md:p-12 bg-gray-50 sm:mt-0">
                {/* Header section with title and countdown */}
                <div className="flex flex-col items-start justify-between gap-6 mt-4 mb-12 sm:flex-row">
                    <div className="transform translate-y-0 opacity-100 max-w-full">
                        <Suspense fallback={<div className="h-8 sm:h-10 w-48 sm:w-64 bg-gray-200 animate-pulse"></div>}>
                            <ClientAnimatedTitle text="CERTIFICATE"/>
                        </Suspense>
                    </div>
                </div>

                {/* Certificate message */}
                <div className="mb-6 sm:mb-10 max-w-2xl mx-auto text-center px-2">
                    <h2 className={`text-xl sm:text-2xl font-bold mb-2 sm:mb-4 ${spaceGrotesk.className}`}>Konnexions
                        Society - Kodessphere v2.0 Certificate</h2>
                    <p className="text-sm sm:text-base text-gray-600">
                        Thank you for your interest in the Kodessphere v2.0 Hackathon! A certificate will
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
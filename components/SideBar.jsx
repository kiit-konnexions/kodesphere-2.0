"use client";

import {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {signOut} from "next-auth/react";
import RaiseHand from "./fragments/RaiseHand";
import {spaceGrotesk} from "@/app/(dashboard)/dashboard/page";
import {MobileCountdownBadge} from "@/components/MobileCountdownBadge";

const navigationLinks = [
    {name: "Dashboard", path: "/dashboard"},
    {name: "Problem Statement", path: "/problem-statements"},
    {name: "Rules", path: "/rules"},
    {name: "Submission", path: "/submission"},
    {name: "Certificate", path: "/certification"},
];

const Sidebar = ({teamDetails}) => {
    const [isMobile, setIsMobile] = useState(false);
    const [raiseHand, setRaiseHand] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [notification, setNotification] = useState({show: false, message: "", subtitle: ""});
    const pathname = usePathname();

    // Check if current route is active
    const isActive = (path) => pathname === path;

    // Handle responsive behavior
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Track scroll position to control shadow
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        // Check initial scroll position
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`${spaceGrotesk.className}`}>
            {raiseHand &&
                <RaiseHand setRaiseHandDialog={setRaiseHand} teamName={teamDetails?.TeamName}
                           domainName={teamDetails?.Track} setNotification={setNotification}/>
            }
            {isMobile && (
                <div
                    className={`fixed top-0 left-0 z-50 w-full ${
                        isScrolled ? "shadow-md" : ""
                    } bg-white border-gray-200 border-b`}
                >
                    <div className="flex items-center justify-between px-4 py-3">
                        <Link href="/">
                            <div className="flex items-center">
                                <div
                                    className="flex items-center justify-center w-24 h-12 overflow-hidden bg-white rounded-sm">
                                    <Image
                                        src="/kodespherelogo.png"
                                        alt="Kodesphere Logo"
                                        width={600}
                                        height={200}
                                        className="object-contain w-auto max-h-6"
                                        priority
                                    />
                                </div>
                            </div>
                        </Link>

                        <div className="flex items-center">
                            <MobileCountdownBadge/>
                            <button onClick={() => setIsOpen(!isOpen)} className="p-2 focus:outline-none"
                                    aria-label="Toggle menu">
                                <div className="relative w-6 h-5">
                                    <span
                                        className={`absolute h-0.5 w-6 transform transition-all duration-200 bg-black ${
                                            isOpen ? "rotate-45 top-2.5" : "top-0"
                                        }`}></span>
                                    <span
                                        className={`absolute h-0.5 w-6 bg-black top-2 transition-all duration-200 ${
                                            isOpen ? "opacity-0" : "opacity-100"
                                        }`}
                                    ></span>
                                    <span
                                        className={`absolute h-0.5 w-6 transform transition-all duration-200 bg-black ${
                                            isOpen ? "-rotate-45 top-2.5" : "top-4"
                                        }`}
                                    ></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            )} {/* Sidebar */} {/* Sidebar */}
            <div
                className={`fixed ${isMobile ? "top-16 z-40" : "top-0"} h-screen transition-all duration-300 ${
                    isMobile ? (isOpen ? "left-0" : "-left-64") : "left-0"
                } w-64 border-r bg-white text-black border-gray-200`}
            >
                {!isMobile && (
                    <div className="flex flex-col items-center justify-center px-5 py-4 border-b border-gray-200">
                        {/* Logo stacked vertically */}
                        <div className="flex flex-col items-center w-full space-y-4">
                            {/* Primary logo (517x192) */}
                            <div
                                className="flex items-center justify-center h-16 -mt-2 overflow-hidden transition-colors duration-300 bg-white rounded-sm w-30">
                                <Image
                                    src="/kodespherelogo.png"
                                    alt="Primary Logo"
                                    width={517}
                                    height={192}
                                    className="object-contain w-auto transition-transform duration-300 hover:scale-105 max-h-14"
                                    priority
                                />
                            </div>

                            {/* Secondary logo (266x150) */}
                            <div
                                className="flex items-center justify-center h-16 -mt-6 overflow-hidden transition-colors duration-300 bg-white rounded-sm w-50">
                                <Image
                                    src="/images/konnexionslogo.png"
                                    alt="Secondary Logo"
                                    width={266}
                                    height={150}
                                    className="object-contain w-auto transition-transform duration-300 hover:scale-105 max-h-14"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                )}

                <div className="py-6 px-4 flex flex-col h-[calc(100%-96px)]">
                    <div className="mb-6">
                        <h3 className="px-2 mb-3 text-xs font-semibold tracking-wider text-gray-500 uppercase">Navigation</h3>
                        <nav className="space-y-1">
                            {navigationLinks.map((link) => (
                                <Link href={link.path} key={link.name} className="block"
                                      onClick={() => setIsOpen(false)}>
                                    <div className="relative overflow-hidden chess-btn">
                          <span
                              className={`block relative z-10 px-4 py-2 w-full text-left font-mono text-sm transition-colors duration-200 ${
                                  isActive(link.path) ? "border-l-2 border-black" : ""} text-black`}>
                            {link.name}
                          </span>
                                        <div
                                            className="absolute inset-0 transition-transform duration-300 ease-out transform -translate-x-full bg-gray-200 slide-fill"></div>
                                    </div>
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Spacer to push the actions to the bottom */}
                    <div className="flex-grow"></div>

                    <div className="mb-3">
                        <h3 className="px-2 mb-3 text-xs font-semibold tracking-wider text-gray-500 uppercase">Actions</h3>
                        <div className="space-y-1">
                            <button onClick={() => {
                                setRaiseHand(!raiseHand)
                            }} className="relative w-full overflow-hidden chess-btn">
                <span
                    className="relative z-10 block w-full px-4 py-2 font-mono text-sm text-left text-black transition-colors duration-200">
                  Raise Hand
                </span>
                                <div
                                    className="absolute inset-0 transition-transform duration-300 ease-out transform -translate-x-full bg-gray-200 slide-fill"></div>
                            </button>

                            <span className="block" onClick={() => setIsOpen(false)}>
                <div className="relative overflow-hidden chess-btn">
                  <span
                      className="relative z-10 block w-full px-4 py-2 font-mono text-sm text-left text-black transition-colors duration-200"
                      onClick={() => {
                          signOut()
                      }}>
                    Log Out
                  </span>
                  <div
                      className="absolute inset-0 transition-transform duration-300 ease-out transform -translate-x-full bg-gray-200 slide-fill"></div>
                </div>
              </span>
                        </div>
                    </div>

                    {/* Fixed position for status card so it doesn't overflow */}
                    <div
                        className="w-full p-3 mb-3 text-xs text-gray-600 border border-gray-200 bg-gray-100/50 md:mb-18">
                        <div className="flex justify-between items-center">
                            <div>
                                <span className="block">Hackathon Status:</span>
                                <span className="font-bold text-green-600">ACTIVE</span>
                            </div>
                            <div className="relative">
                                <span
                                    className="absolute top-1/2 right-0 w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse -translate-y-1/2"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Wrapper */}
            <div className={`transition-all duration-300 ${isMobile ? "ml-0 pt-14" : "ml-64"} bg-gray-50`}>
                {/* Your page content goes here */}
            </div>

            {/* Enhanced Notification Toast */}
            <div
                className={`fixed bottom-4 right-4 bg-white border-gray-200 border py-3 px-4 shadow-lg transform transition-all duration-300 ${
                    notification.show ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                } max-w-xs z-50`}
            >
                <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 mt-1.5 flex-shrink-0 bg-green-500"></div>
                    <div>
                        <span className="block font-mono text-sm font-bold text-black">{notification.message}</span>
                        <span className="font-mono text-xs text-gray-500">{notification.subtitle}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

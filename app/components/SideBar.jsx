"use client";

import {useEffect, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {usePathname} from 'next/navigation';

const navigationLinks = [
    {name: 'Dashboard', path: '/dashboard'},
    {name: 'Problem Statement', path: '/problem-statements'},
    {name: 'Rules', path: '/rules'},
    {name: 'Certificate', path: '/certification'},
];

const logoutLink = {name: 'Logout', path: '/logout'};

const Sidebar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [notification, setNotification] = useState({show: false, message: '', subtitle: ''});
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
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Track scroll position to control shadow
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        // Check initial scroll position
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle hand raise notification
    const handleHandRaise = () => {
        setNotification({
            show: true,
            message: 'Hand raised successfully!',
            subtitle: 'Organizers have been notified'
        });
        setTimeout(() => {
            setNotification({show: false, message: '', subtitle: ''});
        }, 3000);
    };

    return (
        <>
            {isMobile && (
                <div
                    className={`fixed top-0 left-0 z-50 w-full ${isScrolled ? 'shadow-md' : ''} bg-white border-gray-200 border-b`}>
                    <div className="flex items-center justify-between px-4 py-3">
                        <Link href="/">
                            <div className="flex items-center">
                                <div
                                    className="w-20 h-12 flex items-center justify-center overflow-hidden bg-white rounded-sm">
                                    <Image
                                        src="/kodesphere.png"
                                        alt="Kodesphere Logo"
                                        width={517}
                                        height={192}
                                        className="max-h-6 w-auto object-contain"
                                        priority
                                    />
                                </div>
                            </div>
                        </Link>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <div className="relative w-6 h-5">
                                <span
                                    className={`absolute h-0.5 w-6 transform transition-all duration-200 bg-black ${isOpen ? 'rotate-45 top-2.5' : 'top-0'}`}></span>
                                <span
                                    className={`absolute h-0.5 w-6 bg-black top-2 transition-all duration-200 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                                <span
                                    className={`absolute h-0.5 w-6 transform transition-all duration-200 bg-black ${isOpen ? '-rotate-45 top-2.5' : 'top-4'}`}></span>
                            </div>
                        </button>
                    </div>
                </div>
            )}

            {/* Sidebar */}
            <div
                className={`fixed ${isMobile ? 'top-14 z-40' : 'top-0'} h-screen transition-all duration-300 ${
                    isMobile ? (isOpen ? 'left-0' : '-left-64') : 'left-0'
                } w-64 border-r bg-white text-black border-gray-200`}
            >
                {!isMobile && (
                    <div className="px-5 py-4 border-b border-gray-200 flex flex-col items-center justify-center">
                        {/* Logo stacked vertically */}
                        <div className="flex flex-col items-center space-y-4 w-full">
                            {/* Primary logo (517x192) */}
                            <div
                                className="w-30 h-16 flex items-center justify-center overflow-hidden bg-white transition-colors duration-300 rounded-sm -mt-2">
                                <Image
                                    src="/kodesphere.png"
                                    alt="Primary Logo"
                                    width={517}
                                    height={192}
                                    className="transition-transform duration-300 hover:scale-105 max-h-14 w-auto object-contain"
                                    priority
                                />
                            </div>

                            {/* Secondary logo (266x150) */}
                            <div
                                className="w-50 h-16 flex items-center justify-center overflow-hidden bg-white transition-colors duration-300 rounded-sm -mt-6">
                                <Image
                                    src="/konnexions_logo.png"
                                    alt="Secondary Logo"
                                    width={266}
                                    height={150}
                                    className="transition-transform duration-300 hover:scale-105 max-h-14 w-auto object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                )}

                <div className="py-6 px-4 flex flex-col h-[calc(100%-96px)]">
                    <div className="mb-6">
                        <h3 className="text-xs font-semibold uppercase tracking-wider mb-3 px-2 text-gray-500">Navigation</h3>
                        <nav className="space-y-1">
                            {navigationLinks.map((link) => (
                                <Link
                                    href={link.path}
                                    key={link.name}
                                    className="block"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <div className="chess-btn relative overflow-hidden">
                        <span
                            className={`block relative z-10 px-4 py-2 w-full text-left font-mono text-sm transition-colors duration-200 ${
                                isActive(link.path) ? 'border-l-2 border-black' : ''
                            } text-black`}>
                          {link.name}
                        </span>
                                        <div
                                            className="slide-fill absolute inset-0 transform -translate-x-full transition-transform duration-300 ease-out bg-gray-200"></div>
                                    </div>
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Spacer to push the actions to the bottom */}
                    <div className="flex-grow"></div>

                    <div className="mb-3">
                        <h3 className="text-xs font-semibold uppercase tracking-wider mb-3 px-2 text-gray-500">Actions</h3>
                        <div className="space-y-1">
                            <button
                                onClick={handleHandRaise}
                                className="chess-btn relative overflow-hidden w-full"
                            >
                  <span
                      className="block relative z-10 px-4 py-2 w-full text-left font-mono text-sm transition-colors duration-200 text-black">
                    Raise Hand
                  </span>
                                <div
                                    className="slide-fill absolute inset-0 transform -translate-x-full transition-transform duration-300 ease-out bg-gray-200"></div>
                            </button>

                            <Link
                                href={logoutLink.path}
                                className="block"
                                onClick={() => setIsOpen(false)}
                            >
                                <div className="chess-btn relative overflow-hidden">
                    <span
                        className="block relative z-10 px-4 py-2 w-full text-left font-mono text-sm transition-colors duration-200 text-black">
                      Log Out
                    </span>
                                    <div
                                        className="slide-fill absolute inset-0 transform -translate-x-full transition-transform duration-300 ease-out bg-gray-200"></div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Fixed position for status card so it doesn't overflow */}
                    <div
                        className="w-full border-gray-200 bg-gray-100/50 text-gray-600 border p-3 text-xs mb-3 md:mb-18">
                        <span className="block">Hackathon Status:</span>
                        <span className="font-bold text-green-600">ACTIVE</span>
                    </div>
                </div>
            </div>

            {/* Main Content Wrapper */}
            <div className={`transition-all duration-300 ${isMobile ? 'ml-0 pt-14' : 'ml-64'} bg-gray-50`}>
                {/* Your page content goes here */}
            </div>

            {/* Enhanced Notification Toast */}
            <div
                className={`fixed bottom-4 right-4 bg-white border-gray-200 border py-3 px-4 shadow-lg transform transition-all duration-300 ${
                    notification.show ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                } max-w-xs z-50`}
            >
                <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 mt-1.5 flex-shrink-0 bg-green-500"></div>
                    <div>
                        <span className="font-mono text-sm font-bold block text-black">{notification.message}</span>
                        <span className="font-mono text-xs text-gray-500">{notification.subtitle}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
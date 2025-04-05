// components/CountdownRibbon.jsx - Updated version
"use client";
import {useEffect, useState} from 'react';
import {jetBrainsMono} from "@/components/AnimatedTitle";

// Target date: March 31, 9 AM, 2025
export const targetDate = new Date(2025, 3, 6, 9, 0, 0);

export function calculateTimeRemaining() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
        return {days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true};
    }

    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isExpired: false,
    };
}

export default function CountdownRibbon() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: false,
    });
    const [isMobile, setIsMobile] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        handleResize();
        handleScroll();
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        setTimeLeft(calculateTimeRemaining());
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeRemaining());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Don't render on mobile or if timer expired
    if (isMobile || timeLeft.isExpired) {
        return null;
    }

    const formatNumber = (num) => num.toString().padStart(2, '0');

    return (
        <div className={`${jetBrainsMono.className} fixed transition-all duration-300
                        left-64 right-0 top-0 z-30 bg-white border-b border-gray-200`}>
            <div className="flex items-center justify-center h-8 text-xs">
                <div className="inline-flex items-center space-x-1">
                    <span className="font-bold text-black">HACKATHON STARTS IN:</span>
                    <div className="flex items-center">
                        <span className="font-mono font-bold">{formatNumber(timeLeft.days)}</span>
                        <span className="text-xs text-gray-600 mx-0.5">d</span>
                        <span className="mx-0.5 text-gray-400">·</span>
                        <span className="font-mono font-bold">{formatNumber(timeLeft.hours)}</span>
                        <span className="text-xs text-gray-600 mx-0.5">h</span>
                        <span className="mx-0.5 text-gray-400">·</span>
                        <span className="font-mono font-bold">{formatNumber(timeLeft.minutes)}</span>
                        <span className="text-xs text-gray-600 mx-0.5">m</span>
                        <span className="mx-0.5 text-gray-400">·</span>
                        <span className="font-mono font-bold">{formatNumber(timeLeft.seconds)}</span>
                        <span className="text-xs text-gray-600 ml-0.5">s</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
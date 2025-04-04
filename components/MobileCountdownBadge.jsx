"use client";

import {jetBrainsMono} from "@/components/AnimatedTitle";
import {calculateTimeRemaining} from "@/components/CountdownRibbon";
import {useEffect, useState} from "react";

export const MobileCountdownBadge = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: false,
    });

    useEffect(() => {
        const updateTime = () => {
            const time = calculateTimeRemaining();

            setTimeLeft({
                days: time.days,
                hours: time.hours,
                minutes: time.minutes,
                seconds: time.seconds,
                isExpired: time.isExpired
            });
        };

        updateTime();
        const timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer);
    }, []);

    if (timeLeft.isExpired) return null;

    return (
        <div className="relative flex md:hidden">
            <div className="border border-black bg-white overflow-hidden">
                <div className="flex items-center text-[8px] px-1 py-0.5">
                    {timeLeft.days > 0 && (
                        <span className={`${jetBrainsMono.className} font-mono font-medium text-black mr-1`}>
                                        {timeLeft.days}d
                                    </span>
                    )}

                    {timeLeft.hours > 0 && (
                        <span className={`${jetBrainsMono.className} font-mono font-medium text-black mr-1`}>
                                        {timeLeft.hours}h
                                    </span>
                    )}

                    {timeLeft.minutes > 0 && (
                        <span className={`${jetBrainsMono.className} font-mono font-medium text-black mr-1`}>
                                        {timeLeft.minutes}m
                                    </span>
                    )}

                    <span className={`${jetBrainsMono.className} font-mono font-medium text-black mr-1`}>
                                    {timeLeft.seconds}s
                                </span>

                    <span
                        className={`${jetBrainsMono.className} font-mono font-medium text-gray-600 text-[7px] ml-0.5`}>
                                    left
                                </span>
                </div>
            </div>
        </div>
    );
};
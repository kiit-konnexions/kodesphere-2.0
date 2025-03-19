"use client";
import {useEffect, useState} from 'react';
import {useTheme} from "@/app/components/ThemeProvider";

function calculateTimeRemaining() {
    // Target date: March 31, 9 AM, 2025
    const targetDate = new Date(2025, 2, 31, 9, 0, 0);
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

export default function CountdownTimer() {
    const {darkMode} = useTheme();
    const [timeLeft, setTimeLeft] = useState({
        days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: false,
    });

    useEffect(() => {
        setTimeLeft(calculateTimeRemaining());
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeRemaining());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    if (timeLeft.isExpired) {
        return null;
    }

    // Format numbers with leading zeros
    const formatNumber = (num) => num.toString().padStart(2, '0');

    const timeUnitStyle = {
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 6px',
    };

    const numberStyle = {
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '1.8rem',
        fontWeight: '700',
        lineHeight: 1,
        color: darkMode ? '#ffffff' : '#222222',
    };

    const labelStyle = {
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '0.7rem',
        fontWeight: '500',
        textTransform: 'uppercase',
        color: darkMode ? '#9ca3af' : '#666666', // zinc-400 in dark mode
        marginTop: '4px',
    };

    const separatorStyle = {
        fontSize: '1.8rem',
        color: darkMode ? '#52525b' : '#aaaaaa', // zinc-600 in dark mode
        margin: '0 -2px 16px 0',
    };

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '8px 16px',
        }}>
            <div style={timeUnitStyle}>
                <span style={numberStyle}>{formatNumber(timeLeft.days)}</span>
                <span style={labelStyle}>d</span>
            </div>

            <div style={separatorStyle}>·</div>

            <div style={timeUnitStyle}>
                <span style={numberStyle}>{formatNumber(timeLeft.hours)}</span>
                <span style={labelStyle}>hr</span>
            </div>

            <div style={separatorStyle}>·</div>

            <div style={timeUnitStyle}>
                <span style={numberStyle}>{formatNumber(timeLeft.minutes)}</span>
                <span style={labelStyle}>m</span>
            </div>

            <div style={separatorStyle}>·</div>

            <div style={timeUnitStyle}>
                <span style={numberStyle}>{formatNumber(timeLeft.seconds)}</span>
                <span style={labelStyle}>sec</span>
            </div>

            <div style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.8rem',
                fontWeight: '400',
                color: darkMode ? '#9ca3af' : '#777777', // zinc-400 in dark mode
                marginLeft: '8px',
                marginTop: '4px',
            }}>
                left
            </div>
        </div>
    );
}
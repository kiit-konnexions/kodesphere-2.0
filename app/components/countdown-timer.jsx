"use client";
import { useState, useEffect } from "react";

// Target time is when the participation submission window ends
// 31st March 4pm IST
const targetTime = new Date("2025-03-31T16:00:00+05:30");

function CountdownTimer() {
  const [timeRemaining, setTimeRemaining] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const currentTime = new Date();
      const difference = new Date(targetTime) - currentTime;

      if (difference > 0) {
        // Calculate hours, minutes, and seconds
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeRemaining({ hours, minutes, seconds });
      } else {
        // Timer complete
        setTimeRemaining({ hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timerInterval);
      }
    };

    // Calculate immediately on mount
    calculateTimeRemaining();

    // Update every second
    const timerInterval = setInterval(calculateTimeRemaining, 1000);

    // Cleanup function to prevent memory leaks
    return () => clearInterval(timerInterval);
  }, [targetTime]);

  // Format time values to have leading zeros
  const formatTime = (value) => {
    return value.toString().padStart(2, "0");
  };

  return (
    <div className="bg-neutral-200/80 p-6 rounded text-2xl grid gap-2">
      <span className="text-lg">Countdown</span>
      <p className="text-3xl font-bold">
        {`${formatTime(timeRemaining.hours)}:${formatTime(timeRemaining.minutes)}:${formatTime(timeRemaining.seconds)}`}
        <span className="font-normal"> left</span>
      </p>
      <p className="text-lg">until 31st March 4pm</p>
    </div>
  );
}

export default CountdownTimer;

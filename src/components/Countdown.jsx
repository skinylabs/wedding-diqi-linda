"use client";
import { useState, useEffect } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    // Inisialisasi zona waktu WIB (Waktu Indonesia Barat)
    const timezoneOffset = 7; // UTC+7 for WIB
    const targetDate = new Date("2024-07-04T09:00:00");

    let difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZeros = (value) => {
    if (value < 10) {
      return `0${value}`;
    }
    return value;
  };

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col p-2 bg-neutral rounded-box text-white">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": addLeadingZeros(timeLeft.days) }}></span>
        </span>
        days
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-white">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": addLeadingZeros(timeLeft.hours) }}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-white">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": addLeadingZeros(timeLeft.minutes) }}></span>
        </span>
        min
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-white">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": addLeadingZeros(timeLeft.seconds) }}></span>
        </span>
        sec
      </div>
    </div>
  );
};

export default Countdown;

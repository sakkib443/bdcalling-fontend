import React, { useEffect, useState } from "react";
import LeftEventSection from "./Events Components/Left Event Section/LeftEventSection";
import RightSeminarSection from "./Events Components/Right Seminar Section/RightSeminarSection";
import { useLocation } from "react-router-dom";

const Events = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-06-30T00:00:00"); // 🎯 Your target date/time
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

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
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Clear on unmount
  }, []);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // top-left corner
  }, [pathname]);
  return (
    <div className="bg-[#ECFCFB] py-16 md:py-24">
      {/* Countdown Timer */}
      <div className="flex gap-5 justify-center mb-10">
        <div>
          <span className="countdown font-mono text-4xl">
            <span style={{ "--value": timeLeft.days }} aria-label={`${timeLeft.days}`}>
              {timeLeft.days}
            </span>
          </span>
          <span className="block text-center">days</span>
        </div>
        <div>
          <span className="countdown font-mono text-4xl">
            <span style={{ "--value": timeLeft.hours }} aria-label={`${timeLeft.hours}`}>
              {timeLeft.hours}
            </span>
          </span>
          <span className="block text-center">hours</span>
        </div>
        <div>
          <span className="countdown font-mono text-4xl">
            <span style={{ "--value": timeLeft.minutes }} aria-label={`${timeLeft.minutes}`}>
              {timeLeft.minutes}
            </span>
          </span>
          <span className="block text-center">min</span>
        </div>
        <div>
          <span className="countdown font-mono text-4xl">
            <span style={{ "--value": timeLeft.seconds }} aria-label={`${timeLeft.seconds}`}>
              {timeLeft.seconds}
            </span>
          </span>
          <span className="block text-center">sec</span>
        </div>
      </div>

      {/* Event Sections */}
      <div className="w-11/12 lg:w-9/12 mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2">
            <LeftEventSection />
          </div>
          <div className="w-full lg:w-1/2">
            <RightSeminarSection />
          </div>
        </div>
      </div>

      <div>
        <p>Thank You</p>
      </div>
    </div>
  );
};

export default Events;

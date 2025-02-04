import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ComingSoon: React.FC = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Target date
  const targetDate = new Date("2025-03-01T00:00:00");

  // Countdown logic
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Function to handle navigate
  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="h-screen w-full bg-gradient-to-r from-[#1f3449] to-[#030516] flex flex-col justify-center items-center text-white px-4">
      {/* Logo or Heading */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
        Coming Soon!
      </h1>
      <p className="text-lg sm:text-xl text-center mb-8">
        We’re working hard to bring you a great experience.
      </p>

      {/* Countdown Timer */}
      <div className="flex justify-center items-center gap-6 mb-8">
        {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
          <div
            key={label}
            className="text-center flex flex-col justify-center items-center"
          >
            <span className="text-5xl font-semibold">
              {Object.values(timeLeft)[index].toString().padStart(2, "0")}
            </span>
            <span className="text-sm mt-2 uppercase">{label}</span>
          </div>
        ))}
      </div>

      <div className="relative w-fit group">
        <button
          className="action-button custom-animate w-w-fit py-[12px] px-5 flex gap-2 items-center justify-center rounded-full 
                     bg-white text-black text-base relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md transition-all duration-300"
          onClick={() => handleNavigate()}
        >
          Go Home
        </button>
        <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
      </div>

      {/* Social Links */}
      <div className="mt-8">
        <p className="text-lg sm:text-base text-center mb-2">
          Chat one of our developers via linkedIn...
        </p>
        <div className="flex justify-center">
          <a
            href="https://www.linkedin.com/in/ekpa-daniel/"
            className="w-10 h-10 flex justify-center items-center bg-white bg-opacity-20 rounded-full hover:bg-opacity-40 transition"
            aria-label="LinkedIn"
            target="_blank"
          >
            <img
              src="/images/linkedin.svg"
              alt="Facebook"
              className="w-5 h-5"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;

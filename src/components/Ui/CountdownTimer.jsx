import { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        // seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-[10px] items-center font-mulish_medium text-[#02A77D] text-xl leading-[30px]">
      <span className="bg-[#02A77D14] py-2 px-[11px] rounded-md">{timeLeft.days} </span>
      <span>:</span>
      <span className="bg-[#02A77D14] py-2 px-[11px] rounded-md">{timeLeft.hours} </span>
      <span>:</span>
      <span className="bg-[#02A77D14] py-2 px-[11px] rounded-md">{timeLeft.minutes} </span>
      {/* <span>{timeLeft.seconds}s</span> */}
    </div>
  );
};

export default CountdownTimer;
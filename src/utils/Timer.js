import React, {useEffect, useState} from 'react';

const Timer = () => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();

    const difference = +new Date(`10/20/2021`) - +new Date();

    const sec = 5;
    const newDifference = +new sec - 1;

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
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
      setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
      }, 1000)
  })

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>
        <h1>
            Fuck Donald Trump!
        </h1>
      <h2>{timerComponents.length ? timerComponents : <span>Time's Up!</span>}</h2>
      <h2>
        Until Trump's out of office!
      </h2>
    </div>
  );
};

export default Timer;
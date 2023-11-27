import React, { useState, useEffect } from 'react';

const Timer = ({ onComplete }) => {
    const [seconds, setSeconds] = useState(180);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(prevSeconds => (prevSeconds > 0 ? prevSeconds - 1 : 0));
        }, 1000);

        if (seconds === 0) {
            clearInterval(timer);
            onComplete();
        }
        return () => clearInterval(timer);
    }, [seconds, onComplete]);

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const remainingSeconds = timeInSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    };

    return (
        <>
            <p className="text-2xl mt-4 font-bold ">{formatTime(seconds)}</p>
        </>
    );
};

export default Timer;

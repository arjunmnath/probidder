'use client';

import {useEffect, useState} from "react";

const RemainingTime = (props) => {
    const [time, setTime] = useState(0);
    useEffect(() => {
        const ending = new Date(props.endTime);
        setTime(ending - new Date() > 0 ? (ending - new Date())/1000 : 0);
        const intervalId = setInterval(() => {
            setTime(prevTime => {
                if (prevTime <= 0) {
                    clearInterval(intervalId);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formatTime = (timeInSeconds) => {
        const days = Math.floor(timeInSeconds / (3600 * 24));
        const hours = Math.floor((timeInSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return {
            days,
            hours: String(hours).padStart(2, '0'),
            minutes: String(minutes).padStart(2, '0'),
            seconds: String(seconds).padStart(2, '0'),
        };
    };
    const {days, hours, minutes, seconds} = formatTime(time)
    return <>
        <div className={`scale-90 flex justify-center align-middle w-max`}>
            <div className={`flex flex-row gap-2 my-2`}>
                <div className={`time `}>
                    <div className={`flex flex-col text-center`}>
                        <span className={`font-bold font-sans text-xl`}>{days}</span>
                        <span className={`text-opacity-70 text-sm`}>Days</span>
                    </div>
                </div>
                <div className={`separator text-opacity-70 animate-blink`}>:</div>
                <div className={`time`}>
                    <div className={`flex flex-col text-center`}>
                        <span className={`font-bold font-sans text-xl`}>{hours}</span>
                        <span className={`text-opacity-70 text-sm`}>Hours</span>
                    </div>
                </div>
                <div className={`separator text-opacity-70 animate-blink`}>:</div>
                <div className={`time`}>
                    <div className={`flex flex-col text-center`}>
                        <span className={`font-bold fonts-sans text-xl`}>{minutes}</span>
                        <span className={`text-opacity-70 text-sm `}>Mins</span>
                    </div>
                </div>
                <div className={`separator text-opacity-70 animate-blink`}>:</div>
                <div className={`time`}>
                    <div className={`flex flex-col text-center`}>
                        <span className={`font-bold font-sans text-xl`}>{seconds}</span>
                        <span className={`text-opacity-70 text-sm`}>Secs</span>
                    </div>
                </div>
            </div>
        </div>
    </>
}


export default RemainingTime;
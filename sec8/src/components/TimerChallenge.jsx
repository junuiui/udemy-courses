import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleReset() {
        setTimeRemaining(targetTime * 1000)
    }


    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prev => prev - 10);
        }, 10);
    }

    function handleStop() {
        dialog.current.open();
        clearInterval(timer.current);
    }

    
    return (
        <>
            {<ResultModal
                ref={dialog}
                targetTime={targetTime}
                rt={timeRemaining}
                onReset={handleReset} />}
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? "s" : ""}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? "Stop" : "Start"} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? "active" : undefined}>
                    {timerIsActive ? "Time is Running" : "Timer inactive"}
                </p>
            </section>
        </>
    );
}


// // overwritten among buttons
// // let timer;

// export default function TimerChallenge({ title, targetTime }) {

//     const timer = useRef();

//     const [timerStarted, setTimerStarted] = useState(false);
//     const [timerExpired, setTimerExpired] = useState(false);

//     // // when update, it is different variable
//     // let timer;

//     function handleStart() {
//         timer.current = setTimeout(() => {
//             setTimerExpired(true);
//         }, targetTime * 1000);

//         setTimerStarted(true);
//     }

//     function handleStop() {
//         clearTimeout(timer.current);
//     }

//     return (
//         <>
//             {timerExpired && <ResultModal targetTime={targetTime} result="lost" />}
//             <section className='challenge'>
//                 <h2>
//                     {title}
//                 </h2>
//                 <p className="challenge-time">
//                     {targetTime} second{targetTime > 1 ? 's' : ''}
//                 </p>
//                 <p>
//                     <button onClick={timerStarted ? handleStop : handleStart}>
//                         {timerStarted ? "Stop" : "Start"} Challenge
//                     </button>
//                 </p>
//                 <p className={timerStarted ? 'active' : undefined}>
//                     {timerStarted ? 'Time is Running' : 'Timer inactive'}
//                 </p>
//             </section>
//         </>
//     );
// }
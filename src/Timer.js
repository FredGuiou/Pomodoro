import { useState } from "react";
import ClockDisplay from "./ClockDisplay";
import useTimer from "./hooks/useTimer";
import TaskForm from "./TaskForm";
import style from './Timer.module.css';
import TimerText from "./TimerText";

function Timer(props) {

    const [isTimerStarted, setTimerStarted] = useState(false);
    const { time, startTimer, stopTimer } = useTimer();

    const handleStartTimer = () => {
        if (isTimerStarted) { // isTimerStarted est vrai => on veut arrêter le timer.
            const savedTime = stopTimer();
            props.saveTime(savedTime);
            setTimerStarted(false);
        } else {  // isTimerStarted est faux => on veut démarrer le timer.
            setTimerStarted(true);
            startTimer();
        };
    };

    return (
        <>
            <ClockDisplay time={ time } className={style['clock-timer']}/>
            <TaskForm isTimerStarted={ isTimerStarted } onSubmit={ handleStartTimer } />
            <TimerText isTimerStarted={ isTimerStarted } />
        </>
    );


};

export default Timer;
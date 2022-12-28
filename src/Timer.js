import { useState } from "react";
import ClockDisplay from "./ClockDisplay";
import style from './Timer.module.css'

let timerId;

function Timer(props) {

    const [isTimerStarted, setTimerStarted] = useState(false);
    const [time, setTime] = useState(0);

    const HandleStartTimer = () => {
        if (isTimerStarted) { // isTimerStarted est vrai => on veut arrêter le timer.

            clearInterval(timerId);


            props.saveTime(time);

            setTimerStarted(false);
            setTime(0);

        } else {  // isTimerStarted est faux => on veut démarrer le timer.

            setTimerStarted(true);

            timerId = setInterval (() => {
                setTime((prevTime) => {
                    return prevTime + 1 ;
                });
            }, 1000);
            
        };
    };

    return (
        <>
            <ClockDisplay time={ time } className={style['clock-timer']}/>
            <button className={ `${style['clock-btn']} ${style[`clock-btn-${isTimerStarted ? 'stop' : 'start'}`]}`} onClick={ HandleStartTimer }>{ isTimerStarted ? 'Stop': 'Start'}</button>
        </>
    );


};

export default Timer;
import { useMemo, useState } from "react";
import Button from "./Button";
import ClockDisplay from "./ClockDisplay";
import style from './Timer.module.css'
import TimerText from "./TimerText";

let timerId;

function Timer(props) {

    const [isTimerStarted, setTimerStarted] = useState(false);
    const [time, setTime] = useState(0);

    const handleStartTimer = () => {
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

    //Memoisation d'un composant avec l'utilisation du hook useMemo qui renvoie le JSX à ne pas rafraichir 
    // const displayParagraph = useMemo(() => {
    //     return (
    //         <p >
    //             {isTimerStarted ? 'Le timer est démarré' : 'Le timer est arrêté' }
    //         </p>
    //     );
    // }, [ isTimerStarted ]); //On utilise un tableau de dépendances pour empêcher le rechargement grace à useMemo du JSX retourné.

    const handleClick = useMemo(() => {
        return () => {
            alert('Hello Word !');
        }
    }, []);



    return (
        <>
            <ClockDisplay time={ time } className={style['clock-timer']}/>
            <Button isTimerStarted={ isTimerStarted } onClick={ handleStartTimer }/>
            <Button isTimerStarted={ isTimerStarted } onClick={ handleClick }/>
            <TimerText isTimerStarted={ isTimerStarted }/>
        </>
    );


};

export default Timer;
import { memo } from "react";
//On peut memoiser un composant entier
//On crée un nouveau composant sous la forme d'une fonction qui renverra le JSX


function TimerText( { isTimerStarted }) {
    return (
        <p >
        {isTimerStarted ? 'Le timer est démarré' : 'Le timer est arrêté' }
    </p>
    );
}
//Pour mémoiser le composant on utilise memo qui memoise TimerText
export default memo(TimerText);
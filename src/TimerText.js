import { memo } from "react";
import style from './TimerText.module.css';
//On peut memoiser un composant entier
//On crée un nouveau composant sous la forme d'une fonction qui renverra le JSX


function TimerText( { isTimerStarted } ) {

    return (
        //le paramètre ref est un paramètre réservé par react qui prend comme valeur ici notre constante usant du hook useRef.
        <p className={ `${style['timer-text']}`}>
        {isTimerStarted ? 'Le timer est démarré' : 'Le timer est arrêté' }
    </p>
    );
}
//Pour mémoiser le composant on utilise memo qui memoise TimerText
export default memo(TimerText);
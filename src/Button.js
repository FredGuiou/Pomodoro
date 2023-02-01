import { memo } from 'react';
import style from './Button.module.css';

function Button({ isTimerStarted, onClick, type = 'button' }) {

    return (
        <button type={ type } className={ `${style['clock-btn']} ${style[`clock-btn-${isTimerStarted ? 'stop' : 'start'}`]}`}
            onClick={ onClick }>{ isTimerStarted ? 'Stop': 'Start'}
            </button>
    );
};

export default memo(Button);
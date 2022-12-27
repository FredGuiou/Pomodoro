import { Component } from "react";
import style from './Timer.module.css'

function secondsToHms (timeInSeconds) {
    timeInSeconds = Number(timeInSeconds);
    const h = Math.floor(timeInSeconds / 3600);
    const m = Math.floor(timeInSeconds % 3600 / 60);
    const s = Math.floor(timeInSeconds % 3600 % 60);

    const hDisplay = h < 10 ? '0' + h : h; 
    const mDisplay = m < 10 ? '0' + m : m; 
    const sDisplay = s < 10 ? '0' + s : s; 

    return `${hDisplay}:${mDisplay}:${sDisplay}`;
};



class Timer extends Component {

    constructor (props){
        super(props);
        this.state = {
            isTimerStarted: false,
            time: 0,
        };
    };

    HandleStartTimer = () => {
        if (this.state.isTimerStarted) { // isTimerStarted est vrai => on veut arrêter le timer.

            clearInterval(this.timerId);


            this.props.saveTime(this.state.time);

            this.setState({
                isTimerStarted: false,
                time: 0,
            });

        } else {  // isTimerStarted est faux => on veut démarrer le timer.

            this.setState({
                isTimerStarted: true,
            });
            this.timerId = setInterval (() => {
                this.setState(({ time }) => {
                    return {
                        time: time + 1                    }
                });
            }, 1000);
            
        };
    };


    render() {
        return (
            <>
                <p className={ style['clock-timer']}>{ secondsToHms(this.state.time) }</p>
                <button className={ `${style['clock-btn']} ${style[`clock-btn-${this.state.isTimerStarted ? 'stop' : 'start'}`]}`} onClick={ this.HandleStartTimer }>{ this.state.isTimerStarted ? 'Stop': 'Start'}</button>
            </>
        );
    };
};

export default Timer;
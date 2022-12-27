import { Component } from "react";
import style from './TimersTable.module.css';

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

class TimersTable extends Component {

    render() {
        return(
            <table className= { style['timers-table'] }>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.timers.map((timer) => (
                            <tr key = { timer.date.getMilliseconds() }>
                                <td>{ timer.date.toLocaleDateString() } at { timer.date.toLocaleTimeString() }</td>
                                <td>{ secondsToHms(timer.time) }</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        );
    };
};

export default TimersTable;
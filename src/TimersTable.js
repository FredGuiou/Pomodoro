import { useRef } from 'react';
import ClockDisplay from './ClockDisplay';
import style from './TimersTable.module.css';


function TimersTable(props) {
    //Pour récupérer les références des valeurs d'un tableau.
    //On définit ne constante qui utilise le hook useRef avec pour valeur initiale un tableau vide.
    const timersRef = useRef([]);
    //On utilise une constante avec une fonction fléchée anonyme ayant pour
    //argument chaque "element" du tableau.
    const addTimerRef = (element) => {
        //Si timersRef.current existe et que timersRef n'inclue pas l'élément
        if(timersRef.current && !timersRef.current.includes(element)) {
            //Alors on effectue un push de l'élément de timersRef.current
            timersRef.current.push(element);
        };
    };


    return(
        <table className= { style['timers-table'] }>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Task</th>
                    <th>Description</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.timers.map((timer) => (
                        <tr ref={ addTimerRef } onClick={ () => props.onDisplayTimerDetails(timer) } key = { timer.date.getMilliseconds() }>
                            <td>{ timer.date.toLocaleDateString() } at { timer.date.toLocaleTimeString() }</td>
                            <td>{timer.title}</td>
                            <td>{timer.description}</td>
                            <td><ClockDisplay time={timer.time}/></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>

    );

}

export default TimersTable;
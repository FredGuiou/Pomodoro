import Timer from "./Timer";
import TimersTable from "./TimersTable";
import style from './App.module.css'
import { useState } from "react";
import useTimeParser from "./hooks/useTimeParser";


function App() {

  const [timers, setTimers] = useState([]);

  const { parseSecondsToHMS } = useTimeParser();

  const saveTime = (time) => {
    const date = new Date();
    setTimers([...timers, { time, date }]);
  }

  const displayTimerDetails = (timer) => {
    alert(`${timer.date.toLocaleDateString() } at ${ timer.date.toLocaleTimeString() } \n${parseSecondsToHMS(timer.time)}`)
  }

  return (
    <div className={style.container}>
      <h1 className={style['main-title']}>Pomodoro Timer</h1>
      <Timer saveTime={ saveTime } />
      <TimersTable timers={ timers } onDisplayTimerDetails={displayTimerDetails}/>
    </div>
);


}

export default App;
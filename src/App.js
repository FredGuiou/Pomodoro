import Timer from "./Timer";
import TimersTable from "./TimersTable";
import style from './App.module.css'
import { useState, useTransition } from "react";
import useTimeParser from "./hooks/useTimeParser";
import TextField from "./Forms/TextField";


function App() {

  const [timers, setTimers] = useState([]);
  const [isPending, startTransition] = useTransition();
  const [searchValue, setSearchValue] = useState('');


  const { parseSecondsToHMS } = useTimeParser();

  //Permet de rechercher des timers
  const searchTimers = (searchValue) => {
    //Si la valeur est inexistante ou que sa longueur est inf à 2
    //alors on renvoie le tableau tel quel.
    if(!searchValue || searchValue.length < 2) {
      return timers;
    };
    //Permet de filtrer aLotOfTimers.
    const foundTimers = timers.filter(timer => {
      //La recherche va porter sur le titre de la tâche
      if(timer.title.trim().toLowerCase().includes(searchValue.trim().toLowerCase())) {
        return timer;
      }
    });
    return foundTimers;
  }

  const searchedTimers = searchTimers(searchValue);

  const onSearch = (value) => {
    startTransition(() => {
      setSearchValue(value);
    })
  }

  const saveTime = (time, title, description) => {
    const date = new Date();
    setTimers([...timers, { time, date, title, description }]);
  };

  const displayTimerDetails = (timer) => {
    alert(`${timer.date.toLocaleDateString() } at ${ timer.date.toLocaleTimeString() } \n${parseSecondsToHMS(timer.time)}`)
  };

  return (
    <div className={style.container}>
      <h1 className={style['main-title']}>Pomodoro Timer</h1>
      <Timer saveTime={ saveTime } />
      <div style={{width: '100%'}}>
        <TextField labelTitle='Rechercher' placeholder='Rechercher des tâches...' onChange={ onSearch }/>
        { isPending && <p className={style['loading']}>Loading...</p>}
        <TimersTable timers={ searchedTimers } onDisplayTimerDetails={displayTimerDetails}/>
      </div>
    </div>
);


}

export default App;
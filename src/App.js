import Timer from "./Timer";
import TimersTable from "./TimersTable";
import style from './App.module.css'
import { useState, useTransition } from "react";
import useTimeParser from "./hooks/useTimeParser";
import TextField from "./Forms/TextField";

// Suite de fonctions permetteant de générer des tâches 
const generateALotOfTimers = ()=> {
  //génère uun lot de timers
  const aLotOfTimers = []; //On démarre avec un tableau vide
  for(let i = 0; i < 1500; i++){ //puis on boucle de 0 à 1500 timers
    aLotOfTimers.push({ //Tant que la boucle n'est pas terminée alors on push 
      time: 265,
      date: new Date(),
      title: 'Fake task' + i,
      description: 'Fake description',
    });
  }
  return aLotOfTimers; //On renvoie la nouvelle valeur de aLotOfTimers.
};
//la fonction précédente est excutée dans une constante individualisée aLotOfTimers.
const aLotOfTimers = generateALotOfTimers();

//Permet de rechercher des timers
const searchTimers = (searchValue) => {
  console.log('SEARCH !!!');
  //Si la valeur est inexistante ou que sa longueur est inf à 2
  //alors on renvoie le tableau tel quel.
  if(!searchValue || searchValue.length < 2) {
    return aLotOfTimers;
  };
  //Permet de filtrer aLotOfTimers.
  const foundTimers = aLotOfTimers.filter(timer => {
    //La recherche va porter sur le titre de la tâche
    if(timer.title.trim().toLowerCase().includes(searchValue.trim().toLowerCase())) {
      return timer;
    }
  });
  return foundTimers;
}


function App() {

  const [timers, setTimers] = useState([]);
  const [isPending, startTransition] = useTransition();
  const [searchValue, setSearchValue] = useState('');


  const { parseSecondsToHMS } = useTimeParser();

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
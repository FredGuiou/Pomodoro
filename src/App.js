import Timer from "./Timer";
import TimersTable from "./TimersTable";
import style from './App.module.css'

const { Component } = require("react");

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timers: [],

    };
  };

  saveTime = (time) => {
    const date = new Date();
    this.setState({
      timers: [...this.state.timers, { time, date }],
    });
  };

  render() {
    return (
        <div className={style.container}>
          <h1 className={style['main-title']}>Pomodoro Timer</h1>
          <Timer saveTime={this.saveTime} />
          <TimersTable timers={ this.state.timers }/>
        </div>
    );
  };
};

export default App;
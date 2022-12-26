import Timer from "./Timer";
import TimersTable from "./TimersTable";

const { Component } = require("react");

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timers: [],

    };
  };

  saveTime = (time) => {
    this.setState({
      timer: [time]
    });
  };

  render() {
    return (
        <div style={{margin: '4rem'}}>
          <h1>Pomodoro Timer</h1>
          <Timer />
          <TimersTable timers={ this.state.timers }/>
        </div>
    );
  };
};

export default App;
const { Component } = require("react");

class TimersTable extends Component {

    render() {
        return(
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.timers.map((time) => (
                            <tr key = { time }>
                                <td>{ time }</td>
                                <td></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        );
    };
};

export default TimersTable;
import React from "react";
import Timer from "./Timer";

enum TimeState {
    Waiting,
    Running,
}

type Props = {
    sec: number,
    onEnd: () => void,
}

type State = {
    timerState: TimeState,
}

export default class extends React.Component<Props, State>{
    state: State = {
        timerState: TimeState.Waiting,
    }

    render() {
        return (
            <div>
                <Timer sec={this.props.sec} isRunning={this.state.timerState === TimeState.Running} onEnd={this.props.onEnd} />
                {
                    this.state.timerState === TimeState.Waiting ? <button className="btn" onClick={() => this.setState({ timerState: TimeState.Running })}>Run</button> : <button className="btn" onClick={() => this.setState({ timerState: TimeState.Waiting })}>Stop</button>
                }
            </div>
        );
    }
}
import React from 'react';

export default class Chrono extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minutes: 0,
            seconds: 0,
            millis: 0,
            running: false
        };
        this._handleStartClick = this._handleStartClick.bind(this);
        this._handleStopClick = this._handleStopClick.bind(this);
        this._handleResetClick = this._handleResetClick.bind(this);
        //this.state = {article : 'der'};
    }

    _handleStartClick(event) {
        var _this = this;
        if (!this.state.running) {
            this.interval = setInterval(() => {
                this.tick();
            }, 100)

            this.setState({ running: true })
        }
    }

    _handleStopClick(event) {
        if (this.state.running) {
            clearInterval(this.interval);
            this.setState({ running: false })
        }
    }

    _handleResetClick(event) {
        this._handleStopClick();
        this.update(0, 0, 0);
    }

    tick() {
        let millis = this.state.millis + 1;
        let seconds = this.state.seconds;
        let minutes = this.state.minutes;

        if (millis === 10) {
            millis = 0;
            seconds = seconds + 1;
        }

        if (seconds === 60) {
            millis = 0;
            seconds = 0;
            minutes = minutes + 1;
        }

        this.update(millis, seconds, minutes);
    }

    zeroPad(value) {
        return value < 10 ? `0${value}` : value;
    }

    update(millis, seconds, minutes) {
        this.setState({
            millis: millis,
            seconds: seconds,
            minutes: minutes
        });
    }

    _handleStartClick(event) {
        var _this = this;
        if (!this.state.running) {
            this.interval = setInterval(() => {
                this.tick();
            }, 100)

            this.setState({ running: true })
        }
    }

    _handleStopClick(event) {
        if (this.state.running) {
            clearInterval(this.interval);
            this.setState({ running: false })
        }
    }

    _handleResetClick(event) {
        this._handleStopClick();
        this.update(0, 0, 0);
    }

    tick() {
        let millis = this.state.millis + 1;
        let seconds = this.state.seconds;
        let minutes = this.state.minutes;

        if (millis === 10) {
            millis = 0;
            seconds = seconds + 1;
        }

        if (seconds === 60) {
            millis = 0;
            seconds = 0;
            minutes = minutes + 1;
        }

        this.update(millis, seconds, minutes);
    }

    zeroPad(value) {
        return value < 10 ? `0${value}` : value;
    }

    update(millis, seconds, minutes) {
        this.setState({
            millis: millis,
            seconds: seconds,
            minutes: minutes
        });
    }

    render() {
        let run = this.state.running === true;
        return (
            <div className="app">
                <header className="header">
                    <div className="title">Chronometer-{this.props.ver}</div>
                </header>

                <main className="main">
                    <div className="display">
                        <div class='row'>
                            <div className=" state">{run ? 'Running' : 'Stop'}</div>
                            <h3><div className="col s3 offset-s5 segments">
                                <span className="mins">{this.zeroPad(this.state.minutes)}:</span>
                                <span className="secs">{this.zeroPad(this.state.seconds)} </span>
                                <span className="millis">.0{this.state.millis}</span>
                            </div>
                            </h3>
                        </div>
                    </div>
                    <div class='row'>
                        <div className="actions">

                            <button className={"col s2 offset-s5 btn-large blue btn start " + (run ? 'disabled' : '')}
                                onClick={this._handleStartClick}>Start</button>

                            { /* <button className={"btn stop " + (false == run ? 'disabled' : '')}
                        onClick={this._handleStopClick}>Stop</button> */}

                            {/*  <button className={"btn reset " + ( (this.state.seconds > 0 && false == run) ? '' : 'disabled')}
                        onClick={this._handleResetClick}>Reset</button> */}
                        </div>
                    </div>
                </main>
            </div>);
    }
}

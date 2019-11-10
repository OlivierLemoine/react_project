import React from 'react';

type IntervalFn = number;

type Props = {
    isRunning: boolean,
    sec: number,
    onEnd: () => void,
}

type State = {
    millis: number,
}

export default class extends React.Component<Props, State>{
    intervalUpdate: null | IntervalFn = null;

    state: State;

    constructor(props: Props) {
        super(props);

        this.state = {
            millis: props.sec * 1000,
        }
    }

    componentWillUnmount() {
        if (this.intervalUpdate)
            clearInterval(this.intervalUpdate);
    }

    componentDidMount() {
        //@ts-ignore
        this.intervalUpdate = setInterval(() => {
            if (this.props.isRunning)
                this.setState({ millis: this.state.millis - 10 });

            if (this.state.millis <= 0) {
                this.setState({ millis: 0 });

                if (this.intervalUpdate)
                    clearInterval(this.intervalUpdate);

                this.props.onEnd();
            }
        }, 10);
    }

    render() {

        return (
            <div>
                {(this.state.millis / 1000).toFixed(2)}
            </div>
        );
    }
}
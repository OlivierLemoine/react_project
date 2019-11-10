import React from 'react';

type IntervalFn = number;

type Props = {
    sec: number,
    onEnd: () => void,
}

type State = {
    millis: number,
}

export default class extends React.Component<Props, State>{
    intervalUpdate: null | IntervalFn = null;

    componentWillUnmount() {
        clearInterval(this.intervalUpdate);
    }

    componentDidMount() {
        this.intervalUpdate = setInterval(() => {
            this.setState({ millis: this.state.millis + 10 });
        }, 10);
    }

    render() {
        return (
            <div>
                Je suis le timer. Bonjour.
            </div>
        );
    }
}
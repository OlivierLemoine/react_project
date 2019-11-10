import React from 'react';

type Props = {
    sec: number,
    onEnd: () => void,
}

type State = {

}

export default class extends React.Component<Props, State>{
    render() {
        return (
            <div>
                Je suis le timer. Bonjour.
            </div>
        );
    }
}
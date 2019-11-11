import React from 'react';
import './AsteroidWord.css';
import { Word } from "../../Word";
import { Position } from "./Asteroid";

type Props = {
    word: Word,
    movement: {
        speed: number,
        isMoving: boolean,
        bottom: number,
        position: Position,
    }
    atBottom: () => void
}

type State = {
    rotationSpeed: string,
    sens: boolean,
    position: number,
}

export default class extends React.Component<Props, State> {
    state: State = {
        rotationSpeed: (() => `${Math.floor(Math.random() * 30 + 10) / 10}s`)(),
        sens: Math.floor(Math.random() * 2) === 1,
        position: -100,
    }

    isRuning = true

    componentDidMount() {
        this.moveSelf();
    }

    componentWillUnmount() {
        this.isRuning = false;
    }


    moveSelf() {
        if (this.isRuning) {
            if (this.props.movement.isMoving) {

                if (this.state.position > this.props.movement.bottom) {
                    this.props.atBottom();
                    this.isRuning = false;
                }

                this.setState({ position: this.state.position + this.props.movement.speed / 100 });

            }

            window.requestAnimationFrame(this.moveSelf.bind(this))
        }
    }

    render() {
        return (
            <div className="asteroid-container" style={{
                top: `${this.state.position}px`,
                transform: "translateX(-50%)",
                left: (() => {
                    switch (this.props.movement.position) {
                        case Position.Left:
                            return "20%";
                        case Position.Right:
                            return "80%";
                        default:
                            return "50%";
                    }
                })()
            }}>
                <img className="asteroid-img" src="asteroid.png" alt="asteroid" style={{
                    animationDuration: this.state.rotationSpeed,
                    animationName: this.state.sens ? "asteroidRotateClockwise" : "asteroidRotateAntiClockwise",
                }}></img>
                <span className="asteroid-name center-align">{this.props.word.name}</span>
            </div>
        );
    }
}
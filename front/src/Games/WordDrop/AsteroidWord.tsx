import React from 'react';
import './AsteroidWord.css';
import { Word } from "../../Word";
import { Position } from "./Asteroid";

type AsteroidProp = {
    word: Word,
    movement: {
        speed: number,
        isMoving: boolean,
        bottom: number,
        position: Position,
    }
    atBottom: () => void
}

type AsteroidState = {
    rotationSpeed: string,
    sens: boolean,
    position: number,
}

export default class extends React.Component<AsteroidProp, AsteroidState> {
    state: AsteroidState = {
        rotationSpeed: (() => `${Math.floor(Math.random() * 30 + 10) / 10}s`)(),
        sens: Math.floor(Math.random() * 2) === 1,
        position: -100,
    }

    speed: number
    isRuning = true

    constructor(props: AsteroidProp) {
        super(props);

        this.speed = props.movement.speed / 100;
    }

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

                this.setState({ position: this.state.position + this.speed });

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
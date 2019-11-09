import React from 'react';
import './AsteroidWord.css';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rotationSpeed: (() => `${Math.floor(Math.random() * 30 + 10) / 10}s`)(),
            sens: Math.floor(Math.random() * 2) === 1,
            position: 0,
        };

        this.speed = props.movement.speed / 100;
        this.isRuning = true;
    }

    componentDidMount() {
        this.moveSelf();
    }

    componentWillUnmount() {
        this.isRuning = false;
    }


    moveSelf() {
        if (this.props.movement.isMoving) {

            if (this.state.position > this.props.movement.bottom) {
                this.props.atBottom(this);
                this.isRuning = false;
            }

            this.setState({ position: this.state.position + this.speed });

        }

        if (this.isRuning)
            window.requestAnimationFrame(this.moveSelf.bind(this))
    }

    render() {
        return (
            <div className="asteroid-container" style={{
                top: `${this.state.position}px`,
                transform: "translateX(-50%)",
                left: (() => {
                    switch (this.props.movement.position) {
                        case "left":
                            return "20%";
                        case "right":
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
                <span className="asteroid-name center-align">{this.props.name}</span>
            </div>
        );
    }
}
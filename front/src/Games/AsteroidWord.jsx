import React from 'react';
import './AsteroidWord.css';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rotationSpeed: (() => `${Math.floor(Math.random() * 30 + 10) / 10}s`)(),
            sens: Math.floor(Math.random() * 2) === 1,
        };

        console.log(this.state);
    }
    render() {
        return (
            <div className="asteroid-container">
                <img className="asteroid-img" src="asteroid.png" alt="asteroid" style={{
                    animationDuration: this.state.rotationSpeed,
                    animationName: this.state.sens ? "asteroidRotateClockwise" : "asteroidRotateAntiClockwise"
                }}></img>
                <span className="asteroid-name center-align">{this.props.name}</span>
            </div>
        );
    }
}
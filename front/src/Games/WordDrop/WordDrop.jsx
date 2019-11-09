import React from 'react';
import './WordDrop.css';
import Asteroid from './AsteroidWord';

const GAME_STATE = {
    Menu: 'Menu',
    Playing: 'Playing',
    GameOver: 'GameOver',
};

const TRANSITIONS = {
    StartGame: 'StartGame',
}

export default class extends React.Component {
    constructor() {
        super();

        this.state = {
            gameState: GAME_STATE.Menu,
            game: {
                point: 0
            }
        }
    }

    updateGameState(transition) {
        switch (this.state.gameState) {
            case GAME_STATE.Menu:
                switch (transition) {
                    case TRANSITIONS.StartGame:
                        this.setState({ gameState: GAME_STATE.Playing });
                        break;
                    default:
                        throw new Error('Not in a valid transition');
                }
                break;
            default:
                throw new Error('Not in a valid state');
        }
    }

    renderMenu() {
        return (
            <div className="moon-title" onClick={() => this.updateGameState(TRANSITIONS.StartGame)}>
                <img src="moon_title.png" alt="moon title" />
            </div>
        );
    }

    renderGame() {
        return (
            <div>
                <img className="big-moon-img" src="moon.png" alt="" />
                <Asteroid name="left" movement={{
                    speed: 100,
                    position: "left",
                    bottom: 50,
                    isMoving: true,
                }} atBottom={(e) => console.log(e)} />
            </div>
        );
    }

    render() {
        let game = (() => {
            switch (this.state.gameState) {
                case GAME_STATE.Menu:
                    return this.renderMenu();
                case GAME_STATE.Playing:
                    return this.renderGame();
                default:
                    return (
                        <div style={{ backgroundColor: "white", padding: "30px" }}>
                            Error, please reload.
                            <button onClick={() => { window.location.reload(); }} className="btn">Reload</button>
                        </div >
                    );
            };
        })();

        return (
            <div className="game-container">
                {game}
            </div>
        );
    }
}
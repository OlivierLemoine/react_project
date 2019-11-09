import React from 'react';
import './WordDrop.css';
import Asteroid from './AsteroidWord';

const GAME_STATE = {
    Menu: 'Menu',
    Playing: 'Playing',
}

export default class extends React.Component {
    constructor() {
        super();

        this.state = {
            gameState: GAME_STATE.Playing,
            game: {
                point: 0
            }
        }
    }

    renderMenu() {
        return (
            <div></div>
        );
    }

    renderGame() {
        return (
            <div>
                <Asteroid name="test" />
                <Asteroid name="test2" />
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
                        <div>
                            empty
                        </div>
                    );
            };
        })();

        return (
            <div className="game-container">
                <img className="moon-image" src="moon.png" alt="" />
                {game}
            </div>
        );
    }
}
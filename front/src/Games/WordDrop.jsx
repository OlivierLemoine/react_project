import React from 'react';
import './WordDrop.css';

const GAME_STATE = {
    Menu: 'Menu',
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

    renderMenu() {
        return (
            <div></div>
        );
    }

    render() {
        let game = (() => {
            switch (this.state.gameState) {
                case GAME_STATE.Menu:
                    return this.renderMenu()
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
                <img className="moon-image" src="./moon.png" alt="" />
            </div>
        );
    }
}
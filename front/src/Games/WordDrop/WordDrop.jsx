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
    AsteroidAtBottom: 'AsteroidAtBottom',
}

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gameState: GAME_STATE.Menu,
            game: {
                asteroids: [this.generateAsteroid(1)],
                point: 0
            }
        }
    }

    keyListener(e) {
        switch (e.key) {
            case '1':
                console.log('der');
                break;
            case '2':
                console.log('die');
                break;
            case '3':
                console.log('das');
                break;
            default:
                break;
        }
    }

    componentDidMount() {
        document.body.addEventListener('keypress', this.keyListener);
    }

    componentWillUnmount() {
        document.body.removeEventListener('keypress', this.keyListener);
    }

    generateAsteroid(difficulty) {
        return {
            word: this.props.words[Math.floor(Math.random() * this.props.words.length)],
            speed: difficulty + 20,
            position: (() => {
                switch (Math.floor(Math.random() * 3)) {
                    case 0:
                        return "left";
                    case 1:
                        return "right";
                    default:
                        return "middle";
                }
            })()
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
            case GAME_STATE.Playing:
                switch (transition) {
                    case TRANSITIONS.AsteroidAtBottom:
                        this.setState({ gameState: GAME_STATE.GameOver })
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

                {
                    this.state.game.asteroids.map(asteroid => (
                        <Asteroid key={asteroid.word.name} word={asteroid.word} movement={{
                            speed: asteroid.speed,
                            position: asteroid.position,
                            bottom: 50,
                            isMoving: true,
                        }} atBottom={() => console.log("oups")} />
                    ))
                }
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
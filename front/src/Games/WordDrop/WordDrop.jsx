import React from 'react';
import './WordDrop.css';
import Asteroid from './AsteroidWord';

const GAME_STATE = {
    Menu: 'Menu',
    Playing: 'Playing',
    GameOver: 'GameOver',
};

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gameState: GAME_STATE.Menu,
            game: {
                asteroids: [this.generateAsteroid(10)],
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
            speed: difficulty * 5 + 20,
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

    renderMenu() {
        return (
            <div className="moon-title" onClick={() => this.setState({ gameState: GAME_STATE.Playing })}>
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
                            bottom: (document.body.clientHeight) * 0.8,
                            isMoving: true,
                        }} atBottom={() => this.setState({ gameState: GAME_STATE.GameOver })} />
                    ))
                }
            </div>
        );
    }

    renderGameOver() {
        return (
            <div>
                <button className="btn" onClick={() => this.setState({ gameState: GAME_STATE.Menu })}>
                    Restart
                </button>
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
                case GAME_STATE.GameOver:
                    return this.renderGameOver();
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
import React from 'react';
import './WordDrop.css';
import Asteroid from './AsteroidWord';

const GAME_STATE = {
    Menu: 'Menu',
    Playing: 'Playing',
    GameOver: 'GameOver',
};

function INIT_GAME_STATE() {
    return {
        asteroids: [],
        point: 0,
        difficulty: 1,
    }
}

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gameState: GAME_STATE.Menu,
            game: INIT_GAME_STATE()
        };

        this.isRunning = true;

        this.id = 0;
    }

    keyListener(e) {
        let det = (() => {
            switch (e.key) {
                case '1':
                    return 'der';
                case '2':
                    return 'die';
                case '3':
                    return 'das';
                default:
                    return null;
            }
        })();

        if (this.state.game.asteroids.length > 0) {
            if (det === this.state.game.asteroids[0].word.article) {
                this.setState(state => {
                    state.game.asteroids.splice(0, 1);
                    state.game.difficulty += 1;
                    return state;
                });
            } else {
                this.setState(state => {
                    state.game.asteroids[0].speed *= 2;
                    return state;
                })
            }
        } else {
            this.setState(state => {
                state.game.asteroids.push(this.generateAsteroid(state.game.difficulty));
                return state;
            });
        }
    }

    componentDidMount() {
        document.body.addEventListener('keypress', this.keyListener.bind(this));
        this.updateGame();
    }

    componentWillUnmount() {
        document.body.removeEventListener('keypress', this.keyListener.bind(this));
        this.isRunning = false;
    }

    resetGame() {
        this.setState({ game: INIT_GAME_STATE(), gameState: GAME_STATE.Menu });
    }

    updateGame() {
        if (this.isRunning) {
            this.setState(state => {
                state.game.asteroids.push(this.generateAsteroid(state.game.difficulty));
                return state;
            });


            setTimeout(this.updateGame.bind(this), 5000 / (1 + this.state.game.difficulty));
        }
    }

    generateAsteroid(difficulty) {
        return {
            id: this.id++,
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
                        <Asteroid key={asteroid.id} word={asteroid.word} movement={{
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
            <div className="game-over-btn">
                <button className="btn" onClick={() => this.resetGame()}>
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
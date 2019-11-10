import React from 'react';
import Article from './Article'
import { Word } from "../../Word";
import Timer from './Timer';
import './Word.css';


function random_item<T>(items: T[]) {
    return items[Math.floor(Math.random() * items.length)];
}

const MascArt = 'der';
const FemArt = 'die';
const NeutrArt = 'das';

enum GameState {
    Waiting,
    Running,
    Ending,
}

type Props = {}

type State = {
    listWords: Word[],
    currWord: Word | null,
    score: number,
    gameState: GameState,
}

export default class extends React.Component<Props, State> {
    state: State = {
        listWords: [],
        currWord: null,
        score: 0,
        gameState: GameState.Waiting,
    }

    getWords() {
        return fetch('/api/words').then(res => res.json()).then(val => val.data).catch(reason => console.log(reason));
    }

    chooseNewName() {
        let fullWorld = random_item(this.state.listWords);
        this.setState({
            currWord: {
                name: fullWorld.name,
                article: fullWorld.article,
            }
        });
    }

    componentDidMount() {
        this.getWords().then(data => {
            this.setState({
                listWords: data
            });
            this.chooseNewName();
        })
    }

    verifArticle(art: string) {
        if (this.state.currWord && this.state.currWord.article === art) {
            console.log('VICTOOOIRE');
            this.setState({ score: this.state.score + 1 });
            console.log(this.state.score);
        }
        else {
            console.log('Défaite royale')
        }

        this.chooseNewName();
    }


    render() {
        return (
            <div>
                <div>
                    <div className="timer center-align">
                        {
                            this.state.gameState !== GameState.Ending ?
                                <Timer sec={10} isRunning={this.state.gameState === GameState.Running} onEnd={() => this.setState({ gameState: GameState.Ending })} />
                                : <div></div>
                        }
                    </div>
                    <h1 className='center-align'>{this.state.score}</h1>
                    <div className="card-panel teal lighten-2 center-align">
                        {
                            this.state.currWord && this.state.gameState === GameState.Running ? this.state.currWord.name : "."
                        }
                    </div>


                    <div className='center-align'>
                        {
                            (() => {
                                switch (this.state.gameState) {
                                    case GameState.Waiting:
                                        return (
                                            <button className="btn row" onClick={() => this.setState({ gameState: GameState.Running })}>Start</button>
                                        );
                                    case GameState.Running:
                                        return (
                                            <div>
                                                <div className='row'>
                                                    <Article article={MascArt} onClick={(art: string) => this.verifArticle(art)} />
                                                </div>
                                                <div className='row'>
                                                    <Article article={FemArt} onClick={(art: string) => this.verifArticle(art)} />
                                                </div>
                                                <div className='row'>
                                                    <Article article={NeutrArt} onClick={(art: string) => this.verifArticle(art)} />
                                                </div>
                                            </div>
                                        );
                                    case GameState.Ending:
                                        return (
                                            <button className="btn row" onClick={() => this.setState({ gameState: GameState.Waiting, score: 0 })}>Restart</button>
                                        );
                                    default:
                                        return (
                                            <div>
                                                Error
                                            </div>
                                        );
                                }
                            })()
                        }

                    </div>


                </div>
            </div>
        );

    }
}
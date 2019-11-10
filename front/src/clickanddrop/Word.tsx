import React from 'react';
import Article from './article'
import { Word } from "../Word";
import Timer from './Timer';


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
                    <Timer sec={10} isRunning={false} onEnd={() => { console.log('fini') }} />
                    <h1 className='center-align'>{this.state.score}</h1>
                    <div className="card-panel teal lighten-2 center-align">
                        {
                            this.state.currWord ? this.state.currWord.name : ""
                        }
                    </div>

                    <div className='center-align'>
                        <div className='row'><Article article={MascArt} onClick={(art: string) => this.verifArticle(art)} /></div>
                        <div className='row'><Article article={FemArt} onClick={(art: string) => this.verifArticle(art)} /></div>
                        <div className='row'><Article article={NeutrArt} onClick={(art: string) => this.verifArticle(art)} /></div>

                    </div>


                </div>
            </div>
        );

    }
}
//{this.state.List()}

//  <Fetch onLoaded={(a,b) => console.log(b)}/>

//<button onClick={this.GetWords()} value="Click me" />

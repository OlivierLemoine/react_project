import React from "react";
import { Word } from "../Word";
import './ShowWords.css';

enum ShowState {
    waiting,
    showing,
}

type Props = {}

type State = {
    words: Word[],
    showState: ShowState,
}

export default class extends React.Component<Props, State>{
    state: State = {
        words: [],
        showState: ShowState.waiting,
    }

    async getWords() {
        let res = await fetch('/api/words');
        let val = await res.json();
        this.setState({ words: val.data, showState: ShowState.showing })
    }

    componentDidMount() {
        this.getWords();
    }

    async deleteWord(word: string) {
        this.setState({ showState: ShowState.waiting });

        await fetch(`/api/words/${word}`, {
            method: 'delete',
        });

        await this.getWords();

        this.setState({ showState: ShowState.showing })
    }

    render() {
        return (
            <div className="show-content row">
                <div className="col m6 offset-m3 s12">
                    <ul>
                        {
                            this.state.showState === ShowState.showing ? this.state.words.map(word => (
                                <li key={word.name} className="word row">
                                    <div className="col s3">
                                        {word.article}
                                    </div>
                                    <div className="col s3 offset-s1">
                                        {word.name}
                                    </div>
                                    <div className="right-align">
                                        <a href="#!" onClick={() => this.deleteWord(word.name)}><i className="material-icons">delete</i></a>
                                    </div>
                                </li>
                            )) : <div></div>
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
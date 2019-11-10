import React, { ChangeEvent } from 'react';
import './AddWord.css';
import { Article, articleFromString } from "../Word";

//@ts-ignore
let M = window.M;

type Props = {}

type State = {
    article: Article,
    wordName: string,
    modalMsg: string,
}

export default class extends React.Component<Props, State> {
    state: State = {
        article: Article.Der,
        wordName: "",
        modalMsg: "",
    }

    handleUpdateName(ev: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ wordName: ev.target.value });
    }

    handleUpdateArticle(article: Article) {
        this.setState({ article: article });
    }

    handleSubmit() {
        let payload = {
            name: this.state.wordName,
            article: this.state.article.toLocaleLowerCase(),
        };

        let header = new Headers();
        header.append('Content-Type', 'application/json');

        fetch('/api/words', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: header,
        })
            .then(async res => {
                let val = await res.json();
                let err = val.message || "The server response was not correctly formated";

                this.setState({ modalMsg: res.status !== 200 ? err : "Ok" });

                let modElem = document.querySelector('#modal-res-new-word');
                let instance = M.Modal.init(modElem);
                instance.open();
            })
            .catch(reason => console.log(reason));
    }

    render() {
        return (
            <div className="add-word row valign-wrapper">
                <div className="card-panel col m6 offset-m3 s12">
                    <form style={{ margin: "10px" }} className="row" action="#">
                        <ul className="col s6">
                            {
                                ["Der", "Die", "Das"].map(article => (
                                    <li key={article}>
                                        <label>
                                            <input name="article" type="radio" onChange={() => this.handleUpdateArticle(articleFromString(article))}
                                                checked={article.toLocaleLowerCase() === this.state.article} />
                                            <span>{article}</span>
                                        </label>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="col s6">
                            <input className="word-name" type="text" value={this.state.wordName} onChange={(e) => this.handleUpdateName(e)} />
                            <button className="btn" onClick={() => this.handleSubmit()}>Submit</button>
                        </div>
                    </form>
                </div>
                <div className="modal" id="modal-res-new-word">
                    <div className="modal-content">
                        {this.state.modalMsg}
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-close btn-flat">Close</a>
                    </div>
                </div>
            </div>
        );
    }
}
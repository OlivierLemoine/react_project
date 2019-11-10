import React, { ChangeEvent } from 'react';
import './AddWord.css';
import { Article, articleFromString } from "../Word";

//@ts-ignore
let M = window.M;

enum ServRes {
    Err,
    AlreadyExist,
    Ok,
}

type Props = {}

type State = {
    article: Article,
    wordName: string,
    servRes: ServRes,
}

export default class extends React.Component<Props, State> {
    state: State = {
        article: Article.Der,
        wordName: "",
        servRes: ServRes.Err,
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
                // let err = val.message || "The server response was not correctly formated";

                let serRes: ServRes = (() => {
                    if (val.status === "Ok")
                        return ServRes.Ok;
                    else if (val.type === "AlreadyExist")
                        return ServRes.AlreadyExist;
                    else
                        return ServRes.Err;
                })();

                this.setState({ servRes: serRes });

                let modElem = document.querySelector('#modal-res-new-word');
                let instance = M.Modal.init(modElem);
                instance.open();
            })
            .catch(reason => console.log(reason));
    }

    handleReplaceWord() {
        let payload = {
            article: this.state.article.toLocaleLowerCase(),
        };

        let header = new Headers();
        header.append('Content-Type', 'application/json');

        fetch(`/api/words/${this.state.wordName}`, {
            method: 'PUT',
            body: JSON.stringify(payload),
            headers: header,
        });

        let modElem = document.querySelector('#modal-res-new-word');
        let instance = M.Modal.init(modElem);
        instance.close();
    }

    renderErrMsg() {
        switch (this.state.servRes) {
            case ServRes.Ok:
                return (
                    <div>
                        Ok
                    </div>
                );
            case ServRes.AlreadyExist:
                return (
                    <div>
                        <p>
                            This word already exist, would you like to replace it ?
                        </p>
                        <button className="btn" onClick={() => this.handleReplaceWord()}>Replace</button>
                    </div>
                );
            default:
                return (
                    <div>
                        The server response was not correctly formated
                    </div>
                );
        }
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
                        {this.renderErrMsg()}
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-close btn-flat">Close</a>
                    </div>
                </div>
            </div>
        );
    }
}
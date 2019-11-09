import React from 'react';

export default class extends React.Component {
    constructor() {
        super()

        this.state = {
            article: "Der",
            wordName: "",
        };

        this.handleUpdateName = (ev) => {
            this.setState({ wordName: ev.target.value });
        };

        this.generateHandleUpdateArticle = (article) => () => {
            this.setState({ article: article });
        };

        this.handleSubmit = () => {
            console.log(this.state);
            fetch('/api/words', {
                method: 'POST',
                body: JSON.stringify({
                    name: this.state.wordName,
                    article: this.state.article.toLocaleLowerCase(),
                })
            })
                .then(res => res.json()).then(val => {
                    console.log(val);
                })
                .catch(reason => console.log(reason));
        };
    }


    render() {
        return <div className="row">
            <div className="card-panel col m6 offset-m3 s12">
                <form style={{ margin: "10px" }} className="row" action="#">
                    <ul className="col s6">
                        {
                            ["Der", "Die", "Das"].map(article => (
                                <li key={article}>
                                    <label>
                                        <input name="article" type="radio" onChange={this.generateHandleUpdateArticle(article)}
                                            checked={article === this.state.article} />
                                        <span>{article}</span>
                                    </label>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="col s6">
                        <input type="text" value={this.state.wordName} onChange={this.handleUpdateName} />
                        <button className="btn" onClick={this.handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        </div>;
    }
}
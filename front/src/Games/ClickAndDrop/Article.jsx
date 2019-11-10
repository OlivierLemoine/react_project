import React from 'react';

export default class Article extends React.Component {
    render() {
        return (<button className="waves-effect waves-light btn" id='ArticleID' onClick={() => this.props.onClick(this.props.article)}>{this.props.article}</button>);

    }
}

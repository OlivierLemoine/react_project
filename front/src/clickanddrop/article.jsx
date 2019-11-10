import React from 'react';

export default class Article extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {article : 'der'};
    }

    render() {
        return (<button class="waves-effect waves-light btn" id='ArticleID' onClick={() => this.props.onClick(this.props.article)}>{this.props.article}</button>);

    }
}

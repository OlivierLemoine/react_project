import React from 'react';
import Word from './word'

export default class Article extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {article : 'der'};
  }

  render() {
    return (<button id='ArticleID' onClick={()=>this.props.onClick(this.props.article)}>{this.props.article}</button>);

  }
}

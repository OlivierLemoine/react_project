import React from 'react';
import ListArticles from './ListArticles';
import Chrono from './chronometer'
import Word from './word'


export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Word : {},
      WordList : []
    }  //this.state = {article : 'der'};
  }

  verifArticle(ArticleChosen){
    if (this.state.Word.article == ArticleChosen){
      console.log('TRUC');
    }
  }

  render() {
    return (
      <div>
          <Word name={this.state.Word.Name}/>
          <Chrono/>
          <Article article={der}/>

      </div>
    );

  }
}
//

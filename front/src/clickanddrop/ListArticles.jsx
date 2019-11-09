import React from 'react';
import Article from './article';
import './styleclickanddrop.css'

export default class ListArticles extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Masc = 'Der';
    const Fem = 'Die';
    const Neutr = 'Das';

    return(
      <div>

      <div class="row">
      <div className="waves-effect waves-light btn-large blue col s2 offset-s2">
      <Article article = {Masc} /> </div>
      <div className="waves-effect waves-light btn-large blue center-align col s2 offset-s1">
      <Article article = {Fem} /> </div>
      <div className="waves-effect waves-light btn-large blue center-align col s2 offset-s1">
      <Article article = {Neutr} /> </div>
      </div>
      </div>
    )

  }
}

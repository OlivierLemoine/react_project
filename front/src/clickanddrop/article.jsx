import React from 'react';

export default class Article extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {article : 'der'};
  }

  render() {
    return (<a id='buttontext'  href='#'> {this.props.article}</a>);

  }
}

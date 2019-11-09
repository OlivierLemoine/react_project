import React from 'react';
import Menu from './menu';
import './burger.css'




export default class extends React.Component {
  constructor(props) {
    super(props);
    this.handleShowClick = this.handleShowClick.bind(this);
    this.handleHideClick = this.handleHideClick.bind(this);
    this.state = {
      isMenuShown: false
    };
  }

  handleShowClick() {

    this.setState({
      isMenuShown: true

    });

  }

  handleHideClick() {
    this.setState({
      isMenuShown: false
    });
  }

  render() {
    const isMenuShown = this.state.isMenuShown;

    return ( <
      div > {
        isMenuShown ? (
          <div className="side">
          <a href='#' className="large material-icons" onClick = {this.handleHideClick}>menu</a>
         <Menu/>
         </div>

        ) : (
          <div>
          <a href='#' className="large material-icons" onClick = {this.handleShowClick}>menu</a>
          </div>

        )
      }

      <
      /div>
    );
  }
}

import React from 'react';
import ReactDOM from 'react-dom';


export default class extends React.Component{
  constructor(){
    super();
  }
  render(){
    return (<div>

            <a className="waves-effect waves-light btn">Homepage</a><br/>
            <a className="waves-effect waves-light btn">Game A</a><br/>
            <a className="waves-effect waves-light btn">Game B</a><br/>
            <a className="waves-effect waves-light btn">Game C</a><br/>
             </div>

          );
  }
}

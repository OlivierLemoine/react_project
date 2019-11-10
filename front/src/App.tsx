import React from 'react';
import './App.css';
import AddWord from './AddWord/AddWord';
import DropWord from './Games/WordDrop/WordDrop';
// import Burger from "./Menu/Burger";
import Menu from "./Menu/Menu";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

export default class extends React.Component {
    render() {
        let list = [
            {
                name: "test",
                article: "der",
            }
        ];

        return (
            <Router>
                <div id="container">
                    <Menu />
                    <div className="content">
                        <Switch>
                            <Route path="/moon-defender">
                                <DropWord words={list} />
                            </Route>
                            <Route path="/add-word">
                                <AddWord />
                            </Route>
                            <Route path="/"></Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}
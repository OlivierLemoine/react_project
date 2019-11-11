import React from 'react';
import './App.css';

import About from "./About";
import Menu from "./Menu/Menu";
import AddWord from './HandleWord/AddWord';
import ShowWords from "./HandleWord/ShowWords";
import DropWord from './Games/WordDrop/WordDrop';
import ClickNDrop from "./Games/ClickAndDrop/Word";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

export default class extends React.Component {
    render() {
        return (
            <Router>
                <div id="container">
                    <Switch>
                        <Route path="/moon-defender">
                            <DropWord />
                        </Route>
                        <Route path="/click-n-drop">
                            <ClickNDrop />
                        </Route>
                        <Route path="/add-word">
                            <AddWord />
                        </Route>
                        <Route path="/show-words">
                            <ShowWords />
                        </Route>
                        <Route path="/">
                            <About />
                        </Route>
                    </Switch>
                    <Menu />
                </div>
            </Router>
        );
    }
}

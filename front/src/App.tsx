import React from 'react';
import './App.css';
import AddWord from './AddWord/AddWord';
import DropWord from './Games/WordDrop/WordDrop';
import ClickNDrop from "./ClickAndDrop/Word";
import Menu from "./Menu/Menu";
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
                        <Route path="/"></Route>
                    </Switch>
                    <Menu />
                </div>
            </Router>
        );
    }
}

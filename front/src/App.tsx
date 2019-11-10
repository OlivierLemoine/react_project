import React from 'react';
import './App.css';
import AddWord from './HandleWord/AddWord';
import DropWord from './Games/WordDrop/WordDrop';
import ClickNDrop from "./Games/ClickAndDrop/Word";
import ShowWords from "./HandleWord/ShowWords";
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
                        <Route path="/show-words">
                            <ShowWords />
                        </Route>
                        <Route path="/">
                            <img src="wip.jpg" alt="WIP" style={{
                                maxHeight: "100%",
                                maxWidth: "100%",
                            }} />
                        </Route>
                    </Switch>
                    <Menu />
                </div>
            </Router>
        );
    }
}

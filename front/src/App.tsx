import React from 'react';
import './App.css';
// import AddWord from './AddWord/AddWord';
import DropWord from './Games/WordDrop/WordDrop';
import Burger from "./Menu/Burger";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function App() {
    let list = [
        {
            name: "test",
            article: "der",
        }
    ];

    return (
        <Router>
            <div className="side-bar">
                <Burger />
            </div>
            <div className="content">
                <Switch>
                    <Route path="/moon-defender">
                        <DropWord words={list} />
                    </Route>
                    <Route path="/"></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

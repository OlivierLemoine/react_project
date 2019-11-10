import React from 'react';
import './App.css';
// import AddWord from './AddWord/AddWord';
// import DropWord from './Games/WordDrop/WordDrop';
import Burger from "./Menu/Burger";

function App() {
    return (
        <div>
            <Burger />
            {/* <DropWord words={[
                {
                    name: "test",
                    article: "der",
                }
            ]} /> */}
        </div>
    );
}

export default App;

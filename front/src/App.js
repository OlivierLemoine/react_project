import React from 'react';
import './App.css';
// import AddWord from './AddWord/AddWord';
import DropWord from './Games/WordDrop/WordDrop';

function App() {
    return (
        <div>
            <DropWord words={[
                {
                    name: "test",
                    article: "der",
                }
            ]} />
        </div>
    );
}

export default App;

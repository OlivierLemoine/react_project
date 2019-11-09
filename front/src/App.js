import React from 'react';
import './App.css';
import AddWord from './AddWord/AddWord';
import Waiting from './Waiting/Waiting';

function App() {
    return (
        <div>
            <Waiting onLoaded={} />
            <AddWord />
        </div>
    );
}

export default App;

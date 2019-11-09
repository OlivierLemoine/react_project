import React from 'react';
import './App.css';
import AddWord from './AddWord/AddWord';
import Waiting from './Fetch/GetAllWord';

function App() {
    return (
        <div>
            <Waiting onLoaded={(err, data) => {
                console.log(err, data);
            }} />
            <AddWord />
        </div>
    );
}

export default App;

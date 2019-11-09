import React from 'react';
import './App.css';
import Menu from './menu';
import Burger from './burger';
import ListArticles from './clickanddrop/ListArticles.jsx';
import Chrono from './clickanddrop/chronometer.jsx'



function App() {
    return (
        <div className="App">
            <header className="App-header">

        <Burger/>
        <Chrono/>

        <ListArticles/>




      </header>
    </div>
  );
}

export default App;

/*
<ListArticles/>
<burger/>
*/

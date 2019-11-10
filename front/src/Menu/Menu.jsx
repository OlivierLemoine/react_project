import React from 'react';
import './Burger.css'
import { Link } from 'react-router-dom';

export default class extends React.Component {
    render() {
        return (
            <div>
                <br />
                <Link to="/">About</Link><br /><br />
                <Link to="/">Game 1</Link><br />
                <Link to="/moon-defender">Moon Defender</Link><br /><br />
                <Link to="/">Add word</Link>
            </div>
        );
    }
}

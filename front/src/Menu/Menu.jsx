import React from 'react';
import './Menu.css'
import { Link } from 'react-router-dom';

export default class extends React.Component {
    render() {
        return (
            <div>
                <div className="menu show-on-large">
                    <ul>
                        <li>
                            <Link to="/">About</Link>
                        </li>
                        <br />
                        <li>
                            <Link to="/">Game 1</Link>
                        </li>
                        <li>
                            <Link to="/moon-defender">Moon Defender</Link>
                        </li>
                        <br />
                        <li>
                            <Link to="/add-word">Add word</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

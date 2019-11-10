import React from 'react';
import './Menu.css'
import { Link } from 'react-router-dom';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isHidden: true,
        };
    }

    flipMenuVisibility() {
        this.setState({ isHidden: !this.state.isHidden });
    }

    render() {
        return (
            <div>
                <div className={`menu ${this.state.isHidden ? "hidden-menu" : ""}`}>
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
                <div className="burger-button">
                    <a href='#!' className="medium material-icons" onClick={() => this.flipMenuVisibility()}>menu</a>
                </div>
            </div>
        );
    }
}

import React from 'react';
import './Menu.css'
import { Link } from 'react-router-dom';

type Props = {}

type State = {
    isHidden: boolean,
}

export default class extends React.Component<Props, State> {
    state: State = {
        isHidden: true,
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
                            <Link to="/click-n-drop">Click N Drop</Link>
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

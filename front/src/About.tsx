import React from "react";
import './About.css';

type Props = {}

type State = {}

export default class extends React.Component<Props, State>{
    render() {
        return (
            <div className="about-scene">
                <div className="cube cube-rotate">
                    <div className="cube-face cube-face--front"></div>
                    <div className="cube-face cube-face--back"></div>
                    <div className="cube-face cube-face--right"></div>
                    <div className="cube-face cube-face--left"></div>
                    <div className="cube-face cube-face--top"></div>
                    <div className="cube-face cube-face--bottom"></div>
                </div>
            </div>
        );
    }
}
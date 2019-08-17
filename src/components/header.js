import React, {Component} from "react";
import { Link } from 'react-scroll';
import ThreeColumns from "./three_columns";
import Registration from "./registration"

export default class Header extends Component {
    render() {
        return [
            <div className="main-image">
            </div>,

            <div>
                <div key="registration">
                    <Registration />
                </div>,

                <div className="wrapper">
                    <ul className="navigation" key="navigation">
                        <li>Start</li>
                        <li><Link to="simple_steps"> O co chodzi?</Link></li>
                        <li><Link to="about_us">O nas</Link></li>
                        <li><Link to="who_we_help">Fundacja i organizacje</Link></li>
                        <li><Link to="contact">Kontakt</Link></li>
                    </ul>
                </div>
            </div>,

            <div key="three columns">
                <ThreeColumns />
            </div>

        ];
    }
}


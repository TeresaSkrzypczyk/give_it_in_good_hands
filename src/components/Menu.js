import Registration from "./registration";
import React, {Component} from "react";
import {Link} from "react-scroll/modules";

class Menu extends Component {
    render() {
        return [
            <div className="col-12 header">
                <div className="registration" key="registration"><Registration />
                </div>
            </div>,

            <div className="col-12 header">
                <ul className="navigation" key="navigation">
                    <li>Start</li>
                    <li><Link to="simple_steps"> O co chodzi?</Link></li>
                    <li><Link to="about_us">O nas</Link></li>
                    <li><Link to="who_we_help">Fundacja i organizacje</Link></li>
                    <li><Link to="contact">Kontakt</Link></li>
                </ul>
            </div>
        ]
    }
}

export default Menu
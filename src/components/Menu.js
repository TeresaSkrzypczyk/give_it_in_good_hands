import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import Registration from "./registration";
import React, {Component} from "react";

class Menu extends Component {
    render() {
        return [
            <div className="col-12 header">
                <div className="registration" key="registration"><Registration />
                </div>
            </div>,

            <div className="col-12 header">
                <ul className="navigation" key="navigation">
                    <li key="start"><NavLink to="/">Start</NavLink></li>
                    <li key="simple"><Link to="simple_steps"> O co chodzi?</Link></li>
                    <li key="about"><Link to="about_us">O nas</Link></li>
                    <li key="who"><Link to="who_we_help">Fundacja i organizacje</Link></li>
                    <li key="end"><Link to="contact">Kontakt</Link></li>
                </ul>
            </div>
        ]
    }
}

export default Menu

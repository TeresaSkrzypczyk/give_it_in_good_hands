import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import Registration from "./Registration";
import React, {Component} from "react";

const options = {
    spy: true,
    smooth: true,
    duration: 500
}

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
                    <li key="simple"><Link to="simple_steps" { ...options }> O co chodzi?</Link></li>
                    <li key="about"><Link to="about_us" { ...options }>O nas</Link></li>
                    <li key="who"><Link to="who_we_help" { ...options }>Fundacja i organizacje</Link></li>
                    <li key="end"><Link to="contact" { ...options }>Kontakt</Link></li>
                </ul>
            </div>
        ]
    }
}

export default Menu

import React, {Component} from "react";
import { Link } from "react-router-dom";

class Registration extends Component {
    render() {
        return [
            <div className="wrapper">
                <ul className="registration">
                    <li><Link to="/log">Zaloguj</Link></li>
                    <li><Link to="/sign">Załóż konto</Link></li>
                </ul>
            </div>
        ]
    }
}

export default Registration;
import React, {Component} from "react";
import { Link} from "react-router-dom";

class Registration extends Component {
    render() {
        return [
            <div className="wrapper">
                <ul className="registration">
                    <li activeClass="active"><Link to="/logowanie">Zaloguj</Link></li>
                    <li activeClass="active"><Link to="/rejestracja">Załóż konto</Link></li>
                </ul>
            </div>
        ]
    }
}

export default Registration;
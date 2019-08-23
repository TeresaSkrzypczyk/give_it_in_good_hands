import React, {Component} from "react";
import { Link} from "react-router-dom";

class Registration extends Component {
    render() {
        return [
            <div className="wrapper">
                <Link to="/logowanie">Zaloguj</Link>
                <Link to="/rejestracja">Załóż konto</Link>
            </div>
        ]
    }
}

export default Registration;
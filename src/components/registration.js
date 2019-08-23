import React, {Component} from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import Log from "./Logowanie";
import Sign from "./Rejestracja";

class Registration extends Component {
    render() {
        return [
            <div className="wrapper">
                <Router>
                    <Link to="/logowanie">Zaloguj</Link>
                    <Link to="/rejestracja">Załóż konto</Link>
                    <Route exact path="/logowanie" component={Log} />
                    <Route exact path="/rejestracja" component={Sign} />
                </Router>
            </div>
        ]
    }
}

export default Registration;
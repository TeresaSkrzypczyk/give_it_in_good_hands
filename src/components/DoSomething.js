import React, {Component} from "react";
import { Link } from "react-router-dom";

class DoSomething extends Component {
    render() {
        return [
            <ul className="list-header">
                <li><Link to="/logowanie">ODDAJ<br />RZECZY</Link></li>
                <li><Link to="/logowanie">ZORGANIZUJ<br />ZBIÓRKĘ</Link></li>
            </ul>
        ]
    }
}

export default DoSomething;
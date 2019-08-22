import React, {Component} from "react";
import Menu from "./Menu";
import {Link} from "react-router-dom";

class LogOut extends Component {
    render() {
        return (
            <div className="wrapper-text">
                <div className="row">

                    <div className="col-12">
                        <Menu />
                    </div>

                    <div className="col-12 log">
                        <div className="col-4">
                        </div>
                        <div className="col-4 log-text">
                            <p className="text-steps" >Wylogowanie nastąpiło pomyślnie!</p>
                            <div className="decoration log-image">
                            </div>
                            <button className="btn end"><Link to="/">Strona główna</Link></button>
                        </div>

                        <div className="col-4">
                        </div>

                    </div>
                </div>
            </div>);
    }
}
export default LogOut
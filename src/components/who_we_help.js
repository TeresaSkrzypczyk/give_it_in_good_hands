import React, {Component} from "react";
import List from "./list";

class WhoWeHelp extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="row">

                    <div id="who_we_help" className="col-12" style={{border: "2px solid pink"}}>
                        <p className="text-steps">Komu pomagamy?</p>
                    </div>

                    <div className="col-12 image-decoration" style={{border: "2px solid yellow"}}>
                        <img src="../asstes/Decoration.svg" alt="decoration"/>
                    </div>

                    <List />

                </div>
            </div>
        );
    }
}

export default WhoWeHelp;
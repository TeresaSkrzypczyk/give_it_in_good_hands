import React, {Component} from "react";
import List from "./list";

class WhoWeHelp extends Component {
    render() {
        return (
            <div className="wrapper-text">
                <div className="row">

                    <div id="who_we_help" className="col-12">
                        <p className="text-steps">Komu pomagamy?</p>
                    </div>

                    <div className="decoration help">
                    </div>

                    <List />

                </div>
            </div>
        );
    }
}

export default WhoWeHelp;
import React, {Component} from "react";

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

                    <div className="col-12 organization" style={{border: "2px solid pink"}}>
                        <div className="col-3" style={{border: "2px solid green"}}>
                        Fundacjom</div>
                        <div className="col-3" style={{border: "2px solid green"}}>
                        Organizacjom<br />pozarządowym</div>
                        <div className="col-3" style={{border: "2px solid green"}}>
                        Lokalnym<br />zbiórkom</div>
                    </div>

                    <div className="col-12 organization" style={{border: "2px solid yellow"}}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed<br />do eiusmod tempor incididunt ut labore et dolore magna<br />aliqua. Ut enim ad minima veniam, quis nostrum exercitation.</p>
                    </div>

                </div>
            </div>
        );
    }
}

export default WhoWeHelp;
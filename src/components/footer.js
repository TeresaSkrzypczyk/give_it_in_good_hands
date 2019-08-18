import React, {Component} from "react";
import Form from "./form";

class Footer extends Component {
    render() {
        return [

            <div className="wrapper">
                <div className="row">

                    <div id="contact" className="col-7" style={{border: "1px solid pink"}}>
                    </div>

                    <div className="col-5">
                        <div  className="col-12">
                            <p className="text-steps">Skontaktuj się z nami</p>
                        </div>

                        <div className="col-12 image-decoration" style={{border: "2px solid yellow"}}>
                            <img src="../asstes/Decoration.svg" alt="decoration"/>
                        </div>

                        <div>
                            <Form />
                        </div>
                    </div>

                    <div className="col-12">
                        <p className="copyright">Copyright by Coders Lab</p>
                    </div>

                </div>
            </div>
            ]
    }
}

export default Footer;
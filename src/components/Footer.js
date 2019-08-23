import React, {Component} from "react";
import Form from "./form";
// import Log from "./Logowanie";
// import Sign from "./Rejestracja";
// import LogOut from "./LogOut";

class Footer extends Component {
    render() {
        return [

            <div className="wrapper-image contact">
            <div className="wrapper-text fix">
                <div className="row">

                    <div id="contact" className="col-7">
                        <div className="col-12">
                        <p className="copyright">Copyright by Coders Lab</p>
                    </div>
                    </div>

                    <div className="col-5 footer">
                        <div  className="col-12">
                            <p className="text-steps">Skontaktuj się z nami</p>
                        </div>

                        <div className="decoration last">
                        </div>

                        <div>
                            <Form />
                        </div>

                        <div className="media">
                            <div className="facebook">
                            </div>
                            <div className="instagram">
                            </div>
                        </div>

                    </div>



                </div>
            </div>
            </div>
            ]
    }
}

export default Footer;
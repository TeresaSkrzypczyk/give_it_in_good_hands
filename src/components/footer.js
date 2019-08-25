import React, {Component} from "react";
import Form from "./form";

class Footer extends Component {
    render() {
        return [
            <div id="contact" style={{
                weight: '100px',
                height: '400px',
                backgroundColor: 'yellow'
            }}>
                <div key="form">
                    <Form />
                </div>
                <p>TEST</p>
            </div>
            ]
    }
}

export default Footer;
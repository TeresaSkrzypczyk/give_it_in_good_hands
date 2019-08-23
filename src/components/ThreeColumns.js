import React, {Component} from "react";

class ThreeColumns extends Component {
    render() {
        return (
            <div className="wrapper-text">
            <div className="row">
                <div className="col-4 three-columns">
                    <h1>10</h1>
                    <h3>ODDANYCH WORKÓW</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc<br />Pellentesque velenim a elit viverra elementuma.<br />Aliquam erat volutpat.</p>
                </div>
                <div className="col-4 three-columns">
                    <h1>5</h1>
                    <h3>WSPARTYCH ORGANIZACJI</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc<br />Pellentesque velenim a elit viverra elementuma.<br />Aliquam erat volutpat.</p>
                </div>
                <div className="col-4 three-columns">
                    <h1>7</h1>
                    <h3>ZORGANIZOWANYCH ZBIÓREK</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc<br />Pellentesque velenim a elit viverra elementuma.<br />Aliquam erat volutpat.</p>
                </div>
            </div>
            </div>
        );
    }
}

export default ThreeColumns;
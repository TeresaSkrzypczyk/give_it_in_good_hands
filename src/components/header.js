import React, {Component} from "react";
import { Link } from 'react-scroll';
import ThreeColumns from "./three_columns";
import Registration from "./registration"

export default class Header extends Component {
    render() {
        return [
            <div className="wrapper">
                <div className="row">

                    <div className="col-5">
                        <div className="image-header" style={{border: "2px solid yellow"}}>
                            <img src="../asstes/Home-Hero-Image.jpg" />
                        </div>
                    </div>

                    <div className="col-7">


                            <div className="col-12 header">
                                <div className="registration" key="registration"><Registration />
                                </div>
                            </div>

                            <div className="col-12 header">
                                <ul className="navigation" key="navigation">
                                    <li>Start</li>
                                    <li><Link to="simple_steps"> O co chodzi?</Link></li>
                                    <li><Link to="about_us">O nas</Link></li>
                                    <li><Link to="who_we_help">Fundacja i organizacje</Link></li>
                                    <li><Link to="contact">Kontakt</Link></li>
                                </ul>
                            </div>



                            <div className="col-12">
                                <p className="text-header">Zacznij pomagać!<br />Oddaj niechciane rzeczy w zaufane ręce</p>
                            </div>

                            <div className="col-12 image-decoration" style={{border: "2px solid yellow"}}>
                                <img src="../asstes/Decoration.svg" />
                            </div>

                            <div className="col-12">
                                <ul className="list-header">
                                    <li>ODDAJ<br />RZECZY</li>
                                    <li>ZORGANIZUJ<br />ZBIÓRKĘ</li>
                                </ul>
                            </div>

                    </div>
                </div>
            </div>,

            <div key="three columns" className="wrapper three">
                <ThreeColumns />
            </div>

        ];
    }
}


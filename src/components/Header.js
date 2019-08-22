import React, {Component} from "react";
//import { Link } from 'react-scroll';
import ThreeColumns from "./ThreeColumns";
//import Registration from "./registration"
import DoSomething from "./DoSomething";
import Menu from "./Menu";

export default class Header extends Component {
    render() {
        return [
            <div className="wrapper-image header-hero">
                <div className="wrapper-text">
                <div className="row">

                    <div className="col-5">
                        <div>
                        </div>
                    </div>

                    <div className="col-7">

                            <Menu />

                            <div className="col-12">
                                <p className="text-header main">Zacznij pomagać!<br />Oddaj niechciane rzeczy w zaufane ręce</p>
                            </div>

                            <div className="decoration">
                            </div>

                            <div className="col-12">
                                <DoSomething />
                            </div>

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


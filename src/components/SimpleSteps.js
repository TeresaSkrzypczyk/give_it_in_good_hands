import React, {Component} from "react";
import {Link} from "react-router-dom";

class SimpleSteps extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="row">

                    <div id="simple_steps" className="col-12">
                        <p className="text-steps">Wystarczą 4 proste kroki</p>
                    </div>

                    <div className="decoration steps">
                    </div>

                    <div className="col-12 grey">
                        <div className="col-3">
                            <div className="icon-1">
                            </div>
                            <p>Wybierz rzeczy</p><hr />
                            <p className="special-small">urania, zabawki<br />sprzęt i inne</p>
                        </div>
                        <div className="col-3">
                            <div className="icon-2">
                            </div>
                            <p>Spakuj je</p><hr />
                            <p className="special-small">skorzystaj z<br />worków na śmieci</p>
                        </div>
                        <div className="col-3">
                            <div className="icon-3">
                            </div>
                            <p>Zdecyduj komu<br />chcesz pomów</p><hr />
                            <p className="special-small">wybierz zaufane<br />miejsce</p>
                        </div>
                        <div className="col-3">
                            <div className="icon-4">
                            </div>
                            <p>Zamów kuriera</p><hr />
                            <p className="special-small">kurier przyjedzie<br />w dogodnym terminie</p>
                        </div>
                    </div>

                    <div className="col-12">
                        <ul className="list-header steps">
                            <li key="return"><Link to="/log">ODDAJ<br />RZECZY</Link></li>
                        </ul>
                    </div>

                </div>
            </div>

        );
    }
}

export default SimpleSteps;
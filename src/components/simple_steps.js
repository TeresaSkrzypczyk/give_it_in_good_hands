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

                    <div className="col-12 image-decoration" style={{border: "2px solid yellow"}}>
                        <img src="asstes/Decoration.svg" />
                    </div>

                    <div className="col-12 grey">
                        <div className="col-3">
                            <p>Wybierz rzeczy</p><hr />
                            <p className="special-small">urania, zabawki<br />sprzęt i inne</p>
                        </div>
                        <div className="col-3">
                            <p>Spakuj je</p><hr />
                            <p className="special-small">skorzystaj z<br />worków na śmieci</p>
                        </div>
                        <div className="col-3">
                            <p>Zdecyduj komu<br />chcesz pomów</p><hr />
                            <p className="special-small">wybierz zaufane<br />miejsce</p>
                        </div>
                        <div className="col-3">
                            <p>Zamów kuriera</p><hr />
                            <p className="special-small">kurier przyjedzie<br />w dogodnym terminie</p>
                        </div>
                    </div>

                    <div className="col-12">
                        <ul className="list-header">
                            <li key="return"><Link to="/log">ODDAJ<br />RZECZY</Link></li>
                        </ul>
                    </div>

                </div>
            </div>

        );
    }
}

export default SimpleSteps;
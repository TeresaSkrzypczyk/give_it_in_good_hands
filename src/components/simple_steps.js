import React, {Component} from "react";

class SimpleSteps extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="row">

                    <div id="simple_steps" className="col-12">
                        <p className="text-steps">Wystarczą 4 proste kroki</p>
                    </div>

                    <div className="col-12 image-decoration" style={{border: "2px solid yellow"}}>
                        <img src="../asstes/Decoration.svg" />
                    </div>

                    <div className="col-12 gris" style={{backgroundColor: "gris"}}>
                        <div className="col-3" style={{border: "1px solid pink"}}>
                            <p>Wybierz rzeczy</p><hr />
                            <p className="special-small">urania, zabawki<br />sprzęt i inne</p>
                        </div>
                        <div className="col-3" style={{border: "1px solid pink"}}>
                            <p>Spakuj je</p><hr />
                            <p className="special-small">skorzystaj z<br />worków na śmieci</p>
                        </div>
                        <div className="col-3" style={{border: "1px solid pink"}}>
                            <p>Zdecyduj komu<br />chcesz pomów</p><hr />
                            <p className="special-small">wybierz zaufane<br />miejsce</p>
                        </div>
                        <div className="col-3" style={{border: "1px solid pink"}}>
                            <p>Zamów kuriera</p><hr />
                            <p className="special-small">kurier przyjedzie<br />w dogodnym terminie</p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default SimpleSteps;
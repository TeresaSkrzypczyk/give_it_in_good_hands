import React, {Component} from "react";

class AboutUs extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="row">


                    <div id="about_us" className="col-6">
                        <div  className="col-12">
                            <p className="text-steps">O nas</p>
                        </div>

                        <div className="col-12 image-decoration" style={{border: "2px solid yellow"}}>
                            <img src="../asstes/Decoration.svg" alt="decoration"/>
                        </div>

                        <div className="col-12">
                            <p className="about-us">Nori grape silver beet broccoli kombu beet<br />greens fava bean potato quandong celery. Bunya<br />nuts black-eyenpea prairie turnip leek lentil<br />turnip greens parsnip.</p>
                        </div>

                        <div className="col-12 image-decoration" style={{border: "2px solid yellow"}}>
                        </div>
                    </div>

                    <div className="col-6" style={{border: "1px solid pink"}}>
                    </div>

                </div>
            </div>
        );
    }
}

export default AboutUs;
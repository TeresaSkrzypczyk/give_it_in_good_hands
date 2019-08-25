import React from "react";
import Header from "./header"
import Footer from "./footer";
import SimpleSteps from "./simple_steps";
import AboutUs from "./about_us";
import WhoWeHelp from "./who_we_help";

const Home = () => (
    <>
        <Header />
        <SimpleSteps />
        <AboutUs />
        <WhoWeHelp />
        <Footer />
    </>
);

export default Home;
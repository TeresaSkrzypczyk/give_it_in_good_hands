import React from "react";
import Header from "./Header"
import Footer from "./footer";
import SimpleSteps from "./SimpleSteps";
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
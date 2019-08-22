import React from "react";
import Header from "./Header"
import Footer from "./footer";
import SimpleSteps from "./SimpleSteps";
import AboutUs from "./AboutUs";
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
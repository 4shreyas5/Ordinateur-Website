import React from "react";
import SiteHeader from "../components/SiteHeader";
import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";
import AboutUs from "../components/AboutUs";
import Wings from "../components/Wings";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";

function HomePage(){
    return(
        <div className="bg-black overflow-hidden">
            <SiteHeader />
            <NavBar />
            <Carousel/>
            <AboutUs/>
            <hr></hr>
            <Wings/>
            <Sponsors/>
            <Footer/>
        </div>
    )
}
export default HomePage;
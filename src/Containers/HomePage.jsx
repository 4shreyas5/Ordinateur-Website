import React from "react";
import SiteHeader from "../Components/SiteHeader";
import NavBar from "../Components/NavBar";
import Carousel from "../Components/Carousel";
import AboutUs from "../Components/AboutUs";
import Wings from "../Components/Wings";
import Sponsors from "../Components/Sponsors";
import Footer from "../Components/Footer";

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
import React from "react";
import SiteHeader from "../Components/home/SiteHeader";
import NavBar from "../Components/NavBar";
import Carousel from "../Components/home/Carousel";
import AboutUs from "../Components/home/AboutUs";
import Wings from "../Components/home/Wings";
import Sponsors from "../Components/home/Sponsors";
import Footer from "../Components/home/Footer";

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
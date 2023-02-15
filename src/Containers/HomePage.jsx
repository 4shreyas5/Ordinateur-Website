import React from "react";
import SiteHeader from "../Components/SiteHeader";
import NavBar from "../Components/NavBar";
import Carousel from "../Components/Carousel";

function HomePage(){
    return(
        <div>
            <SiteHeader />
            <NavBar />
            <Carousel/>
        </div>
    )
}
export default HomePage;
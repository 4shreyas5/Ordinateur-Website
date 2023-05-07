import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        // autoplaySpeed: 100
      };
      
      const images = [
        { src: "https://www.hansrajcollege.ac.in/assets/front/images/campus.jpg" },
        { src: "https://www.hansrajcollege.ac.in/assets/front/images/banner-img7.jpg" },
        { src: "https://www.hansrajcollege.ac.in/assets/front/images/campus.jpg" },
        { src: "https://www.hansrajcollege.ac.in/assets/front/images/banner-img7.jpg"}
      ];
      
    return(
        <div className="bg bg-black">
            <Slider {...settings}>
  {images.map((image) => (
    <div>
      <img src={image.src} alt="carousel" className="block w-full"/>
    </div>
  ))}
</Slider>

        </div>
    )
}
export default Carousel
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
      };
      
      const images = [
        { src: "/images/IMG_1C.jpg" },
        { src: "/images/IMG_2C.jpg" },
        { src: "/images/WIMGC.jpg"}
      ];
      
    return(
        <div className="bg bg-black">
            <Slider {...settings}>
  {images.map((image) => (
    <div>
      <img src={image.src} alt="carousel" className="block resize-x"/>
    </div>
  ))}
</Slider>

        </div>
    )
}
export default Carousel
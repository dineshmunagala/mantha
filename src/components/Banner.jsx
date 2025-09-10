import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../assets/herobanner.jpg";
import banner2 from "../assets/banner2.jpeg";
import banner3 from "../assets/bannner1.jpeg";




function Banner() {
  const settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,

  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
         <img src={banner1} alt="" className="bannerimages"/>
        </div>
        <div>
            <img src={banner2} alt="" className="bannerimages"/>
        </div>
        <div>
          <img src={banner3} alt="" className="bannerimages"/>
        </div>
      </Slider>
    </div>
  );
}

export default Banner;

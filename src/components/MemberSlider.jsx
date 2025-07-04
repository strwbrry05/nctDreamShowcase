import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GoDotFill } from "react-icons/go";

import slide1 from "../assets/images/lightMode/slide1.png";
import slide2 from "../assets/images/lightMode/slide2.png";
import slide3 from "../assets/images/lightMode/slide3.png";
import slide4 from "../assets/images/lightMode/slide4.png";
import slide5 from "../assets/images/lightMode/slide5.png";

const MemberSlider = (props) => {
  var settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    focusOnSelect: true,
    variableWidth: true,
  };
  return (
    <div
      className={`slider-container ${props.scrollColor} 
      shadow-[0px_2px_7px_rgba(0,0,0,0.75)]
      w-[80%] lg:w-[95%] xl:w-[90%] m-auto`}
    >
      <Slider
        {...settings}
        className={`${props.scrollColor}  m-auto 
        h-[200px] w-[80%]
        lg:w-[90%]
        lg:h-[180px] xl:h-[200px]`}
      >
        <div>
          <img src={slide1} alt="" className="h-[150px] m-[1em]" />
        </div>
        <div>
          <img src={slide2} alt="" className="h-[150px] m-[1em]" />
        </div>
        <div>
          <img src={slide3} alt="" className="h-[150px] m-[1em]" />
        </div>
        <div>
          <img src={slide4} alt="" className="h-[150px] m-[1em]" />
        </div>
        <div>
          <img src={slide5} alt="" className="h-[150px] m-[1em]" />
        </div>
      </Slider>
    </div>
  );
};

export default MemberSlider;

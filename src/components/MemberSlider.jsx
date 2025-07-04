import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
        {props.slides.map((slide) => {
          return (
            <div key={slide.id}>
              <img
                className="h-[150px] m-[1em]"
                src={slide.src}
                alt={slide.alt}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default MemberSlider;

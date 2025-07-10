import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import album1 from "../assets/images/albums/album1.png";
import album2 from "../assets/images/albums/album2.png";
import album3 from "../assets/images/albums/album3.png";
import album4 from "../assets/images/albums/album4.png";
import album5 from "../assets/images/albums/album5.png";
import album6 from "../assets/images/albums/album6.png";
import album7 from "../assets/images/albums/album7.png";
import album8 from "../assets/images/albums/album8.png";
import album9 from "../assets/images/albums/album9.png";
import album10 from "../assets/images/albums/album10.png";
import album11 from "../assets/images/albums/album11.png";
import album12 from "../assets/images/albums/album12.png";
import album13 from "../assets/images/albums/album13.png";
import album14 from "../assets/images/albums/album14.png";
import album15 from "../assets/images/albums/album15.png";
import album16 from "../assets/images/albums/album16.png";
import album17 from "../assets/images/albums/album17.png";
import album18 from "../assets/images/albums/album18.png";
import album19 from "../assets/images/albums/album19.png";
import album20 from "../assets/images/albums/album20.png";
import album21 from "../assets/images/albums/album21.png";
import album22 from "../assets/images/albums/album22.png";
import album23 from "../assets/images/albums/album23.png";
import album24 from "../assets/images/albums/album24.png";

const Albums = (props) => {
  const albums = [
    {
      id: 1,
      src: album1,
      alt: "chewing gum",
    },
    {
      id: 2,
      src: album2,
      alt: "the first",
    },
    {
      id: 3,
      src: album3,
      alt: "we young",
    },
    {
      id: 4,
      src: album4,
      alt: "joy",
    },
    {
      id: 5,
      src: album5,
      alt: "we go up",
    },
    {
      id: 6,
      src: album6,
      alt: "dont need your love",
    },
    {
      id: 7,
      src: album7,
      alt: "the dream show",
    },
    {
      id: 8,
      src: album8,
      alt: "we boom",
    },
    {
      id: 9,
      src: album9,
      alt: "the dream",
    },
    {
      id: 10,
      src: album10,
      alt: "reload",
    },
    {
      id: 11,
      src: album11,
      alt: "iScream Vol.2: Ridin' (remixes)",
    },
    {
      id: 12,
      src: album12,
      alt: "hot sauce",
    },
    {
      id: 13,
      src: album13,
      alt: "iScream Vol.9 (hot sauce) remixes",
    },
    {
      id: 14,
      src: album14,
      alt: "hello future",
    },
    {
      id: 15,
      src: album15,
      alt: "glitch mode",
    },
    {
      id: 16,
      src: album16,
      alt: "beatbox",
    },
    {
      id: 17,
      src: album17,
      alt: "candy",
    },
    {
      id: 18,
      src: album18,
      alt: "best friend ever",
    },
    {
      id: 19,
      src: album19,
      alt: "istj",
    },
    {
      id: 20,
      src: album20,
      alt: "dream scape",
    },
    {
      id: 21,
      src: album21,
      alt: "iscream vol.31 (smoothie) remix",
    },
    {
      id: 22,
      src: album22,
      alt: "moonlight",
    },
    {
      id: 23,
      src: album23,
      alt: "dreamscape",
    },
    {
      id: 24,
      src: album24,
      alt: "go back to the future",
    },
  ];
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    speed: 3000,
    arrows: true,
    centerMode: true,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
  };

  const handleClick = (id) => {
    console.log(id);
  };

  return (
    <div
      className={`slider-container w-[89%] 
        m-auto pb-[5em] pt-[3em] ${
          props.isDark ? "bg-(--color-dark-blue)" : "bg-(--color-white)"
        } `}
    >
      <Slider
        {...settings}
        className={`m-auto  
        h-[325px]`}
      >
        {albums.map((album) => {
          return (
            <div key={album.id} className="m-[1em]">
              <a target="_blank">
                <img
                  src={album.src}
                  alt={album.alt}
                  onClick={() => handleClick(album.id)}
                />
              </a>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Albums;

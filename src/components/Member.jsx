import React, { useEffect, useState } from "react";
import lm_renjunFull from "../assets/images/lightMode/lm_renjunFull.png";
import dm_renjunFull from "../assets/images/darkMode/dm_renjunFull.png";

const Member = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [windowWidth]);

  return (
    <div className="pb-[3em]">
      <div
        className="grid grid-cols-6 grid-rows-6
      lg:hidden
      w-[480px] m-auto"
      >
        <h2
          className="col-start-1 col-end-7 row-start-1 row-end-3 justify-self-end uppercase z-2
            mr-[0.25em] mb-[1em] self-center
          font-(family-name:--font-solid) text-[5rem] text-(--color-white) text-shadow-[4px_6px_0px_rgb(0,0,0,1)]"
        >
          Renjun
        </h2>
        <img
          src={props.isDark ? dm_renjunFull : lm_renjunFull}
          alt="light mode renjun"
          className={`z-2 col-start-1 col-end-7 row-start-2 row-end-6
          self-center justify-self-center
          ${props.isDark ? "w-[300px]" : "w-[350px]"}`}
        />
        <div
          className="col-start-1 col-end-7 row-start-6 row-end-7 self-start mt-[1em]
        flex justify-evenly font-(family-name:--font-text)"
        >
          <p>Month 00 2000</p>
          <p>SIGN</p> <p>Blood Type</p>
        </div>
        <div
          className="z-1 col-start-1 col-end-7 row-start-1 row-end-6
        flex justify-end"
        >
          <div className=" member_mobileTopRightTriangle"></div>
        </div>
      </div>
      <div className="w-[480px] m-auto lg:hidden">
        <p className="w-[90%] m-auto font-(family-name:--font-text) mb-[1.5em]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
          pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
          tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos.
        </p>
        <div className="w-[90%] h-[200px] bg-(--color-red) m-auto opacity-[70%]"></div>
      </div>

      <div className="hidden lg:block lg:w-[950px] xl:w-[1200px] m-auto">
        <div className="grid grid-cols-12 grid-rows-12 xl:grid-rows-10">
          <h2
            className="z-2 col-start-1 col-end-7 row-start-1 row-end-3 ml-[0.25em]
          uppercase text-(--color-red) font-(family-name:--font-solid) 
          text-[6.5rem] text-shadow-[4px_6px_0px_rgb(0,0,0,0.9)] tracking-wider
          
          xl:text-[7rem] xl:tracking-widest xl:ml-[0.45em]"
          >
            renjun
          </h2>
          <img
            src={props.isDark ? dm_renjunFull : lm_renjunFull}
            alt=""
            className={`z-2 col-start-7 col-end-13 row-start-2 row-end-10
            justify-self-start self-center xl:justify-self-center
            ${props.isDark ? "w-[380px]" : "w-[500px]"}
            
            xl:row-start-1 xl:row-end-9`}
          />
          <div
            className="z-2 col-start-1 col-end-7 row-start-3 row-end-4 self-center mr-[5em]
        flex justify-evenly font-(family-name:--font-text) font-bold
        
        xl:row-start-2 xl:mr-[7em]"
          >
            <p>Month 00 2000</p>
            <p>SIGN</p> <p>Blood Type</p>
          </div>
          <p
            className="z-2 col-start-1 col-end-7 row-start-4 row-end-10 
          font-(family-name:--font-text) text-[1.15rem] w-[90%] leading-9
          justify-self-center self-center
          
          xl:w-[80%] xl:self-center xl:text-[1.05rem]
          xl:row-start-3 xl:row-end-9 xl:col-end-8 xl:mb-[4em]"
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
            Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
            hendrerit semper vel class aptent taciti sociosqu. Ad litora
            torquent per conubia nostra inceptos himenaeos. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor.
          </p>
          <div
            className={`z-1 ${
              windowWidth >= 1280
                ? "member_fullTopRightTriangle"
                : "member_desktopTopRightTriangle"
            }
          col-start-6 col-end-13 row-start-1 row-end-13
          xl:row-end-11`}
          ></div>
          <div
            className="z-2 col-start-1 col-end-11 row-start-10 row-end-13
          w-[95%] h-[200px] bg-(--color-red) m-auto opacity-[70%]
          
          xl:row-start-8 xl:row-end-11 xl:h-[225px] xl:w-[90%]"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Member;

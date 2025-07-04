import React from "react";
import Slider from "react-slick";
import MemberSlider from "./MemberSlider";

const Member = (props) => {
  return (
    <div className="pt-[1.25em] pb-[1.5em]">
      <div
        className="grid grid-cols-6 grid-rows-6
      lg:hidden
      w-full sm:w-[440px] m-auto"
      >
        <h2
          className="col-start-1 col-end-7 row-start-1 row-end-3 justify-self-end uppercase z-2
        mr-[0.25em] mb-[1em] self-center
        font-(family-name:--font-solid) text-[5rem] text-(--color-white) text-shadow-[4px_6px_0px_rgb(0,0,0,1)]"
        >
          {props.name}
        </h2>
        <img
          src={props.IMG}
          alt={props.name}
          className={`z-2 col-start-1 col-end-7 row-start-2 row-end-6
          self-center justify-self-center
          ${props.mobileW}`}
        />
        <div
          className="col-start-1 col-end-7 row-start-6 row-end-7 self-start mt-[1em]
        flex justify-evenly font-(family-name:--font-text) font-bold"
        >
          <p>{props.birthday}</p>
          <p>{props.zodiac}</p> <p>{props.blood}</p>
        </div>
        <div
          className="z-1 col-start-1 col-end-7 row-start-1 row-end-6
        flex justify-end"
        >
          <div className={props.mobileT}></div>
        </div>
      </div>
      <div className="w-full sm:w-[440px] m-auto lg:hidden">
        <p className="w-[90%] m-auto font-(family-name:--font-text) mb-[1.5em]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
          pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
          tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos.
        </p>
        <div className={`m-auto`}>
          <MemberSlider scrollColor={props.scrollColor} />
        </div>
      </div>

      <div className="hidden lg:block lg:w-[950px] xl:w-[1200px] m-auto">
        <div className="grid grid-cols-12 grid-rows-12 xl:grid-rows-9">
          <h2
            className={`z-2 
          uppercase ${props.color} font-(family-name:--font-solid) 
          text-[5.5rem] text-shadow-[4px_6px_0px_rgb(0,0,0,0.9)] tracking-wider
          ${props.nameStyles}`}
          >
            {props.name}
          </h2>
          <img
            src={props.IMG}
            alt=""
            className={`z-2 ${props.imgStyles}
            ${props.fullW}`}
          />
          <div
            className={`z-2 ${props.bioStyles}
            font-(family-name:--font-text) font-bold`}
          >
            <p>{props.birthday}</p>
            <p>{props.zodiac}</p> <p>{props.blood}</p>
          </div>
          <p
            className={`z-2 ${props.blurbStyles} 
          font-(family-name:--font-text) leading-8`}
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
            className={`z-1 ${props.triangleStyles}
          
          `}
          ></div>
          <div
            className={`z-2 ${props.scrollStyles} 
          `}
          >
            <MemberSlider scrollColor={props.scrollColor} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;

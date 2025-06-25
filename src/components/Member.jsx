import React from "react";
import lm_renjunFull from "../assets/images/lightMode/lm_renjunFull.png";

const Member = () => {
  return (
    <div className="pb-[3em]">
      <div
        className="grid grid-cols-6 grid-rows-6
      
      w-[480px] m-auto md:bg-blue-200 lg:bg-blue-400"
      >
        <h2
          className="col-start-1 col-end-7 row-start-1 row-end-3 justify-self-end uppercase z-2
            mr-[0.25em] mb-[1em] self-center
          font-(family-name:--font-solid) text-[5rem] text-(--color-white) text-shadow-[4px_6px_0px_rgb(0,0,0,1)]"
        >
          Renjun
        </h2>
        <img
          src={lm_renjunFull}
          alt="light mode renjun"
          className="z-2 col-start-1 col-end-7 row-start-2 row-end-6
          w-[350px] self-center justify-self-center"
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
      <div className="w-[480px] m-auto">
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
    </div>
  );
};

export default Member;

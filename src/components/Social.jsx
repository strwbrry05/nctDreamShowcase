import React from "react";

const Social = (props) => {
  return (
    <div
      className="flex justify-baseline items-center pl-[2.5em]
    bg-(--color-black) w-[200px] h-[50px] font-(family-name:--font-text) font-semibold
    rounded-[7px] mb-[2em] opacity-[70%] hover:opacity-[100%] cursor-pointer"
    >
      <div className="text-(--color-white) text-[1.5rem] mr-[0.75em]">
        {props.icon}
      </div>
      <p className="text-(--color-white)">{props.name}</p>
    </div>
  );
};

export default Social;

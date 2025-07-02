import React from "react";

const Social = (props) => {
  return (
    <div
      className="flex justify-baseline items-center 
    bg-(--color-black)  font-(family-name:--font-text) font-semibold
    rounded-[7px] mb-[2em] opacity-[70%] hover:opacity-[100%] cursor-pointer
    
    w-[250px] h-[50px] pl-[4em]
    sm:w-[300px] sm:h-[55px] sm:pl-[5.5em]
    lg:w-[350px] lg:pl-[7em]"
    >
      <div className="text-(--color-white) text-[1.5rem] mr-[0.75em]">
        {props.icon}
      </div>
      <p className="text-(--color-white) sm:text-[1.25rem]">{props.name}</p>
    </div>
  );
};

export default Social;

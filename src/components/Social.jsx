import React from "react";

const Social = (props) => {
  return (
    <div
      className={`flex justify-baseline items-center 
      font-(family-name:--font-text) font-semibold
    rounded-[7px] mb-[2em] hover:opacity-[100%] cursor-pointer

    ${
      props.isDark
        ? "bg-(--color-dark-gray) opacity-[80%] hover:bg-(--color-gray) hover:text-(--color-black) hover:font-bold"
        : "bg-(--color-black) opacity-[70%] text-(--color-white)"
    }

    
    w-[250px] h-[50px] pl-[4em]
    sm:w-[300px] sm:h-[55px] sm:pl-[5.5em]
    lg:w-[350px] lg:pl-[7em]`}
    >
      <div className="text-[1.5rem] mr-[0.75em]">{props.icon}</div>
      <p className="sm:text-[1.25rem]">{props.name}</p>
    </div>
  );
};

export default Social;

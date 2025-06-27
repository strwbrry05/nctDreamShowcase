import React from "react";
import { WiDaySunny } from "react-icons/wi";
import { MdOutlineNightlight } from "react-icons/md";

const DayNight = (props) => {
  return (
    <div className="p-5 flex justify-center cursor-pointer">
      <div
        className={`${
          props.isDark ? "bg-(--color-gray)" : "bg-(--color-dark-gray)"
        } flex items-center justify-center w-[120px] h-[40px]
        rounded-[3rem] `}
      >
        <WiDaySunny
          className={`text-[2rem] h-[30px] stroke-[0.5px] text-(--color-black)
              ${
                props.isDark
                  ? "text-(--color-black) ml-[0.5em]"
                  : "bg-(--color-yellow) rounded-[30px] w-[55px] mr-[0.25em]"
              }`}
          onClick={props.toggleLight}
        />
        <MdOutlineNightlight
          className={`text-[1.75rem] h-[30px] text-(--color-white) ${
            props.isDark
              ? "bg-(--color-dark-blue) rounded-[15px] w-[55px] ml-[0.25em] "
              : "text-(--color-gray) mr-[0.5em]"
          }`}
          onClick={props.toggleDark}
        />
      </div>
    </div>
  );
};

export default DayNight;

import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import NavBurger from "./NavBurger";

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div
        className="flex justify-center items-center
      sticky z-5 bg-(--color-black) h-[75px] shadow-[0_3px_3px_rgba(0,0,0,0.5)]"
      >
        <div
          className="flex justify-center md:justify-evenly items-center 
        xl:text-center xl:w-[1200px]"
        >
          <button className="cursor-pointer md:hidden">
            <HiMenu
              className={`text-(--color-white) text-[2.5rem] mr-[1em] ${
                isActive
                  ? "rotate-90 transition-all duration-300 ease-in"
                  : "rotate-[-90] transition-all duration-300 ease-in"
              }`}
              onClick={handleClick}
            />
          </button>

          <div
            className="hidden md:block mt-[0.75em]
        font-(family-name:--font-text) font-light text-(--color-gray)"
          >
            <ul className="flex justify-center place-self-center ">
              <li
                className="mb-[1em] cursor-pointer hover:font-semibold 
            hover:text-(--color-white) hover:scale-110 ml-[1em] "
              >
                Home
              </li>
              <li
                className="mb-[1em] cursor-pointer hover:font-semibold 
            hover:text-(--color-white) hover:scale-110 ml-[2em]
            
            lg:ml-[4em] xl:ml-[6em]"
              >
                Members
              </li>
              <li
                className="mb-[1em] cursor-pointer hover:font-semibold 
            hover:text-(--color-white) hover:scale-110 ml-[2em] mr-[2em]
            
            lg:ml-[4em] lg:mr-[4em] xl:ml-[6em] xl:mr-[6em]"
              >
                Discography
              </li>
            </ul>
          </div>

          <h1
            className="
          cursor-pointer text-center mr-[2em] md:mr-[0]
        text-(--color-white) font-(family-name:--font-title) 
      font-black text-[2rem] leading-[0.75]"
          >
            Beat <br /> Box
          </h1>

          <div
            className="hidden md:block mt-[0.75em]
        font-(family-name:--font-text) font-light text-(--color-gray)"
          >
            <ul className="flex">
              <li
                className="mb-[1em] cursor-pointer hover:font-semibold 
            hover:text-(--color-white) hover:scale-110 ml-[2em]
            
            lg:ml-[4em] xl:ml-[6em]"
              >
                Photocards
              </li>
              <li
                className="mb-[1em] cursor-pointer hover:font-semibold 
            hover:text-(--color-white) hover:scale-110 ml-[2em]
            
            lg:ml-[4em] xl:ml-[6em]"
              >
                Q&A
              </li>
              <li
                className="mb-[1em] cursor-pointer hover:font-semibold 
            hover:text-(--color-white) hover:scale-110 ml-[2em] mr-[1em]
            
            lg:ml-[4em] xl:ml-[6em]"
              >
                YouTube
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className={`
    ${
      isActive
        ? "translate-y-[0vh] transition transform duration-500 ease-in-out"
        : "translate-y-[-100vh] transition transform duration-500 ease-in"
    }

    md:hidden z-4 w-full
    bg-(--color-black) text-(--color-gray) font-(family-name:--font-text)
    font-light pt-[1.25em] pb-[1.25em]
    flex justify-center flex-col items-center shadow-[0_3px_3px_rgba(0,0,0,0.5)]`}
      >
        <h2 className="mb-[1em] cursor-pointer hover:font-semibold hover:text-(--color-white) hover:scale-110">
          Home
        </h2>
        <h2 className="mb-[1em] cursor-pointer hover:font-semibold hover:text-(--color-white) hover:scale-110">
          Members
        </h2>
        <h2 className="mb-[1em] cursor-pointer hover:font-semibold hover:text-(--color-white) hover:scale-110">
          Discography
        </h2>
        <h2 className="mb-[1em] cursor-pointer hover:font-semibold hover:text-(--color-white) hover:scale-110">
          Photocards
        </h2>
        <h2 className="mb-[1em] cursor-pointer hover:font-semibold hover:text-(--color-white) hover:scale-110">
          Q&A
        </h2>
        <h2 className="mb-[1em] cursor-pointer hover:font-semibold hover:text-(--color-white) hover:scale-110">
          YouTube
        </h2>
      </div>
    </>
  );
};

export default Navigation;

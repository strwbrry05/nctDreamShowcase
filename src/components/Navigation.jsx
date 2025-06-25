import React, { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";

const Navigation = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);

      if (window.scrollY >= 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div
        className={`flex justify-center items-center relative w-full z-5 h-[75px] 
      ${isScrolled ? "!bg-(--color-black)" : ""}
      ${props.isDark ? "barDarkMode" : "barLightMode"}
      ${isActive ? "" : "shadow-[0_3px_3px_rgba(0,0,0,0.5)]"}
      `}
      >
        <div
          className="flex justify-center md:justify-evenly items-center 
        xl:text-center xl:w-[1200px]"
        >
          <button className="cursor-pointer md:hidden">
            <HiMenu
              className={`text-[2.5rem] mr-[1em] 
                ${props.isDark ? "darkModeText" : "lightModeText"}
                ${
                  isActive
                    ? "rotate-90 transition-all duration-300 ease-in"
                    : "rotate-[-90] transition-all duration-300 ease-in"
                }`}
              onClick={handleClick}
            />
          </button>

          <div
            className="hidden md:block mt-[0.75em]
        font-(family-name:--font-text)"
          >
            <ul className="flex justify-center place-self-center ">
              <li
                className={`navBarListItem ml-[1em] text-(--color-dark-gray) hover:text-(--color-black)
          ${
            isScrolled && !props.isDark
              ? "darkModeNavBarListItem"
              : "lightModeBarListItem"
          }
          ${props.isDark ? "darkModeNavBarListItem" : "lightModeBarListItem"}`}
              >
                Home
              </li>
              <li
                className={`navBarListItem text-(--color-dark-gray) hover:text-(--color-black)
          ${
            isScrolled && !props.isDark
              ? "darkModeNavBarListItem"
              : "lightModeBarListItem"
          }
          ${props.isDark ? "darkModeNavBarListItem" : "lightModeBarListItem"}
            
            ml-[2em] lg:ml-[4em] xl:ml-[6em]`}
              >
                Members
              </li>
              <li
                className={`navBarListItem text-(--color-dark-gray) hover:text-(--color-black)
          ${
            isScrolled && !props.isDark
              ? "darkModeNavBarListItem"
              : "lightModeBarListItem"
          }
          ${props.isDark ? "darkModeNavBarListItem" : "lightModeBarListItem"}
            
            ml-[2em] mr-[2em] lg:ml-[4em] lg:mr-[4em] xl:ml-[6em] xl:mr-[6em]`}
              >
                Discography
              </li>
            </ul>
          </div>

          <h1
            className={`${isScrolled ? "!text-(--color-white)" : ""}
          ${props.isDark ? "darkModeText" : "lightModeText"}
          cursor-pointer text-center mr-[2em] md:mr-[0] font-(family-name:--font-title) 
          font-black text-[2rem] leading-[0.75]`}
          >
            Beat <br /> Box
          </h1>

          <div
            className="hidden md:block mt-[0.75em]
        font-(family-name:--font-text)"
          >
            <ul className="flex">
              <li
                className={`navBarListItem text-(--color-dark-gray) hover:text-(--color-black)
          ${
            isScrolled && !props.isDark
              ? "darkModeNavBarListItem"
              : "lightModeBarListItem"
          }
          ${props.isDark ? "darkModeNavBarListItem" : "lightModeBarListItem"}
            
            ml-[2em] lg:ml-[4em] xl:ml-[6em]`}
              >
                Photocards
              </li>
              <li
                className={`navBarListItem text-(--color-dark-gray) hover:text-(--color-black)
          ${
            isScrolled && !props.isDark
              ? "darkModeNavBarListItem"
              : "lightModeBarListItem"
          }
          ${props.isDark ? "darkModeNavBarListItem" : "lightModeBarListItem"} 
            
            ml-[2em] lg:ml-[4em] xl:ml-[6em]`}
              >
                Q&A
              </li>
              <li
                className={`navBarListItem text-(--color-dark-gray) hover:text-(--color-black)
          ${
            isScrolled && !props.isDark
              ? "darkModeNavBarListItem"
              : "lightModeBarListItem"
          }
          ${props.isDark ? "darkModeNavBarListItem" : "lightModeBarListItem"}
            
            ml-[2em] mr-[1em] lg:ml-[4em] xl:ml-[6em]`}
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
    ${isScrolled ? "!bg-(--color-black)" : ""}
    ${props.isDark ? "barDarkMode" : "barLightMode"}

    md:hidden absolute w-full z-4
    font-(family-name:--font-text)
    pt-[1.25em] pb-[1.25em]
    flex justify-center flex-col items-center shadow-[0_3px_3px_rgba(0,0,0,0.5)]`}
      >
        <h2
          className={`navBarListItem text-(--color-dark-gray) hover:text-(--color-black)
          ${
            isScrolled && !props.isDark
              ? "darkModeNavBarListItem"
              : "lightModeBarListItem"
          }
          ${props.isDark ? "darkModeNavBarListItem" : "lightModeBarListItem"}

             `}
        >
          Home
        </h2>
        <h2
          className={`navBarListItem text-(--color-dark-gray) hover:text-(--color-black)
          ${
            isScrolled && !props.isDark
              ? "darkModeNavBarListItem"
              : "lightModeBarListItem"
          }
          ${props.isDark ? "darkModeNavBarListItem" : "lightModeBarListItem"}`}
        >
          Members
        </h2>
        <h2
          className={`navBarListItem text-(--color-dark-gray) hover:text-(--color-black)
          ${
            isScrolled && !props.isDark
              ? "darkModeNavBarListItem"
              : "lightModeBarListItem"
          }
          ${props.isDark ? "darkModeNavBarListItem" : "lightModeBarListItem"}`}
        >
          Discography
        </h2>
        <h2
          className={`navBarListItem text-(--color-dark-gray) hover:text-(--color-black)
          ${
            isScrolled && !props.isDark
              ? "darkModeNavBarListItem"
              : "lightModeBarListItem"
          }
          ${props.isDark ? "darkModeNavBarListItem" : "lightModeBarListItem"}`}
        >
          Photocards
        </h2>
        <h2
          className={`navBarListItem text-(--color-dark-gray) hover:text-(--color-black)
          ${
            isScrolled && !props.isDark
              ? "darkModeNavBarListItem"
              : "lightModeBarListItem"
          }
          ${props.isDark ? "darkModeNavBarListItem" : "lightModeBarListItem"}`}
        >
          Q&A
        </h2>
        <h2
          className={`navBarListItem text-(--color-dark-gray) hover:text-(--color-black)
          ${
            isScrolled && !props.isDark
              ? "darkModeNavBarListItem"
              : "lightModeBarListItem"
          }
          ${props.isDark ? "darkModeNavBarListItem" : "lightModeBarListItem"}`}
        >
          YouTube
        </h2>
      </div>
    </>
  );
};

export default Navigation;

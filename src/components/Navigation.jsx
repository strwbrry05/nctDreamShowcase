import React, { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-scroll";

const Navigation = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // console.log(window.scrollY);

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
                ${isScrolled && !props.isDark ? "!text-(--color-white)" : ""}
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
              <Link
                to="home"
                smooth={true}
                activeClass="active"
                spy={true}
                offset={-50}
                className={`navBarListItem ml-[1em] text-(--color-dark-gray) hover:text-(--color-black)
          ${
            isScrolled && !props.isDark
              ? "darkModeNavBarListItem"
              : "lightModeBarListItem"
          }
          ${
            props.isDark ? "darkModeNavBarListItem " : "lightModeBarListItem "
          }`}
              >
                <li>Home</li>
              </Link>

              <Link
                to="members"
                smooth={true}
                activeClass="active"
                spy={true}
                offset={-50}
                className={`navBarListItem text-(--color-dark-gray) hover:text-(--color-black)
          ${
            isScrolled && !props.isDark
              ? "darkModeNavBarListItem"
              : "lightModeBarListItem"
          }
          ${props.isDark ? "darkModeNavBarListItem" : "lightModeBarListItem"}
            
            ml-[2em] lg:ml-[4em] xl:ml-[6em]`}
              >
                <li>Members</li>
              </Link>

              <Link
                to="albums"
                smooth={true}
                spy={true}
                activeClass="active"
                offset={-50}
                className={`navBarListItem text-(--color-dark-gray) hover:text-(--color-black)
          ${
            isScrolled && !props.isDark
              ? "darkModeNavBarListItem"
              : "lightModeBarListItem"
          }
          ${props.isDark ? "darkModeNavBarListItem" : "lightModeBarListItem"}
            
            ml-[2em] mr-[2em] lg:ml-[4em] lg:mr-[4em] xl:ml-[6em] xl:mr-[6em]`}
              >
                <li>Discography</li>
              </Link>
            </ul>
          </div>

          <Link
            to="home"
            smooth={true}
            spy={true}
            activeClass="active"
            offset={50}
          >
            <h1
              className={`${isScrolled ? "!text-(--color-white)" : ""}
          ${props.isDark ? "darkModeText" : "lightModeText"}
          cursor-pointer text-center mr-[2em] md:mr-[0] font-(family-name:--font-title) 
          font-black text-[2rem] leading-[0.75]`}
            >
              NCT
              <br />
              DREAM
            </h1>
          </Link>

          <div
            className="hidden md:block mt-[0.75em]
        font-(family-name:--font-text)"
          >
            <ul className="flex">
              <Link
                to="qa"
                smooth={true}
                activeClass="active"
                spy={true}
                offset={-50}
                className={`navBarListItem text-(--color-dark-gray) hover:text-(--color-black)
          ${
            isScrolled && !props.isDark
              ? "darkModeNavBarListItem"
              : "lightModeBarListItem"
          }
          ${props.isDark ? "darkModeNavBarListItem" : "lightModeBarListItem"}
            
            ml-[2em] lg:ml-[4em] xl:ml-[6em]`}
              >
                <li>Q&A</li>
              </Link>

              <Link
                to="socials"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-30}
                className={`navBarListItem text-(--color-dark-gray) hover:text-(--color-black)
          ${
            isScrolled && !props.isDark
              ? "darkModeNavBarListItem"
              : "lightModeBarListItem"
          }
          ${props.isDark ? "darkModeNavBarListItem" : "lightModeBarListItem"} 
            
            ml-[2em] lg:ml-[4em] xl:ml-[6em]`}
              >
                <li>Socials</li>
              </Link>

              <Link
                to="youtube"
                smooth={true}
                activeClass="active"
                spy={true}
                offset={-50}
                className={`navBarListItem text-(--color-dark-gray) hover:text-(--color-black)
          ${
            isScrolled && !props.isDark
              ? "darkModeNavBarListItem"
              : "lightModeBarListItem"
          }
          ${props.isDark ? "darkModeNavBarListItem" : "lightModeBarListItem"}
            
            ml-[2em] mr-[1em] lg:ml-[4em] xl:ml-[6em]`}
              >
                <li>YouTube</li>
              </Link>
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
        <Link
          to="home"
          smooth={true}
          activeClass="active"
          spy={true}
          offset={-50}
          className={`navBarListItem text-(--color-dark-gray) hover:text-(--color-black)
          ${
            isScrolled && !props.isDark
              ? "darkModeNavBarListItem"
              : "lightModeBarListItem"
          }
          ${props.isDark ? "darkModeNavBarListItem" : "lightModeBarListItem"}

             `}
        >
          <h2>Home</h2>
        </Link>

        <Link
          to="members"
          smooth={true}
          activeClass="active"
          spy={true}
          offset={-50}
          className={`navBarListItem text-(--color-dark-gray) hover:text-(--color-black)
          ${
            isScrolled && !props.isDark
              ? "darkModeNavBarListItem"
              : "lightModeBarListItem"
          }
          ${props.isDark ? "darkModeNavBarListItem" : "lightModeBarListItem"}`}
        >
          <h2>Members</h2>
        </Link>

        <Link
          to="albums"
          smooth={true}
          spy={true}
          activeClass="active"
          offset={-50}
          className={`navBarListItem text-(--color-dark-gray) hover:text-(--color-black)
          ${
            isScrolled && !props.isDark
              ? "darkModeNavBarListItem"
              : "lightModeBarListItem"
          }
          ${props.isDark ? "darkModeNavBarListItem" : "lightModeBarListItem"}`}
        >
          <h2>Discography</h2>
        </Link>

        <Link
          to="qa"
          smooth={true}
          activeClass="active"
          spy={true}
          offset={-50}
          className={`navBarListItem text-(--color-dark-gray) hover:text-(--color-black)
          ${
            isScrolled && !props.isDark
              ? "darkModeNavBarListItem"
              : "lightModeBarListItem"
          }
          ${props.isDark ? "darkModeNavBarListItem" : "lightModeBarListItem"}`}
        >
          <h2>Q&A</h2>
        </Link>

        <Link
          to="socials"
          activeClass="active"
          smooth={true}
          spy={true}
          offset={-30}
          className={`navBarListItem text-(--color-dark-gray) hover:text-(--color-black)
          ${
            isScrolled && !props.isDark
              ? "darkModeNavBarListItem"
              : "lightModeBarListItem"
          }
          ${props.isDark ? "darkModeNavBarListItem" : "lightModeBarListItem"}`}
        >
          <h2>Socials</h2>
        </Link>

        <Link
          to="youtube"
          smooth={true}
          activeClass="active"
          spy={true}
          offset={-50}
          className={`navBarListItem text-(--color-dark-gray) hover:text-(--color-black)
          ${
            isScrolled && !props.isDark
              ? "darkModeNavBarListItem"
              : "lightModeBarListItem"
          }
          ${props.isDark ? "darkModeNavBarListItem" : "lightModeBarListItem"}`}
        >
          <h2>YouTube</h2>
        </Link>
      </div>
    </>
  );
};

export default Navigation;

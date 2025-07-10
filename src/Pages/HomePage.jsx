import React, { useEffect, useState } from "react";

import AllMembers from "../components/AllMembers";
import QA from "../components/QA";
import Albums from "../components/Albums";
import Youtube from "../components/Youtube";
import SocialsPC from "../components/SocialsPC";
import { Element } from "react-scroll";

const HomePage = ({ isDark }) => {
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
    <>
      <Element name="members">
        <AllMembers isDark={isDark} windowWidth={windowWidth} />
      </Element>

      <div
        className={`${isDark ? "bg-(--color-blue)" : ""} pt-[4em] pb-[3em] `}
      ></div>

      <Element name="albums">
        <div
          className={`${
            isDark ? "bg-(--color-dark-blue)" : ""
          } pt-[3em] pb-[3em] `}
        >
          <Albums isDark={isDark} />
        </div>
      </Element>

      <Element name="qa">
        <div className={`bg-(--color-red)`}>
          <QA isDark={isDark} />
        </div>
      </Element>

      <Element name="socials">
        <SocialsPC isDark={isDark} />
      </Element>

      <div
        className={`${isDark ? "bg-(--color-dark-blue)" : ""} pt-[4em] `}
      ></div>

      <div
        className={`${
          isDark ? "bg-(--color-dark-blue)" : "bg-(--color-white)"
        }`}
      >
        <Element name="youtube">
          <Youtube isDark={isDark} />
        </Element>
      </div>
    </>
  );
};

export default HomePage;

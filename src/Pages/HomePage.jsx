import React, { useEffect, useState } from "react";
import LMHero from "../components/LMHero";
import DMHero from "../components/DMHero";
import AllMembers from "../components/AllMembers";
import QA from "../components/QA";
import Albums from "../components/Albums";
import Youtube from "../components/Youtube";
import SocialsPC from "../components/SocialsPC";

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
      {isDark ? (
        <div className="bg-(--color-blue)">
          <DMHero />
        </div>
      ) : (
        <LMHero />
      )}

      <AllMembers isDark={isDark} windowWidth={windowWidth} />

      <div className={`${isDark ? "bg-(--color-dark-blue)" : ""} `}>
        <Albums isDark={isDark} />
      </div>

      <div className={`bg-(--color-red)`}>
        <QA isDark={isDark} />
      </div>

      <SocialsPC isDark={isDark} />

      <div
        className={`${
          isDark ? "bg-(--color-dark-blue)" : "bg-(--color-white)"
        }`}
      >
        <Youtube isDark={isDark} />
      </div>
    </>
  );
};

export default HomePage;

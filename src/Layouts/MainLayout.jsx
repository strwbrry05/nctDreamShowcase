import React from "react";
import Navigation from "../components/Navigation";
import DayNight from "../components/DayNight";
import LMHero from "../components/LMHero";
import DMHero from "../components/DMHero";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import { Element } from "react-scroll";

const MainLayout = ({ isDark, toggleDark, toggleLight }) => {
  return (
    <>
      <div className="sticky top-0 w-full z-5">
        <Navigation isDark={isDark} />
      </div>

      <div className={`${isDark ? "bg-(--color-blue)" : ""} pb-[2em]`}>
        <DayNight
          isDark={isDark}
          toggleDark={toggleDark}
          toggleLight={toggleLight}
        />
      </div>

      <Element name="home">
        {isDark ? (
          <div className="bg-(--color-blue)">
            <DMHero />
          </div>
        ) : (
          <LMHero />
        )}
      </Element>

      <div
        className={`${isDark ? "bg-(--color-blue)" : ""} pt-[4em] pb-[3em] `}
      ></div>

      <Outlet />

      <Footer />
    </>
  );
};

export default MainLayout;

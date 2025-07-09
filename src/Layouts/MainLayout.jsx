import React from "react";
import Navigation from "../components/Navigation";
import DayNight from "../components/DayNight";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const MainLayout = ({ isDark, toggleDark, toggleLight }) => {
  return (
    <>
      <div className="sticky top-0 w-full z-5">
        <Navigation isDark={isDark} />
      </div>

      <div className={`${isDark ? "bg-(--color-blue)" : ""}`}>
        <DayNight
          isDark={isDark}
          toggleDark={toggleDark}
          toggleLight={toggleLight}
        />
      </div>

      <Outlet />

      <Footer />
    </>
  );
};

export default MainLayout;

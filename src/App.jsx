import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import "./index.css";

import { useEffect, useState } from "react";
import QA from "./components/QA";
import Member from "./components/Member";
import LMHero from "./components/LMHero";

import lm_markFull from "./assets/images/lightMode/lm_markFull.png";
import dm_markFull from "./assets/images/darkMode/dm_markFull.png";
import lm_renjunFull from "./assets/images/lightMode/lm_renjunFull.png";
import dm_renjunFull from "./assets/images/darkMode/dm_renjunFull.png";
import lm_jenoFull from "./assets/images/lightMode/lm_jenoFull.png";
import dm_jenoFull from "./assets/images/darkMode/dm_jenoFull.png";
import lm_haechanFull from "./assets/images/lightMode/lm_haechanFull.png";
import dm_haechanFull from "./assets/images/darkMode/dm_haechanFull.png";
import lm_jaeminFull from "./assets/images/lightMode/lm_jaeminFull.png";
import dm_jaeminFull from "./assets/images/darkMode/dm_jaeminFull.png";
import lm_chenleFull from "./assets/images/lightMode/lm_chenleFull.png";
import dm_chenleFull from "./assets/images/darkMode/dm_chenleFull.png";
import lm_jisungFull from "./assets/images/lightMode/lm_jisungFull.png";
import dm_jisungFull from "./assets/images/darkMode/dm_jisungFull.png";
import DMHero from "./components/DMHero";
import DayNight from "./components/DayNight";
import Socials from "./components/Socials";

import mark_pc from "./assets/images/lightMode/lm_markPC.png";
import Dmark_pc from "./assets/images/darkMode/dm_markPC.png";
import renjun_pc from "./assets/images/lightMode/lm_renjunPC.png";
import Drenjun_pc from "./assets/images/darkMode/dm_renjunPC.png";
import jeno_pc from "./assets/images/lightMode/lm_jenoPC.png";
import Djeno_pc from "./assets/images/darkMode/dm_jenoPC.png";
import haechan_pc from "./assets/images/lightMode/lm_haechanPC.png";
import Dhaechan_pc from "./assets/images/darkMode/dm_haechanPC.png";
import jaemin_pc from "./assets/images/lightMode/lm_jaeminPC.png";
import Djaemin_pc from "./assets/images/darkMode/dm_jaeminPC.png";
import chenle_pc from "./assets/images/lightMode/lm_chenlePC.png";
import Dchenle_pc from "./assets/images/darkMode/dm_chenlePC.png";
import jisung_pc from "./assets/images/lightMode/lm_jisungPC.png";
import Djisung_pc from "./assets/images/darkMode/dm_jisungPC.png";

function App() {
  const [isDark, setIsDark] = useState(false);
  const lmPCs = [
    {
      id: "mark",
      content: mark_pc,
      position: {
        x: 40,
        y: 21,
      },
    },
    {
      id: "renjun",
      content: renjun_pc,
      position: {
        x: 24,
        y: 55,
      },
      rotate: -25,
    },
    {
      id: "jeno",
      content: jeno_pc,
      position: {
        x: 55,
        y: 60,
      },
      rotate: 25,
    },
    {
      id: "haechan",
      content: haechan_pc,
      position: {
        x: 59,
        y: 17,
      },
      rotate: 25,
    },
    {
      id: "jaemin",
      content: jaemin_pc,
      position: {
        x: 36,
        y: 50,
      },
      rotate: 25,
    },
    {
      id: "chenle",
      content: chenle_pc,
      position: {
        x: 25,
        y: 17,
      },
      rotate: 25,
    },
    {
      id: "jisung",
      content: jisung_pc,
      position: {
        x: 50,
        y: 40,
      },
      rotate: -25,
    },
  ];
  const dmPCs = [
    {
      id: "mark",
      content: Dmark_pc,
      position: {
        x: 40,
        y: 21,
      },
    },
    {
      id: "renjun",
      content: Drenjun_pc,
      position: {
        x: 24,
        y: 55,
      },
      rotate: -25,
    },
    {
      id: "jeno",
      content: Djeno_pc,
      position: {
        x: 55,
        y: 60,
      },
      rotate: 25,
    },
    {
      id: "haechan",
      content: Dhaechan_pc,
      position: {
        x: 59,
        y: 17,
      },
      rotate: 25,
    },
    {
      id: "jaemin",
      content: Djaemin_pc,
      position: {
        x: 36,
        y: 50,
      },
      rotate: 25,
    },
    {
      id: "chenle",
      content: Dchenle_pc,
      position: {
        x: 25,
        y: 17,
      },
      rotate: 25,
    },
    {
      id: "jisung",
      content: Djisung_pc,
      position: {
        x: 50,
        y: 40,
      },
      rotate: -25,
    },
  ];

  const toggleDark = () => {
    setIsDark(true);
  };

  const toggleLight = () => {
    setIsDark(false);
  };

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

      {isDark ? (
        <div className="bg-(--color-blue)">
          <DMHero />
        </div>
      ) : (
        <LMHero />
      )}

      {/* MARK */}
      <div
        className={`${isDark ? "bg-(--color-blue) text-(--color-white)" : ""}`}
      >
        <Member
          isDark={isDark}
          color={isDark ? "text-(--color-yellow)" : "text-(--color-yellow)"}
          scrollColor={
            isDark ? "bg-(--color-member-light)" : "bg-(--color-yellow)"
          }
          name={"mark"}
          birthday={"August 02 1999"}
          zodiac={"Aquarius"}
          blood={"A"}
          IMG={isDark ? dm_markFull : lm_markFull}
          mobileW={isDark ? "w-[300px]" : "w-[270px]"}
          fullW={isDark ? "w-[340px]" : "w-[300px]"}
          mobileT={"member_mobileYellowTopRightTriangle"}
          triangleStyles={
            windowWidth >= 1280
              ? "member_fullYellowBottomLeftTriangle XLleftTriangleStyles"
              : "member_desktopYellowBottomLeftTriangle leftTriangleStyles"
          }
          nameStyles={
            windowWidth >= 1280 ? "XLleftNameStyles" : "leftNameStyles"
          }
          imgStyles={windowWidth >= 1280 ? "XLleftImgStyles" : "leftImgStyles"}
          bioStyles={
            windowWidth >= 1280 ? "XLleftBioStyles ml-[1em]" : "leftBioStyles"
          }
          blurbStyles={
            windowWidth >= 1280 ? "XLleftBlurbStyles" : "leftBlurbStyles"
          }
          scrollStyles={
            windowWidth >= 1280 ? "XLleftScrollStyles" : "leftScrollStyles"
          }
        />
      </div>

      {/* RENJUN */}
      <div
        className={`${
          isDark ? "bg-(--color-dark-blue) text-(--color-white)" : ""
        }`}
      >
        <Member
          isDark={isDark}
          windowWidth={windowWidth}
          color={isDark ? "text-(--color-red)" : "text-(--color-red)"}
          scrollColor={isDark ? "bg-(--color-member-dark)" : "bg-(--color-red)"}
          name={"renjun"}
          birthday={"March 23 2000"}
          zodiac={"Aries"}
          blood={"O"}
          IMG={isDark ? dm_renjunFull : lm_renjunFull}
          mobileW={isDark ? "w-[300px]" : "w-[350px]"}
          fullW={isDark ? "w-[340px]" : "w-[400px]"}
          mobileT={"member_mobileRedTopRightTriangle"}
          triangleStyles={
            windowWidth >= 1280
              ? "member_fullRedTopRightTriangle XLrightTriangleStyles"
              : "member_desktopRedTopRightTriangle rightTriangleStyles"
          }
          nameStyles={
            windowWidth >= 1280 ? "XLrightNameStyles" : "rightNameStyles"
          }
          imgStyles={
            windowWidth >= 1280 ? "XLrightImgStyles" : "rightImgStyles"
          }
          bioStyles={
            windowWidth >= 1280 ? "XLrightBioStyles" : "rightBioStyles"
          }
          blurbStyles={
            windowWidth >= 1280 ? "XLrightBlurbStyles" : "rightBlurbStyles"
          }
          scrollStyles={
            windowWidth >= 1280 ? "XLrightScrollStyles" : "rightScrollStyles"
          }
        />
      </div>

      {/* JENO */}
      <div
        className={`${
          isDark ? "bg-(--color-dark-blue) text-(--color-white)" : ""
        }`}
      >
        <Member
          isDark={isDark}
          windowWidth={windowWidth}
          color={isDark ? "text-(--color-dark-red)" : "text-(--color-blue)"}
          scrollColor={
            isDark ? "bg-(--color-member-dark)" : "bg-(--color-blue)"
          }
          name={"jeno"}
          birthday={"April 23 2000"}
          zodiac={"Taurus"}
          blood={"O"}
          IMG={isDark ? dm_jenoFull : lm_jenoFull}
          mobileW={isDark ? "w-[300px]" : "w-[350px]"}
          fullW={isDark ? "w-[340px]" : "w-[370px]"}
          mobileT={
            isDark
              ? "member_mobileDRedTopRightTriangle"
              : "member_mobileBlueTopRightTriangle"
          }
          triangleStyles={
            windowWidth >= 1280
              ? isDark
                ? "member_fullDredBottomLeftTriangle XLleftTriangleStyles"
                : "member_fullBlueBottomLeftTriangle XLleftTriangleStyles"
              : !isDark
              ? "member_desktopBlueBottomLeftTriangle leftTriangleStyles"
              : "member_desktopDredBottomLeftTriangle leftTriangleStyles"
          }
          nameStyles={
            windowWidth >= 1280 ? "XLleftNameStyles" : "leftNameStyles"
          }
          imgStyles={windowWidth >= 1280 ? "XLleftImgStyles" : "leftImgStyles"}
          bioStyles={windowWidth >= 1280 ? "XLleftBioStyles" : "leftBioStyles"}
          blurbStyles={
            windowWidth >= 1280 ? "XLleftBlurbStyles" : "leftBlurbStyles"
          }
          scrollStyles={
            windowWidth >= 1280 ? "XLleftScrollStyles" : "leftScrollStyles"
          }
        />
      </div>

      {/* HAECHAN */}
      <div
        className={`${isDark ? "bg-(--color-blue) text-(--color-white)" : ""}`}
      >
        <Member
          isDark={isDark}
          color={isDark ? "text-(--color-yellow)" : "text-(--color-yellow)"}
          scrollColor={
            isDark ? "bg-(--color-member-light)" : "bg-(--color-yellow)"
          }
          name={"haechan"}
          birthday={"June 06 2000"}
          zodiac={"Gemini"}
          blood={"AB"}
          IMG={isDark ? dm_haechanFull : lm_haechanFull}
          mobileW={isDark ? "w-[300px]" : "w-[315px]"}
          fullW={isDark ? "w-[340px]" : "w-[370px]"}
          mobileT={"member_mobileYellowTopRightTriangle"}
          triangleStyles={
            windowWidth >= 1280
              ? "member_fullYellowTopRightTriangle XLrightTriangleStyles"
              : "member_desktopYellowTopRightTriangle rightTriangleStyles"
          }
          nameStyles={
            windowWidth >= 1280 ? "XLrightNameStyles" : "rightNameStyles"
          }
          imgStyles={
            windowWidth >= 1280 ? "XLrightImgStyles" : "rightImgStyles"
          }
          bioStyles={
            windowWidth >= 1280 ? "XLrightBioStyles" : "rightBioStyles"
          }
          blurbStyles={
            windowWidth >= 1280 ? "XLrightBlurbStyles" : "rightBlurbStyles"
          }
          scrollStyles={
            windowWidth >= 1280 ? "XLrightScrollStyles" : "rightScrollStyles"
          }
        />
      </div>

      {/* JAEMIN */}
      <div
        className={`${
          isDark ? "bg-(--color-dark-blue) text-(--color-white)" : ""
        }`}
      >
        <Member
          isDark={isDark}
          windowWidth={windowWidth}
          color={isDark ? "text-(--color-red)" : "text-(--color-red)"}
          scrollColor={isDark ? "bg-(--color-member-dark)" : "bg-(--color-red)"}
          name={"jaemin"}
          birthday={"August 13 2000"}
          zodiac={"Leo"}
          blood={"O"}
          IMG={isDark ? dm_jaeminFull : lm_jaeminFull}
          mobileW={isDark ? "w-[300px]" : "w-[320px]"}
          fullW={isDark ? "w-[340px]" : "w-[320px]"}
          mobileT={"member_mobileRedTopRightTriangle"}
          triangleStyles={
            windowWidth >= 1280
              ? "member_fullRedBottomLeftTriangle XLleftTriangleStyles"
              : "member_desktopRedBottomLeftTriangle leftTriangleStyles"
          }
          nameStyles={
            windowWidth >= 1280 ? "XLleftNameStyles" : "leftNameStyles"
          }
          imgStyles={windowWidth >= 1280 ? "XLleftImgStyles" : "leftImgStyles"}
          bioStyles={windowWidth >= 1280 ? "XLleftBioStyles" : "leftBioStyles"}
          blurbStyles={
            windowWidth >= 1280 ? "XLleftBlurbStyles" : "leftBlurbStyles"
          }
          scrollStyles={
            windowWidth >= 1280 ? "XLleftScrollStyles" : "leftScrollStyles"
          }
        />
      </div>

      {/* CHENLE */}
      <div
        className={`${
          isDark ? "bg-(--color-dark-blue) text-(--color-white)" : ""
        }`}
      >
        <Member
          isDark={isDark}
          color={isDark ? "text-(--color-dark-red)" : "text-(--color-blue)"}
          scrollColor={
            isDark ? "bg-(--color-member-dark)" : "bg-(--color-blue)"
          }
          name={"chenle"}
          birthday={"November 22 2001"}
          zodiac={"Sagittarius"}
          blood={"A"}
          IMG={isDark ? dm_chenleFull : lm_chenleFull}
          mobileW={isDark ? "w-[300px]" : "w-[265px]"}
          fullW={isDark ? "w-[340px]" : "w-[320px]"}
          mobileT={
            isDark
              ? "member_mobileDRedTopRightTriangle "
              : "member_mobileBlueTopRightTriangle"
          }
          triangleStyles={
            windowWidth >= 1280
              ? isDark
                ? "member_fullDRedTopRightTriangle XLrightTriangleStyles"
                : "member_fullBlueTopRightTriangle XLrightTriangleStyles"
              : !isDark
              ? "member_desktopBlueTopRightTriangle rightTriangleStyles"
              : "member_desktopDRedTopRightTriangle rightTriangleStyles"
          }
          nameStyles={
            windowWidth >= 1280 ? "XLrightNameStyles" : "rightNameStyles"
          }
          imgStyles={
            windowWidth >= 1280 ? "XLrightImgStyles" : "rightImgStyles"
          }
          bioStyles={
            windowWidth >= 1280
              ? "XLrightBioStyles ml-[0.7em]"
              : "rightBioStyles ml-[0.7em]"
          }
          blurbStyles={
            windowWidth >= 1280 ? "XLrightBlurbStyles" : "rightBlurbStyles"
          }
          scrollStyles={
            windowWidth >= 1280 ? "XLrightScrollStyles" : "rightScrollStyles"
          }
        />
      </div>

      {/* JISUNG */}
      <div
        className={`${isDark ? "bg-(--color-blue) text-(--color-white)" : ""}`}
      >
        <Member
          isDark={isDark}
          color={isDark ? "text-(--color-yellow)" : "text-(--color-yellow)"}
          scrollColor={
            isDark ? "bg-(--color-member-light)" : "bg-(--color-yellow)"
          }
          name={"jisung"}
          birthday={"February 05 2002"}
          zodiac={"Aquarius"}
          blood={"O"}
          IMG={isDark ? dm_jisungFull : lm_jisungFull}
          mobileW={isDark ? "w-[300px]" : "w-[350px]"}
          fullW={isDark ? "w-[340px]" : "w-[350px]"}
          mobileT={"member_mobileYellowTopRightTriangle"}
          triangleStyles={
            windowWidth >= 1280
              ? "member_fullYellowBottomLeftTriangle XLleftTriangleStyles"
              : "member_desktopYellowBottomLeftTriangle leftTriangleStyles"
          }
          nameStyles={
            windowWidth >= 1280 ? "XLleftNameStyles" : "leftNameStyles"
          }
          imgStyles={windowWidth >= 1280 ? "XLleftImgStyles" : "leftImgStyles"}
          bioStyles={
            windowWidth >= 1280 ? "XLleftBioStyles ml-[1em]" : "leftBioStyles"
          }
          blurbStyles={
            windowWidth >= 1280 ? "XLleftBlurbStyles" : "leftBlurbStyles"
          }
          scrollStyles={
            windowWidth >= 1280 ? "XLleftScrollStyles" : "leftScrollStyles"
          }
        />
      </div>

      <div className={`bg-(--color-red)`}>
        <QA isDark={isDark} />
      </div>

      {isDark ? (
        <div className="bg-(--color-dark-blue)">
          <Socials pcs={dmPCs} isDark={isDark} />
        </div>
      ) : (
        <Socials pcs={lmPCs} />
      )}

      <Footer />
    </>
  );
}

export default App;

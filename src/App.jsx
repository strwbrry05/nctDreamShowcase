import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import "./index.css";
import { WiDaySunny } from "react-icons/wi";
import { MdOutlineNightlight } from "react-icons/md";
import { useState } from "react";
import QA from "./components/QA";
import Member from "./components/Member";

import lm_renjunFull from "./assets/images/lightMode/lm_renjunFull.png";
import dm_renjunFull from "./assets/images/darkMode/dm_renjunFull.png";
import lm_haechanFull from "./assets/images/lightMode/lm_haechanFull.png";
import dm_haechanFull from "./assets/images/darkMode/dm_haechanFull.png";
import lm_chenleFull from "./assets/images/lightMode/lm_chenleFull.png";
import dm_chenleFull from "./assets/images/darkMode/dm_chenleFull.png";

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => {
    setIsDark(true);
  };

  const toggleLight = () => {
    setIsDark(false);
  };

  return (
    <>
      <div className="sticky top-0 w-full z-5">
        <Navigation isDark={isDark} />
      </div>

      <div className="m-5 flex justify-center cursor-pointer">
        <div
          className="bg-(--color-dark-gray) flex items-center justify-center w-[100px] h-[40px]
        rounded-[3rem] "
        >
          <WiDaySunny
            className={`text-[2rem] h-[30px] stroke-[0.5px] text-(--color-black)
              ${
                isDark
                  ? "text-(--color-gray) ml-[0.25em]"
                  : "bg-(--color-yellow) rounded-[30px] w-[45px] mr-[0.25em]"
              }`}
            onClick={toggleLight}
          />
          <MdOutlineNightlight
            className={`text-[1.75rem] h-[30px] text-(--color-white) ${
              isDark
                ? "bg-(--color-dark-blue) rounded-[15px] w-[45px] ml-[0.25em] "
                : "text-(--color-gray) mr-[0.25em]"
            }`}
            onClick={toggleDark}
          />
        </div>
      </div>

      {/* RENJUN */}
      <div
        className={`${
          isDark ? "bg-(--color-dark-blue) text-(--color-white)" : ""
        }`}
      >
        <Member
          isDark={isDark}
          color={isDark ? "text-(--color-red)" : "text-(--color-red)"}
          scrollColor={isDark ? "bg-(--color-member-dark)" : "bg-(--color-red)"}
          name={"renjun"}
          birthday={"March 23 2000"}
          zodiac={"Aries"}
          blood={"O"}
          IMG={isDark ? dm_renjunFull : lm_renjunFull}
          mobileW={isDark ? "w-[300px]" : "w-[350px]"}
          fullW={isDark ? "w-[380px]" : "w-[500px]"}
          mobileT={"member_mobileRedTopRightTriangle"}
          desktopT={"member_desktopRedTopRightTriangle"}
          fullT={"member_fullRedTopRightTriangle"}
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
          fullW={isDark ? "w-[380px]" : "w-[400px]"}
          mobileT={"member_mobileYellowBottomRightTriangle"}
          desktopT={"member_desktopYellowTopRightTriangle"}
          fullT={"member_fullYellowTopRightTriangle"}
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
          fullW={isDark ? "w-[380px]" : "w-[370px]"}
          mobileT={
            isDark
              ? "member_mobileDRedTopRightTriangle"
              : "member_mobileBlueTopRightTriangle"
          }
          desktopT={
            isDark
              ? "member_desktopDRedTopRightTriangle"
              : "member_desktopBlueTopRightTriangle"
          }
          fullT={
            isDark
              ? "member_fullDRedTopRightTriangle"
              : "member_fullBlueTopRightTriangle"
          }
        />
      </div>

      <div className={`bg-(--color-red)`}>
        <QA isDark={isDark} />
      </div>

      <Footer />
    </>
  );
}

export default App;

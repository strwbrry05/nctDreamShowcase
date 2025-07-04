import React from "react";
import lm_markFull from "../assets/images/lightMode/lm_markFull.png";
import dm_markFull from "../assets/images/darkMode/dm_markFull.png";
import lm_renjunFull from "../assets/images/lightMode/lm_renjunFull.png";
import dm_renjunFull from "../assets/images/darkMode/dm_renjunFull.png";
import lm_jenoFull from "../assets/images/lightMode/lm_jenoFull.png";
import dm_jenoFull from "../assets/images/darkMode/dm_jenoFull.png";
import lm_haechanFull from "../assets/images/lightMode/lm_haechanFull.png";
import dm_haechanFull from "../assets/images/darkMode/dm_haechanFull.png";
import lm_jaeminFull from "../assets/images/lightMode/lm_jaeminFull.png";
import dm_jaeminFull from "../assets/images/darkMode/dm_jaeminFull.png";
import lm_chenleFull from "../assets/images/lightMode/lm_chenleFull.png";
import dm_chenleFull from "../assets/images/darkMode/dm_chenleFull.png";
import lm_jisungFull from "../assets/images/lightMode/lm_jisungFull.png";
import dm_jisungFull from "../assets/images/darkMode/dm_jisungFull.png";

import lm_renjun1 from "../assets/images/lightMode/lm_renjun1.png";
import lm_renjun2 from "../assets/images/lightMode/lm_renjun2.png";
import lm_renjun3 from "../assets/images/lightMode/lm_renjun3.png";
import lm_renjun4 from "../assets/images/lightMode/lm_renjun4.png";
import lm_renjun5 from "../assets/images/lightMode/lm_renjun5.png";

import lm_mark1 from "../assets/images/lightMode/lm_mark1.png";
import lm_mark2 from "../assets/images/lightMode/lm_mark2.png";
import lm_mark3 from "../assets/images/lightMode/lm_mark3.png";
import lm_mark4 from "../assets/images/lightMode/lm_mark4.png";
import lm_mark5 from "../assets/images/lightMode/lm_mark5.png";

import Member from "./Member";

const AllMembers = (props) => {
  const renjunSlides = [
    { id: 1, src: lm_renjun1, alt: "renjun slide 1" },
    { id: 2, src: lm_renjun2, alt: "renjun slide 2" },
    { id: 3, src: lm_renjun3, alt: "renjun slide 3" },
    { id: 4, src: lm_renjun4, alt: "renjun slide 4" },
    { id: 5, src: lm_renjun5, alt: "renjun slide 5" },
  ];

  const markSlides = [
    { id: 1, src: lm_mark1, alt: "mark slide 1" },
    { id: 2, src: lm_mark2, alt: "mark slide 2" },
    { id: 3, src: lm_mark3, alt: "mark slide 3" },
    { id: 4, src: lm_mark4, alt: "mark slide 4" },
    { id: 5, src: lm_mark5, alt: "mark slide 5" },
  ];

  return (
    <>
      {/* MARK */}
      <div
        className={`${
          props.isDark ? "bg-(--color-blue) text-(--color-white)" : ""
        }`}
      >
        <Member
          slides={markSlides}
          color={
            props.isDark ? "text-(--color-yellow)" : "text-(--color-yellow)"
          }
          scrollColor={
            props.isDark ? "bg-(--color-member-light)" : "bg-(--color-yellow)"
          }
          name={"mark"}
          birthday={"August 02 1999"}
          zodiac={"Aquarius"}
          blood={"A"}
          IMG={props.isDark ? dm_markFull : lm_markFull}
          mobileW={props.isDark ? "w-[300px]" : "w-[270px]"}
          fullW={props.isDark ? "w-[340px]" : "w-[300px]"}
          mobileT={"member_mobileYellowTopRightTriangle"}
          triangleStyles={
            props.windowWidth >= 1280
              ? "member_fullYellowBottomLeftTriangle XLleftTriangleStyles"
              : "member_desktopYellowBottomLeftTriangle leftTriangleStyles"
          }
          nameStyles={
            props.windowWidth >= 1280 ? "XLleftNameStyles" : "leftNameStyles"
          }
          imgStyles={
            props.windowWidth >= 1280 ? "XLleftImgStyles" : "leftImgStyles"
          }
          bioStyles={
            props.windowWidth >= 1280
              ? "XLleftBioStyles ml-[1em]"
              : "leftBioStyles"
          }
          blurbStyles={
            props.windowWidth >= 1280 ? "XLleftBlurbStyles" : "leftBlurbStyles"
          }
          scrollStyles={
            props.windowWidth >= 1280
              ? "XLleftScrollStyles"
              : "leftScrollStyles"
          }
        />
      </div>

      {/* RENJUN */}
      <div
        className={`${
          props.isDark ? "bg-(--color-dark-blue) text-(--color-white)" : ""
        }`}
      >
        <Member
          slides={renjunSlides}
          color={props.isDark ? "text-(--color-red)" : "text-(--color-red)"}
          scrollColor={
            props.isDark ? "bg-(--color-member-dark)" : "bg-(--color-red)"
          }
          name={"renjun"}
          birthday={"March 23 2000"}
          zodiac={"Aries"}
          blood={"O"}
          IMG={props.isDark ? dm_renjunFull : lm_renjunFull}
          mobileW={props.isDark ? "w-[300px]" : "w-[350px]"}
          fullW={props.isDark ? "w-[340px]" : "w-[400px]"}
          mobileT={"member_mobileRedTopRightTriangle"}
          triangleStyles={
            props.windowWidth >= 1280
              ? "member_fullRedTopRightTriangle XLrightTriangleStyles"
              : "member_desktopRedTopRightTriangle rightTriangleStyles"
          }
          nameStyles={
            props.windowWidth >= 1280 ? "XLrightNameStyles" : "rightNameStyles"
          }
          imgStyles={
            props.windowWidth >= 1280 ? "XLrightImgStyles" : "rightImgStyles"
          }
          bioStyles={
            props.windowWidth >= 1280 ? "XLrightBioStyles" : "rightBioStyles"
          }
          blurbStyles={
            props.windowWidth >= 1280
              ? "XLrightBlurbStyles"
              : "rightBlurbStyles"
          }
          scrollStyles={
            props.windowWidth >= 1280
              ? "XLrightScrollStyles"
              : "rightScrollStyles"
          }
        />
      </div>

      {/* JENO */}
      <div
        className={`${
          props.isDark ? "bg-(--color-dark-blue) text-(--color-white)" : ""
        }`}
      >
        <Member
          slides={renjunSlides}
          color={
            props.isDark ? "text-(--color-dark-red)" : "text-(--color-blue)"
          }
          scrollColor={
            props.isDark ? "bg-(--color-member-dark)" : "bg-(--color-blue)"
          }
          name={"jeno"}
          birthday={"April 23 2000"}
          zodiac={"Taurus"}
          blood={"O"}
          IMG={props.isDark ? dm_jenoFull : lm_jenoFull}
          mobileW={props.isDark ? "w-[300px]" : "w-[350px]"}
          fullW={props.isDark ? "w-[340px]" : "w-[370px]"}
          mobileT={
            props.isDark
              ? "member_mobileDRedTopRightTriangle"
              : "member_mobileBlueTopRightTriangle"
          }
          triangleStyles={
            props.windowWidth >= 1280
              ? props.isDark
                ? "member_fullDredBottomLeftTriangle XLleftTriangleStyles"
                : "member_fullBlueBottomLeftTriangle XLleftTriangleStyles"
              : !props.isDark
              ? "member_desktopBlueBottomLeftTriangle leftTriangleStyles"
              : "member_desktopDredBottomLeftTriangle leftTriangleStyles"
          }
          nameStyles={
            props.windowWidth >= 1280 ? "XLleftNameStyles" : "leftNameStyles"
          }
          imgStyles={
            props.windowWidth >= 1280 ? "XLleftImgStyles" : "leftImgStyles"
          }
          bioStyles={
            props.windowWidth >= 1280 ? "XLleftBioStyles" : "leftBioStyles"
          }
          blurbStyles={
            props.windowWidth >= 1280 ? "XLleftBlurbStyles" : "leftBlurbStyles"
          }
          scrollStyles={
            props.windowWidth >= 1280
              ? "XLleftScrollStyles"
              : "leftScrollStyles"
          }
        />
      </div>

      {/* HAECHAN */}
      <div
        className={`${
          props.isDark ? "bg-(--color-blue) text-(--color-white)" : ""
        }`}
      >
        <Member
          slides={renjunSlides}
          color={
            props.isDark ? "text-(--color-yellow)" : "text-(--color-yellow)"
          }
          scrollColor={
            props.isDark ? "bg-(--color-member-light)" : "bg-(--color-yellow)"
          }
          name={"haechan"}
          birthday={"June 06 2000"}
          zodiac={"Gemini"}
          blood={"AB"}
          IMG={props.isDark ? dm_haechanFull : lm_haechanFull}
          mobileW={props.isDark ? "w-[300px]" : "w-[315px]"}
          fullW={props.isDark ? "w-[340px]" : "w-[370px]"}
          mobileT={"member_mobileYellowTopRightTriangle"}
          triangleStyles={
            props.windowWidth >= 1280
              ? "member_fullYellowTopRightTriangle XLrightTriangleStyles"
              : "member_desktopYellowTopRightTriangle rightTriangleStyles"
          }
          nameStyles={
            props.windowWidth >= 1280 ? "XLrightNameStyles" : "rightNameStyles"
          }
          imgStyles={
            props.windowWidth >= 1280 ? "XLrightImgStyles" : "rightImgStyles"
          }
          bioStyles={
            props.windowWidth >= 1280 ? "XLrightBioStyles" : "rightBioStyles"
          }
          blurbStyles={
            props.windowWidth >= 1280
              ? "XLrightBlurbStyles"
              : "rightBlurbStyles"
          }
          scrollStyles={
            props.windowWidth >= 1280
              ? "XLrightScrollStyles"
              : "rightScrollStyles"
          }
        />
      </div>

      {/* JAEMIN */}
      <div
        className={`${
          props.isDark ? "bg-(--color-dark-blue) text-(--color-white)" : ""
        }`}
      >
        <Member
          slides={renjunSlides}
          color={props.isDark ? "text-(--color-red)" : "text-(--color-red)"}
          scrollColor={
            props.isDark ? "bg-(--color-member-dark)" : "bg-(--color-red)"
          }
          name={"jaemin"}
          birthday={"August 13 2000"}
          zodiac={"Leo"}
          blood={"O"}
          IMG={props.isDark ? dm_jaeminFull : lm_jaeminFull}
          mobileW={props.isDark ? "w-[300px]" : "w-[320px]"}
          fullW={props.isDark ? "w-[340px]" : "w-[320px]"}
          mobileT={"member_mobileRedTopRightTriangle"}
          triangleStyles={
            props.windowWidth >= 1280
              ? "member_fullRedBottomLeftTriangle XLleftTriangleStyles"
              : "member_desktopRedBottomLeftTriangle leftTriangleStyles"
          }
          nameStyles={
            props.windowWidth >= 1280 ? "XLleftNameStyles" : "leftNameStyles"
          }
          imgStyles={
            props.windowWidth >= 1280 ? "XLleftImgStyles" : "leftImgStyles"
          }
          bioStyles={
            props.windowWidth >= 1280 ? "XLleftBioStyles" : "leftBioStyles"
          }
          blurbStyles={
            props.windowWidth >= 1280 ? "XLleftBlurbStyles" : "leftBlurbStyles"
          }
          scrollStyles={
            props.windowWidth >= 1280
              ? "XLleftScrollStyles"
              : "leftScrollStyles"
          }
        />
      </div>

      {/* CHENLE */}
      <div
        className={`${
          props.isDark ? "bg-(--color-dark-blue) text-(--color-white)" : ""
        }`}
      >
        <Member
          slides={renjunSlides}
          color={
            props.isDark ? "text-(--color-dark-red)" : "text-(--color-blue)"
          }
          scrollColor={
            props.isDark ? "bg-(--color-member-dark)" : "bg-(--color-blue)"
          }
          name={"chenle"}
          birthday={"November 22 2001"}
          zodiac={"Sagittarius"}
          blood={"A"}
          IMG={props.isDark ? dm_chenleFull : lm_chenleFull}
          mobileW={props.isDark ? "w-[300px]" : "w-[265px]"}
          fullW={props.isDark ? "w-[340px]" : "w-[320px]"}
          mobileT={
            props.isDark
              ? "member_mobileDRedTopRightTriangle "
              : "member_mobileBlueTopRightTriangle"
          }
          triangleStyles={
            props.windowWidth >= 1280
              ? props.isDark
                ? "member_fullDRedTopRightTriangle XLrightTriangleStyles"
                : "member_fullBlueTopRightTriangle XLrightTriangleStyles"
              : !props.isDark
              ? "member_desktopBlueTopRightTriangle rightTriangleStyles"
              : "member_desktopDRedTopRightTriangle rightTriangleStyles"
          }
          nameStyles={
            props.windowWidth >= 1280 ? "XLrightNameStyles" : "rightNameStyles"
          }
          imgStyles={
            props.windowWidth >= 1280 ? "XLrightImgStyles" : "rightImgStyles"
          }
          bioStyles={
            props.windowWidth >= 1280
              ? "XLrightBioStyles ml-[0.7em]"
              : "rightBioStyles ml-[0.7em]"
          }
          blurbStyles={
            props.windowWidth >= 1280
              ? "XLrightBlurbStyles"
              : "rightBlurbStyles"
          }
          scrollStyles={
            props.windowWidth >= 1280
              ? "XLrightScrollStyles"
              : "rightScrollStyles"
          }
        />
      </div>

      {/* JISUNG */}
      <div
        className={`${
          props.isDark ? "bg-(--color-blue) text-(--color-white)" : ""
        }`}
      >
        <Member
          slides={renjunSlides}
          color={
            props.isDark ? "text-(--color-yellow)" : "text-(--color-yellow)"
          }
          scrollColor={
            props.isDark ? "bg-(--color-member-light)" : "bg-(--color-yellow)"
          }
          name={"jisung"}
          birthday={"February 05 2002"}
          zodiac={"Aquarius"}
          blood={"O"}
          IMG={props.isDark ? dm_jisungFull : lm_jisungFull}
          mobileW={props.isDark ? "w-[300px]" : "w-[350px]"}
          fullW={props.isDark ? "w-[340px]" : "w-[350px]"}
          mobileT={"member_mobileYellowTopRightTriangle"}
          triangleStyles={
            props.windowWidth >= 1280
              ? "member_fullYellowBottomLeftTriangle XLleftTriangleStyles"
              : "member_desktopYellowBottomLeftTriangle leftTriangleStyles"
          }
          nameStyles={
            props.windowWidth >= 1280 ? "XLleftNameStyles" : "leftNameStyles"
          }
          imgStyles={
            props.windowWidth >= 1280 ? "XLleftImgStyles" : "leftImgStyles"
          }
          bioStyles={
            props.windowWidth >= 1280
              ? "XLleftBioStyles ml-[1em]"
              : "leftBioStyles"
          }
          blurbStyles={
            props.windowWidth >= 1280 ? "XLleftBlurbStyles" : "leftBlurbStyles"
          }
          scrollStyles={
            props.windowWidth >= 1280
              ? "XLleftScrollStyles"
              : "leftScrollStyles"
          }
        />
      </div>
    </>
  );
};

export default AllMembers;

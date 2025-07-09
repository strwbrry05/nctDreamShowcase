import React from "react";
import Socials from "./Socials";

import mark_pc from "../assets/images/lightMode/lm_markPC.png";
import Dmark_pc from "../assets/images/darkMode/dm_markPC.png";
import renjun_pc from "../assets/images/lightMode/lm_renjunPC.png";
import Drenjun_pc from "../assets/images/darkMode/dm_renjunPC.png";
import jeno_pc from "../assets/images/lightMode/lm_jenoPC.png";
import Djeno_pc from "../assets/images/darkMode/dm_jenoPC.png";
import haechan_pc from "../assets/images/lightMode/lm_haechanPC.png";
import Dhaechan_pc from "../assets/images/darkMode/dm_haechanPC.png";
import jaemin_pc from "../assets/images/lightMode/lm_jaeminPC.png";
import Djaemin_pc from "../assets/images/darkMode/dm_jaeminPC.png";
import chenle_pc from "../assets/images/lightMode/lm_chenlePC.png";
import Dchenle_pc from "../assets/images/darkMode/dm_chenlePC.png";
import jisung_pc from "../assets/images/lightMode/lm_jisungPC.png";
import Djisung_pc from "../assets/images/darkMode/dm_jisungPC.png";

const SocialsPC = (props) => {
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

  return (
    <>
      {props.isDark ? (
        <div className="bg-(--color-dark-blue)">
          <Socials pcs={dmPCs} isDark={props.isDark} />
        </div>
      ) : (
        <Socials pcs={lmPCs} />
      )}
    </>
  );
};

export default SocialsPC;

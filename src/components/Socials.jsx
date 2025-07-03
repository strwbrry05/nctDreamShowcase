import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaSpotify } from "react-icons/fa";

import Social from "./Social";
import mark_pc from "../assets/images/lightMode/lm_markPC.png";
import renjun_pc from "../assets/images/lightMode/lm_renjunPC.png";
import jeno_pc from "../assets/images/lightMode/lm_jenoPC.png";
import haechan_pc from "../assets/images/lightMode/lm_haechanPC.png";
import jaemin_pc from "../assets/images/lightMode/lm_jaeminPC.png";
import chenle_pc from "../assets/images/lightMode/lm_chenlePC.png";
import jisung_pc from "../assets/images/lightMode/lm_jisungPC.png";

import { DndContext } from "@dnd-kit/core";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import Draggable from "./Draggable";
import { useEffect, useState } from "react";

const Socials = () => {
  const [photocards, setPhotocards] = useState([
    {
      id: "mark",
      content: mark_pc,
      position: {
        x: 40,
        y: 21,
      },
      scale: 1,
      isSelected: false,
      z: 0,
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
  ]);

  useEffect(() => {
    const handleResize = () => {
      const _photocards = photocards.map((pc) => {
        const windowLimit = window.innerWidth - 300;
        if (pc.position.x > windowLimit) {
          pc.position.x = windowLimit;
        }
        return pc;
      });
      setPhotocards(_photocards);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [photocards]);

  function handleDragEnd(event) {
    const pc = photocards.find((x) => x.id === event.active.id);
    pc.position.x += (event.delta.x / window.innerWidth) * 100;
    pc.position.y += (event.delta.y / window.innerWidth) * 100;
    const _photocards = photocards.map((x) => {
      if (x.id === pc.id) return pc;
      return x;
    });
    setPhotocards(_photocards);
  }

  //   get working at some point
  //   function selectPC(id) {
  //     const _photocards = photocards.map((pc) => {
  //       if (pc.id == id) {
  //         pc.isSelected = !pc.isSelected;
  //         if (pc.isSelected) {
  //           pc.scale = 1;
  //           pc.z = 0;
  //         } else {
  //           pc.scale = 2;
  //           pc.position.x = 45;
  //           pc.position.y = 30;
  //           pc.z = 3;
  //         }
  //       }
  //       return pc;
  //     });
  //     setPhotocards(_photocards);
  //     console.log(_photocards);
  //   }

  return (
    <DndContext onDragEnd={handleDragEnd} modifiers={[restrictToParentElement]}>
      <div className="relative  z-2">
        <div
          className="z-3 flex flex-col justify-center items-center pt-[3em] pb-[3em] 
        xl:pt-[4em] xl:pb-[5em] "
        >
          <p
            className="hidden sm:block 
            font-(family-name:--font-text) font-bold "
          >
            move and click photocards
          </p>
          <p
            className="hidden sm:block 
            font-(family-name:--font-text) font-bold mb-[2em] "
          >
            (double click to select)
          </p>
          <div className="w-full flex flex-col justify-center items-center pt-[2em]">
            <Social icon={<FiTwitter />} name={"Twitter"} />
            <Social icon={<FiInstagram />} name={"Instagram"} />
            <Social icon={<FaTiktok />} name={"TikTok"} />
            <Social icon={<FaSpotify />} name={"Spotify"} />
            <Social icon={<FiYoutube />} name={"YouTube"} />
          </div>
          {photocards.map((pc) => (
            <Draggable
              styles={{
                position: "absolute",
                left: `${pc.position.x}%`,
                top: `${pc.position.y}%`,
              }}
              key={pc.id}
              id={pc.id}
              content={pc.content}
            ></Draggable>
          ))}
        </div>
      </div>
    </DndContext>
  );
};

export default Socials;

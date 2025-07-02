import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaSpotify } from "react-icons/fa";

import Social from "./Social";
import mark_pc from "../assets/images/lightMode/lm_markPC.png";
import renjun_pc from "../assets/images/lightMode/lm_renjunPC.png";

import { DndContext } from "@dnd-kit/core";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import Draggable from "./Draggable";
import Droppable from "./Droppable";
import { useEffect, useState } from "react";

const Socials = () => {
  const [photocards, setPhotocards] = useState([
    {
      id: "mark",
      content: mark_pc,
      position: {
        x: 50,
        y: 100,
      },
    },
    {
      id: "renjun",
      content: renjun_pc,
      position: {
        x: 100,
        y: 200,
      },
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
    pc.position.x += event.delta.x;
    pc.position.y += event.delta.y;
    const _photocards = photocards.map((x) => {
      if (x.id === pc.id) return pc;
      return x;
    });
    setPhotocards(_photocards);
  }

  return (
    <DndContext onDragEnd={handleDragEnd} modifiers={[restrictToParentElement]}>
      <div className="relative p-[2em]">
        <div className="flex flex-col justify-center items-center pt-[3em] pb-[3em] ">
          <p
            className="hidden sm:block 
            font-(family-name:--font-text) font-bold mb-[2em] "
          >
            move and click photocards
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
                left: `${pc.position.x}px`,
                top: `${pc.position.y}px`,
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

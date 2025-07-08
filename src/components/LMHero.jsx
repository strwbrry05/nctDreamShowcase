import React from "react";
import lm_Hero from "../assets/images/lightMode/lm_hero.png";
import lm_jisung from "../assets/images/lightMode/lm_jisungHero.png";
import lm_chenle from "../assets/images/lightMode/lm_chenleHero.png";
import lm_jaemin from "../assets/images/lightMode/lm_jaeminHero.png";
import lm_jeno from "../assets/images/lightMode/lm_jenoHero.png";
import lm_haechan from "../assets/images/lightMode/lm_haechanHero.png";
import lm_renjun from "../assets/images/lightMode/lm_renjunHero.png";
import lm_mark from "../assets/images/lightMode/lm_markHero.png";
import { motion } from "motion/react";

const LMHero = () => {
  return (
    <>
      <div className="flex justify-center">
        <img
          src={lm_Hero}
          alt="group"
          className="sm:absolute z-0 h-[320px] sm:h-[400px] md:h-[475px] lg:h-[550px] xl:h-[750px]"
        />
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.8, bounce: 0.5 },
          }}
          src={lm_jisung}
          alt="jisung"
          className="z-2 relative hover:cursor-pointer
        hidden
        sm:block sm:h-[400px] sm:left-[745px] sm:hover:scale-[1.1]
        md:h-[475px] md:left-[885px]
        lg:h-[550px] lg:left-[1030px]
        xl:h-[750px] xl:left-[1394px]  xl:hover:scale-[1.05]"
        />
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.7, bounce: 0.5 },
          }}
          src={lm_chenle}
          alt="chenle"
          className="z-1 relative hover:cursor-pointer
        hidden
        sm:block sm:h-[400px] sm:left-[475px] sm:hover:scale-[1.1]
        md:h-[475px] md:left-[565px]
        lg:h-[550px] lg:left-[660px]
        xl:h-[750px] xl:left-[890px]  xl:hover:scale-[1.05]"
        />
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.6, bounce: 0.5 },
          }}
          src={lm_jaemin}
          alt="jaemin"
          className="z-2 relative hover:cursor-pointer
        hidden
        sm:block sm:h-[270px] sm:left-[274px] sm:top-[135px] sm:hover:scale-[1.1]
        md:h-[320px] md:left-[325px] md:top-[160px]
        lg:h-[390px] lg:left-[380px] lg:top-[180px]
        xl:h-[500px] xl:left-[520px] xl:top-[260px]  xl:hover:scale-[1.05]"
        />
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.5, bounce: 0.5 },
          }}
          src={lm_jeno}
          alt="jaemin"
          className="z-1 relative hover:cursor-pointer
        hidden
        sm:block sm:h-[400px] sm:left-[35px] sm:hover:scale-[1.1]
        md:h-[475px] md:left-[42px]
        lg:h-[550px] lg:left-[40px]
        xl:h-[750px] xl:left-[68px]  xl:hover:scale-[1.05]"
        />
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          src={lm_haechan}
          alt="haechan"
          className="z-2 relative hover:cursor-pointer
        hidden
        sm:block sm:h-[400px] sm:left-[-215px] sm:hover:scale-[1.1]
        md:h-[475px] md:left-[-255px]
        lg:h-[550px] lg:left-[-303px]
        xl:h-[750px] xl:left-[-398px]  xl:hover:scale-[1.05]"
        />
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.3, bounce: 0.5 },
          }}
          src={lm_mark}
          alt="mark"
          className="z-2 relative hover:cursor-pointer
        hidden
        sm:block sm:h-[400px] sm:left-[-471px] sm:hover:scale-[1.1]
        md:h-[475px] md:left-[-557px]
        lg:h-[550px] lg:left-[-655px]
        xl:h-[750px] xl:left-[-878px]  xl:hover:scale-[1.05]"
        />
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.5, bounce: 0.5 },
          }}
          src={lm_renjun}
          alt="renjun"
          className="z-2 relative hover:cursor-pointer
        hidden
        sm:block sm:h-[290px] sm:top-[115px] sm:left-[-610px] sm:hover:scale-[1.1]
        md:h-[350px] md:top-[130px] md:left-[-728px]
        lg:h-[400px] lg:top-[155px] lg:left-[-850px]
        xl:h-[550px] xl:top-[205px] xl:left-[-1146px]  xl:hover:scale-[1.05]"
        />
      </div>
    </>
  );
};

export default LMHero;

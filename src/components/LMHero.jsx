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
import { Link } from "react-scroll";

const LMHero = () => {
  return (
    <>
      <div className="flex justify-center lg:pb-[38em] xl:pb-[50em]">
        <img
          src={lm_Hero}
          alt="group"
          className="sm:absolute z-0 h-[320px] sm:h-[400px] md:h-[475px] lg:h-[550px] xl:h-[750px]"
        />

        {/* className="z-2 relative hover:cursor-pointer
        hidden sm:block 
        bg-(--color-red)
        sm:h-[400px] sm:left-[745px] 
        md:h-[475px] md:left-[885px]
        lg:h-[550px] lg:left-[1030px]
        xl:h-[750px] xl:left-[1394px] xl:hover:scale-[1.05]" */}

        <div
          className="z-2 absolute 
          hover:cursor-pointer
          hidden sm:block"
        >
          <Link to="jisung" smooth={true} offset={-70}>
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.8, bounce: 0.5 },
              }}
              src={lm_jisung}
              alt="jisung"
              className="z-2 relative 
              sm:hover:scale-[1.1]
              sm:h-[400px] sm:left-[198px]
              md:h-[475px] md:left-[235px]
              lg:h-[550px] lg:left-[273px] 
              xl:h-[750px] xl:left-[371px] xl:hover:scale-[1.05]"
            />
          </Link>
        </div>

        <div
          className="z-2 absolute 
          hover:cursor-pointer
          hidden sm:block"
        >
          <Link to="chenle" smooth={true} offset={-70}>
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.7, bounce: 0.5 },
              }}
              src={lm_chenle}
              alt="chenle"
              className="z-1 relative
              sm:h-[400px] sm:left-[95px] sm:hover:scale-[1.1]
              md:h-[475px] md:left-[112px]
              lg:h-[550px] lg:left-[130px]
              xl:h-[750px] xl:left-[178px]  xl:hover:scale-[1.05]"
            />
          </Link>
        </div>

        <div
          className="z-2 absolute 
          hover:cursor-pointer
          hidden sm:block 
          xl:h-[750px]"
        >
          <Link to="jaemin" smooth={true} offset={-70}>
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.6, bounce: 0.5 },
              }}
              src={lm_jaemin}
              alt="jaemin"
              className="z-2 relative hover:cursor-pointer hidden sm:block
        sm:h-[270px] sm:left-[86px] sm:top-[135px] sm:hover:scale-[1.1]
        md:h-[320px] md:left-[104px] md:top-[160px]
        lg:h-[390px] lg:left-[126px] lg:top-[180px]
        xl:h-[500px] xl:left-[160px] xl:top-[260px]  xl:hover:scale-[1.05]"
            />
          </Link>
        </div>

        <div
          className="z-3 absolute 
          hover:cursor-pointer
          hidden sm:block 
          "
        >
          <Link to="jeno" smooth={true} offset={-70}>
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.5, bounce: 0.5 },
              }}
              src={lm_jeno}
              alt="jeno"
              className="z-3 relative hover:cursor-pointer hidden sm:block
            sm:h-[400px] sm:left-[35px] sm:hover:scale-[1.1]
        md:h-[475px] md:left-[42px]
        lg:h-[550px] lg:left-[40px]
        xl:h-[750px] xl:left-[23px]  xl:hover:scale-[1.05]"
            />
          </Link>
        </div>

        <div
          className="z-2 absolute 
          hover:cursor-pointer
          hidden sm:block 
          "
        >
          <Link to="haechan" smooth={true} offset={-70}>
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }}
              src={lm_haechan}
              alt="haechan"
              className="z-2 relative hover:cursor-pointer hidden sm:block 
              sm:h-[400px] sm:left-[-215px] sm:hover:scale-[1.1]
              md:h-[475px] md:left-[-255px]
              lg:h-[550px] lg:left-[-303px]
              xl:h-[750px] xl:left-[-177px]  xl:hover:scale-[1.05]"
            />
          </Link>
        </div>

        <div
          className="z-1 absolute 
          hover:cursor-pointer
          hidden sm:block 
          "
        >
          <Link to="mark" smooth={true} offset={-70}>
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.3, bounce: 0.5 },
              }}
              src={lm_mark}
              alt="mark"
              className="z-1 relative hover:cursor-pointer hidden sm:block 
              sm:h-[400px] sm:left-[-117px] sm:hover:scale-[1.1]
              md:h-[475px] md:left-[-138px]
              lg:h-[550px] lg:left-[-161px]
              xl:h-[750px] xl:left-[-300px]  xl:hover:scale-[1.05]"
            />
          </Link>
        </div>

        <div
          className="z-2 absolute 
          hover:cursor-pointer
          hidden sm:block 
          "
        >
          <Link to="renjun" smooth={true} offset={-70}>
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.5, bounce: 0.5 },
              }}
              src={lm_renjun}
              alt="renjun"
              className="z-2 relative hover:cursor-pointer hidden sm:block
              sm:h-[290px] sm:top-[115px] sm:left-[-88px] sm:hover:scale-[1.1]
              md:h-[350px] md:top-[130px] md:left-[-107px]
              lg:h-[400px] lg:top-[155px] lg:left-[-120px]
              xl:h-[550px] xl:top-[210px] xl:left-[-162px]  xl:hover:scale-[1.05]"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default LMHero;

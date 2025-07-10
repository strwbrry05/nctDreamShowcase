import React from "react";
import dm_Hero from "../assets/images/darkMode/dm_hero.png";
import dm_jisung from "../assets/images/darkMode/dm_jisungHero.png";
import dm_chenle from "../assets/images/darkMode/dm_chenleHero.png";
import dm_jaemin from "../assets/images/darkMode/dm_jaeminHero.png";
import dm_haechan from "../assets/images/darkMode/dm_haechanHero.png";
import dm_jeno from "../assets/images/darkMode/dm_jenoHero.png";
import dm_renjun from "../assets/images/darkMode/dm_renjunHero.png";
import dm_mark from "../assets/images/darkMode/dm_markHero.png";
import { motion } from "motion/react";
import { Link } from "react-scroll";

const DMHero = () => {
  return (
    <>
      <div className="flex justify-center sm:pb-[16em] md:pb-[20em] lg:pb-[23em] xl:pb-[30em]">
        <img
          src={dm_Hero}
          alt="group"
          className="sm:absolute z-0 h-[320px] sm:h-[400px] md:h-[475px] lg:h-[550px] xl:h-[750px]"
        />

        <div
          className="z-1 absolute 
          hover:cursor-pointer
          hidden sm:block 
          xl:h-[490px]"
        >
          <Link to="jisung" smooth={true} offset={-70}>
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.3, bounce: 0.5 },
              }}
              src={dm_jisung}
              alt="jisung"
              className="z-1 relative 
              sm:h-[260px] sm:left-[-205px] sm:top-[15px] sm:hover:scale-[1.1]
              md:h-[300px] md:left-[-244px] md:top-[20px]
              lg:h-[355px] lg:left-[-281px] lg:top-[21px]
              xl:h-[490px] xl:left-[-383px] xl:top-[30px]  xl:hover:scale-[1.05]"
            />
          </Link>
        </div>

        <div
          className="z-2 absolute 
          hover:cursor-pointer
          hidden sm:block 
          xl:h-[205px]"
        >
          <Link to="chenle" smooth={true} offset={-70}>
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.5, bounce: 0.5 },
              }}
              src={dm_chenle}
              alt="chenle"
              className="z-2 relative 
              sm:h-[120px] sm:left-[-15px] sm:top-[49px] sm:hover:scale-[1.1]
              md:h-[135px] md:left-[-19px] md:top-[60px]
              lg:h-[150px] lg:left-[-21px] lg:top-[70px]
              xl:h-[205px] xl:left-[-28px] xl:top-[95px]  xl:hover:scale-[1.05]"
            />
          </Link>
        </div>

        <div
          className="z-2 absolute 
          hover:cursor-pointer
          hidden sm:block 
          xl:h-[250px]"
        >
          <Link to="jaemin" smooth={true} offset={-70}>
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.9, bounce: 0.5 },
              }}
              src={dm_jaemin}
              alt="jaemin"
              className="z-2 relative 
              sm:h-[135px] sm:left-[190px] sm:top-[63px] sm:hover:scale-[1.1]
              md:h-[160px] md:left-[226px] md:top-[75px]
              lg:h-[180px] lg:left-[262px] lg:top-[90px]
              xl:h-[250px] xl:left-[358px] xl:top-[120px]  xl:hover:scale-[1.05]"
            />
          </Link>
        </div>

        <div
          className="z-1 absolute 
          hover:cursor-pointer
          hidden sm:block 
          xl:h-[510px]"
        >
          <Link to="jeno" smooth={true} offset={-70}>
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.8, bounce: 0.5 },
              }}
              src={dm_jeno}
              alt="jaemin"
              className="z-1 relative
              sm:h-[265px] sm:left-[106px] sm:top-[135px] sm:hover:scale-[1.1]
              md:h-[320px] md:left-[124px] md:top-[157px]
              lg:h-[380px] lg:left-[147px] lg:top-[180px]
              xl:h-[510px] xl:left-[199px] xl:top-[248px]  xl:hover:scale-[1.05]"
            />
          </Link>
        </div>

        <div
          className="z-1 absolute 
          hover:cursor-pointer
          hidden sm:block 
          xl:h-[250px]"
        >
          <Link to="haechan" smooth={true} offset={-70}>
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.7, bounce: 0.5 },
              }}
              src={dm_haechan}
              alt="haechan"
              className="z-1 relative 
              sm:h-[150px] sm:left-[70px] sm:top-[5px] sm:hover:scale-[1.1]
              md:h-[155px] md:left-[85px] md:top-[25px]
              lg:h-[185px] lg:left-[100px] lg:top-[25px]
              xl:h-[250px] xl:left-[135px] xl:top-[36px]  xl:hover:scale-[1.05]"
            />
          </Link>
        </div>

        <div
          className="z-1 absolute 
          hover:cursor-pointer
          hidden sm:block 
          xl:h-[350px]"
        >
          <Link to="mark" smooth={true} offset={-70}>
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.6, bounce: 0.5 },
              }}
              src={dm_mark}
              alt="mark"
              className="z-1 relative 
              sm:h-[190px] sm:left-[22px] sm:top-[44px] sm:hover:scale-[1.1]
              md:h-[225px] md:left-[26px] md:top-[50px]
              lg:h-[270px] lg:left-[28px] lg:top-[50px]
              xl:h-[350px] xl:left-[40px] xl:top-[85px]  xl:hover:scale-[1.05]"
            />
          </Link>
        </div>

        <div
          className="z-1 absolute 
          hover:cursor-pointer
          hidden sm:block 
          xl:h-[350px]"
        >
          <Link to="renjun" smooth={true} offset={-70}>
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }}
              src={dm_renjun}
              alt="renjun"
              className="z-2 relative hover:cursor-pointer
              hidden
              sm:block sm:h-[148px] sm:top-[62px] sm:left-[-87px] sm:hover:scale-[1.1]
              md:h-[168px] md:top-[78px] md:left-[-103px]
              lg:h-[200px] lg:top-[87px] lg:left-[-120px]
              xl:h-[275px] xl:top-[120px] xl:left-[-165px]  xl:hover:scale-[1.05]"
            />
          </Link>
        </div>
      </div>
      <div className="sm:pb-[12em] md:pb-[13em] lg:pb-[11em] xl:pb-[18em]"></div>
    </>
  );
};

export default DMHero;

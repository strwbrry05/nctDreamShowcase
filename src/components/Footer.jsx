import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className={`flex flex-col font-(family-name:--font-text) 
        text-center p-[3em]
        justify-center
        items-center footer_lightMode text-(--color-white)`}
    >
      <div>
        <p className="font-(family-name:--font-solid) text-[2.5rem]">
          strwbrry05
        </p>
        <p className="mt-[-0.5em] font-light">Jacqueline Molina</p>
      </div>
      <div className="flex justify-center items-center text-[2.5rem] mt-[0.75em] mb-[1em]">
        <FiGithub
          className={`rounded p-1.5 mr-[0.5em] footer_darkMode text-(--color-black)`}
        />
        <FiLinkedin
          className={`rounded p-1.5 mr-[0.5em] footer_darkMode text-(--color-black)`}
        />
        <FaRegHeart
          className={`rounded p-1.5 mr-[0.5em] footer_darkMode text-(--color-black)`}
        />
      </div>
      <p className="font-light text-[0.75rem]">
        &copy; 2025 All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;

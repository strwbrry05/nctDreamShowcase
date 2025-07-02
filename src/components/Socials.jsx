import React from "react";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaSpotify } from "react-icons/fa";

import Social from "./Social";

const Socials = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-[3em] pb-[2em]">
      <p className="font-(family-name:--font-text) font-bold mb-[2em] ">
        move and click photocards
      </p>
      <div>
        <Social icon={<FiTwitter />} name={"Twitter"} />
        <Social icon={<FiInstagram />} name={"Instagram"} />
        <Social icon={<FaTiktok />} name={"TikTok"} />
        <Social icon={<FaSpotify />} name={"Spotify"} />
        <Social icon={<FiYoutube />} name={"YouTube"} />
      </div>
    </div>
  );
};

export default Socials;

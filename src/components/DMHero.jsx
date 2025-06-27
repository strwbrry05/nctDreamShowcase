import React from "react";
import dm_Hero from "../assets/images/darkMode/dm_hero.png";

const DMHero = () => {
  return (
    <div className="flex justify-center">
      <img
        src={dm_Hero}
        alt="group"
        className="h-[320px] sm:h-[400px] md:h-[475px] lg:h-[550px] xl:h-[750px]"
      />
    </div>
  );
};

export default DMHero;

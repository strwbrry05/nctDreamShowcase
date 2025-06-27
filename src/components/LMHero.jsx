import React from "react";
import lm_Hero from "../assets/images/lightMode/lm_hero.png";

const LMHero = () => {
  return (
    <div className="flex justify-center">
      <img
        src={lm_Hero}
        alt="group"
        className="h-[320px] sm:h-[400px] md:h-[475px] lg:h-[550px] xl:h-[750px]"
      />
    </div>
  );
};

export default LMHero;

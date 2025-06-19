import React from "react";

const NavBurger = (props) => {
  return (
    <div
      className={`
    ${
      props.isActive
        ? "translate-y-[0vh] transition transform duration-500 ease-in"
        : "translate-y-[-100vh] transition transform duration-500 ease-in"
    }

    bg-(--color-black) text-(--color-gray) font-(family-name:--font-text)
    font-light pt-[1.25em] pb-[1.25em]
    flex justify-center flex-col items-center shadow-[0_3px_3px_rgba(0,0,0,0.5)]`}
    >
      <h2
        className="mb-[1em] cursor-pointer
      hover:font-semibold hover:text-(--color-white)"
      >
        Home
      </h2>
      <h2 className="mb-[1em] hover:font-semibold hover:text-(--color-white)">
        Members
      </h2>
      <h2 className="mb-[1em]">Discography</h2>
      <h2 className="mb-[1em]">Photocards</h2>
      <h2 className="mb-[1em]">Q&A</h2>
      <h2 className="mb-[1em]">YouTube</h2>
    </div>
  );
};

export default NavBurger;

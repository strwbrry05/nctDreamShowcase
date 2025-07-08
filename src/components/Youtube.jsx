import React from "react";

const Youtube = () => {
  return (
    <div className="flex justify-center items-center p-[3em]">
      <iframe
        width="950"
        height="615"
        src="https://www.youtube.com/embed/qQOj-oKhItw?si=f5hKrLO-vAEJRlsS&amp;list=PLWznbX9Vr47iH6urWyx0mxdLXV7VOANDl&autoplay=1&muted"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Youtube;

"use client";

import React from "react";

const Videobackground = () => {
  return (
    <video
      autoPlay
      muted
      loop
      style={{
        // position: "fixed",
        zIndex: -1,
        width: "100vw",
        height: "100vh",
        objectFit: "cover",
      }}
    >
      <source src="/solar.mp4" type="video/mp4" />
    </video>
  );
};

export default Videobackground;

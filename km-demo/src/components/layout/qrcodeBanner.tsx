'use client';
import React from "react";

const Banner = () => {

  return (
    <div
      className="bannerContainer relative"
      style={{
        backgroundImage: `url('/2560x480_NEW_KM_social_YT_Cover_02.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{
          zIndex: 1, // Ensure the overlay is above the background
        }}
      ></div>

      {/* Empty content area (QR code and text removed) */}
      <div
        className="qrcontainer relative"
        style={{ zIndex: 2 }}
      ></div>
    </div>
  );
};

export default Banner;

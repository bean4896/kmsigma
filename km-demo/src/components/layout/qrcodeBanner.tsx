'use client';
import ImgQrcode from "@/assets/demosite-qr-km-website.jpg";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/constent";
import React from "react";

const Banner = () => {
  const { selectedLanguage } = useLanguage();

  // Get the translated top banner message based on the selected language
  const topBannerMessage =
    translations.topBannerMessage[selectedLanguage as keyof typeof translations.topBannerMessage] ||
    translations.topBannerMessage.English;

  // Split the message by newline characters to retain <br /> for line breaks
  const bannerLines = topBannerMessage.split("\n");

  return (
    <div
      className="bannerContainer relative"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/detatjujs/image/upload/v1746775517/Cropped_png_NEW_KM_social_YT_Cover_roq0i9.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        minHeight: "400px",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{
          zIndex: 1, // Ensure the overlay is above the background
        }}
      ></div>

      {/* Content */}
      <div className="qrcontainer flex items-center ml-10 p-4 relative" style={{ zIndex: 2 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex items-center mt-[100px] lg:mt-[0px]">
            <h3 className="text-white text-left title-banner leading-snug">
              {bannerLines.map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </h3>
          </div>
          <div className="flex items-center">
            <img
              src={ImgQrcode.src} // Resolved path for the image
              alt="QR Code"
              className="qrcodeImg"
              style={{
                width: "100%", // Adjust styles as needed
                height: "auto",
                maxWidth: "200px", // Optional: Limit maximum width
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

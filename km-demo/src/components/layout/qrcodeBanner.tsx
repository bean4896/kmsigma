'use client'
import Image from "next/image";
import ImgQrcode from "@/assets/demosite-qr-km-website.jpg";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/constent";
import React from "react";

const Banner = () => {
  const { selectedLanguage } = useLanguage();

  // Get the translated top banner message based on the selected language
  const topBannerMessage = translations.topBannerMessage[selectedLanguage as keyof typeof translations.topBannerMessage]
    || translations.topBannerMessage.English;

  // Split the message by newline characters to retain <br /> for line breaks
  const bannerLines = topBannerMessage.split('\n');
  return (
    <div
      className="bannerContainer"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/detatjujs/image/upload/v1713507584/top_banner_zle1vn.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="qrcontainer flex items-center ml-10 p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex items-center">
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
            <Image
              src={ImgQrcode}
              alt="QR Code"
              width="2000"
              height="2000"
              className="qrcodeImg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
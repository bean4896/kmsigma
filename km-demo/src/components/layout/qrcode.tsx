'use client'
import React from "react";
import Image from "next/image";
import ImgQrcode from "@/assets/sale_QRcode.png";
import Refresh from "@/components/ui/refresh";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/constent";

const QrCode = () => {
  const { selectedLanguage } = useLanguage();

  // Get the translated footer message based on the selected language
  const footerMessage = translations.footerMessage[selectedLanguage as keyof typeof translations.footerMessage]
    || translations.footerMessage.English;

  const handleRefresh = () => {
    window.location.reload();
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex justify-center items-center mt-8">
      <div className="flex flex-col justify-center items-center">
        <Image
          className="qrcodeImg rounded-lg"
          src={ImgQrcode}
          alt="QR Code"
          width={2000}
          height={2000}
        />
        <div className="text-white title-banner mb-6">
          {footerMessage} {/* Use the localized message */}
        </div>
        {/* Optionally, you can add the Refresh button or component here */}
      </div>
    </div>
  );
};

export default QrCode;

'use client'
import React from "react";
import ImgQrcode from "@/assets/demosite-qr-sales-email.jpg";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/constent";

const QrCode = () => {
  const { selectedLanguage } = useLanguage();

  // Get the translated footer message based on the selected language
  const footerMessage = translations.footerMessage[selectedLanguage as keyof typeof translations.footerMessage]
    || translations.footerMessage.English;

  const qrCodeSrc = ImgQrcode.src as string; // Convert ImgQrcode to string

  return (
    <div className="flex justify-center items-center mt-8">
      <div className="flex flex-col justify-center items-center">
        <img
          className="qrcodeImg rounded-lg"
          src={qrCodeSrc} // Use the converted string
          alt="QR Code"
          width="500"
          height="500"
        />
        <div className="text-white text-center title-banner mb-6 px-4">
          {footerMessage} {/* Use the localized message */}
        </div>
      </div>
    </div>
  );
};

export default QrCode;

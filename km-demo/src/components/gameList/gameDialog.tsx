// components/gameList/GameDialog.tsx

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { GameDialogProps } from "@/lib/types";
import EnglishFlag from "@/assets/Flag_of_the_United_Kingdom.svg";
import SpanFlag from "@/assets/Flag_of_Spain.svg";
import BrazilFlag from "@/assets/Flag_of_Brazil.svg";
import ChinaFlag from "@/assets/Flag_of_China.svg";
import BackBtn from "@/assets/btn_back.png";
import "../../app/iframe-styles.css";

const GameDialog: React.FC<GameDialogProps & { selectedLanguage: string }> = ({ onClose, langProps, selectedLanguage }) => {
  // Initialize language state with the selectedLanguage prop
  const [currentLanguage, setCurrentLanguage] = useState<string>(selectedLanguage);

  const handleChangeLanguage = (language: string) => {
    setCurrentLanguage(language);
  };

  useEffect(() => {
    // Update current language if the selectedLanguage prop changes
    setCurrentLanguage(selectedLanguage);
  }, [selectedLanguage]);

  useEffect(() => {
    // Disable scrolling when the modal is open
    document.body.style.overflow = "hidden";

    return () => {
      // Enable scrolling when the modal is closed
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const renderFlag = (language: string) => {
    switch (language.toLowerCase()) {
      case "english":
        return (
          <>
            <Image className="h-6 w-6 object-cover rounded-full flag" src={EnglishFlag} alt="English" />
            <span className="ml-2">English</span>
          </>
        );
      case "spanish":
        return (
          <>
            <Image className="h-6 w-6 object-cover rounded-full flag" src={SpanFlag} alt="Spanish" />
            <span className="ml-2">Español</span>
          </>
        );
      case "portuguese":
        return (
          <>
            <Image className="h-6 w-6 object-cover rounded-full flag" src={BrazilFlag} alt="Portuguese" />
            <span className="ml-2">Português</span>
          </>
        );
      case "chinese":
        return (
          <>
            <Image className="h-6 w-6 object-cover rounded-full flag" src={ChinaFlag} alt="Chinese" />
            <span className="ml-2">中文</span>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div className="fixed inset-0 bg-black" onClick={handleOverlayClick}></div>
      <div className={`dialogContainer relative mx-auto w-[100%] sm:h-auto rounded-lg ${langProps && !langProps[currentLanguage]?.showScreenshot ? "bg-transparent" : ""}`}>
        <div className="flex ml-4 gap-4">
          {langProps && !langProps[currentLanguage]?.showScreenshot && (
            <>
              {["English", "Chinese", "Portuguese", "Spanish"]
                .filter((lang) => langProps[lang])
                .map((lang) => (
                  <button
                    key={lang}
                    className={`text-sm font-medium px-3 rounded flex items-center ${currentLanguage === lang ? "bg-neutral-600 text-white" : "bg-neutral-800 text-white"
                      }`}
                    onClick={() => handleChangeLanguage(lang)}
                  >
                    {renderFlag(lang)}
                  </button>
                ))}
            </>
          )}
        </div>

        <div className="mt-4">
          {langProps && (
            <>
              {langProps[currentLanguage]?.iframeUrl ? (
                <div className="iframeContainer" style={{ backgroundColor: "black" }}>
                  <iframe
                    id="gameIframe"
                    src={langProps[currentLanguage]?.iframeUrl}
                    className="w-[100vw] h-[90vh] z-100 iframeGame"
                  ></iframe>
                </div>
              ) : langProps[currentLanguage]?.showScreenshot ? (
                <div className="screenshotContainer max-h-[87vh] flex flex-col justify-center items-center">
                  <Image
                    src={langProps[currentLanguage]?.screenshotUrl as string}
                    alt="Screenshot"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-auto screenshotImg rounded-xl"
                  />
                  <div onClick={onClose}>
                    <Image
                      src={BackBtn}
                      alt="Back Button"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="backImg mt-4"
                    />
                  </div>
                </div>
              ) : (
                <p className="text-white">Coming Soon</p>
              )}
            </>
          )}
        </div>

        {langProps && !langProps[currentLanguage]?.showScreenshot && (
          <div className="mt-6">
            <div className="flex justify-end">
              <button className="closeButton absolute -top-2 right-3" onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffffff" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameDialog;

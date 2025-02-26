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

const GameDialog: React.FC<GameDialogProps & { selectedLanguage: string }> = ({
  onClose,
  langProps,
  selectedLanguage,
}) => {
  // Initialize language state with the selectedLanguage prop
  const [currentLanguage, setCurrentLanguage] =
    useState<string>(selectedLanguage);

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
            <Image
              className="h-6 w-6 object-cover rounded-full flag"
              src={EnglishFlag}
              alt="English"
            />
            <span className="ml-2">English</span>
          </>
        );
      case "spanish":
        return (
          <>
            <Image
              className="h-6 w-6 object-cover rounded-full flag"
              src={SpanFlag}
              alt="Spanish"
            />
            <span className="ml-2">Español</span>
          </>
        );
      case "portuguese":
        return (
          <>
            <Image
              className="h-6 w-6 object-cover rounded-full flag"
              src={BrazilFlag}
              alt="Portuguese"
            />
            <span className="ml-2">Português</span>
          </>
        );
      case "chinese":
        return (
          <>
            <Image
              className="h-6 w-6 object-cover rounded-full flag"
              src={ChinaFlag}
              alt="Chinese"
            />
            <span className="ml-2">中文</span>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black bg-opacity-90"
        onClick={handleOverlayClick}
      ></div>
      <div
        className={`dialogContainer relative mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 rounded-lg ${
          langProps && !langProps[currentLanguage]?.showScreenshot
            ? "bg-transparent"
            : ""
        }`}
      >
        <div className="flex ml-2 sm:ml-4 gap-2 sm:gap-4 pt-4">
          {langProps && !langProps[currentLanguage]?.showScreenshot && (
            <>
              {["English", "Chinese", "Portuguese", "Spanish"]
                .filter((lang) => langProps[lang])
                .map((lang) => (
                  <button
                    key={lang}
                    className={`text-sm font-medium px-2 sm:px-3 py-1 rounded flex items-center ${
                      currentLanguage === lang
                        ? "bg-neutral-600 text-white"
                        : "bg-neutral-800 text-white"
                    }`}
                    onClick={() => handleChangeLanguage(lang)}
                  >
                    {renderFlag(lang)}
                  </button>
                ))}
            </>
          )}
        </div>

        <div className="mt-2 sm:mt-4">
          {langProps && (
            <>
              {langProps[currentLanguage]?.iframeUrl ? (
                <div
                  className="iframeContainer"
                  style={{ backgroundColor: "black" }}
                >
                  <iframe
                    id="gameIframe"
                    src={langProps[currentLanguage]?.iframeUrl}
                    className="w-full h-[80vh] md:h-[85vh] lg:h-[90vh] z-100 iframeGame rounded-lg"
                  ></iframe>
                </div>
              ) : langProps[currentLanguage]?.showScreenshot ? (
                <div className="screenshotContainer flex flex-col justify-center items-center w-full h-screen bg-black">
                  <div className="max-w-full max-h-[85vh] md:max-h-[90vh] px-2 sm:px-4 md:px-6">
                    <Image
                      src={langProps[currentLanguage]?.screenshotUrl as string}
                      alt="Screenshot"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="screenshotImg object-contain max-w-full max-h-full rounded-lg"
                    />
                  </div>
                  <div onClick={onClose} className="mt-4 mb-6 cursor-pointer">
                    <Image
                      src={BackBtn}
                      alt="Back Button"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="backImg w-12 h-12 sm:w-16 sm:h-16"
                    />
                  </div>
                </div>
              ) : (
                <div className="flex justify-center items-center h-32">
                  <p className="text-white text-lg font-medium">Coming Soon</p>
                </div>
              )}
            </>
          )}
        </div>

        {langProps && !langProps[currentLanguage]?.showScreenshot && (
          <div className="mt-2 sm:mt-4">
            <div className="flex justify-end">
              <button
                className="closeButton absolute top-2 right-2 sm:top-0 sm:right-3"
                onClick={onClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#ffffff"
                  className="w-8 h-8 sm:w-10 sm:h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
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
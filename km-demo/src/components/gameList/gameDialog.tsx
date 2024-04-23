import React, { useEffect, useState } from "react";
import GameData from "@/lib/data";
import Image from "next/image";
import EnglishFlag from "@/assets/Flag_of_the_United_Kingdom.svg";
import SpanFlag from "@/assets/Flag_of_Spain.svg";
import BrazilFlag from "@/assets/Flag_of_Brazil.svg";
import BackBtn from "@/assets/btn_back.png";

interface GameDialogProps {
  gameName: string;

  onClose: () => void;
  langProps: {
    [key: string]: {
      gameName: string;
      iframeUrl: string;
      gameUrl: string;
    };
  };
  game: {
    id: number;
    gameName: string;
    tags: string[];
    category: string;
    thumbnail: string;
    langProps: {
      [key: string]: {
        gameName: string;
        iframeUrl: string;
        gameUrl: string;
      };
    };
    isFeatured: boolean;
  };
}

const GameDialog: React.FC<GameDialogProps> = ({ gameName, onClose }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English");
  const [gameData, setGameData] = useState<any>(null);

  useEffect(() => {
    // Disable scrolling when the modal is open
    document.body.style.overflow = "hidden";

    return () => {
      // Enable scrolling when the modal is closed
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    setGameData(GameData.find((data) => data.gameName === gameName) || null);
  }, [gameName]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Close the modal only if the click is outside the dialog content
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
      case "brazil":
        return (
          <>
            <Image
              className="h-6 w-6 object-cover rounded-full flag"
              src={BrazilFlag}
              alt="Brazil"
            />
            <span className="ml-2">Português</span>
          </>
        );
      default:
        return null;
    }
  };

  const langProps = gameData?.langProps || null;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black"
        onClick={handleOverlayClick}
      ></div>
      <div
        className={`dialogContainer relative mx-auto w-[100%] sm:h-auto rounded-lg scrollbar-thumb-neutral-500 scrollbar-track-neutral-300 ${
          langProps && !langProps[selectedLanguage]?.showScreenshot
            ? "bg-transparent"
            : ""
        }`}
      >
        <div className="flex ml-4 gap-4">
          {langProps && !langProps[selectedLanguage]?.showScreenshot && (
            <>
              {Object.keys(langProps).map((lang) => {
                let languageName;
                switch (lang) {
                  case "spanish":
                    languageName = "Español";
                    break;
                  case "brazil":
                    languageName = "Português";
                    break;
                  default:
                    languageName = lang;
                }
                return (
                  <button
                    key={lang}
                    className={`text-sm font-medium px-3 rounded flex items-center ${
                      selectedLanguage === lang
                        ? "bg-neutral-600 text-white"
                        : "bg-neutral-800 text-white"
                    }`}
                    onClick={() => setSelectedLanguage(lang)}
                  >
                    {renderFlag(lang)}
                  </button>
                );
              })}
            </>
          )}
        </div>

        <div className="mt-4">
          {langProps && (
            <>
              {/* <h2 className="text-xl font-bold text-white mb-2">
                {langProps[selectedLanguage]?.gameName}
              </h2> */}
              {langProps[selectedLanguage]?.iframeUrl ? (
                <div className="iframeContainer">
                  <iframe
                    src={langProps[selectedLanguage]?.iframeUrl}
                    allowFullScreen={true}
                    frameBorder="0"
                    scrolling="auto"
                    className="w-[100vw] h-[90vh] z-100"
                  ></iframe>
                </div>
              ) : langProps[selectedLanguage]?.showScreenshot ? (
                <div className="screenshotContainer max-h-[87vh] flex flex-col justify-center items-center">
                  <div>
                    <Image
                      src={langProps[selectedLanguage]?.screenshotUrl}
                      alt="Screenshot"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "80vw", height: "auto" }} // optional
                      className="h-auto rounded-xl"
                    />
                  </div>
                  <div onClick={onClose}>
                    <Image
                      src={BackBtn}
                      alt="back Btn"
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

        {langProps && !langProps[selectedLanguage]?.showScreenshot && (
          <div className="mt-6">
            <div className="flex justify-end">
              <button
                className="closeButton absolute -top-2 right-3"
                onClick={onClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#ffffff"
                  className="w-10 h-10"
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

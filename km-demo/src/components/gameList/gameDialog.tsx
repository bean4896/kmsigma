import React, { useEffect, useState } from "react";
import GameData from "@/lib/data";
import Image from "next/image";
import EnglishFlag from "@/assets/Flag_of_the_United_Kingdom.svg";
import SpanFlag from "@/assets/Flag_of_Spain.svg";
import BrazilFlag from "@/assets/Flag_of_Brazil.svg";

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
          <Image
            className="h-6 w-6 object-cover rounded-full"
            src={EnglishFlag}
            alt="English"
          />
        );
      case "spanish":
        return (
          <Image
            className="h-6 w-6 object-cover rounded-full"
            src={SpanFlag}
            alt="Spanish"
          />
        );
      case "brazil":
        return (
          <Image
            className="h-6 w-6 object-cover rounded-full"
            src={BrazilFlag}
            alt="Brazil"
          />
        );
      default:
        return null;
    }
  };

  const langProps = gameData?.langProps || null;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black opacity-80"
        onClick={handleOverlayClick}
      ></div>
      <div className="dialogContainer relative bg-neutral-800 p-6 mx-auto w-[92%] sm:h-auto overflow-y-auto scrollbar-thumb rounded-lg scrollbar-thumb-neutral-500 scrollbar-track-neutral-300">
        <div className="flex">
          {langProps && (
            <>
              {Object.keys(langProps).map((lang) => {
                let languageName;
                if (lang === "spanish") {
                  languageName = "Español";
                } else if (lang === "brazil") {
                  languageName = "Português";
                } else {
                  languageName = lang;
                }
                return (
                  <button
                    key={lang}
                    className={`text-sm font-medium mr-2 px-2 py-1 rounded flex items-center ${
                      selectedLanguage === lang
                        ? "bg-neutral-600 text-white"
                        : "bg-neutral-800 text-white"
                    }`}
                    onClick={() => setSelectedLanguage(lang)}
                  >
                    {renderFlag(lang)}
                    <span className="ml-2">{languageName}</span>
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
                    className="w-full h-[65vh]"
                  ></iframe>
                </div>
              ) : langProps[selectedLanguage]?.showScreenshot ? (
                <div className="imageContainer max-w-[500px]">
                  <Image
                    src={langProps[selectedLanguage]?.screenshotUrl}
                    alt="Screenshot"
                    width={1024}
                    height={512}
                    className="w-full h-72 sm:w-full sm:h-auto"
                  />
                </div>
              ) : (
                <p className="text-white">Coming Soon</p>
              )}
            </>
          )}
        </div>

        <div className="mt-6">
          <div className="flex justify-end">
            <button
              className="closeButton absolute top-2 right-2"
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
      </div>
    </div>
  );
};

export default GameDialog;

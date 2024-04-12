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

const GameDialog: React.FC<GameDialogProps> = ({
  gameName,
  onClose,
}) => {
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
    <div className="fixed inset-0 z-10 flex items-center justify-center ">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={handleOverlayClick}
      ></div>
      <div className="relative bg-white p-6 mx-auto max-w-[1440px] w-full h-[90vh] sm:h-auto">
        <div className="flex">
          {langProps && (
            <>
              {Object.keys(langProps).map((lang) => (
                <button
                  key={lang}
                  className={`text-sm font-medium mr-2 px-2 py-1 rounded flex items-center ${
                    selectedLanguage === lang
                      ? "bg-blue-500 text-white"
                      : "bg-white border"
                  }`}
                  onClick={() => setSelectedLanguage(lang)}
                >
                  {renderFlag(lang)}
                  <span className="ml-2">{lang}</span>
                </button>
              ))}
            </>
          )}
        </div>

        <div className="mt-4">
          {langProps && (
            <>
              <h2 className="text-lg font-bold">
                {langProps[selectedLanguage]?.gameName}
              </h2>
              {langProps[selectedLanguage]?.iframeUrl ? (
                <div className="iframeContainer">
                  <iframe
                    src={langProps[selectedLanguage]?.iframeUrl}
                    allowFullScreen={true}
                    frameBorder="0"
                    scrolling="auto"
                    className="w-full h-[60vh]"
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
                <p>Coming Soon</p>
              )}
            </>
          )}
        </div>

        <div className="mt-6 flex justify-end">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameDialog;

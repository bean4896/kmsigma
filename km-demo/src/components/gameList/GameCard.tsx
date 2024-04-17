"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import GameDialog from "./gameDialog";
import EnglishFlag from "@/assets/Flag_of_the_United_Kingdom.svg";
import SpanFlag from "@/assets/Flag_of_Spain.svg";
import BrazilFlag from "@/assets/Flag_of_Brazil.svg";

interface GameCardProps {
  game: {
    id: number;
    gameName: string;
    tags: string[];
    category: string;
    thumbnail: string;
    langProps: {
      [key: string]: {
        gameName: string;
        gameUrl: string;
        iframeUrl: string;
        showScreenshot?: boolean;
        screenshotUrl?: string;
      };
    };
    isFeatured: boolean;
  };
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const { langProps } = game;

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

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
    console.log("Open dialog" + game.gameName );
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <div className="px-4 pt-4">
        <div
          className="trigger mb-2 cursor-pointer hover:scale-105"
          onClick={handleOpenDialog}
        >
          <Image
            src={game.thumbnail}
            width={1000}
            height={1000}
            alt={game.gameName}
            placeholder="blur"
            blurDataURL="data:..."
            className="w-full rounded-md hover:scale-105 duration-200"
          />
        </div>
        <div>
          <h3 className="text-lg text-white *:font-bold">{game.gameName}</h3>
        </div>

        {isDialogOpen && (
          <GameDialog
            game={game}
            gameName={game.gameName}
            langProps={game.langProps}
            onClose={handleCloseDialog}
          />
        )}

        <div>
          {langProps && (
            <div className="lang-flags flex py-2 gap-4">
              {Object.keys(langProps).map((language, index) => (
                <div key={index} className="flag">
                  {renderFlag(language)}
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <div className="flex flex-wrap">
            {game.tags.length > 0 ? (
              game.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm mr-2 px-2 py-1 rounded-md text-white bg-[#a4782c]"
                >
                  {tag}
                </span>
              ))
            ) : (
              <span className="text-white bg-[#a4782c]">No tags</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GameCard;

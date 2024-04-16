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
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <div className="p-4 mb-4">
        <div
          className="trigger mb-2 cursor-pointer hover:scale-105"
          onClick={handleOpenDialog}
        >
          <Image
            src={game.thumbnail}
            width={1000}
            height={1000}
            alt={game.gameName}
            className="w-full rounded-md hover:scale-105 duration-200"
          />
        </div>
        <div>
          <h3 className="text-lg text-white *:font-bold">
         {game.gameName}
          </h3>
          <p className="text-sm text-white">Game Category: {game.category}</p>
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
          <div className="flex flex-wrap mb-2">
            {game.tags.length > 0 ? (
              game.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm mr-2 mb-2 px-2 py-1 rounded-md bg-gray-200 text-gray-800"
                >
                  {tag}
                </span>
              ))
            ) : (
              <span className="text-gray-500">No tags</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GameCard;

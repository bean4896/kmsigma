// components/gameList/GameCard.tsx

"use client";
import React, { useState } from "react";
import Image from "next/image";
import GameDialog from "./gameDialog";
import { GameCardProps } from "@/lib/types";
import EnglishFlag from "@/assets/Flag_of_the_United_Kingdom.svg";
import SpanFlag from "@/assets/Flag_of_Spain.svg";
import BrazilFlag from "@/assets/Flag_of_Brazil.svg";
import ChinaFlag from "@/assets/Flag_of_China.svg";
import { useLanguage } from "@/context/LanguageContext"; // Import the useLanguage hook

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const { langProps } = game;
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { selectedLanguage } = useLanguage(); // Use the context

  const renderFlag = (language: string) => {
    switch (language.toLowerCase()) {
      case "english":
        return <Image className="h-6 w-6 object-cover rounded-full" src={EnglishFlag} alt="English" />;
      case "chinese":
        return <Image className="h-6 w-6 object-cover rounded-full" src={ChinaFlag} alt="Chinese" />;
      case "spanish":
        return <Image className="h-6 w-6 object-cover rounded-full" src={SpanFlag} alt="Spanish" />;
      case "portuguese":
        return <Image className="h-6 w-6 object-cover rounded-full" src={BrazilFlag} alt="Brazil" />;
      default:
        return null;
    }
  };

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <div className="pt-4">
        <div className="trigger mb-2 cursor-pointer hover:scale-101" onClick={handleOpenDialog}>
          <Image
            src={langProps[selectedLanguage]?.thumbnailUrl || ""}
            width={1000}
            height={1000}
            alt={game.gameName}
            placeholder="blur"
            blurDataURL="data:..."
            className="w-full rounded-[3%] hover:scale-105 duration-200"
          />
        </div>

        {isDialogOpen && (
          <GameDialog
            game={game}
            gameName={game.gameName}
            langProps={langProps}
            onClose={handleCloseDialog}
            selectedLanguage={selectedLanguage} // Pass selected language to GameDialog
          />
        )}

        <div>
          {game.tags.length > 0 && (
            <div className="flex flex-wrap">
              {game.tags.map((tag, index) => (
                <span key={index} className="text-[12px] tag mr-2 px-2 py-1 rounded-md text-white border-2 border-neutral-400">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GameCard;

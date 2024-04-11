"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import GameDialog from "./gameDialog";
interface GameCardProps {
  game: {
    id: number;
    gameName: string;
    tags: string[];
    category: string;
    thumbnail: string;
    iframeUrl: string;
    demoUrl: string;
  };
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
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
        <div className="trigger mb-2 cursor-pointer" onClick={handleOpenDialog}>
          <Image
            src={game.thumbnail}
            width={1000}
            height={1000}
            alt={game.gameName}
            className="w-full rounded-md"
          />
        </div>

        {isDialogOpen && (
          <GameDialog gameName={game.gameName} onClose={handleCloseDialog} />
        )}

        <div>
          <div className="flex flex-wrap mb-2">
            {game.tags.length > 0 ? (
              game.tags.map((tag, index) => (
                <span
                  key={index}
                  className="mr-2 mb-2 px-2 py-1 rounded-md bg-gray-200 text-gray-800"
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
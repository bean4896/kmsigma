import React from "react";
import GameCard from "@/components/ui/GameCard";

interface Game {
  id: number;
  gameName: string;
  tags: string[];
  category: string;
  thumbnail: string;
  iframeUrl: string;
  demoUrl: string;
}

interface GameListProps {
  gamesToShow: Game[];
}

const GameList: React.FC<GameListProps> = ({ gamesToShow }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {gamesToShow.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GameList;

import React from "react";
import GameCard from "@/components/gameList/GameCard";

interface Game {
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
    };
  };
  isFeatured: boolean;
}

interface GameListProps {
  gamesToShow: Game[];
}

const GameList: React.FC<GameListProps> = ({ gamesToShow }) => {
  return (
    <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {gamesToShow.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GameList;

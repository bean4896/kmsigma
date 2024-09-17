import React from "react";
import GameCard from "@/components/gameList/GameCard";
import { Game } from "@/lib/types";

interface GameListProps {
  gamesToShow: Game[];
}

const GameList: React.FC<GameListProps> = ({ gamesToShow }) => {
  // Sort the games by id
  const sortedGames = gamesToShow.sort((a, b) => a.id - b.id);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 px-10 m-auto">
      {sortedGames.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GameList;

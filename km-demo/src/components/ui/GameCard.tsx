import React from "react";

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
  return (
    <div className="p-4 mb-4">
      <div className="mb-2">
        <img
          src={game.thumbnail}
          alt={game.gameName}
          className="w-full rounded-md"
        />
      </div>
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
  );
};

export default GameCard;

'use client'
import React, { useState } from "react";
import GameData from "@/lib/data";
import FilterComponent from "@/components/gameList/FilterComponent";
import GameList from "@/components/gameList/GameList";
import { Skeleton } from "@/components/ui/skeleton";

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

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Get unique categories from game data
  const categories = Array.from(new Set(GameData.map((game) => game.category)));

  const handleSelectCategory = (category: string) => {
    setIsLoading(true);
    setSelectedCategory(category);
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  };

  const gamesToShow: Game[] = selectedCategory
    ? GameData.filter((game) => game.category === selectedCategory)
    : GameData;

  return (
    <main className="flex min-h-screen flex-col py-16 px-4">
      <FilterComponent
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      <div className="flex flex-wrap gap-10">
        {isLoading ? (
          <>
            {gamesToShow.map((game) => (
              <div className="OneSkeleton" key={game.id}>
                <div className="flex flex-col space-y-3">
                  <Skeleton
                    className="h-[125px] rounded-xl bg-stone-800 w-[22vw]"
                  />
                  <div className="space-y-2">
                    <Skeleton className="h-4 bg-stone-700" />
                    <Skeleton className="h-4 bg-stone-700" />
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <GameList gamesToShow={gamesToShow} />
        )}
      </div>
    </main>
  );
};

export default Home;

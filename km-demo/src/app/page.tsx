"use client";
import React, { useState } from "react";
import GameData from "@/lib/data";
import FilterComponent from "@/components/gameList/FilterComponent";
import GameList from "@/components/gameList/GameList";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Get unique categories from game data
  const categories = Array.from(new Set(GameData.map((game) => game.category)));

  const handleSelectCategory = (category) => {
    setIsLoading(true);
    setSelectedCategory(category);
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  };

  const gamesToShow = selectedCategory
    ? GameData.filter((game) => game.category === selectedCategory)
    : GameData;

  return (
    <main className="flex min-h-screen flex-col p-24">
      <FilterComponent
        categories={categories}
        onSelectCategory={handleSelectCategory}
      />
      <div className="flex flex-wrap gap-10">
        {isLoading ? (
          <>
            {gamesToShow.map((game) => (
              <div className="OneSkeleton" key={game.id}>
                <div className="flex flex-col space-y-3">
                  <Skeleton className="h-[125px] w-[22vw] rounded-xl" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[22vw]" />
                    <Skeleton className="h-4 w-[22vw]" />
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
}

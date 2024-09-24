"use client";
import React, { useState, useEffect, useMemo } from "react";
import GameList from "@/components/gameList/GameList";
import FilterComponent from "@/components/gameList/FilterComponent";
import LanguageFilter from "./LanguageFilter";
import { Skeleton } from "@/components/ui/skeleton";
import { Game, GameListWithFilterProps } from "@/lib/types";
import NewRelease from "../layout/newRelease";
import { useLanguage } from "@/context/LanguageContext"; // Import the useLanguage hook

const GameListWithFilter: React.FC<GameListWithFilterProps> = ({ games, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState("NEXT-GEN");
  const [isLoading, setIsLoading] = useState(false);
  const { selectedLanguage, setSelectedLanguage } = useLanguage(); // Use the context

  const handleSelectCategory = (category: string) => {
    setIsLoading(true);
    setSelectedCategory(category);
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  };

  const handleSelectLanguage = (language: string) => {
    setSelectedLanguage(language);
  };

  // Use useMemo to optimize gamesToShow calculation and add console log
  const gamesToShow = useMemo(() => {
    console.log("Recalculating gamesToShow");
    const filteredGames = games.filter(
      (game) =>
        (game.category === selectedCategory || selectedCategory === "") &&
        game.langProps[selectedLanguage]
    );
    console.log("Filtered Games: ", filteredGames);
    return filteredGames;
  }, [games, selectedCategory, selectedLanguage]);

  return (
    <>
      <FilterComponent
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      <NewRelease selectedCategory={selectedCategory} />
      <LanguageFilter selectedLanguage={selectedLanguage} onSelectLanguage={handleSelectLanguage} />
      <div>
        {/* skeleton */}
        {isLoading ? (
          <div className="px-10 mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {gamesToShow.map((game: Game) =>
              game.hide ? null : (
                <div className="OneSkeleton" key={game.id}>
                  <div className="flex flex-col space-y-3 ">
                    <Skeleton className="h-[8em] rounded-xl bg-stone-800" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 bg-stone-700" />
                      <Skeleton className="h-4 bg-stone-700" />
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        ) : (
          <GameList gamesToShow={gamesToShow.filter((game: Game) => !game.hide)} />
        )}
      </div>
    </>
  );
};

export default GameListWithFilter;

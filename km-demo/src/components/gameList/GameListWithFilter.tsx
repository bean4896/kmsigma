// components/gameList/GameListWithFilter.tsx

"use client";
import React, { useState, useEffect } from "react";
import GameList from "@/components/gameList/GameList";
import FilterComponent from "@/components/gameList/FilterComponent";
import LanguageFilter from "./LanguageFilter";
import { Skeleton } from "@/components/ui/skeleton";
import { Game, GameListWithFilterProps } from "@/lib/types";
import NewRelease from "../layout/newRelease";


const GameListWithFilter: React.FC<GameListWithFilterProps> = ({ games, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState("NEXT-GEN");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const overlayImage = document.getElementById("overlay-image");
    if (selectedCategory === "NEXT-GEN") {
      overlayImage?.setAttribute(
        "src",
        "https://res.cloudinary.com/detatjujs/image/upload/v1713428074/next_gen_bg_dkqcbe.png"
      );
    } else if (selectedCategory === "CLASSICS") {
      overlayImage?.setAttribute(
        "src",
        "https://res.cloudinary.com/detatjujs/image/upload/v1713428074/classics_bg_zjjid1.png"
      );
    } else {
      overlayImage?.setAttribute(
        "src",
        "https://res.cloudinary.com/detatjujs/image/upload/v1713428075/slots_bg_aq5eep.png"
      );
    }
  }, [selectedCategory]);

  const handleSelectCategory = (category: string) => {
    setIsLoading(true);
    setSelectedCategory(category);
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  };

  const handleSelectLanguage = (language: string) => {
    setSelectedLanguage(language);
  };

  const gamesToShow = games.filter(
    (game) =>
      (game.category === selectedCategory || selectedCategory === "") &&
      game.langProps[selectedLanguage]
  );

  return (
    <>
    <FilterComponent categories={categories} selectedCategory={selectedCategory} onSelectCategory={handleSelectCategory} />
    <NewRelease selectedCategory={selectedCategory} />
      <LanguageFilter selectedLanguage={selectedLanguage} onSelectLanguage={handleSelectLanguage} />
      <div>
        {isLoading ? (
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
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

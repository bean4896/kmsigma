"use client";
import React, { useState } from "react";
import GameData from "@/lib/data";
import FilterComponent from "@/components/gameList/FilterComponent";
import GameList from "@/components/gameList/GameList";
import { Skeleton } from "@/components/ui/skeleton";
import QrCode from "@/components/layout/qrcode";
import Banner from "@/components/layout/qrcodeBanner";
import NewRelease from "@/components/layout/newRelease";

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
      showScreenshot?: boolean;
      screenshotUrl?: string;
    };
  };
  isFeatured: boolean;
}

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("NEXT-GEN");
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

  const gamesToShow: any = GameData.filter(
    (game) => game.category === selectedCategory || selectedCategory === ""
  );

  return (
    <main className="flex min-h-screen flex-col px-4 max-w-[96vw] m-auto">
      <Banner />
      <FilterComponent
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      <NewRelease />
      <div className="">
        {isLoading ? (
          <>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {gamesToShow.map((game: Game) => (
                <div className="OneSkeleton mt-12" key={game.id}>
                  <div className="flex flex-col space-y-3 ">
                    <Skeleton className="h-[125px] rounded-xl bg-stone-800" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 bg-stone-700" />
                      <Skeleton className="h-4 bg-stone-700" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <GameList gamesToShow={gamesToShow} />
        )}
      </div>
      <QrCode />
    </main>
  );
};

export default Home;

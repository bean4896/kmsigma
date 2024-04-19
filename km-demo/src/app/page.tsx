"use client";
import React, { useState, useEffect } from "react";
import GameData from "@/lib/data";
import FilterComponent from "@/components/gameList/FilterComponent";
import GameList from "@/components/gameList/GameList";
import { Skeleton } from "@/components/ui/skeleton";
import QrCode from "@/components/layout/qrcode";
import Banner from "@/components/layout/qrcodeBanner";
import NewRelease from "@/components/layout/newRelease";
import Image from "next/image";

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
      overlayImage?.setAttribute("src", "https://res.cloudinary.com/detatjujs/image/upload/v1713428075/slots_bg_aq5eep.png");
    }
  }, [selectedCategory]);

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
    <div className="overlay-container">
    <main className="flex min-h-screen flex-col px-4 max-w-[96vw] m-auto">
      <Banner />
      <FilterComponent
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      <NewRelease selectedCategory={selectedCategory} />
      <div className="">
        {isLoading ? (
          <>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {gamesToShow.map((game: Game) => (
                <div className="OneSkeleton mt-12" key={game.id}>
                  <div className="flex flex-col space-y-3 ">
                    <Skeleton className="h-[8em] rounded-xl bg-stone-800" />
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
          <Image
          id="overlay-image"
          width={1000}
          height={1000}
          src=""
          alt=""
          className="overlay-image"
          style={{ pointerEvents: "none" }}
        />
        </div>
  );
};

export default Home;

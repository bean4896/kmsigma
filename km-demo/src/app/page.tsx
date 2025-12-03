import React from "react";
import GameData from "@/lib/data";
import GameListWithFilter from "@/components/gameList/GameListWithFilter";
import Banner from "@/components/layout/qrcodeBanner";
import NewRelease from "@/components/layout/newRelease";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Home: React.FC = () => {
  // Get unique categories from game data
  const categories = Array.from(new Set(GameData.map((game) => game.category)));

  return (
    <div className="overlay-container">
      <Banner />
      <main className="flex min-h-screen flex-col max-w-[100vw] m-auto">
        <GameListWithFilter games={GameData} categories={categories} />
        <div className="mt-auto flex flex-col items-center gap-4 my-6">
          <Button
            asChild
            className="px-8 bg-white text-black hover:bg-white/90"
          >
            <a
              href="https://kingmidasgames.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discover more at KingMidas Games
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="px-8 bg-white text-black hover:bg-white/90"
          >
            <a
              href="https://www.jotform.com/242482741492460"
              target="_blank"
              rel="noopener noreferrer"
            >
              Speak to us today
            </a>
          </Button>
        </div>
      </main>
      {/* <Image
        id="overlay-image"
        width={1000}
        height={1000}
        src=""
        alt=""
        className="overlay-image"
        style={{ pointerEvents: "none" }}
      /> */}
    </div>
  );
};

export default Home;
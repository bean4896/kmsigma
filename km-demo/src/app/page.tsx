import React, { useState, useEffect } from "react";
import GameData from "@/lib/data";
import GameListWithFilter from "@/components/gameList/GameListWithFilter";
import QrCode from "@/components/layout/qrcode";
import Banner from "@/components/layout/qrcodeBanner";
import NewRelease from "@/components/layout/newRelease";
import Image from "next/image";



const Home: React.FC = () => {
  // Get unique categories from game data
  const categories = Array.from(new Set(GameData.map((game) => game.category)));

  return (
    <div className="overlay-container">
      <Banner />
      <main className="flex min-h-screen flex-col max-w-[100vw] m-auto">
        <GameListWithFilter games={GameData} categories={categories} />
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
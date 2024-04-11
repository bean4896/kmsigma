'use client';

import Image from "next/image";
import GameData from "@/lib/data";
import GameCard from "@/components/ui/GameCard";
import FilterComponent from "@/components/ui/FilterComponent";
import GameList from "@/components/ui/GameList";
import { useState } from "react";


export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");

  // Get unique categories from game data
  const categories = Array.from(new Set(GameData.map((game) => game.category)));

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const gamesToShow = selectedCategory
    ? GameData.filter((game) => game.category === selectedCategory)
    : GameData;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FilterComponent
        categories={categories}
        onSelectCategory={handleSelectCategory}
      />
      <GameList gamesToShow={gamesToShow} />
    </main>
  );
}
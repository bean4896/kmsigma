'use client';
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import EmblaCarousel from "./EmblaCarousel";
import ImgLabel from "@/assets/newreleases_label.png";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { EmblaOptionsType } from "embla-carousel";
import GameSlidesinfo from "@/lib/gameSlides";
import Autoplay from "embla-carousel-autoplay";
import { Game } from "@/lib/types"; // Import Game type
import { convertToGameType } from "@/lib/helpers"; // Import the helper function

const OPTIONS: EmblaOptionsType = {
  loop: true, // Enable looping
};

type NewReleaseProps = {
  selectedCategory: string;
};

const NewRelease = ({ selectedCategory }: NewReleaseProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [filteredSlides, setFilteredSlides] = useState<number[]>([]);
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);

  useEffect(() => {
    setIsLoading(true);

    // Convert GameSlidesinfo to Game type using the helper function
    const filteredGames = GameSlidesinfo
      .map((gameSlide) => convertToGameType(gameSlide))
      .filter(
        (game: Game) =>
          game.category === selectedCategory || selectedCategory === ""
      );

    setFilteredSlides(filteredGames.map((game: Game) => game.id));

    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, [selectedCategory]);

  return (
    <div className="relative">
      {isLoading ? (
        // Show skeleton or loading state when isLoading is true
        <div className="flex flex-col space-y-3 ">
          <Skeleton className="h-[12em] rounded-xl bg-stone-800 p-4"></Skeleton>
        </div>
      ) : (
        <div className="relative">
          <EmblaCarousel filteredSlides={filteredSlides} options={OPTIONS} />
          <div className="absolute top-10 left-0">
            <Image className="IconNew" src={ImgLabel} alt="New Releases" />
          </div>
        </div>
      )}
    </div>
  );
};

export default NewRelease;

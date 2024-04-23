import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import EmblaCarousel from "./EmblaCarousel";
import ImgLabel from "@/assets/newreleases_label.png";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { EmblaOptionsType } from "embla-carousel";
import GameSlidesinfo from "@/lib/gameSlides";
import Autoplay from "embla-carousel-autoplay";

interface Game {
  id: number;
  gameName: string;
  tags: string[];
  category: string;
  backgroundUrl: string;
  thumbnail: string;
  langProps: {
    [key: string]: {
      gameName: string;
      iframeUrl: string;
      gameUrl: string;
    };
  };
  isFeatured: boolean;
}

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

    const filteredGames = GameSlidesinfo.filter(
      (game: Game) =>
        game.category === selectedCategory || selectedCategory === ""
    );
    setFilteredSlides(filteredGames.map((game: Game) => game.id));

    setTimeout(() => {
      setIsLoading(false);
    }, 200);
    // console.log("filteredSlides", filteredSlides);
    // console.log("selectedCategory", selectedCategory);
    // console.log("filteredGames", filteredGames);
  }, [selectedCategory]);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute z-10 xl:top-10 left-0 text-black ">
        <Image
          className="IconNew"
          src={ImgLabel}
          alt="New Releases"
        />
      </div>
      {isLoading ? (
        // Show skeleton or loading state when isLoading is true
        <div className="flex flex-col space-y-3 ">
          <Skeleton className="h-[12em] rounded-xl bg-stone-800 p-4"></Skeleton>
        </div>
      ) : (
        <EmblaCarousel filteredSlides={filteredSlides} options={OPTIONS} />
      )}
    </div>
  );
};

export default NewRelease;

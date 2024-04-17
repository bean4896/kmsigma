import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import EmblaCarousel from "./EmblaCarousel";
import ImgLabel from "@/assets/newreleases_label.png";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { EmblaOptionsType } from "embla-carousel";
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
const GameSlidesinfo = [
  {
    id: 1,
    gameName: "Penguin Panic",
    tags: ["tag1", "tag2"],
    backgroundUrl:
      "https://res.cloudinary.com/detatjujs/image/upload/v1713346252/newreleases_penguinpanic_banner_jk7dcz.png",
    category: "NEXT-GEN",
    thumbnail: "thumbnail url",
    langProps: {
      english: {
        gameName: "Penguin Panic",
        iframeUrl: "iframe url",
        gameUrl: "game url",
      },
      spanish: {
        gameName: "Panic de Pingüinos",
        iframeUrl: "iframe url",
        gameUrl: "game url",
      },
      brazil: {
        gameName: "Pânico dos Pinguins",
        iframeUrl: "iframe url",
        gameUrl: "game url",
      },
    },
    isFeatured: true,
  },
  {
    id: 2,
    gameName: "Jackpot Jump",
    tags: ["tag1", "tag2"],
    backgroundUrl: "background url",
    category: "NEXT-GEN",
    thumbnail: "thumbnail url",
    langProps: {
      english: {
        gameName: "Jackpot Jump",
        iframeUrl: "iframe url",
        gameUrl: "game url",
      },
      spanish: {
        gameName: "Panic de Pingüinos",
        iframeUrl: "iframe url",
        gameUrl: "game url",
      },
      brazil: {
        gameName: "Pânico dos Pinguins",
        iframeUrl: "iframe url",
        gameUrl: "game url",
      },
    },
    isFeatured: true,
  },
  {
    id: 3,
    gameName: "Interstellar RUN",
    tags: ["tag1", "tag2"],
    backgroundUrl: "background url",
    category: "NEXT-GEN",
    thumbnail: "thumbnail url",
    langProps: {
      english: {
        gameName: "Interstellar RUN",
        iframeUrl: "iframe url",
        gameUrl: "game url",
      },
      spanish: {
        gameName: "Panic de Pingüinos",
        iframeUrl: "iframe url",
        gameUrl: "game url",
      },
      brazil: {
        gameName: "Pânico dos Pinguins",
        iframeUrl: "iframe url",
        gameUrl: "game url",
      },
    },
    isFeatured: true,
  },
  {
    id: 4,
    gameName: "Sugar Blast",
    tags: ["tag1", "tag2"],
    backgroundUrl: "background url",
    category: "SLOTS",
    thumbnail: "thumbnail url",
    langProps: {
      english: {
        gameName: "Sugar Blast",
        iframeUrl: "iframe url",
        gameUrl: "game url",
      },
      spanish: {
        gameName: "Panic de Pingüinos",
        iframeUrl: "iframe url",
        gameUrl: "game url",
      },
      brazil: {
        gameName: "Pânico dos Pinguins",
        iframeUrl: "iframe url",
        gameUrl: "game url",
      },
    },
    isFeatured: true,
  },
  {
    id: 5,
    gameName: "Rooster Blitz",
    tags: ["tag1", "tag2"],
    backgroundUrl: "background url",
    category: "SLOTS",
    thumbnail: "thumbnail url",
    langProps: {
      english: {
        gameName: "Rooster Blitz",
        iframeUrl: "iframe url",
        gameUrl: "game url",
      },
      spanish: {
        gameName: "Panic de Pingüinos",
        iframeUrl: "iframe url",
        gameUrl: "game url",
      },
      brazil: {
        gameName: "Pânico dos Pinguins",
        iframeUrl: "iframe url",
        gameUrl: "game url",
      },
    },
    isFeatured: true,
  },
  {
    id: 6,
    gameName: "Cleopatras Treasure",
    tags: ["tag1", "tag2"],
    backgroundUrl: "background url",
    category: "SLOTS",
    thumbnail: "thumbnail url",
    langProps: {
      english: {
        gameName: "Cleopatras Treasure",
        iframeUrl: "iframe url",
        gameUrl: "game url",
      },
      spanish: {
        gameName: "Panic de Pingüinos",
        iframeUrl: "iframe url",
        gameUrl: "game url",
      },
      brazil: {
        gameName: "Pânico dos Pinguins",
        iframeUrl: "iframe url",
        gameUrl: "game url",
      },
    },
    isFeatured: true,
  },
  {
    id: 7,
    gameName: "Baccarat",
    tags: ["tag1", "tag2"],
    backgroundUrl: "background url",
    category: "CLASSICS",
    thumbnail: "thumbnail url",
    langProps: {
      english: {
        gameName: "Baccarat",
        iframeUrl: "iframe url",
        gameUrl: "game url",
      },
      spanish: {
        gameName: "Panic de Pingüinos",
        iframeUrl: "iframe url",
        gameUrl: "game url",
      },
      brazil: {
        gameName: "Pânico dos Pinguins",
        iframeUrl: "iframe url",
        gameUrl: "game url",
      },
    },
    isFeatured: true,
  },
  {
    id: 8,
    gameName: "KM Power Ball",
    tags: ["tag1", "tag2"],
    backgroundUrl:
      "https://res.cloudinary.com/detatjujs/image/upload/v1712829079/km-power-ball_1000x1000_en_brpc6v.jpg",
    category: "CLASSICS",
    thumbnail: "thumbnail url",
    langProps: {
      english: {
        gameName: "KM Power Ball",
        iframeUrl: "iframe url",
        gameUrl: "game url",
      },
      spanish: {
        gameName: "Panic de Pingüinos",
        iframeUrl: "iframe url",
        gameUrl: "game url",
      },
      brazil: {
        gameName: "Pânico dos Pinguins",
        iframeUrl: "iframe url",
        gameUrl: "game url",
      },
    },
    isFeatured: true,
  },
  {
    id: 9,
    gameName: "KM Virtual Horse Racing",
    tags: ["tag1", "tag2"],
    backgroundUrl: "background url",
    category: "CLASSICS",
    thumbnail: "thumbnail url",
    langProps: {
      english: {
        gameName: "KM Virtual Horse Racing",
        iframeUrl: "iframe url",
        gameUrl: "game url",
      },
      spanish: {
        gameName: "Panic de Pingüinos",
        iframeUrl: "iframe url",
        gameUrl: "game url",
      },
      brazil: {
        gameName: "Pânico dos Pinguins",
        iframeUrl: "iframe url",
        gameUrl: "game url",
      },
    },
    isFeatured: true,
  },
];
const OPTIONS: EmblaOptionsType = {};

type NewReleaseProps = {
  selectedCategory: string;
};

const NewRelease = ({ selectedCategory }: NewReleaseProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [filteredSlides, setFilteredSlides] = useState<number[]>([]);

  useEffect(() => {
    setIsLoading(true);

    const filteredGames = GameSlidesinfo.filter(
      (game: Game) =>
        game.category === selectedCategory || selectedCategory === ""
    );
    setFilteredSlides(filteredGames.map((game: Game) => game.id));
  
    // Simulating loading delay of 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
    console.log("filteredSlides", filteredSlides);
    console.log("selectedCategory", selectedCategory);
    console.log("filteredGames", filteredGames);
  }, [selectedCategory]);

  return (
    <div className="relative mt-14">
      <div className="absolute z-10 -top-5 xl:top-10 left-0 text-black text-[1.6em] font-extrabold">
        <Image src={ImgLabel} alt="New Releases" />
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

import React, { useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import PlayBtn from "@/assets/playnow_button.png";
import GameDialog from "@/components/gameList/gameDialog";

type PropType = {
  filteredSlides: number[];
  options?: EmblaOptionsType;
};
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
const EmblaCarousel: React.FC<PropType> = (props) => {
  const { filteredSlides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const [selectedGame, setSelectedGame] = useState<number | null>(null);

  const handlePlayBtnClick = (gameId: number) => {
    setSelectedGame(gameId);
  };

  const handleCloseDialog = () => {
    setSelectedGame(null);
  };

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {GameSlidesinfo.filter((slide) =>
            filteredSlides.includes(slide.id)
          ).map((slide) => (
            <div className="embla__slide" key={slide.id}>
              <div className="slide_inf">
                <div
                  onClick={() => handlePlayBtnClick(slide.id)}
                  className="rounded-xl flex flex-col lg:flex-row items-center min-h-[23vh] xl:min-h-[40vw] cursor-pointer border border-gray-300"
                  style={{
                    backgroundImage: `url(${slide.backgroundUrl})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    pointerEvents: "auto",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={
                "embla__dot" +
                (index === selectedIndex ? " embla__dot--selected" : "")
              }
            />
          ))}
        </div>
      </div>

      {selectedGame && (
        <GameDialog
          gameName={GameSlidesinfo[selectedGame - 1].gameName}
          onClose={handleCloseDialog}
          langProps={{}}
          game={
            GameSlidesinfo[selectedGame - 1] as {
              id: number;
              gameName: string;
              tags: string[];
              category: string;
              thumbnail: string;
              langProps: {
                [key: string]: {
                  gameName: string;
                  iframeUrl: string;
                  gameUrl: string;
                };
              };
              isFeatured: boolean;
              description?: string;
              imageUrl?: string;
              playUrl?: string;
            }
          }
        />
      )}
    </section>
  );
};

export default EmblaCarousel;

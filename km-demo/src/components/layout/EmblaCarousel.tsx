import React, { useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import PlayBtn from "@/assets/playnow_button.png";
import GameDialog from "@/components/gameList/gameDialog";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const GameSlidesinfo = [
  {
    id: 1,
    gameName: "Penguin Panic",
    tags: ["tag1", "tag2"],
    background: "background url",
    category: "category",
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
    background: "background url",
    category: "category",
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
    background: "background url",
    category: "category",
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
];
const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
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
          {GameSlidesinfo.map((slide) => (
            <div className="embla__slide" key={slide.id}>
              <div className="slide_inf">
                <div className="rounded-xl flex flex-col lg:flex-row items-center min-h-[20vh] bg-neutral-400">
                  <div className="order-last lg:w-1/2 lg:pl-8">
                    <button
                      className="px-4 py-2"
                      onClick={() => handlePlayBtnClick(slide.id)}
                    >
                      <Image src={PlayBtn} alt="play" />
                    </button>
                  </div>
                  <div className="order-first lg:w-1/2">{slide.gameName}</div>
                </div>
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

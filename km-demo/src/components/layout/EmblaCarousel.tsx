import React, { useCallback, useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import PlayBtn from "@/assets/playnow_button.png";
import GameDialog from "@/components/gameList/gameDialog";
import Autoplay from "embla-carousel-autoplay";
import GameSlidesinfo from "@/lib/gameSlides";

type PropType = {
  filteredSlides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { filteredSlides, options } = props;
  const [isPlaying, setIsPlaying] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);

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
                <Image
                  onClick={() => handlePlayBtnClick(slide.id)}
                  className="slide flex flex-col lg:flex-row items-center cursor-pointer w-full h-auto"
                  src={slide.backgroundUrl}
                  width="0"
                  height="0"
                  sizes="100vw"
    
                  alt="Slide Background"
                  style={{
                    objectFit: "contain",
                    pointerEvents: "auto",
                  }}
                />
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

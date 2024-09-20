import React, { useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import GameDialog from "@/components/gameList/gameDialog";
import Autoplay from "embla-carousel-autoplay";
import GameSlidesinfo from "@/lib/gameSlides";
import { convertToGameType } from "@/lib/helpers";
import { Game } from "@/lib/types";
import { useLanguage } from "@/context/LanguageContext";

type PropType = {
  filteredSlides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ filteredSlides, options }) => {
  const { selectedLanguage } = useLanguage(); // Get the selected language from context
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const handlePlayBtnClick = (gameId: number) => {
    const gameSlide = GameSlidesinfo.find((slide) => slide.id === gameId);
    if (gameSlide) {
      const game = convertToGameType(gameSlide);
      setSelectedGame(game);
    }
  };

  const handleCloseDialog = () => {
    setSelectedGame(null);
  };

  return (
    <section className="embla overflow-hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {GameSlidesinfo.filter((slide) => filteredSlides.includes(slide.id)).map((slide) => {
            // Get the correct slideUrl based on the selected language
            const languageProps = (slide.langProps as Record<string, any>)[selectedLanguage] || slide.langProps.English;
            const slideUrl = languageProps?.slideUrl || slide.backgroundUrl;

            return (
              <div className="embla__slide" key={slide.id}>
                <div className="slide_inf">
                  <Image
                    onClick={() => handlePlayBtnClick(slide.id)}
                    className="slide flex flex-col lg:flex-row items-center cursor-pointer w-full h-auto"
                    src={slideUrl}
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
            );
          })}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={
                "embla__dot" + (index === selectedIndex ? " embla__dot--selected" : "")
              }
            />
          ))}
        </div>
      </div>

      {selectedGame && (
        <GameDialog
          gameName={selectedGame.gameName}
          onClose={handleCloseDialog}
          langProps={selectedGame.langProps}
          game={selectedGame}
          selectedLanguage={selectedLanguage} // Pass selected language to GameDialog
        />
      )}
    </section>
  );
};

export default EmblaCarousel;

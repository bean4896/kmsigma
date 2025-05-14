import React, { useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
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
  const { selectedLanguage } = useLanguage();
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

  const isVideoUrl = (url: string): boolean => {
    return url.toLowerCase().endsWith('.mp4') || url.toLowerCase().includes('/video/');
  };

  const renderMediaContent = (url: string, slide: any) => {
    return (
      <div 
        className="w-full bg-black cursor-pointer mediawrapper relative "
        onClick={() => handlePlayBtnClick(slide.id)}
        style={{
          maskImage: 'linear-gradient(black, black)',
          WebkitMaskImage: 'linear-gradient(black, black)',
          // maskSize: '91% 91%',
          // WebkitMaskSize: '93% 93%',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
          maskRepeat: 'no-repeat',
    
          overflow: 'hidden',   // Add this
          WebkitMaskRepeat: 'no-repeat',
        }}
      >
        {isVideoUrl(url) ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={url}
            alt={slide.gameName}
            className="w-full h-full object-cover"
          />
        )}
      </div>
    );
  };
  
  
  return (
    <section className="embla overflow-hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {GameSlidesinfo.filter((slide) => filteredSlides.includes(slide.id)).map((slide) => {
            const languageProps = (slide.langProps as Record<string, any>)[selectedLanguage] || slide.langProps.English;
            const slideUrl = languageProps?.slideUrl || slide.backgroundUrl;

            return (
              <div 
                className="embla__slide" 
                key={slide.id}
                style={{
                  padding: '0 10px', // Adds spacing between slides
                }}
              >
                {renderMediaContent(slideUrl, slide)}
              </div>
            );
          })}
        </div>
      </div>

    {/* Only show dots if there's more than one slide */}
    {scrollSnaps.length > 1 && (
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
    )}

      {selectedGame && (
        <GameDialog
          gameName={selectedGame.gameName}
          onClose={handleCloseDialog}
          langProps={selectedGame.langProps}
          game={selectedGame}
          selectedLanguage={selectedLanguage}
        />
      )}
    </section>
  );
};

export default EmblaCarousel;

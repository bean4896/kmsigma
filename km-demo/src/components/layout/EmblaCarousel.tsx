import React, { useState, useCallback, useMemo } from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import useEmblaCarousel from "embla-carousel-react";
import GameDialog from "@/components/gameList/gameDialog";
import Autoplay from "embla-carousel-autoplay";
import GameSlidesinfo from "@/lib/gameSlides";
import { convertToGameType } from "@/lib/helpers";
import { Game } from "@/lib/types";
import { useLanguage } from "@/context/LanguageContext";

type LanguageProps = {
  slideUrl?: string;
  mobileslideUrl?: string;
  [key: string]: any;
};

type SlideType = {
  id: number;
  gameName: string;
  backgroundUrl: string;
  langProps: Record<string, LanguageProps>;
};

type PropType = {
  filteredSlides: number[];
  options?: EmblaOptionsType;
};

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(() => 
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false
  );

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(query);
    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);
    
    setMatches(mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);
    
    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);

  return matches;
};

const MediaContent = React.memo(({ 
  url, 
  slide, 
  onPlay 
}: { 
  url: string, 
  slide: SlideType, 
  onPlay: () => void 
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const isVideo = url.toLowerCase().endsWith('.mp4') || url.toLowerCase().includes('/video/');

  return (
    <div 
      className="w-full bg-black cursor-pointer mediawrapper relative"
      onClick={onPlay}
      style={{
        maskImage: 'linear-gradient(black, black)',
        WebkitMaskImage: 'linear-gradient(black, black)',
        maskPosition: 'center',
        WebkitMaskPosition: 'center',
        maskRepeat: 'no-repeat',
        overflow: 'hidden',
        WebkitMaskRepeat: 'no-repeat',
      }}
    >
      {isVideo ? (
        <>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
            </div>
          )}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            onLoadStart={() => setIsLoading(true)}
            onLoadedData={() => setIsLoading(false)}
          >
            <source src={url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </>
      ) : (
        <img
          src={url}
          alt={slide.gameName}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      )}
    </div>
  );
});

const EmblaCarousel: React.FC<PropType> = ({ filteredSlides, options }) => {
  const { selectedLanguage } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const handlePlayBtnClick = useCallback((gameId: number) => {
    const gameSlide = GameSlidesinfo.find((slide) => slide.id === gameId);
    if (gameSlide) {
      const game = convertToGameType(gameSlide);
      setSelectedGame(game);
    }
  }, []);

  const handleCloseDialog = useCallback(() => {
    setSelectedGame(null);
  }, []);

  const getSlideUrl = useCallback((slide: SlideType, languageProps: LanguageProps) => {
    if (isMobile && languageProps?.mobileslideUrl) {
      return languageProps.mobileslideUrl;
    }
    return languageProps?.slideUrl || slide.backgroundUrl;
  }, [isMobile]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const filteredSlidesMemo = useMemo(() => 
    GameSlidesinfo.filter((slide) => filteredSlides.includes(slide.id)),
    [filteredSlides]
  );

  return (
    <section className="embla overflow-hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {filteredSlidesMemo.map((slide) => {
            const languageProps = (slide.langProps as Record<string, LanguageProps>)[selectedLanguage] || slide.langProps.English;
            const slideUrl = getSlideUrl(slide, languageProps);

            return (
              <div 
                className="embla__slide" 
                key={slide.id}
                style={{ padding: '0 10px' }}
              >
                <MediaContent 
                  url={slideUrl} 
                  slide={slide} 
                  onPlay={() => handlePlayBtnClick(slide.id)} 
                />
              </div>
            );
          })}
        </div>
      </div>

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

export default React.memo(EmblaCarousel);

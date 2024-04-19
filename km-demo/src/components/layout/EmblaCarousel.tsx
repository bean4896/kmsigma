import React, { useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import PlayBtn from "@/assets/playnow_button.png";
import GameDialog from "@/components/gameList/gameDialog";
import Autoplay from 'embla-carousel-autoplay'
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
      "https://res.cloudinary.com/detatjujs/image/upload/v1713511412/ns-penguin_vnovdw.png",
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
    backgroundUrl:
      "https://res.cloudinary.com/detatjujs/image/upload/v1713511411/ns-jackpotjump_xmvgzt.png",
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
    backgroundUrl:
      "https://res.cloudinary.com/detatjujs/image/upload/v1713511409/ns-interstellar_h7gx3j.png",
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
    backgroundUrl:
      "https://res.cloudinary.com/detatjujs/image/upload/v1713511415/ns-sugar_vf75ft.png",
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
    backgroundUrl:
      "https://res.cloudinary.com/detatjujs/image/upload/v1713511414/ns-rooster_gd29vg.png",
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
    backgroundUrl:
      "https://res.cloudinary.com/detatjujs/image/upload/v1713511409/ns-cleo_dea5rc.png",
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
    backgroundUrl:
      "https://res.cloudinary.com/detatjujs/image/upload/v1713511409/ns-baccarat_w1zqsc.png",
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
      "https://res.cloudinary.com/detatjujs/image/upload/v1713511410/ns-kmball_ktscxc.png",
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
    backgroundUrl:
      "https://res.cloudinary.com/detatjujs/image/upload/v1713511410/ns-horse_zlz29w.png",
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
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: false, delay: 3000 })
  ])
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
                  className="min-h-[18vh] rounded-xl flex flex-col lg:flex-row items-center md:min-h-[23vh] xl:min-h-[40vw] cursor-pointer"
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

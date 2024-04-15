import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const GameSlidesinfo = [
  {
    id: 1,
    title: "Slide 1",
    description: "Slide 1 description",
    imageUrl:
      "https://res.cloudinary.com/detatjujs/image/upload/v1712829079/km-power-ball_1000x1000_en_brpc6v.jpg",
    playUrl: "https://via.placeholder.com/800x400",
    tags: ["tag1", "tag2"],
  },
  {
    id: 2,
    title: "Slide 2",
    description: "Slide 2 description",
    imageUrl:
      "https://res.cloudinary.com/detatjujs/image/upload/v1712829079/km-power-ball_1000x1000_en_brpc6v.jpg",
    playUrl: "https://via.placeholder.com/800x400",
    tags: ["tag1", "tag2"],
  },
  {
    id: 3,
    title: "Slide 3",
    description: "Slide 3 description",
    imageUrl:
      "https://res.cloudinary.com/detatjujs/image/upload/v1712829079/km-power-ball_1000x1000_en_brpc6v.jpg",
    playUrl: "https://via.placeholder.com/800x400",
    tags: ["tag1", "tag2"],
  },
];

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container ">
          {GameSlidesinfo.map((slide) => (
            <div className="embla__slide" key={slide.id}>
              <div className="slide_info bg-neutral-900">
                <div className="flex flex-col lg:flex-row items-center">
                  <div className="order-last lg:w-1/2 lg:pl-8">
                    <div className="flex flex-wrap">
                      {slide.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-neutral-700 text-white text-sm rounded mr-2 mb-2"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-2xl font-bold text-white">{slide.title}</h2>
                    <p className="mb-4 text-white">{slide.description}</p>
                    <button className="px-4 py-2 bg-neutral-700 text-white rounded hover:bg-neutral-800">
                      Play Game
                    </button>
                  </div>
                  <div className="order-first lg:w-1/2">
                    <Image src={slide.imageUrl} alt="Game" width={500} height={200}/>
                  </div>
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
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;

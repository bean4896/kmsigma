import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
const carouselItems = [
  {
    id: 1,
    title: "Slide 1",
    description: "Slide 1 description",
    imageUrl: "https://via.placeholder.com/800x400",
  },
  {
    id: 2,
    title: "Slide 2",
    description: "Slide 2 description",
    imageUrl: "https://via.placeholder.com/800x400",
  },
  {
    id: 3,
    title: "Slide 3",
    description: "Slide 3 description",
    imageUrl: "https://via.placeholder.com/800x400",
  },
];
const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const NewRelease = () => {
  return (
    <div className="">
      <h2 className="text-white text-2xl font-extrabold">NEW RELEASES!</h2>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default NewRelease;

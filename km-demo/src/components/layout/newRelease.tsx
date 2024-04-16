import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
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

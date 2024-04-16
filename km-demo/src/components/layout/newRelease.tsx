import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const NewRelease = () => {
  return (
    <div className="relative mt-14">
      <div className="px-6 absolute z-10 -top-5 left-0 bg-gradient-to-r from-[#ffd35b] via-[#fcf3aa] to-[#fff9d9] text-black text-[1.6em] font-extrabold">
        <h2 className="italic">NEW RELEASES!</h2>
      </div>

      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default NewRelease;

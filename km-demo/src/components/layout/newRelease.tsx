import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import EmblaCarousel from "./EmblaCarousel";
import ImgLabel from "@/assets/newreleases_label.png";
import Image from "next/image";


import { EmblaOptionsType } from "embla-carousel";
const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const NewRelease = () => {
  return (
    <div className="relative mt-14">
      <div className="absolute z-10 -top-5 left-0 text-black text-[1.6em] font-extrabold">
        <Image src={ImgLabel} alt="New Releases" />
      </div>

      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default NewRelease;

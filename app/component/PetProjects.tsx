import Reveal from "@/utils/Reaveal";
import React from "react";
import { CarouselPlugin } from "./ImageSlider";

function Pet() {
  return (
    <div className="min-h-[50vh] md:max-w-screen-xl pt-24 pb-24">
      <Reveal>
        <div className="section-header">
          <span className="section-title">/ Pet Projects</span>
        </div>
        <CarouselPlugin />
      </Reveal>
    </div>
  );
}

export default Pet;

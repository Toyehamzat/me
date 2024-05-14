import React from "react";
import Reveal from "@/utils/Reaveal";
import { CarouselPlugin } from "./ImageSlider";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { useNavbarRefs } from "@/lib/useNavbarRefs";

function Pet() {
  const projects = [
    {
      title: "Stripe",
      description: "blah blah blah.",
      link: "#",
    },
    {
      title: "Netflix",
      description: "blah blah blah.",
      link: "#",
    },
    {
      title: "Google",
      description: "blah blah blah.",
      link: "#",
    },
    {
      title: "Meta",
      description: "blah blah blah.",
      link: "#",
    },
    {
      title: "Amazon",
      description: "blah blah blah.",
      link: "#",
    },
    {
      title: "Microsoft",
      description: "blah blah blah.",
      link: "#",
    },
  ];
  return (
    <div id="projects" className="min-h-[50vh] md:max-w-screen-xl pt-16 pb-24">
      <Reveal>
        <div className="section-header">
          <span className="section-title">/ Pet Projects</span>
        </div>
        <Reveal>
          <CarouselPlugin />
          <Reveal>
            <div className=" mx-auto px-8 pt-5">
              <HoverEffect items={projects} />
            </div>
          </Reveal>
        </Reveal>
      </Reveal>
    </div>
  );
}

export default Pet;

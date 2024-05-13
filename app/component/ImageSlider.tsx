import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const spotlightProjects = {
    Bauble: {
      title: "baulble",
      desc: "A student project collaboration platform.",
      techStack: "NEXT.JS, POSTGRESQL, PRISMA",
      link: "https://github.com/baubleproject/bauble.git",
      open: "https://baublespace.vercel.app/",
      image: "/image/bauble.jpg",
    },
    "Apple-ology": {
      title: "apple-ology",
      desc: "A three.js simulation of the planet system revolving around a monolith.",
      techStack:
        "an E-commerce application for apple devices(uses local storagge).",
      link: "https://github.com/Toyehamzat/Apple-ology.git",
      open: "apple-ology.vercel.app/",
      image: "/image/appleology.jpg",
    },
    "Not-netflix": {
      title: "not-netflex",
      desc: "A clone to netflix.",
      techStack: "NEXT.JS, MONGODB, PRISMA",
      link: "https://github.com/Toyehamzat/not-netflix.git",
      open: "https://not-netflix-site.vercel.app/",
      image: "/image/netflix.jpg",
    },
  };

  return (
    <>
      <Carousel
        plugins={[plugin.current]}
        className="w-[91%] mx-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Object.values(spotlightProjects).map((project, index) => (
            <CarouselItem key={index}>
              <DirectionAwareHover imageUrl={project.image}>
                <div className=" rounded-xl max-w-xl h-[500px] pb-5">
                  <div>
                    <h2 className="text-4xl text-[ #ccd6f6] font-bold">
                      {project.title}
                    </h2>
                    <p className="text-[#ccd6f6] text-[18px]">{project.desc}</p>
                    <p className="text-[#ccd6f6] text-[18px]">
                      {project.techStack}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Source Code
                    </a>
                    <a
                      href={project.open}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline ml-4"
                    >
                      Open App
                    </a>
                  </div>
                </div>
              </DirectionAwareHover>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}

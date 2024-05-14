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
import { Github, PackageOpen } from "lucide-react";
import { cn } from "@/lib/utils";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const spotlightProjects = {
    Bauble: {
      title: "bauble",
      desc: "A student project collaboration platform.",
      techStack: "NEXT.JS, POSTGRESQL, PRISMA",
      link: "https://github.com/baubleproject/bauble.git",
      open: "https://baublespace.vercel.app/",
      image: "/image/bauble.jpg",
    },
    "Apple-ology": {
      title: "apple-ology",
      desc: "an E-commerce application for apple devices(uses local storagge).",
      techStack: "REACT.JS",
      link: "https://github.com/Toyehamzat/Apple-ology.git",
      open: "apple-ology.vercel.app/",
      image: "/image/appleology.jpg",
    },
    "Not-netflix": {
      title: "not-netflix",
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
        className="w-[90%] hidden md:block mx-auto "
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Object.values(spotlightProjects).map((project, index) => (
            <CarouselItem key={index}>
              <div
                className=" bg-cover bg-center rounded-3xl relative border border-zinc-800"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="block absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500" />
                <div className=" relative flex justify-center z-30 items-end m-auto max-w-xl h-[500px] pb-5">
                  <div className="flex flex-col justify-center items-center text-center">
                    <h2 className="text-4xl text-[#ccd6f6] font-bold">
                      {project.title}
                    </h2>
                    <p className="text-[#ccd6f6] font-bold text-[11px] sm:text-[18px]">
                      {project.desc}
                    </p>
                    <p className="text-[#64ffda] font-boldtext-[11px] sm:text-[18px]">
                      {project.techStack}
                    </p>
                    <div className="flex flex-row items-center text-center">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#ccd6f6] font-bold text-[11px] sm:text-[18px] hover:underline"
                      >
                        <Github />
                      </a>
                      <a
                        href={project.open}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#ccd6f6] font-boldtext-[11px] sm:text-[18px] hover:underline ml-4"
                      >
                        <PackageOpen />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}

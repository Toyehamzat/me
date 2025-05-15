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
    "poneglyph-docs": {
      title: "Poneglyph-docs",
      desc: "A powerful document editor for seamless writing and collaboration",
      techStack: "NEXT.JS, TAILWINDCSS, CONVEX, CLERK, LIVEBLOCKS",
      link: "https://github.com/Toyehamzat/poneglyph-docs",
      open: "https://poneglyph-docs.vercel.app/",
      images: ["/image/poneglyph-docs.png"],
      get image() {
        return this.images[Math.floor(Math.random() * this.images.length)];
      },
    },
    virtuobusiness: {
      title: "Virtuo",
      desc: "Secure identification, reliable attendance tracking, and seamless payment processing for educational institutions and businesses.",
      techStack: "NEXT.JS, TAILWINDCSS",
      link: undefined,
      open: "https://v1.virtuobusiness.com/en",
      images: ["/image/virtuo.png"],
      get image() {
        return this.images[Math.floor(Math.random() * this.images.length)];
      },
    },
    "virtuo-dashboard": {
      title: "Virtuo-school-management",
      desc: "Secure identification, reliable attendance tracking, and seamless payment processing for educational institutions and businesses.",
      techStack: "NEXT.JS, TAILWINDCSS",
      link: undefined,
      open: "https://v1.virtuobusiness.com/en",
      images: ["/image/dashboard.png"],
      get image() {
        return this.images[Math.floor(Math.random() * this.images.length)];
      },
    },

    BuyMeZobo: {
      title: "BMZ",
      desc: "Payment platform",
      techStack: "NEXT.JS, POSTGRESQL, PRISMA, ELYSIA, DOCKER",
      link: "https://github.com/Toyehamzat/buymezobo",
      open: "https://www.buymezobo.ng",
      images: ["/image/bmz.png"],
      get image() {
        return this.images[Math.floor(Math.random() * this.images.length)];
      },
    },
    Bauble: {
      title: "bauble",
      desc: "Student project collaboration platform",
      techStack: "NEXT.JS, POSTGRESQL, PRISMA",
      link: "https://github.com/baubleproject/bauble.git",
      open: "https://baublespace.vercel.app/",
      images: ["/image/bauble.jpg"],
      get image() {
        return this.images[Math.floor(Math.random() * this.images.length)];
      },
    },
    "Apple-ology": {
      title: "apple-ology",
      desc: "E-commerce app for Apple devices",
      techStack: "REACT.JS",
      link: "https://github.com/Toyehamzat/Apple-ology.git",
      open: "apple-ology.vercel.app/",
      images: ["/image/appleology.jpg"],
      get image() {
        return this.images[Math.floor(Math.random() * this.images.length)];
      },
    },
    "Not-netflix": {
      title: "not-netflix",
      desc: "Netflix clone",
      techStack: "NEXT.JS, MONGODB, PRISMA",
      link: "https://github.com/Toyehamzat/not-netflix.git",
      open: "https://not-netflix-site.vercel.app/",
      images: ["/image/netflix.jpg"],
      get image() {
        return this.images[Math.floor(Math.random() * this.images.length)];
      },
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
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#ccd6f6] font-bold text-[11px] sm:text-[18px] hover:underline"
                        >
                          <Github />
                        </a>
                      )}
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

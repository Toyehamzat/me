"use client"
import React from "react";
import Reveal from "@/utils/Reaveal";
import { CarouselPlugin } from "./ImageSlider";
import { HoverEffect } from "@/components/ui/card-hover-effect";

function Pet() {
  const projects = [
    {
      title: "Poneglyph-docs",
      description:
        "A powerful document editor for seamless writing and collaboration",
      techStack: "NEXT.JS, TAILWINDCSS, CONVEX, CLERK, LIVEBLOCKS",
      link: "https://github.com/Toyehamzat/poneglyph-docs",
      liveLink: "https://poneglyph-docs.vercel.app/",
    },
    {
      title: "Buy me Zobo",
      description:
        "BuyMeZobo is dedicated to supporting Nigerian creators local initiatives through a unique approach—buying virtual zobos.",
      link: "https://github.com/Toyehamzat/buymezobo",
      liveLink: "https://buymezobo.ng/",
      techStack: "NEXT.JS,ELYSIA, POSTGRESQL, PRISMA,DOCKER...",
    },
    {
      title: "Bauble",
      description:
        "A collaborative project management platform tailored for students, facilitating seamless teamwork and task organization.",
      link: "https://github.com/baubleproject/bauble.git",
      liveLink: "https://baublespace.vercel.app/",
      techStack: "NEXT.JS, POSTGRESQL, PRISMA",
    },
    {
      title: "BMZ Admin portal",
      description: "bmzportal portal is dedicated to buymezobo.ng core.",
      link: "https://github.com/Toyehamzat/bmzportal",
      liveLink: "https://bmzportal.vercel.app/",
      techStack: "NEXT.JS,ELYSIA, POSTGRESQL, PRISMA...",
    },
    {
      title: "BlogMaster",
      description:
        "BlogMaster is a monorepo for a full-stack blogging platform, integrating both the backend API server and the frontend client.",
      link: "https://github.com/Toyehamzat/blogMaster",
      techStack: "NEXT.JS, EXPRESS, PRISMA, POSTGRESQL, TAILWINDCSS...",
    },
    {
      title: "Tasklify",
      description:
        "A prelude to my final year project, Tasklify streamlines task management with features like user authentication, database integration, and more.",
      link: "https://github.com/Toyehamzat/tasklify.git",
      techStack: "NEXT.JS, PRISMA, CLERK, MYSQL",
    },
    {
      title: "Apple-ology",
      description:
        "An elegant e-commerce platform exclusively dedicated to Apple products, utilizing local storage for a smooth shopping experience.",
      link: "https://github.com/Toyehamzat/Apple-ology.git",
      techStack: "REACT.JS",
    },

    {
      title: "News App",
      description:
        "A mobile application providing up-to-date news articles from various sources, offering users a convenient way to stay informed on current events.",
      link: "https://github.com/Toyehamzat/news-app.git",
      techStack: "REACT NATIVE",
    },
    {
      title: "Not-Netflix",
      description:
        "A comprehensive web platform resembling Netflix, allowing users to browse, search, and stream a wide range of multimedia content, from movies to TV shows.",
      link: "https://github.com/Toyehamzat/not-netflix.git",
      techStack: "NEXT.JS, MONGODB, PRISMA",
    },
    {
      title: "Blog Website",
      description:
        "A dynamic blogging platform built with server-side rendering (SSR) in Next.js, enabling users to create, publish, and share articles seamlessly.",
      link: "https://github.com/Toyehamzat/blog-website.git",
      techStack: "NEXT.JS",
    },
    {
      title: "Node Express Playground",
      description:
        "A demonstration playground showcasing the capabilities of raw Node.js and Express.js, offering insights into server-side development.",
      link: "https://github.com/Toyehamzat/node-express.git",
      techStack: "NODE.JS, EXPRESS.JS",
    },
    {
      title: "Tic-Tac-Toe",
      description:
        "A classic game of Tic Tac Toe playable directly within your browser, providing hours of fun for players of all ages.",
      link: "https://github.com/Toyehamzat/Tic-Tac-Toe",
      techStack: "JAVASCRIPT",
    },
    {
      title: "Weather App",
      description:
        "A user-friendly weather application offering real-time forecasts and weather updates, ensuring users are always prepared for the elements.",
      link: "https://github.com/Toyehamzat/Weather-App",
      techStack: "JAVASCRIPT",
    },
    {
      title: "Etch-A-Sketch",
      description:
        "A digital interpretation of the classic Etch-A-Sketch toy, allowing users to draw and sketch freely within their browser for nostalgic creativity.",
      link: "https://github.com/Toyehamzat/etch-a-sketch",
      techStack: "HTML, CSS, JAVASCRIPT",
    },
  ];

  return (
    <div id="projects" className="min-h-[50vh] md:max-w-screen-xl pb-24">
      <Reveal>
        <div className="section-header">
          <span className="section-title">/ Pet Projects</span>
        </div>
        <Reveal>
          <CarouselPlugin />
          <Reveal>
            <div className=" mx-auto px-2 md:px-8 pt-5">
              <HoverEffect items={projects} />
            </div>
          </Reveal>
        </Reveal>
      </Reveal>
    </div>
  );
}

export default Pet;

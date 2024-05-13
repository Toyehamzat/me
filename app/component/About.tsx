import { PinContainer } from "@/components/ui/PinContainer";
import Reveal from "@/utils/Reaveal";
import React from "react";

function About() {
  const one = (
    <p className="pb-4">
      I am Anibi Adetoye Hamzat, a{" "}
      <b className="text-[17px] md:text-[21px] font-bold text-[#64ffda]">
        Software Developer
      </b>
      , deeply passionate about crafting applications that tackle real-world
      challenges and contribute positively to society. At the moment, I&apos;m
      actively seeking new opportunities and Experience.
    </p>
  );
  const two = (
    <p className="pt-4">
      Outside of coding, I&apos;m interested in following the developments of
      science. I also play a lot of video games, listen to vaious kind of music.
      And consume healthy media.
    </p>
  );

  const stack = [
    "Typescript",
    "Next.js",
    "React.js",
    "Node.js",
    "Express.js",
    "tailwindcss",
    "Javascript ES6+",
  ];
  return (
    <div className="min-h-[55vh] justify-center md:max-w-screen-xl pt-24">
      <Reveal>
        <div className="section-header">
          <span className="section-title">/ about me</span>
        </div>
        <div className="flex flex-row items-center">
          <div className="text-[18px] md:text-[22px] max-w-[600px] text-[#8892b0] m-0 text-justify ">
            {one}
            {"Here are some technologies I have been working with:"}
            <ul className="pt-4 grid grid-cols-3 grid-flow-row-3 text-[20px]">
              {stack.map((item, index) => {
                return (
                  <Reveal key={index}>
                    <li
                      key={index}
                      className="list-disc text-[18px] relative pl-6" // Add relative positioning and left padding to create space for the ::before pseudo-element
                      // Apply the color directly to the <li> element
                    >
                      <span
                        className="absolute left-0 top-1"
                        style={{ color: "#64ffda" }}
                      >
                        ▹
                      </span>
                      {item}
                    </li>
                  </Reveal>
                );
              })}
            </ul>
            {two}
          </div>
          <div className="h-[20rem] w-full  items-center justify-center pl-9 hidden md:flex ">
            <PinContainer title="Nigeria." href="#">
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  Aceternity UI ofc
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    a picture comming soon...
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-[#64ffda] to-[#e6f1ff]" />
              </div>
            </PinContainer>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default About;

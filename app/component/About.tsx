import React from "react";
import { PinContainer } from "@/components/ui/PinContainer";
import Reveal from "@/utils/Reaveal";

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
      Outside of coding, I keenly follow the developments in the world of
      science, play video games, listen to several genres of music, and consume
      healthy media.
    </p>
  );

  const stack = [
    "Typescript",
    "Next.js",
    "React.js",
    "vue.js",
    "Node.js",
    "Elysia js",
    "Express.js",
    "tailwindcss",
    "Javascript ES6+",
  ];
  return (
    <div
      id="about"
      className="relative min-h-[55vh] justify-center md:max-w-screen-xl pt-24"
    >
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
              <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <div
                  className="text-base !m-0 !p-0 font-normal bg-cover bg-center bg-no-repeat rounded-lg h-[20rem] w-[20rem]"
                  style={{
                    backgroundImage: 'url("image/thanksgiving.jpg")',
                  }}
                ></div>
              </div>
            </PinContainer>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default About;

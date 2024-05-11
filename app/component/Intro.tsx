import dynamic from "next/dynamic";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Reveal from "@/utils/Reaveal";

const FractalTree = dynamic(() => import("@/app/component/FractualTree"), {
  ssr: false,
});

const words = [
  {
    text: "hi,",
    className: "text-7xl text-[#ccd6f6]",
  },
  {
    text: "hamzat",
    className: "text-7xl text-[#64ffda] font-bold",
  },
  {
    text: "here.",
    className: "text-7xl text-[#ccd6f6]",
  },
];
function Intro() {
  return (
    <div className="pt-24 flex flex-col text-center items-center m-auto min-h-full md:max-w-screen-xl">
      <FractalTree />
      <Reveal>
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col text-center items-center m-auto">
          <div className="text-center text-[#8892b0] text-5xl">
            I create stuff sometimes.
          </div>
          <div className="text-[#8892b0] text-2xl text-center max-w-screen-sm">
            I&apos;m a Lagos-based software engineer passionate about crafting
            impactful products. With a dedication to innovation and a knack for
            problem-solving, I thrive on challenges and turning ideas into
            reality. Let&apos;s collaborate and create something extraordinary
            together!
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default Intro;

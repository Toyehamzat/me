import dynamic from "next/dynamic";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Reveal from "@/utils/Reaveal";
import { Mail } from "lucide-react";
import Link from "next/link";

const FractalTree = dynamic(() => import("@/app/component/FractualTree"), {
  ssr: false,
});

const words = [
  {
    text: "hi,",
    className: "text-4xl md:text-6xl text-[#ccd6f6]",
  },
  {
    text: "Adetoye",
    className: " text-4xl md:text-6xl text-[#64ffda] font-bold",
  },
  {
    text: "here.",
    className: "text-4xl md:text-6xl text-[#ccd6f6]",
  },
];
function Intro() {
  return (
    <>
      <div className="flex flex-col text-center justify-end m-auto h-full md:min-h-screen md:max-w-screen-xl  md:pb-6 pt-14 md:pt-0">
        <div className="flex justify-center">
          <FractalTree />
        </div>
        <Reveal>
          <TypewriterEffectSmooth words={words} />
          <div className="flex flex-col text-center items-center m-auto">
            <div className="text-center text-[#8892b0] text-3xl sm:text-4xl tracking-wide font-semibold">
              One line at a time.
            </div>
            <div className="text-[#8892b0] text-base sm:text-[22px] tracking-tight text-center max-w-screen-sm mb-5 mt-2">
              I&apos;m a Nigeria-based software engineer passionate about
              crafting impactful products. With a dedication to innovation and a
              knack for problem-solving, I thrive on challenges and turning
              ideas into reality. Let&apos;s collaborate and create something
              extraordinary together!
            </div>
          </div>
        </Reveal>
      </div>
      <div className="flex gap-2 items-center justify-center text-center">
        <Link href="mailto:anibiseun@gmail.com">
          <button className="p-[2px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#64ffda] to-[#e6f1ff] rounded-lg" />
            <div className="px-4 py-2  sm:px-4 sm:py-3 flex items-center gap-1 text-center bg-black text-xl sm:text-2xl cursor-pointer font-extrabold rounded-[6px] text-[#64ffda] hover:bg-[#0d192f]  relative group transition duration-200">
              <Mail className="h-5 w-7" />
              {"Say hi!"}
            </div>
          </button>
        </Link>
        <Link
          href="https://flowcv.com/resume/banhai568u"
          target="_blank"
          className="hidden md:block"
        >
          <button className="p-[2px] relative">
            <div className="absolute inset-0 bg-gradient-to-r to-[#64ffda] from-[#e6f1ff] rounded-lg" />
            <div className="px-4 py-2 sm:px-4 sm:py-3 flex items-center gap-1 text-center bg-black text-xl sm:text-2xl cursor-pointer font-extrabold rounded-[6px] text-[#64ffda] hover:bg-[#0d192f]  relative group transition duration-200">
              <Mail className="h-5 w-7" />
              {"Resume"}
            </div>
          </button>
        </Link>
      </div>
    </>
  );
}

export default Intro;

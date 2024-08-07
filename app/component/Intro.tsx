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
    className: "text-4xl md:text-7xl text-[#ccd6f6]",
  },
  {
    text: "hamzat",
    className: " text-4xl md:text-7xl text-[#64ffda] font-bold",
  },
  {
    text: "here.",
    className: "text-4xl md:text-7xl text-[#ccd6f6]",
  },
];
function Intro() {
  return (
    <div className="pt-24 flex flex-col text-center items-center m-auto min-h-screen md:max-w-screen-xl">
      <FractalTree />
      <Reveal>
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col text-center items-center m-auto">
          <div className="text-center text-[#8892b0] text-3xl sm:text-5xl">
            One line at a time.
          </div>
          <div className="text-[#8892b0] text-xl sm:text-2xl text-center max-w-screen-sm mb-5">
            I&apos;m a Lagos-based software engineer passionate about crafting
            impactful products. With a dedication to innovation and a knack for
            problem-solving, I thrive on challenges and turning ideas into
            reality. Let&apos;s collaborate and create something extraordinary
            together!
          </div>
          <div className="flex gap-2 items-center justify-center text-center">
            <Link href="mailto:anibiseun@gmail.com">
              <button className="p-[2px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#64ffda] to-[#e6f1ff] rounded-lg" />
                <div className="px-8 py-4 flex items-center gap-1 text-center bg-black text-2xl cursor-pointer font-extrabold rounded-[6px] text-[#64ffda] hover:bg-[#233554]  relative group transition duration-200">
                  <Mail className="h-5 w-7" />
                  {"Say hi!"}
                </div>
              </button>
            </Link>
            <Link
              href="/assets/Anibi adetoye hamzat-CV.pdf"
              download="Anibi adetoye hamzat-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="p-[2px] relative">
                <div className="absolute inset-0 bg-gradient-to-r to-[#64ffda] from-[#e6f1ff] rounded-lg" />
                <div className="px-8 py-4 flex items-center gap-1 text-center bg-black text-2xl cursor-pointer font-extrabold rounded-[6px] text-[#64ffda] hover:bg-[#233554]  relative group transition duration-200">
                  <Mail className="h-5 w-7" />
                  {"Download CV"}
                </div>
              </button>
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default Intro;

"use client";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Intro from "./component/Intro";
import About from "./component/About";
import Experience from "./component/Experience";
import Education from "./component/Education";
import PetProjects from "./component/PetProjects";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Home() {
  return (
    <div className="relative w-full h-full">
      <TracingBeam className="px-6">
        <main className="pt-10 z-50 max-w-screen-lg  m-auto ">
          <Intro />
          <About />
          <Experience />
          <Education />
          <PetProjects />
        </main>
      </TracingBeam>
      <StarsBackground />
    </div>
  );
}

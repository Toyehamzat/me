"use client";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Intro from "./component/Intro";
import About from "./component/About";
import Experience from "./component/Experience";
import Education from "./component/Education";
import PetProjects from "./component/PetProjects";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <TracingBeam className="px-6">
      <main className="pt-10 z-50">
        <Intro />
        <About />
        <Experience />
        <Education />
        <PetProjects />
        <BackgroundBeams />
      </main>
    </TracingBeam>
  );
}

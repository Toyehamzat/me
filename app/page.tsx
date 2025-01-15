"use client";
import Intro from "./component/Intro";
import About from "./component/About";
import Experience from "./component/Experience";
import Education from "./component/Education";
import PetProjects from "./component/PetProjects";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Home() {
  return (
    <div className="relative h-full">
      <main className="pt-10 max-w-screen-lg m-auto px-6 ">
        <Intro />
        <About />
        <Experience />
        <Education />
        <PetProjects />
      </main>
      <StarsBackground />
    </div>
  );
}

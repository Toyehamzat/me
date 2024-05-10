"use client";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Intro from "./component/Intro";

export default function Home() {
  return (
    <TracingBeam className="px-6">
      <main className="pt-10">
        <Intro />
      </main>
    </TracingBeam>
  );
}

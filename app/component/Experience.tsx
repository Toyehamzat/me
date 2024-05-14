import React from "react";
import Reveal from "@/utils/Reaveal";
import { JobList } from "./JobList";
import { useNavbarRefs } from "@/lib/useNavbarRefs";

function Experience() {
  return (
    <div id="experience" className="min-h-[50vh] md:max-w-screen-xl pt-24">
      <Reveal>
        <div className="section-header">
          <span className="section-title">/ Experience</span>
        </div>
        <JobList />
      </Reveal>
    </div>
  );
}

export default Experience;

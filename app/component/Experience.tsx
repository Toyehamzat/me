import Reveal from "@/utils/Reaveal";
import React from "react";
import { JobList } from "./JobList";

function Experience() {
  return (
    <div className="min-h-[50vh] md:max-w-screen-xl pt-24">
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

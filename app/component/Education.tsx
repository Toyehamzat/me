import Reveal from "@/utils/Reaveal";
import React from "react";
import { SchoolList } from "./SchoolList";

function Education() {
  return (
    <div className="min-h-[25vh] md:max-w-screen-xl">
      <Reveal>
        <div className="section-header">
          <span className="section-title">/ Education</span>
        </div>
        <SchoolList />
      </Reveal>
    </div>
  );
}

export default Education;

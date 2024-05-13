import Reveal from "@/utils/Reaveal";
import React from "react";
import { SchoolList } from "./SchoolList";

function Education() {
  return (
    <div className="min-h-[30vh] md:max-w-screen-xl pb-10 sm:pb-0">
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

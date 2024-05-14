import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Reveal from "@/utils/Reaveal";
import React from "react";

function Footer() {
  return (
    <div>
      <Reveal>
        <div className="flex justify-center items-center w-full">
          <div className="text-[16px] text-center pb-10 text-[#ccd6f6]">
            <div>Built and designed by Anibi Adetoye Hamzat. </div>
            <div>All rights reserved. ©2024. </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default Footer;

"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const Reveal = ({ children }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const maincontrols = useAnimation();

  useEffect(() => {
    if (isInView) {
      maincontrols.start("visible");
    }
  }, [isInView, maincontrols]);

  return (
    <div
      ref={ref}
      style={{ position: "relative", width: "", overflow: "hidden" }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={maincontrols}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;

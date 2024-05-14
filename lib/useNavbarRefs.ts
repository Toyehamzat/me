"use client";
import { useRef } from "react";

export const useNavbarRefs = () => {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  return { homeRef, aboutRef, experienceRef, projectsRef };
};

"use client";
import { Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import ScrollIntoView from "react-scroll-into-view";
import { HiOutlinePhone } from "react-icons/hi";
import { IoLogoGithub, IoLogoTwitter } from "react-icons/io5";

export const Navbar = () => {
  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={cn(
        "text-[#ccd6f6] backdrop-blur-xl fixed w-full h-14 shadow-sm flex items-center z-40 pt-2"
      )}
    >
      <div className="max-w-screen-xl w-full mx-auto flex items-center justify-between px-7 sm:px-8 xl:px-16">
        <div className="w-2/5 flex space-x-6">
          <div className="m-0 flex justify-center text-center cursor-pointer text-base font-bold">
            <span className="tracking-tighter">
              Anibi
              <span className="tracking-tighter"> Adetoye</span>
            </span>
          </div>

          <div className="space-x-3 md:w-auto hidden sm:flex items-center justify-between w-full text-base font-semibold ">
            <div
              className="transition hover:text-[#64ffda] cursor-pointer"
              onClick={scrollToHome}
            >
              Home
            </div>
            <ScrollIntoView selector="#about">
              <div className="transition hover:text-[#64ffda] cursor-pointer">
                About
              </div>
            </ScrollIntoView>
            <ScrollIntoView selector="#experience">
              <div className="transition hover:text-[#64ffda] cursor-pointer">
                Experience
              </div>
            </ScrollIntoView>
            <ScrollIntoView selector="#projects">
              <div className="transition hover:text-[#64ffda] cursor-pointer">
                Projects
              </div>
            </ScrollIntoView>
          </div>
        </div>
        <div className="relative space-x-3 w-auto flex items-center justify-between">
          <Link className="hidden sm:block" href="mailto:anibiseun@gmail.com">
            <Mail className="h-5 w-5 transition hover:text-[#64ffda] " />
          </Link>
          <Link href="https://github.com/Toyehamzat" target="_blank">
            <IoLogoGithub className="h-5 w-5 transition hover:text-[#64ffda]" />
          </Link>
          <Link
            className="hidden sm:block"
            href="https://twitter.com/tazmaheyot"
            target="_blank"
          >
            <IoLogoTwitter className="h-5 w-5 transition hover:text-[#64ffda]" />
          </Link>
          <Link href="tel:+2349134454880" target="_blank">
            <HiOutlinePhone className="h-5 w-5 transition hover:text-[#64ffda]" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/adetoye-anibi-32830823b"
            target="_blank"
          >
            <Linkedin className="h-5 w-5 transition hover:text-[#64ffda]" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

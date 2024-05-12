import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

function Navbar() {
  return (
    <nav
      className={cn(
        "text-[#ccd6f6] backdrop-blur-xl font-bold fixed w-full h-14 shadow-sm flex items-center z-40"
      )}
    >
      <div className="max-w-screen-xl mx-auto flex items-center w-full justify-between px-7 sm:px-4 xl:px-0">
        <div className="w-2/5 flex space-x-5 ">
          <div className="m-0 flex justify-center text-center">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="bg-black  flex items-center"
            >
              <div className="cursor-pointer text-xl tracking-widest font-extrabold">
                Hamzat
              </div>
            </HoverBorderGradient>
          </div>

          <div className="space-x-4 md:w-auto hidden sm:flex items-center justify-between w-full ">
            <div className=" transition hover:text-[#64ffda] cursor-pointer">
              Home
            </div>
            <div className=" transition hover:text-[#64ffda] cursor-pointer">
              About
            </div>
            <div className=" transition hover:text-[#64ffda] cursor-pointer">
              Experience
            </div>
            <div className=" transition hover:text-[#64ffda] cursor-pointer">
              Projects
            </div>
          </div>
        </div>
        <div className="relative space-x-4 w-auto flex items-center justify-between">
          <Link href="mailto:anibiseun@gmail.com">
            <Mail className="h-5 w-5 transition hover:text-[#64ffda] " />
          </Link>
          <Link href="https://github.com/Toyehamzat" target="_blank">
            <Github className="h-5 w-5 transition hover:text-[#64ffda]" />
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
}

export default Navbar;

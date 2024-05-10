import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

function Navbar() {
  return (
    <nav
      className={cn(
        "text-[#ccd6f6]  font-bold fixed w-full h-14 shadow-sm flex items-center"
      )}
    >
      <div className="md:max-w-screen-xl mx-auto flex items-center w-full justify-between">
        <div className="w-2/5 flex space-x-8 ">
          <div className="cursor-pointer text-xl tracking-widest font-extrabold">
            Hamzat
          </div>
          <div className="space-x-4 md:w-auto flex items-center justify-between w-full">
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
        <div className="space-x-4 md:w-auto flex items-center justify-between w-full">
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
          {/* <ThemeToggle /> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

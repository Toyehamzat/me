import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoMailOutline,
} from "react-icons/io5";
import { HiOutlinePhone } from "react-icons/hi";
import Reveal from "@/utils/Reaveal";
import React from "react";

function Footer() {
  const iconStyle = "text-base md:text-lg  text-[#ccd6f6] ";
  const socials = [
    {
      icon: <IoMailOutline className={`${iconStyle}`} />,
      url: "mailto:anibiseun@gmail.com",
    },
    {
      icon: <HiOutlinePhone className={`${iconStyle}`} />,
      url: "tel:+2349134454880",
    },
    {
      icon: <IoLogoGithub className={`${iconStyle}`} />,
      url: "https://github.com/Toyehamzat",
    },
    {
      icon: <IoLogoLinkedin className={`${iconStyle}`} />,
      url: "https://www.linkedin.com/in/adetoye-anibi-32830823b/",
    },
    {
      icon: <IoLogoTwitter className={`${iconStyle}`} />,
      url: "https://twitter.com/tazmaheyot",
    },
  ];

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const currentDay = currentDate.getDate();
  return (
    <div>
      <Reveal>
        <div className="flex justify-center items-center w-full">
          <div className="text-[16px] text-center pb-10 text-[#ccd6f6]">
            <div>Built and designed by Anibi Adetoye Hamzat. </div>
            <div className="w-full items-center justify-center  flex gap-2 flex-wrap py-1 md:py-3">
              {socials.map((social, i) => (
                <a key={i} href={`${social.url}`} target="_blank">
                  <div className=" p-2 md:p-3 rounded-lg border border-zinc-800 transition-colors duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
            <div>Thanks for visiting.</div>
            <div>
              {currentMonth} {currentDay}, {currentYear}.
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default Footer;

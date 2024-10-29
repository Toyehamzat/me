import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { FolderClosed } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { IoLogoGithub } from "react-icons/io5";
import { VscLiveShare } from "react-icons/vsc";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    liveLink?: string;
    techStack?: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.link}
          className="relative group block p-[3px] h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-[#64ffda] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="p-2 flex flex-row justify-between">
              <FolderClosed
                className=" h-6 w-6 sm:h-7
                  sm:w-7 text-[#64ffda] "
              />
              <div className="flex space-x-2">
                <a target="_blank" href={item.link}>
                  <IoLogoGithub className=" h-6 w-6  text-[#ccd6f6] " />
                </a>
                {item.liveLink && (
                  <a target="_blank" href={item.liveLink}>
                    <VscLiveShare className=" h-6 w-6  text-[#ccd6f6]" />
                  </a>
                )}
              </div>
            </div>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <CardTechStack>{item.techStack}</CardTechStack>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-96 w-full p-4 overflow-hidden bg-zinc-900 border border-transparent relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "p-2 text-[#ccd6f6] text-[24px] font-bold tracking-wide mt-4",
        className
      )}
    >
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-2 p-2 text-[18px] text-[#8892b0] tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
export const CardTechStack = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-2 p-2 text-[16px] text-[#8892b0] tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

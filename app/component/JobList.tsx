import { Tabs } from "@/components/ui/Tabs";
import Reveal from "@/utils/Reaveal";

export function JobList() {
  const experienceItems = {
    "De-virtuosphere": {
      jobTitle: "Frontend Engineer @",
      duration: "OCTOBER 2024 - PRESENT",
      desc: [
        "Developed fully responsive UI components with Next.js.",
        "Improved user flow throughout the application, resulting in a more intuitive and seamless experience.",
        "Participated in agile development practices including daily standups, code reviews, and sprint planning.",
        "Improved collaboration and communication in a team-oriented environment.",
      ],
    },
    Seamailer: {
      jobTitle: "Fullstack Engineer @",
      duration: "AUGUST 2024 - DECEMBER 2024",
      desc: [
        "Developed and maintained backend APIs using Node.js and Express.",
        "Developed and maintained frontend code with Vue.js.",
        "Participated in agile development practices including daily standups, code reviews, and sprint planning.",
        "Implemented unit tests to ensure code quality and reliability.",
      ],
    },
    "4Traderx": {
      jobTitle: "Software Engineer Intern @",
      duration: "JANUARY 2023 - JULY 2023",
      desc: [
        "Worked as a Front-end Developer by developing and debugging user interface components while also facilitating connections to our database.",
        "Collaborated with the development team to conceptualize, design and develop the product.",
        "Created fully responsive UI components for various pages of our web application using JavaScript's React.js library.",
      ],
    },
  };

  const tabs = Object.entries(experienceItems).map(
    ([company, { jobTitle, duration, desc }]) => ({
      title: company.toUpperCase().replace(/\s+/g, "-"),
      value: company.toUpperCase().replace(/\s+/g, "-"),
      content: (
        <div className="w-full  overflow-hidden relative h-full rounded-2xl sm:pr-10 sm:pl-10 sm:pb-10 pl-5 pr-5 pb-5  text-[#8892b0] bg-black">
          <p className="text-xl sm:text-2xl font-bold text-[#ccd6f6]">
            {jobTitle}
            <span className="text-[#64ffda]"> {company}.</span>
          </p>
          <p>{duration}</p>
          <Reveal>
            <ul className="list-none pt-5 text-sm sm:text-xl">
              {desc.map((item, index) => (
                <li className="relative pl-5" key={index}>
                  <span
                    className="absolute left-0 top-0.5"
                    style={{ color: "#64ffda" }}
                  >
                    ▹
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      ),
    })
  );

  return (
    <div className="h-[40rem] sm:h-[20rem] perspective:1000px relative b flex flex-col sm:flex-row  mx-auto w-full items-start justify-start">
      <Tabs tabs={tabs} />
    </div>
  );
}

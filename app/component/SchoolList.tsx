import { Tabs } from "@/components/ui/Tabs";
import Reveal from "@/utils/Reaveal";

export function SchoolList() {
  const experienceItems = {
    "Babcock University": {
      SchoolTitle: "Bsc. Software Engineering @",
      duration: "JANUARY 2020 - JULY 2024",
      desc: [
        "Second Class Honors, Upper Division CGPA",
        "Relevant Coursework: AI, Operating Systems, Linux Systems, Database Management, Human-System Interaction, Data Structures, Programming Languages",
      ],
    },
  };

  const tabs = Object.entries(experienceItems).map(
    ([company, { SchoolTitle, duration, desc }]) => ({
      title: company.toUpperCase().replace(/\s+/g, "-"),
      value: company.toUpperCase().replace(/\s+/g, "-"), // Convert company name to lowercase and replace spaces with dashes
      content: (
        <div className="w-full sm:w-[90%] overflow-hidden relative h-full rounded-2xl sm:pr-10 sm:pl-10 sm:pb-10 pl-5 pr-5 pb-10  text-[#8892b0] bg-black">
          <p className="text-xl sm:text-2xl font-bold text-[#ccd6f6]">
            {SchoolTitle}
            <span className="text-[#64ffda]"> {company}</span>
          </p>
          <p>{duration}</p>
          <Reveal>
            <ul className="list-none pt-5  text-sm sm:text-xl">
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
    <div className="h-[15rem] perspective:1000px relative b flex flex-col sm:flex-row mx-auto w-full items-start justify-start">
      <Tabs tabs={tabs} />
    </div>
  );
}

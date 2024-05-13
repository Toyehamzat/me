import { Tabs } from "@/components/ui/Tabs";

export function JobList() {
  const tabs = [
    {
      title: "PRODUCT",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#0a192f]">
          <p>Product Tab</p>
          <div className="h-[60%] md:h-[90%] rounded-xl"></div>
        </div>
      ),
    },
    {
      title: "SERVICES",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#0a192f]">
          <p>Services tab</p>
          <div className="h-[60%] md:h-[90%] rounded-xl"></div>
        </div>
      ),
    },
    {
      title: "CUSTOMER",
      value: "customer",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#0a192f]">
          <p>customer tab</p>
          <div className="h-[60%] md:h-[90%] rounded-xl"></div>
        </div>
      ),
    },
    {
      title: "PLAYGROUND",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#0a192f]">
          <p>playground tab</p>
          <div className="h-[60%] md:h-[90%] rounded-xl"></div>
        </div>
      ),
    },
    {
      title: "TESTING",
      value: "testing",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#0a192f]">
          <p>testing tab</p>
          <div className="h-[60%] md:h-[90%] rounded-xl"></div>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[40rem] sm:h-[20rem] [perspective:1000px] relative b flex flex-col sm:flex-row  md:max-w-screen-xl mx-auto w-full  items-start justify-start ">
      <Tabs tabs={tabs} />
    </div>
  );
}

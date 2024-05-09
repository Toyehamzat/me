import dynamic from "next/dynamic";
// import FractalTree from "./FractualTree";

const FractalTree = dynamic(() => import("@/app/component/FractualTree"), {
  ssr: false,
});

function Intro() {
  return (
    <div className="pt-52 flex flex-col text-center items-center m-auto min-h-full md:max-w-screen-xl">
      <FractalTree />
    </div>
  );
}

export default Intro;

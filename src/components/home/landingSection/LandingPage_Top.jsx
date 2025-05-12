import { HiArrowLongLeft } from "react-icons/hi2";

export default function LandingPage_Top() {
  return (
    <div className="absolute top-0 left-0 z-[3] w-full h-screen pt-[17vw] pl-[6vw] flex flex-col items-center justify-center max-sm:mt-[18vh]">
      <h1 className="text-[11.8vw] font-[f3] uppercase leading-[.93] text-transparent  [-webkit-text-stroke:_.76px_#ffffff63] max-sm:text-[17vw] max-sm:leading-[1]">
        frontend
      </h1>
      <h1 className="text-[9.4vw] font-[f3] uppercase leading-[.93] text-transparent  [-webkit-text-stroke:_.76px_#ffffff63] max-sm:text-[12vw] max-sm:leading-[1]">
        developer
      </h1>


      <div className="mt-8 md:hidden">
        <span className="flex items-center gap-2 text-[4vw] text-[#ffffff71] font-[200]"> <HiArrowLongLeft /> Swipe left to menu</span>
      </div>
    </div>
  );
}

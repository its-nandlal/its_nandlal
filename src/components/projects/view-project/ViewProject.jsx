import React from "react";
import { work } from "../../../lib/data.json";
import { useParams } from "react-router-dom";
import { TbArrowUpRight } from "react-icons/tb";
import { GoArrowUpRight } from "react-icons/go";
import Button from "../../anm-part/Button";
import Footer from "../../Footer";

export default function ViewProject() {

  const { pname } = useParams();

  const filteredWork = work.filter(
    (e) => e.workName.toLowerCase() === pname.toLowerCase()
  );

  return (
    <>
      <div className="w-full h-fit">
      {filteredWork.map((e, index) => (
        <div key={(index += index)} className=" relative z-[2] w-full h-full bg-[#D5C3AC]">
          <div className="w-full h-[60vh] px-10 flex flex-col justify-center max-sm:px-4 max-sm:h-[45vh]">
            <div>
            <h3 className="text-xl font-[f1] pl-[.4rem] italic leading-[1]">
              <span>{e.year}</span>
              <span className="inline-block text-sm pl-2">{e.category}</span>
            </h3>
            
            <h1 className="text-8xl tracking-wide capitalize font-[f2] flex items-center max-sm:text-balance max-sm:block max-sm:text-7xl max-sm:leading-[1]">
              {e.workName}
              <span className="block pt-2 max-sm:hidden">
                <TbArrowUpRight />
              </span>
            </h1>

            <h3 className="font-[f2] pl-[.4rem] pt-[.10rem] pb-1 text-2xl tracking-wide capitalize max-sm:pt-3">{e.language}</h3>
            </div>

            <div className="max-sm:scale-[.85] max-sm:-ml-5">
              <Button link={e.link}>
                <div className="w-[12rem]  pl-[1rem] max-sm:w-fit max-sm:pl-0">
                <span className="inline-block text-lg font-[200] leading-[1]">View Demo</span>
                <span className="inline-block h-[.8rem] leading-[1]">
                  <GoArrowUpRight />
                </span>
                </div>
              </Button>
            </div>

          </div>

          <div className="w-full h-screen px-8 max-sm:px-2 max-sm:h-[35vh]">
            <video
              autoPlay
              loop
              muted
              className="w-full h-full object-cover rounded-3xl"
              src={e.video}
              alt=""
            />
            
          </div>

          <div className="w-full p-20 max-sm:p-4 max-sm:pt-10">
            <div className="w-full flex gap-10 max-sm:flex-col max-sm:gap-8">
            <div className="w-1/2 h-[55vh] rounded-3xl overflow-hidden max-sm:w-full max-sm:h-[35vh]">
            <img className="w-full h-full bg-cover" src={e.si1}/>
            </div>
            <div className="w-1/2 h-[55vh] rounded-3xl overflow-hidden max-sm:w-full max-sm:h-[35vh]">
            <img className="w-full h-full bg-cover" src={e.si2}/></div>
            </div>
          </div>
        </div>
      ))}
      
      <Footer />
    </div>
    
    </>
  );
}

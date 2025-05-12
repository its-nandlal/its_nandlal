import { forwardRef , useRef } from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import Button from "../../../anm-part/Button";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { HiArrowLongLeft } from "react-icons/hi2";

const AboutMe = forwardRef((props, ref) => {

  const AboutmeRef = useRef()
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: AboutmeRef.current,
        start: "top 90%",
        end: "top 40%",
        scrub: 1.5,
        ease: "power3.inOut",
        markers: false,
      },
    });

    timeline
      .fromTo(
        AboutmeRef.current,
        {
          opacity: 0,
          scale: 0.9,
          y: 60,
          clipPath: "circle(0% at 50% 50%)",
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          clipPath: "circle(100% at 50% 50%)",
          duration: 1.8,
        }
      )
      .fromTo(
        AboutmeRef.current.querySelectorAll("h2, h1, p, img, video"),
        {
          opacity: 0,
          y: 30,
          rotateX: 15,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          stagger: 0.15,
          duration: 1.2,
        },
        "-=1.2"
      )
      .to(
        AboutmeRef.current.querySelectorAll("img, video"),
        {
          scale: 1.05,
          duration: 1.5,
          ease: "power2.inOut",
        },
        "-=1"
      )
  });

  return (
    <div className="relative z-[3] flex flex-col items-center  overflow-hidden 
    
    max-w-[1024px]:flex-col 
    ">
      <div
        className=" w-full"
      >
        <p
          ref={ref}
          className='w-[65%] mx-auto text-center text-[2.4vw] font-["f2"] leading-[1.5] max-sm:text-[6.5vw] max-sm:w-[95%]'
        >
          I'M A CREATIVE WEB DEVELOPER{" "}
          <span className="inline-block w-20 h-12 -mb-2 overflow-hidden max-sm:w-[4rem] max-sm:h-[2rem] max-sm:mb-[.7rem]">
            <video
              className="ps2 w-full h-full object-cover rounded-full"
              autoPlay
              muted
              loop
              src="../../../../../Videos/boy.mp4"
            />
          </span>{" "}
          WITH A PASSION FOR CREATE{" "}
          <span className="inline-block w-20 h-12 -mb-2 rounded-full overflow-hidden  max-sm:w-[4rem] max-sm:h-[2rem] max-sm:mb-[.7rem]">
            <img
              className="ps2 w-full h-full object-top object-cover rounded-full"
              src="../../../../../Images/about-2.jpg"
              alt=""
            />
          </span>{" "}
          THOUGHTFUL DESIGN AND{" "}
          <span className="inline-block w-20 h-12 -mb-2 rounded-full overflow-hidden  max-sm:w-[4rem] max-sm:h-[2rem] max-sm:mb-[.7rem]">
            <img
              className="ps2 w-full h-full object-top object-cover rounded-full"
              src="../../../../../Images/about-3.gif"
              alt=""
            />
          </span>{" "}
          ANIMATION, WHO BELIEVE THAT{" "}
          <span className="inline-block w-20 h-12 -mb-2 rounded-full overflow-hidden  max-sm:w-[4rem] max-sm:h-[2rem] max-sm:mb-[.7rem]">
            <img
              className="ps2 w-full h-full object-center object-cover rounded-full"
              src="../../../../../Images/about-5.gif"
              alt=""
            />
          </span>{" "}
          DESIGN AND{" "}
          <span className="inline-block w-20 h-12 -mb-2 rounded-full overflow-hidden max-sm:w-[4rem] max-sm:h-[2rem] max-sm:mb-[.7rem]">
            <img
              className="ps2 w-full h-full object-center object-cover rounded-full"
              src="../../../../../Images/about-4.gif"
              alt=""
            />
          </span>{" "}
          ANIMATION SHOULD BE INCLUSIVE & ACCESSIBLE.
        </p>
      </div>

      <div
      ref={AboutmeRef}
      className="relative z-[-1] w-full pt-[15vh] px-10 flex flex-col gap-24 font-['f2'] font-medium max-sm:px-[0.5rem] max-sm:gap-8">

        <div className="w-full h-fit bg-[#7d592f] flex items-center justify-between gap-10 border border-zinc-800 border-dotted rounded-3xl p-5 hover:bg-[#7d592ff0] ease-linear duration-100 max-sm:flex-col max-sm:items-start">
          <h2 className="pl-4 font-['f1'] text-[3vw] text-zinc-50/50 leading-[.9] max-sm:text-[9vw] max-sm:leading-[1.2]">
            My Name Is Nandlal Jangir... 
          </h2> 

          <div className="w-fit h-fit px-4 py-2 bg-[#b5936c93] rounded-full border border-zinc-300 border-dashed max-sm:hidden">
          <Button link={"About"}>
            <span className="inline-block text-lg font-[200] leading-[1] max-sm:mt-[.3rem]">About More</span>
            <span className="inline-block h-[.8rem] leading-[1] max-sm:mt-[.3rem]">
              <GoArrowUpRight />
            </span>
          </Button>
          </div>
        </div>

        <div className="w-fit flex items-start gap-4 max-sm:flex-col max-sm:gap-8">
        <div className="w-fit bg-[#7d592f] border border-zinc-800 border-dotted rounded-3xl p-5 hover:bg-[#7d592ff0] ease-linear duration-100">
          <div>
            <h1 className="text-[1.7vw] max-sm:text-[8vw] max-sm:leading-[1.2]">Frontend & Beckend Developer</h1>
          </div>


          <div className="w-fit h-fit flex items-center gap-4 max-sm:pt-3">
          <div className="w-fit flex items-center gap-4 px-6 py-4 bg-[#b5936c93] border border-zinc-800 border-dashed rounded-3xl ">
          <Link className="w-fit relative cursor-none hover:bg-[#7d592ff0] ease-in-out duration-200 rounded-full">
              <span className="flex items-center justify-center w-12 h-12 text-xl border border-zinc-800 rounded-full">
                <FiGithub />
              </span>
              {/* <span className="absolute top-0 left-7 flex items-center justify-center bg-[#7d592f]  text-white font-semibold w-12 h-12 border border-zinc-800 rounded-full">
                <TfiArrowTopRight />
              </span> */}
          </Link>

          <Link className="relative cursor-none hover:bg-[#7d592ff0] ease-in-out duration-200 rounded-full">
              <span className="flex items-center justify-center w-12 h-12 text-xl border border-zinc-800 rounded-full">
                <FiInstagram />
              </span>
          </Link>
          </div>

          <h4 className="text-[1.6vw] max-sm:text-[6vw] leading-[1]">
          <span><HiArrowLongLeft /></span> Projects
          </h4>
          </div>


        </div>

        <div className="flex flex-col gap-5">
            <div className="w-fit px-6 py-4 bg-[#b5936c93] border border-zinc-800 border-dashed rounded-3xl ">
              <h2 className="text-xl font-semibold text-black/80">Nandlal.</h2>
              <p className="text-black/90 2xl:text-[.7vw] lg:text-[1.2vw]">
              Nandlal Jangir is a creative web developer with a passion for design and animation.
              </p>
            </div>

            <Button link={"About"}>
            <span className="inline-block text-lg font-[200] leading-[1] max-sm:mt-[.3rem]">About More</span>
            <span className="inline-block h-[.8rem] leading-[1] max-sm:mt-[.3rem]">
              <GoArrowUpRight />
            </span>
          </Button>
          </div>
        </div>
        
      </div>
    </div>
  );
});

AboutMe.displayName = "AboutMe";

export default AboutMe;

import React from "react";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import HoverAnm from "./anm-part/HoverAnm";
import Button from "./anm-part/Button";
import PopCard from "./anm-part/PopCard";
import {myImage} from '../lib/data.json'


export default function Footer() {

  return (
    <div 
    className="relative z-[1] w-full h-fit px-10 pb-3 flex flex-col gap-16 pt-[24vh] max-sm:pt-[15vh] max-sm:px-4">

      <div 
    className="relative z-[2] w-full h-fit flex items-end pointer-events-none max-sm:flex-col-reverse">
        <div className="w-full max-sm:pt-[15vw] max-sm:flex max-sm:flex-col max-sm:items-center">
          <h1 className='text-9xl font-["f2"] font-bold leading-[.8] tracking-[.6rem] max-sm:text-[22vw]'>
            Nandlal
          </h1>
          <div className="flex items-center gap-4 pl-2">
            <span className='block text-lg text-black/90 font-["f2"] leading-[1] '>
              Frontend
              <br />
              Developer
            </span>
            <h1 className='text-9xl font-["f2"] font-bold leading-[.8] tracking-[.6rem] max-sm:text-[18vw]'>
              Jangir
            </h1>
          </div>
        </div>

        <div className="w-[50%] flex flex-col gap-4 max-sm:w-full">
          <h2 className='text-2xl font-["f3"]'>.../Contacts...</h2>

          <div className='w-fit text-zinc-900/95 font-["f2"] font-semibold flex items-center justify-between gap-10 pointer-events-auto'>

            {[{title: 'Home', link: '/'},
               {title: 'About', link: '/about'},
               {title: 'Projects', link: '/projects'},
               {title: 'Contact', link: '/contact'}]
               .map((e, index)=> <HoverAnm key={index} e={e} />)}

          </div>

          <div className="w-[80%] mt-2 -ml-2 max-sm:w-full">
            <div className="px-8 py-6 border border-zinc-600 border-dotted rounded-3xl bg-[#7d592f] hover:bg-[#825f38] ease-in-out duration-200 pointer-events-auto max-sm:text-[6vw]">
              <h2 className="text-3xl font-['f2'] font-semibold text-black/80">
                Site
              </h2>
              <div className="text-black/90 pt-2 max-sm:text-[4vw]">
                <span className='block text-black/70 font-["f2"] font-semibold'>
                  Handcrafted by ME /
                </span>
                <span className='block text-black/70 font-["f2"] font-semibold'>
                  Designed by ME/
                </span>
                <span className='block text-black/70 font-["f2"] font-semibold'>
                  Powered by React |
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-[2] w-full pt-8 flex justify-center">
        <div className="flex items-center justify-center max-sm:w-fit max-sm:scale-[.8]">
        <Button link={"/"}>
        <span className='inline-block h-[.9rem] leading-[1] max-sm:text-[4vw] max-sm:mt-[.3rem]'><FiGithub /> </span>
        <span className='inline-block text-lg font-[200] leading-[1] max-sm:text-[4vw] max-sm:mt-[.3rem]'> Github</span>
        </Button>
        </div>

        <div className="flex items-center justify-center -mt-24 max-sm:w-fit max-sm:scale-[.8]">
        <Button link={"/"}>
        <span className='inline-block h-[.9rem] leading-[1] max-sm:text-[4vw] max-sm:mt-[.3rem]'><FaLinkedinIn /> </span>
        <span className='inline-block text-lg font-[200] leading-[1] max-sm:text-[4vw] max-sm:mt-[.3rem]'> Linkedin</span>
        </Button>
        </div>

        <div className="flex items-center justify-center max-sm:w-fit max-sm:scale-[.8]">
        <Button link={"/"}>
        <span className='inline-block h-[.9rem] leading-[1] max-sm:text-[4vw] max-sm:mt-[.3rem]'><IoLogoInstagram /> </span>
        <span className='inline-block text-lg font-[200] leading-[1] max-sm:text-[4vw] max-sm:mt-[.3rem]'> Instagram</span>
        </Button>
        </div>
      </div>

      <div className="absolute top-20 left-0 z-[1] w-full h-full max-sm:hidden">
      <PopCard myImage={myImage} />
      </div>
    </div>
  );
}

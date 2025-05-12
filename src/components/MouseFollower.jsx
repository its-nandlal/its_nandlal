import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import { FaLocationArrow } from "react-icons/fa6";

export default function MouseFollower() {

    const mousemove = useRef()

    useGSAP(()=>{
        if (window.innerWidth <= 768) { 
            gsap.to(mousemove.current,{
                display: "none",
            })
         }
         else{
            window.addEventListener("mousemove",e =>{
                gsap.to(mousemove.current,{
                    x: e.clientX,
                    y: e.clientY,
                    ease: "none",
                    duration: "none"
                })
            })
         }

    })

  return (
    <div ref={mousemove} className="fixed top-2 left-1 -translate-x-1/2 -translate-y-1/2 z-[9999] pointer-events-none">
        <span className='block -rotate-90 scale-[1.3]'><FaLocationArrow /></span>
    </div>
  )
}

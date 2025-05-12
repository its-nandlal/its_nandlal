import { useRef } from 'react'
import AboutAnm from './parts/AboutAnm'
import AboutMe from './parts/AboutMe'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
export default function About() {


  const AboutRef = useRef(null)
  const paragraphRef = useRef(null);


  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    const paragraph = paragraphRef.current;
    paragraph.innerHTML = Array.from(paragraph.childNodes)
      .map((node) =>
        node.nodeType === Node.TEXT_NODE
          ? node.textContent
              .split(/\s+/)
              .filter(Boolean)
              .map(
                (word) =>
                  `<div class='inline-block h-[3vw] overflow-hidden max-sm:h-[11vw]'><span class='ps inline-block text-[#000]'>${word}</span></div>`
              )
              .join(" ")
          : node.outerHTML
      )
      .join(" ");


    let tl = gsap.timeline({
      scrollTrigger:{
        trigger: AboutRef.current,
        start: "top 85%",
        end: "50% 70%",
        scrub: 2,
        // markers: true
      }
    })
    tl
    .from('.ps', {
      y: '101%',
      color: "#ffffff00",
      filter: 'blur(8px)',
      duration: 1,
      stagger: 0.1,
      ease: 'circ'
    })
    .from('.ps2', {
      y: '115%',
      color: "#ffffff00",
      filter: 'blur(8px)',
      duration: 1,
      stagger: 0.1,
      ease: 'circ'
    })


  });


  return (
    <div 
    ref={AboutRef} className='w-full h-fit'>
      <div className=' relative'>
        <AboutAnm />
      </div>
        <AboutMe ref={paragraphRef} />
    </div>
  )
}

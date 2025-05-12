import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'

export default function PopCard(props) {

  const mainCardRef = useRef([])



  useGSAP(()=>{

    if(window.innerWidth > 768){
    const lerp = (x, y, a) => x * (1 - a) + y * a;

    var throttleFunction = (func, delay) => {
      let prev = 0;
      return(...args)=>{
        let now = new Date().getTime();
  
        if(now - prev > delay){
          prev = now;
          return func(...args);
        }
      }
    }

    mainCardRef.current.addEventListener("mousemove", throttleFunction((e)=>{
      
      const div = document.createElement("div")
      div.classList.add("popupImage", "absolute", "top-[-45vh]", "-left-[7.5rem]", "-translate-x-1/2", "z-[2]", "w-[15rem]", "h-[20vh]", "pointer-events-none", "overflow-y-hidden", "rounded-xl",)
      div.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      mainCardRef.current.appendChild(div)

      const divImg = document.createElement("img")
      divImg.classList.add("absolute", "top-0", "left-1/2", "-translate-x-1/2", "translate-y-0", "scale-[1.2]", "origin-bottom", "w-[5rem]", "h-[17vh]", "object-cover", )
      const randomImg = Math.floor(Math.random()*props.myImage.length)
      divImg.src = `${props.myImage[randomImg]}`
      div.appendChild(divImg)

      const rotateX =  e.clientX / mainCardRef.current.offsetWidth
      
      

      gsap.to(divImg,{
        rotate: `${lerp(-7,7,rotateX)}deg`,
      })

      gsap.fromTo(divImg,{
        y: "110%",      
        scale: .2,
        borderRadius: "8px 8px 0px 0px",
        // width: "4rem",
        onComplete:function(){
          gsap.to(divImg,{
            y: "0%",
            scale: 1,
            duration: .5
          })
        }
      }, 
      {
        y: "20%",
        scale: .9,
        ease: "power4",
        duration: .5
      })
    
      setTimeout(()=>{
        gsap.to(divImg,{
          y:"110%",
          scale: ".5",
          ease: "power4"
        })
        setTimeout(()=>{
          div.remove()
        },600)
      },500)

    },400))
  }

  })

  return (
    <div ref={mainCardRef} className='w-full h-full'></div>
  )
}

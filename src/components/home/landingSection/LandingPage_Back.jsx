import { useEffect, useRef, useState } from 'react'
import LandingPage_Top from './LandingPage_Top'
import gsap from 'gsap'

export default function LandingPage_Back() {
  const moveX = useRef(Number)
  const effectPage = useRef()
  const fristText = useRef()
  const secoundText = useRef()
  const [currentHour, setCurrentHour] = useState(new Date().getHours()) // State to store the current hour

  useEffect(() => {
    const lerp = (x, y, a) => x * (1 - a) + y * a
    const text = fristText.current.textContent.split('')
    fristText.current.innerHTML = text
      .map((char, index) => `<span key=${index}>${char}</span>`)
      .join('')

    const text2 = secoundText.current.textContent.split('')
    secoundText.current.innerHTML = text2
      .map((char, index) => `<span key=${index}>${char}</span>`)
      .join('')

    effectPage.current.addEventListener('mousemove', (e) => {
      const x = e.clientX / window.innerWidth
      moveX.current = x

      gsap.to(fristText.current.querySelectorAll('span'), {
        fontSize: `${Math.floor(lerp(9, 15.8, moveX.current))}vw`,
        fontWeight: Math.floor(lerp(100, 900, moveX.current)),
        ease: 'linear',
        stagger: 0.1,
      })

      gsap.to(secoundText.current.querySelectorAll('span'), {
        fontSize: `${Math.floor(lerp(7, 11.8, moveX.current))}vw`,
        fontWeight: Math.floor(lerp(100, 900, moveX.current)),
        ease: 'linear',
        stagger: 0.1,
      })
    })

    // Update the current hour every hour
    const interval = setInterval(() => {
      setCurrentHour(new Date().getHours())
    }, 100)

    return () => clearInterval(interval) // Cleanup interval on component unmount
  }, [])

  return (
    <div
      ref={effectPage}
      className="relative w-full h-[150vh] overflow-x-hidden max-sm:h-[110vh] max-sm:overflow-hidden"
    >
      {/* 55% */}

      <div className="w-full flex justify-center text-[180vw] mt-[-2vh] leading-[1] tracking-[-0.10em] animate-pulse md:hidden">{currentHour}</div>

      <img
        className=" absolute left-1/2 -translate-x-1/2 bottom-0 z-[2] w-[100vh] min-h-max mx-auto filter contrast-[1.05] brightness-[.9] max-xl:w-[95vh] max-sm:scale-[1.8] max-sm:ml-[1rem] max-[375px]:w-[52vh]"
        src="./Images/Background3.png"
        alt=""
      />

      <div className="absolute top-0 left-0 z-[1] w-full h-screen pt-[6vw] flex flex-col items-center justify-center ease-linear max-sm:hidden">
        <h1
          ref={fristText}
          className="text-[11.8vw] font-[f2] uppercase leading-[.93] ease-linear"
        >
          frontend
        </h1>
        <h1
          ref={secoundText}
          className="text-[9.4vw] font-[f1] uppercase leading-[.93] ease-linear"
        >
          developer
        </h1>
      </div>

      <LandingPage_Top />
    </div>
  )
}
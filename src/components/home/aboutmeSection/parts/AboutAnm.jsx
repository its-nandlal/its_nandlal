import { useEffect, useRef } from 'react'
import { useScroll } from 'framer-motion';

export default function About() {
    const container = useRef();
    const paths = useRef([]);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end end']
    })

    useEffect( () => {
        scrollYProgress.on("change", e => {
            paths.current.forEach( (path, i) => {
                path.setAttribute("startOffset", -80 + (i * 28) + (e * 80) + "%");
            })
        })
    }, [])
  return (

    <div className='relative z-[6] w-full h-[5vw]'>
            <svg className="absolute top-[-330%] left-0 z-[3] w-full" viewBox="10 10 230 90">
            <path fill="#D5C3AC" id="curve" d="m0,48.5c61.37,0,61.5-28,126.5-28,58,0,51,28,123,28"/>
                <text fill='black'>   
                    {
                        [...Array(6)].map((_, i) => {
                            return <textPath key={i} ref={ref => paths.current[i] = ref} startOffset={i * 28 + "%"} href="#curve" className='font-["f1"] font-semibold'>About</textPath>
                        })
                    }
                </text>
            </svg>
    </div>
  )
}

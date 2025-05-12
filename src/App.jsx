import { useEffect } from 'react'
import NaveGation from './components/NaveGation'
import Router from './router/Router';
import MouseFollower from './components/MouseFollower';
import MusicPlay from './components/MusicPlay';
import Lenis from 'lenis';

export default function App() {
  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

   // Scroll to the top on route change
    useEffect(() => {
      window.scrollTo(0,  0);
    }, []);


  return (
    <>
    
    <MouseFollower />
    <div className='relative w-full bg-[#D5C3AC] overflow-hidden'>
      <NaveGation />
      <MusicPlay />
      <Router />  
    </div>
    </>
  )
}

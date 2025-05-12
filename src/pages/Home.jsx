import LandingPage from '../components/home/landingSection/LandingPage_Back'
import About from '../components/home/aboutmeSection/About'
import Work from '../components/home/work/Work'
import Footer from '../components/Footer'
export default function Home() {


  return (
    <div className='w-full pt-10 overflow-hidden'>

    <LandingPage/>
    <About />
    <Work/>
    <Footer />
    </div>
  )
}

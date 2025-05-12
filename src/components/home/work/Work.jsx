import ShowWork from './parts/ShowWork'
import { GoArrowUpRight } from "react-icons/go";
import Button from '../../anm-part/Button';
import { work } from "../../../lib/data.json";

export default function Work() {


  return (
    <div className='relative z-[2] w-full h-fit'>

      <div className='w-full px-10 flex items-center justify-end'>

      <div className='mt-24 -mr-10 flex items-center justify-center max-sm:mt-6 max-sm:scale-[.8] max-sm:-mr-0'>
      <Button link={'Projects'}>
      <span className='inline-block text-lg font-[200] leading-[1] max-sm:mt-[.3rem]'>More</span>
      <span className='inline-block h-[.8rem] leading-[1] max-sm:mt-[.3rem]'><GoArrowUpRight /></span>
      </Button>
      </div>

      <div className=' w-fit h-fit pointer-events-none '>
      <h1 className='text-[12rem] text-end font-["f2"] flex items-center justify-end max-sm:text-[22vw]'>Work</h1>
      </div>

      </div>

      <ShowWork work={work} />

    </div>
  )
}

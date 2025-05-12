import { useRef } from 'react'

import { TbArrowRightBar } from "react-icons/tb";
import { useState } from 'react';
import Footer from '../components/Footer';


export default function Contact() {

  const [result, setResult] = useState("");

  const textAnmRef = useRef(null)

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3c0eda7d-3ad7-49ae-a34a-862fec983197");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Successfully");
      event.target.reset();

      setTimeout(()=>{
        setResult("Send");
      },2000)
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (

    <div className='w-full'>

     <div className=' relative w-full pt-0 flex justify-center max-sm:pt-20'>
        <h1 
        className='text-[17vw] h-[15vw] font-[f3] font-[200] leading-[1] capitalize overflow-hidden opacity-0'>Contact</h1>

        <div className=' absolute top-[60%] w-full flex justify-center pointer-events-none'>
        <h1 
        ref={textAnmRef}
        className='text-[20vw] text-slate-800 h-[44vw] font-[f3] font-[900] leading-[1] uppercase overflow-hidden'>Contact</h1>
        </div>

     </div>


     <div className='w-fll h-fit pt-32 max-sm:pt-0'>
      
      <div className='w-full h-fit flex items-center px-20  max-md:p-0 max-md:flex-col-reverse'>

      <form onSubmit={onSubmit}
           className=' relative z-[2] w-full text-zinc-900 flex flex-col max-md:w-full max-md:px-4'>

            <div className='w-fll flex justify-between max-md:flex-col'>

            <div className='shrink-0 relative w-[48%]  pt-16 flex flex-col max-md:w-full'>
              <div className=' absolute bottom-0 left-0 w-full h-[2px] bg-black'></div>
              <label className='text-[1.6vw] max-md:text-[5vw]'>Name*</label>
              <input 
              type='text'
              name='name'
              required
              className='w-full h-[4rem] bg-transparent outline-none'/>
            </div>
            <div className='shrink-0 relative w-[48%] pt-16 flex flex-col max-md:w-full'>
              <div className=' absolute bottom-0 left-0 w-full h-[2px] bg-black'></div>
              <label className='text-[1.6vw] max-md:text-[5vw]'>Email*</label>
              <input 
              type='email'
              name='email'
              required
              className='w-full h-[4rem] bg-transparent outline-none'/>
            </div>

            </div>

            <div className='shrink-0 relative w-full pt-24 flex flex-col'>
            <div className=' absolute bottom-0 left-0 w-full h-[2px] bg-black'></div>
              <label className='text-[1.6vw] max-md:text-[5vw]'>Phone</label>
              <input 
              type='text'
              name='phone'
              className='w-full h-[4rem] bg-transparent outline-none'/>
            </div>

            <div className='shrink-0 relative w-full pt-24 flex flex-col'>
            <div className=' absolute bottom-0 left-0 w-full h-[2px] bg-black'></div>
              <label className='text-[1.6vw] max-md:text-[5vw]'>Message*</label>
              <textarea className='w-full min-h-[10rem] bg-transparent outline-none' name='message' required></textarea>
            </div>

         <div className='pt-16 flex flex-col gap-4'>
         <button
         type='submit'
         className='w-1/3 flex items-center justify-center gap-2 px-6 py-6 text-[1.5vw] bg-gray-900 text-white backdrop-blur-md rounded-full max-sm:w-fit max-md:text-[5vw] max-md:px-8 max-md:py-4'>
           {result ? result : 'Send'} <TbArrowRightBar />
         </button>
         </div>

          </form>

      </div>

     </div>

     <Footer />

    </div>

  )
}
import { useEffect, useRef, useState } from "react";
import { showCaseWork, work } from "../lib/data.json";
import ShowWork from "../components/home/work/parts/ShowWork";
import Button from "../components/anm-part/Button";
import { GoArrowUpRight } from "react-icons/go";
import gsap from "gsap";
import Footer from "../components/Footer";


export default function Projects() {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const videoImgContainer = useRef(null)
  const videoRef = useRef(null);
  const buttonRef = useRef(null)

  const textAnmRef = useRef([])

  useEffect(() => {
    // loadingAnimation()
    if (videoRef.current) {
      videoRef.current.playbackRate = 15;
      videoRef.current.pause()
    }
  }, []);

  useEffect(()=>{
    textAnmRef.current.map((t,i)=>{
      const text = t.textContent.split("")
      t.innerHTML = text.map((char, index)=> `<span class='inline-block' key=${index}>${char}</span>`).join('');
    })
  },[index])


  useEffect(()=>{
    loadingAnimation()
  },[])

  
  const loadingAnimation = ()=>{    
    gsap.set(videoImgContainer.current, { mixBlendMode: "color-burn" },'a')
    gsap.set(videoRef.current, { opacity: 1 },'a')
    
    textAnmRef.current.map((t,i)=>{
      gsap.from(t.querySelectorAll('span'), {
        y: "100%",
        stagger: .02,
        ease: "power4",
      });
    })

    if (videoRef.current) {
      videoRef.current.play();
      // Add event listener to pause the video when it ends
      videoRef.current.onended = () => {
        videoRef.current.pause();
        gsap.set(videoImgContainer.current, { mixBlendMode: "unset" },'b')
        gsap.set(videoRef.current, { opacity: 0 }),'b'
        setIsAnimating(true)
      };
    } 

  }

  const nextSlide = () => {
    if (!isAnimating) return;
    setIsAnimating(false);

    gsap.set(videoRef.current, { rotateY: "0deg" })
    
    if (index >= showCaseWork.length - 1) {
      setIndex(0);
    } else {
        setIndex((i) => i + 1);
    }

      setTimeout(() => {
        triggerAnimation(.02)
      }, 0);
  };

  const prevSlide = () => {
    if (!isAnimating) return;
    setIsAnimating(false);

    gsap.set(videoRef.current, { rotateY: "180deg" })

    if (index === 0) {
        setIndex(showCaseWork.length - 1);
    } else {
        setIndex((i) => i - 1);
    }
    setTimeout(() => {
      triggerAnimation(-.02)
    }, 0);

  };


  const triggerAnimation = (stagger) => {

    gsap.set(videoImgContainer.current, { mixBlendMode: "color-burn" },'a')
    gsap.set(videoRef.current, { opacity: 1 },'a')
    
    if (videoRef.current) {
      videoRef.current.play();
      // Add event listener to pause the video when it ends
      videoRef.current.onended = () => {
        videoRef.current.pause();
        gsap.set(videoImgContainer.current, { mixBlendMode: "unset" },'b')
        gsap.set(videoRef.current, { opacity: 0 }),'b'
        setIsAnimating(true)
      };
    } 

    textAnmRef.current.map((t,i)=>{
      gsap.from(t.querySelectorAll('span'), {
        y: "100%",
        stagger: stagger,
        ease: "power4",
      });
    })

    gsap.from(buttonRef.current,{
      y: "50%",
      ease: "power4",
    })
  };
  

  return (
    <div className="w-full h-fit">
      {/* ShowCaseWork */}
      <div className="w-full h-screen max-sm:h-[65vh]">
        <div className="relative w-full h-full flex items-center justify-center max-sm:items-start max-sm:pt-[10vh]">
              {/* TITLE */}

              {/* left div */}
                <div className="relative w-[90%] h-[80%] mt-14 max-sm:h-[55%] max-sm:w-[95%]">

                {/* Back Side */}
                <div
                className=" absolute -top-11 left-1/2 -translate-x-1/2 w-[102%] h-[105%] bg-[#00000026] backdrop-blur-lg rounded-3xl pl-6 pt-4">
                <h3 className="h-[1.3rem] flex items-center gap-1 italic font-[f1] font-[600] overflow-hidden">
                <span ref={(e)=> textAnmRef.current[0] = e} className="block text-2xl font-[f2]">{showCaseWork[index].year}</span>
                <span ref={(e)=> textAnmRef.current[1] = e} className="block text-base pt-1">{showCaseWork[index].category}</span>
                </h3>
                </div>


                {/* video */}
                <div
                  ref={videoImgContainer}
                  className="relative w-full h-full bg-[#D5C3AC] rounded-3xl overflow-hidden">
                  <video
                    ref={videoRef}
                    className="absolute top-0 left-0 z-[2] w-full h-full object-cover mix-blend-screen opacity-0"
                    muted
                    src="../../../Videos/ef.mp4"></video>
                  <video
                    autoPlay
                    loop
                    muted
                    className={`w-full h-full object-cover overflow-hidden`}
                    src={showCaseWork[index].video}
                    alt=""/>
                </div>

                {/* Arrow Btn */} 
                <div className="absolute right-0 bottom-[-5%] z-[2] w-fit flex flex-col gap-5 justify-between items-center max-sm:bottom-[-60%] max-sm:left-0 max-sm:gap-1 max-sm:flex-row">

                <div className="flex h-[4.5rem] -mt-2 overflow-hidden pointer-events-none max-sm:w-[50vw]">
                      <div
                      className="max-xl:scale-[.85] max-sm:scale-[.8]"
                      ref={buttonRef}>
                        <Button link={showCaseWork[index].link} bg={"#D5C3AC"}>
                            <span className="inline-block text-lg font-[200] leading-[1] max-sm:mt-[.3rem]">
                              View Demo
                            </span>
                            <span className="inline-block h-[.8rem] leading-[1] max-sm:mt-[.3rem]">
                              <GoArrowUpRight />
                            </span>
                        </Button>
                      </div>
                </div>

                <div className="flex gap-5 max-xl:gap-2 max-sm:gap-0">
                 <div
                 className="max-xl:scale-[.85] max-sm:scale-[.7] max-sm:-ml-5"
                 onClick={prevSlide}>
                 <svg width="110" height="106" viewBox="0 0 140 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M139.781 62.4953C139.897 63.9258 139.968 65.3688 139.991 66.8229L139.491 66.831C139.497 67.1901 139.5 67.55 139.5 67.9105C139.5 68.2709 139.497 68.6308 139.491 68.9899L139.991 68.998C139.944 71.9234 139.706 74.8039 139.289 77.6283L138.794 77.5552C138.478 79.6976 138.057 81.8075 137.538 83.8798L138.023 84.0013C137.671 85.407 137.274 86.7955 136.834 88.1654L136.358 88.0123C136.138 88.6961 135.907 89.3752 135.665 90.0495L136.136 90.2182C135.157 92.9497 134.003 95.6019 132.688 98.1622L132.243 97.9337C131.259 99.8496 130.184 101.714 129.022 103.521L129.443 103.791C128.662 105.007 127.842 106.196 126.985 107.359L126.583 107.062C126.158 107.64 125.723 108.21 125.28 108.773L125.673 109.082C123.888 111.351 121.959 113.507 119.899 115.538L119.548 115.182C118.019 116.69 116.417 118.128 114.748 119.492L115.064 119.879C113.947 120.791 112.8 121.67 111.625 122.515L111.334 122.109C110.752 122.527 110.163 122.936 109.568 123.337L109.847 123.752C107.461 125.357 104.967 126.823 102.378 128.135L102.152 127.689C100.241 128.658 98.2788 129.543 96.2693 130.339L96.4535 130.804C95.1156 131.334 93.7571 131.826 92.3794 132.276L92.2239 131.801C91.5433 132.024 90.858 132.236 90.1681 132.439L90.309 132.919C87.5626 133.725 84.7449 134.372 81.8672 134.849L81.7855 134.356C79.681 134.704 77.5441 134.961 75.3794 135.122L75.4164 135.621C73.9851 135.727 72.5418 135.791 71.0876 135.813L71.0802 135.313C70.7208 135.318 70.3607 135.321 70 135.321C69.6393 135.321 69.2792 135.318 68.9197 135.313L68.9124 135.813C65.9864 135.77 63.1039 135.552 60.2755 135.171L60.3424 134.675C58.1929 134.386 56.075 134 53.9933 133.524L53.8818 134.012C52.4679 133.689 51.0704 133.324 49.691 132.919L49.8319 132.439C49.142 132.236 48.4567 132.024 47.7761 131.801L47.6206 132.276C44.856 131.372 42.1687 130.305 39.5707 129.086L39.783 128.633C37.8272 127.716 35.9225 126.713 34.0741 125.628L33.821 126.059C32.5723 125.326 31.349 124.557 30.1529 123.752L30.432 123.337C29.8367 122.936 29.2481 122.527 28.6664 122.109L28.3746 122.515C26.0213 120.824 23.7812 118.993 21.6673 117.035L22.0071 116.668C20.4269 115.204 18.9178 113.669 17.4853 112.068L17.1126 112.401C16.1493 111.324 15.2202 110.217 14.3272 109.082L14.7201 108.773C14.2768 108.21 13.8424 107.64 13.4171 107.062L13.0146 107.359C11.3023 105.035 9.73722 102.602 8.33269 100.073L8.76982 99.83C7.72791 97.9537 6.77504 96.0241 5.91667 94.0465L5.45801 94.2456C4.88434 92.9239 4.35254 91.5809 3.86422 90.2182L4.33492 90.0495C4.09331 89.3753 3.86242 88.6961 3.64247 88.0123L3.16649 88.1654C2.2885 85.436 1.58328 82.6325 1.06323 79.7671L1.55519 79.6778C1.17424 77.5788 0.893406 75.4463 0.717651 73.2851L0.219296 73.3256C0.102965 71.8951 0.032326 70.4521 0.00879425 68.998L0.508729 68.9899C0.502917 68.6308 0.5 68.2709 0.5 67.9105C0.5 67.55 0.502917 67.1902 0.508729 66.831L0.00879406 66.8229C0.0561357 63.8975 0.294145 61.0171 0.711294 58.1927L1.20593 58.2657C1.52235 56.1233 1.94264 54.0134 2.46167 51.9411L1.97665 51.8196C2.3287 50.4139 2.72583 49.0254 3.16649 47.6555L3.64247 47.8086C3.86242 47.1248 4.0933 46.4457 4.33491 45.7714L3.86422 45.6027C4.84302 42.8712 5.99654 40.219 7.31181 37.6587L7.75656 37.8872C8.74077 35.9714 9.81628 34.1073 10.9776 32.3003L10.557 32.03C11.3382 30.8144 12.158 29.6245 13.0146 28.462L13.4171 28.7585C13.8424 28.1814 14.2768 27.611 14.7201 27.0476L14.3272 26.7384C16.1123 24.47 18.0414 22.3139 20.1012 20.283L20.4523 20.639C21.9815 19.1313 23.5833 17.6929 25.2523 16.3294L24.936 15.9422C26.0529 15.0297 27.1997 14.1504 28.3746 13.306L28.6664 13.712C29.2481 13.294 29.8367 12.8846 30.432 12.484L30.1529 12.0692C32.539 10.4636 35.033 8.99825 37.6222 7.68545L37.8483 8.13141C39.7586 7.16281 41.7212 6.27783 43.7307 5.48148L43.5465 5.01665C44.8844 4.48649 46.2429 3.99535 47.6206 3.54466L47.7761 4.01988C48.4567 3.79724 49.142 3.58455 49.8319 3.38198L49.691 2.90223C52.4374 2.09577 55.2551 1.44863 58.1328 0.97189L58.2145 1.46517C60.319 1.11652 62.4559 0.859627 64.6206 0.698915L64.5836 0.200287C66.0149 0.0940223 67.4583 0.0295192 68.9124 0.0080312L68.9198 0.507977C69.2792 0.502665 69.6393 0.5 70 0.5C70.3607 0.5 70.7208 0.502665 71.0803 0.507977L71.0876 0.00803131C74.0136 0.0512697 76.8961 0.268675 79.7245 0.650033L79.6576 1.14555C81.8071 1.43536 83.925 1.82052 86.0067 2.29645L86.1182 1.80903C87.5321 2.1323 88.9296 2.49717 90.309 2.90224L90.1681 3.38198C90.858 3.58455 91.5433 3.79725 92.2239 4.01988L92.3794 3.54466C95.144 4.44903 97.8314 5.51634 100.429 6.73482L100.217 7.1875C102.173 8.1048 104.078 9.10838 105.926 10.1931L106.179 9.7619C107.428 10.4947 108.651 11.2643 109.847 12.0692L109.568 12.484C110.163 12.8846 110.752 13.294 111.334 13.712L111.625 13.306C113.979 14.9972 116.219 16.8282 118.333 18.7863L117.993 19.1532C119.573 20.6169 121.082 22.1521 122.515 23.7534L122.887 23.42C123.851 24.497 124.78 25.6036 125.673 26.7384L125.28 27.0476C125.723 27.611 126.158 28.1814 126.583 28.7585L126.985 28.462C128.698 30.7859 130.263 33.2189 131.667 35.7482L131.23 35.9909C132.272 37.8672 133.225 39.7968 134.083 41.7744L134.542 41.5753C135.116 42.897 135.647 44.24 136.136 45.6027L135.665 45.7714C135.907 46.4457 136.138 47.1248 136.358 47.8086L136.834 47.6555C137.712 50.385 138.417 53.1884 138.937 56.0538L138.445 56.1431C138.826 58.2421 139.107 60.3746 139.282 62.5358L139.781 62.4953Z" fill="#D5C3AC" stroke="black" stroke-dasharray="2 4 6 8"/>
                 <path d="M40.7144 66.7232C40.3239 67.1138 40.3239 67.7469 40.7144 68.1375L47.0783 74.5014C47.4689 74.8919 48.102 74.8919 48.4926 74.5014C48.8831 74.1109 48.8831 73.4777 48.4926 73.0872L42.8357 67.4304L48.4926 61.7735C48.8831 61.383 48.8831 60.7498 48.4926 60.3593C48.102 59.9688 47.4689 59.9688 47.0783 60.3593L40.7144 66.7232ZM99.2189 66.4304H41.4215V68.4304H99.2189V66.4304Z" fill="black" fill-opacity="0.71"/>
                 </svg>
                 </div>

                 <div
                 className="max-xl:scale-[.85] max-sm:scale-[.7] max-sm:-ml-5"
                 onClick={nextSlide}>
                 <svg width="110" height="106" viewBox="0 0 140 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M139.781 62.4953C139.897 63.9258 139.968 65.3688 139.991 66.8229L139.491 66.831C139.497 67.1901 139.5 67.5499 139.5 67.9104C139.5 68.2709 139.497 68.6307 139.491 68.9899L139.991 68.998C139.944 71.9234 139.706 74.8038 139.289 77.6282L138.794 77.5552C138.478 79.6976 138.057 81.8075 137.538 83.8798L138.023 84.0013C137.671 85.407 137.274 86.7955 136.834 88.1654L136.358 88.0123C136.138 88.6961 135.907 89.3752 135.665 90.0495L136.136 90.2181C135.157 92.9497 134.003 95.6019 132.688 98.1621L132.243 97.9337C131.259 99.8495 130.184 101.714 129.022 103.521L129.443 103.791C128.662 105.006 127.842 106.196 126.985 107.359L126.583 107.062C126.158 107.639 125.723 108.21 125.28 108.773L125.673 109.082C123.888 111.351 121.959 113.507 119.899 115.538L119.548 115.182C118.019 116.69 116.417 118.128 114.748 119.491L115.064 119.879C113.947 120.791 112.8 121.67 111.625 122.515L111.334 122.109C110.752 122.527 110.163 122.936 109.568 123.337L109.847 123.752C107.461 125.357 104.967 126.823 102.378 128.135L102.152 127.689C100.241 128.658 98.2788 129.543 96.2693 130.339L96.4535 130.804C95.1156 131.334 93.7571 131.826 92.3794 132.276L92.2239 131.801C91.5433 132.024 90.858 132.236 90.1681 132.439L90.309 132.919C87.5626 133.725 84.7449 134.372 81.8672 134.849L81.7855 134.356C79.681 134.704 77.5441 134.961 75.3794 135.122L75.4164 135.621C73.9851 135.727 72.5418 135.791 71.0876 135.813L71.0802 135.313C70.7208 135.318 70.3607 135.321 70 135.321C69.6393 135.321 69.2792 135.318 68.9197 135.313L68.9124 135.813C65.9864 135.77 63.1039 135.552 60.2756 135.171L60.3424 134.675C58.1929 134.386 56.075 134 53.9933 133.524L53.8819 134.012C52.4679 133.689 51.0704 133.324 49.691 132.919L49.8319 132.439C49.142 132.236 48.4567 132.024 47.7761 131.801L47.6206 132.276C44.856 131.372 42.1687 130.305 39.5707 129.086L39.783 128.633C37.8272 127.716 35.9225 126.713 34.0741 125.628L33.821 126.059C32.5723 125.326 31.349 124.557 30.1529 123.752L30.432 123.337C29.8367 122.936 29.2481 122.527 28.6664 122.109L28.3746 122.515C26.0214 120.824 23.7812 118.993 21.6673 117.035L22.0071 116.668C20.4269 115.204 18.9178 113.669 17.4853 112.067L17.1126 112.401C16.1493 111.324 15.2202 110.217 14.3272 109.082L14.7201 108.773C14.2768 108.21 13.8424 107.639 13.4171 107.062L13.0146 107.359C11.3023 105.035 9.73722 102.602 8.33269 100.073L8.76982 99.8299C7.72791 97.9537 6.77504 96.0241 5.91667 94.0465L5.45801 94.2455C4.88434 92.9239 4.35254 91.5809 3.86422 90.2182L4.33492 90.0495C4.09331 89.3752 3.86242 88.6961 3.64247 88.0123L3.16649 88.1654C2.2885 85.4359 1.58328 82.6325 1.06323 79.7671L1.55519 79.6778C1.17424 77.5788 0.893406 75.4463 0.717651 73.285L0.219296 73.3256C0.102965 71.8951 0.032326 70.4521 0.00879425 68.998L0.508729 68.9899C0.502917 68.6307 0.5 68.2709 0.5 67.9104C0.5 67.55 0.502917 67.1901 0.508729 66.831L0.00879406 66.8229C0.0561357 63.8975 0.294145 61.017 0.711295 58.1926L1.20593 58.2657C1.52235 56.1233 1.94264 54.0134 2.46167 51.9411L1.97665 51.8196C2.3287 50.4139 2.72583 49.0254 3.16649 47.6555L3.64247 47.8086C3.86242 47.1248 4.0933 46.4457 4.33491 45.7714L3.86422 45.6027C4.84302 42.8712 5.99654 40.219 7.31181 37.6587L7.75656 37.8872C8.74077 35.9713 9.81628 34.1073 10.9776 32.3003L10.557 32.03C11.3382 30.8144 12.158 29.6245 13.0146 28.4619L13.4171 28.7585C13.8424 28.1814 14.2768 27.611 14.7201 27.0476L14.3272 26.7384C16.1123 24.47 18.0414 22.3139 20.1012 20.283L20.4523 20.639C21.9815 19.1313 23.5833 17.6929 25.2523 16.3294L24.936 15.9422C26.0529 15.0297 27.1997 14.1504 28.3746 13.306L28.6664 13.712C29.2481 13.294 29.8367 12.8846 30.432 12.484L30.1529 12.0692C32.539 10.4636 35.033 8.99825 37.6222 7.68545L37.8483 8.1314C39.7587 7.1628 41.7212 6.27783 43.7307 5.48148L43.5465 5.01665C44.8844 4.48649 46.2429 3.99534 47.6206 3.54466L47.7761 4.01988C48.4567 3.79724 49.142 3.58455 49.8319 3.38198L49.691 2.90223C52.4374 2.09577 55.2551 1.44863 58.1328 0.971889L58.2145 1.46517C60.319 1.11651 62.4559 0.859627 64.6206 0.698915L64.5836 0.200287C66.0149 0.0940223 67.4583 0.0295191 68.9124 0.00803119L68.9198 0.507977C69.2792 0.502665 69.6393 0.5 70 0.5C70.3607 0.5 70.7208 0.502665 71.0803 0.507977L71.0876 0.00803125C74.0136 0.0512695 76.8961 0.268674 79.7244 0.650032L79.6576 1.14555C81.8071 1.43536 83.925 1.82051 86.0067 2.29645L86.1181 1.80903C87.5321 2.1323 88.9296 2.49717 90.309 2.90223L90.1681 3.38198C90.858 3.58455 91.5433 3.79724 92.2239 4.01988L92.3794 3.54466C95.144 4.44903 97.8313 5.51634 100.429 6.73482L100.217 7.1875C102.173 8.1048 104.077 9.10837 105.926 10.1931L106.179 9.76189C107.428 10.4947 108.651 11.2643 109.847 12.0692L109.568 12.484C110.163 12.8846 110.752 13.294 111.334 13.712L111.625 13.306C113.979 14.9972 116.219 16.8282 118.333 18.7863L117.993 19.1531C119.573 20.6168 121.082 22.1521 122.515 23.7534L122.887 23.42C123.851 24.497 124.78 25.6036 125.673 26.7384L125.28 27.0476C125.723 27.611 126.158 28.1814 126.583 28.7585L126.985 28.4619C128.698 30.7858 130.263 33.2189 131.667 35.7482L131.23 35.9909C132.272 37.8672 133.225 39.7968 134.083 41.7744L134.542 41.5753C135.116 42.897 135.647 44.24 136.136 45.6027L135.665 45.7714C135.907 46.4456 136.138 47.1248 136.358 47.8086L136.834 47.6555C137.712 50.385 138.417 53.1884 138.937 56.0538L138.445 56.1431C138.826 58.2421 139.107 60.3746 139.282 62.5358L139.781 62.4953Z" fill="#D5C3AC" stroke="black" stroke-dasharray="2 4 6 8"/>
                 <path d="M99.5954 68.2933C99.9859 67.9028 99.9859 67.2696 99.5954 66.8791L93.2314 60.5151C92.8409 60.1246 92.2077 60.1246 91.8172 60.5151C91.4267 60.9057 91.4267 61.5388 91.8172 61.9294L97.474 67.5862L91.8172 73.2431C91.4267 73.6336 91.4267 74.2668 91.8172 74.6573C92.2077 75.0478 92.8409 75.0478 93.2314 74.6573L99.5954 68.2933ZM40.5517 68.5862H98.8882V66.5862H40.5517V68.5862Z" fill="black" fill-opacity="0.75"/>
                 </svg>
                 </div>

                 </div>

                </div>

                {/* Text & Link Btn*/}
                <div
                className="absolute -left-4 -bottom-0 z-[2] max-xl:-bottom-5 max-sm:bottom-[-20%]">
                <div className="h-[6.5rem] overflow-hidden text-nowrap bg-[#d5c3acc7] backdrop-blur-md px-8 pr-14 rounded-tr-full flex items-center max-sm:rounded-br-full max-sm:h-fit">
                <h1 ref={(e)=> textAnmRef.current[2]=e} className="text-8xl font-[f2] font-[900] tracking-wide text-zinc-800 max-xl:text-[6vw] max-sm:text-[10vw]" style={{textShadow: '1px 4px 9px #ffffff5c',}}>{showCaseWork[index].workName}</h1>
                </div>
                
                {/* <div className="flex h-[4.5rem] -mt-2 overflow-hidden pointer-events-none">
                      <div
                      className="scale-[.85]"
                      ref={buttonRef}>
                        <Button link={showCaseWork[index].link} bg={"#D5C3AC"}>
                          <div className="w-[10rem] flex pl-[1rem]">
                            <span className="inline-block text-lg font-[200]">
                              View Demo
                            </span>
                            <span className="inline-block h-[.8rem] pt-[.44rem]">
                              <GoArrowUpRight />
                            </span>
                          </div>
                        </Button>
                      </div>
                </div> */}
                </div>

                </div>


                
        </div>
      </div>

      {/* All Work */}
      <div className="w-full pt-20">
        <ShowWork work={work} />
      </div>

      <Footer />
    </div>
  );
}

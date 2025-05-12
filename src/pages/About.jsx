import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { mySkills } from "../lib/data.json";
import Work from "../components/home/work/Work";
import Footer from "../components/Footer";
import InfiniteMarquee from "../components/anm-part/InfiniteMarquee";
import { motion } from "framer-motion";

export default function About() {
  const bottomDivRef = useRef(null);
  const paragraphRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const paragraph = paragraphRef.current;

    if (paragraph) {
      paragraph.innerHTML = Array.from(paragraph.childNodes)
        .map((node) =>
          node.nodeType === Node.TEXT_NODE
            ? node.textContent
                .split(/\s+/)
                .filter(Boolean)
                .map(
                  (word) =>
                    `<div class='inline-block h-10 overflow-hidden'><span class='ps inline-block text-[#000]'>${word}</span></div>`
                )
                .join(" ")
            : node.outerHTML
        )
        .join(" ");
    }

    gsap.to(bottomDivRef.current, {
      borderRadius: "0px 0px 0px 0px",
      ease: "power4",
      scrollTrigger: {
        trigger: bottomDivRef.current,
        start: "top 70%",
        end: "10% 90%",
        scrub: 1,
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: "20% 75%",
        end: "40% 55%",
        scrub: 2,
      },
    });

    tl.from(".ps", {
      y: "101%",
      color: "#ffffff00",
      filter: "blur(8px)",
      duration: 2,
      stagger: 0.03,
      ease: "circ",
    }).from(".ps2", {
      y: "115%",
      color: "#ffffff00",
      filter: "blur(8px)",
      duration: 1,
      stagger: 0.1,
      ease: "circ",
    });
  }, []);

  return (
    <div className="relative w-full">
      {/* First Div */}
      <div className="fixed w-full h-screen">
        <div className="w-full h-screen flex flex-wrap justify-between">
          {/* Image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-[50vh] rounded-xl overflow-hidden max-sm:w-[90%]">
            <img
              className="w-full h-full object-cover bg-cover"
              src="../../../Images/myImage/7.jpeg"
              alt=""
            />
          </div>

          <div className="w-[50%] h-[50vh]">
            <img
              className="w-full h-full object-cover bg-cover"
              src="../../../Images/myImage/6.jpeg"
              alt=""
            />
          </div>

          <div className="w-[50%] h-[50vh]">
            <img
              className="w-full h-full object-cover bg-cover"
              src="../../../Images/myImage/5.jpg"
              alt=""
            />
          </div>

          <div className="w-[50%] h-[50vh]">
            <img
              className="w-full h-full object-cover bg-cover"
              src="../../../Images/myImage/7.jpeg"
              alt=""
            />
          </div>

          <div className="w-[50%] h-[50vh] bg-blue-600">
            <img
              className="w-full h-full object-cover bg-cover"
              src="../../../Images/myImage/8.jpeg"
              alt=""
            />
          </div>

          {/* Name */}
          <div className="absolute top-[80%] left-0 w-full h-fit">
            <div className="block w-full text-[4vw] h-fit max-sm:text-[15vw]">
              <InfiniteMarquee name={"About Nandlal"} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-screen" />

      {/* Bottom Div */}
      <div
        ref={bottomDivRef}
        className="relative w-full bg-[#d5c3acc7] backdrop-blur-md rounded-tl-full rounded-tr-full"
      >
        <div className="w-full h-screen flex items-center justify-center max-sm:h-fit max-sm:py-[20vw]">
          <div className="absolute top-[8%] left-1/2 -translate-x-1/2 h-fit z-[5] rotate-12 bg-black rounded-full p-2 max-sm:top-[5%]">
            <motion.div
              initial={{ y: "0%" }}
              animate={{ y: ["0%", "10%", "0%", "-12%", "0%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 5,
              }}
              className="w-[12vw] h-[12vw] max-sm:w-[40vw] max-sm:h-[40vw]"
            >
              <img
                className="w-full h-full object-cover bg-cover mix-blend-difference"
                src="../../../Images/avtar1.png"
                alt=""
              />
            </motion.div>
          </div>

          <div className="absolute top-[45%] left-0 h-fit z-[45] -rotate-12 max-sm:top-[40%]">
            <motion.div
              initial={{ x: "0%" }}
              animate={{ x: ["0%", "20vw", "-10vw", "0%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 5,
              }}
              className="text-[5vw] max-sm:text-[15vw]"
            >
              🥎
            </motion.div>
          </div>

          <div className="absolute top-[45%] right-0 h-fit z-[45] rotate-12 max-sm:top-[40%]">
            <motion.div
              initial={{ x: "0%" }}
              animate={{ x: ["0%", "-20vw", "10vw", "0%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 5,
              }}
              className="text-[5vw] max-sm:text-[15vw]"
            >
              🥎
            </motion.div>
          </div>

          <p
            ref={paragraphRef}
            className="relative z10] w-[58%] mx-auto text-center text-4xl font-['f2'] font-[500] leading-[1.5] text-black max-2xl:w-[80%] max-sm:pt-[30vh]"
          >
            Hi, I am Nandlal, a creative frontend developer UI/UX designer focused on building
            robust, scalable applications with seamless user experiences. Built websites for
            clients across India, as well as e-commerce websites for my clients, with a focus on
            SEO. Also participated in hackathons.
          </p>
        </div>

        <div className="relative w-full">
          {/* Top Heading */}
          <div className="absolute top-[-5%] left-[2%] max-sm:top-0">
            <h1 className="text-8xl font-[f2] max-sm:text-[15vw]">Skills...</h1>
          </div>

          <div className="w-full p-14 pt-32 pb-0 flex flex-col gap-8 max-sm:pt-32 max-sm:p-2 max-sm:flex max-sm:flex-col max-sm:items-center">
            {["Backend", "Frontend", "Other"].map((category) => (
              <div
                key={category}
                className="border-dashed border border-zinc-900 p-8 flex flex-col gap-4 bg-[#ac8f6867] rounded-2xl hover:bg-[#c9a77a41] ease-in duration-200"
              >
                <div>
                  <h2 className="text-xl">{category} :-</h2>
                  <div className="w-full flex flex-wrap gap-4 max-sm:pt-5">
                    {mySkills.map((work) =>
                      work[category]?.map((skill, skillIndex) => (
                        <h1 className="max-sm:leading-[.7]" key={skillIndex}>
                          {skill},
                        </h1>
                      ))
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#d5c3acc7] backdrop-blur-md">
        <Work />
      </div>

      <div className="w-full bg-[#d5c3acc7] backdrop-blur-md">
        <Footer />
      </div>
    </div>
  );
}
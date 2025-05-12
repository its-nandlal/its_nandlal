import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
export default function MusicPlay() {
  const [mplay, setMplay] = useState(false);
  const audio = useRef(null);

  useEffect(() => {
    audio.current = new Audio("/Music/background.mp3");
    audio.current.loop = true;
  }, []);

  useEffect(() => {
    if (mplay) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  }, [mplay]);
  return (
    <div 
    onClick={()=> setMplay((pre)=> !pre)}
    className=" fixed bottom-6 left-8 z-[99]">
      <audio src= ""></audio>
        {mplay && <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="#000000"
          width="3rem"
          height="3rem"
        >
          <motion.line
            x1="4"
            y1="14"
            x2="4"
            y2="18"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "easeInOut",
              delay: 0,
            }}
          />
          <motion.line
            x1="8"
            y1="12"
            x2="8"
            y2="20"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "easeInOut",
              delay: 0.1,
            }}
          />
          <motion.line
            x1="12"
            y1="7"
            x2="12"
            y2="25"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "easeInOut",
              delay: 0.2,
            }}
          />
          <motion.line
            x1="16"
            y1="14"
            x2="16"
            y2="18"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "easeInOut",
              delay: 0.3,
            }}
          />
          <motion.line
            x1="20"
            y1="10"
            x2="20"
            y2="22"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "easeInOut",
              delay: 0.4,
            }}
          />
          <motion.line
            x1="24"
            y1="7"
            x2="24"
            y2="25"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.line
            x1="28"
            y1="14"
            x2="28"
            y2="18"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "easeInOut",
              delay: 0.6,
            }}
          />
        </motion.svg>}

        {!mplay &&
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="#000000"
        width="3rem"
        height="3rem"
      >
        <line
          x1="4"
          y1="14"
          x2="4"
          y2="18"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="8"
          y1="12"
          x2="8"
          y2="20"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="12"
          y1="7"
          x2="12"
          y2="25"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="16"
          y1="14"
          x2="16"
          y2="18"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="20"
          y1="10"
          x2="20"
          y2="22"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="24"
          y1="7"
          x2="24"
          y2="25"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="28"
          y1="14"
          x2="28"
          y2="18"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>}
      <div>
    </div>
    </div>
  );
}

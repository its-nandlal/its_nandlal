import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import { work } from "../../lib/data.json";

function Cards({ index, visible }) {
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!visible) return; // Do nothing if the card is not visible

    const lerp = (start, end, factor) => start * (1 - factor) + end * factor;

    const handleMouseMove = (event) => {
      const rotateFactor = event.clientX / window.innerWidth;

      gsap.to(cardRef.current, {
        x: event.clientX - window.innerWidth / 2,
        y: event.clientY - window.innerHeight / 2,
        top: "33%",
        left: "40%",
        width: "fit-content",
        height: "fit-content",
        rotate: lerp(-40, 40, rotateFactor),
        pointerEvents: "none",
        ease: "none",
        duration: 0.4,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [visible]); // Only re-run when `visible` changes

  // Early return if the card is not visible
  if (!visible) return null;

  return (
    <div
      ref={cardRef}
      className="fixed z-[98] flex justify-center pointer-events-none top-[33%] left-[40%] w-fit h-fit"
    >
      <div ref={imageRef} className="w-[20rem] h-[30vh] rounded-3xl overflow-hidden">
        <img
          className="w-full h-full object-cover transition-all duration-300 ease-in-out"
          src={work[index].si1}
          alt={`Work preview ${index}`}
        />
      </div>
    </div>
  );
}
Cards.propTypes = {
  index: PropTypes.number.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default Cards;
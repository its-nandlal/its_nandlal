import { useRef } from 'react';
import { gsap, Power4 } from 'gsap';
import PropTypes from 'prop-types';

export default function MenuMegnito({ children }) {
  const magnetoRef = useRef(null);
  const magnetoTextRef = useRef(null);

  const activateMagneto = (event) => {
    if (window.innerWidth <= 768) return; // Only apply effect for larger screens

    const magneto = magnetoRef.current;
    const magnetoText = magnetoTextRef.current;

    if (!magneto || !magnetoText) return;

    const boundBox = magneto.getBoundingClientRect();
    const magnetoStrength = 25;
    const magnetoTextStrength = 25;
    const newX = ((event.clientX - boundBox.left) / magneto.offsetWidth - 0.5) * 2;
    const newY = ((event.clientY - boundBox.top) / magneto.offsetHeight - 0.5) * 2;

    gsap.to(magneto, {
      duration: 1,
      x: newX * magnetoStrength,
      y: newY * magnetoStrength,
      ease: Power4.easeOut,
    });

    gsap.to(magnetoText, {
      duration: 1,
      x: newX * magnetoTextStrength,
      y: newY * magnetoTextStrength,
      ease: Power4.easeOut,
    });
  };

  const resetMagneto = () => {
    if (window.innerWidth <= 768) return; // Only apply effect for larger screens

    const magneto = magnetoRef.current;
    const magnetoText = magnetoTextRef.current;

    if (!magneto || !magnetoText) return;

    gsap.to(magneto, {
      duration: 2.5,
      x: 0,
      y: 0,
      ease: 'elastic.out(1.2, 0.2)',
    });

    gsap.to(magnetoText, {
      duration: 2.5,
      x: 0,
      y: 0,
      ease: 'elastic.out(1.2, 0.2)',
    });
  };

  return (
    <div
      ref={magnetoRef}
      className="magneto rounded-full w-16 h-16 flex justify-center items-center hover:bg-black ease-in-out group max-sm:hover:bg-transparent"
      onMouseMove={activateMagneto}
      onMouseLeave={resetMagneto}
    >
      <div ref={magnetoTextRef} className="icon mix-blend-difference">
        {children}
      </div>
    </div>
  );
}

MenuMegnito.propTypes = {
  children: PropTypes.node.isRequired,
};
import React, { useEffect, useRef, useState, useCallback } from "react";
import HoverAnm from "./anm-part/HoverAnm";
import Menu from "./Menu";
import gsap from "gsap";
import MenuMegnito from "./anm-part/MenuMegnito";
import { Link } from "react-router-dom";

export default function NaveGation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const menuBtnRef = useRef([]);
  const menuSpanRef = useRef(null);

  const handleMenuToggle = useCallback(() => {
    setIsOpen((prevIsOpen) => {
      const newIsOpen = !prevIsOpen;

      if (menuRef.current) {
        gsap.to(menuRef.current, {
          duration: 0.5,
          x: newIsOpen ? "0" : "100%",
          ease: "power2.inOut",
        });

        gsap.to(menuSpanRef.current, {
          duration: 0.5,
          gap: newIsOpen ? 0 : "0.25rem",
          ease: "power2.inOut",
          onComplete: function () {
            gsap.to(menuSpanRef.current.querySelector(".s1"), {
              duration: 0.5,
              rotate: newIsOpen ? -50 : 0,
              scale: newIsOpen ? 0.8 : 1,
              ease: "power2.inOut",
            });

            gsap.to(menuSpanRef.current.querySelector(".s2"), {
              duration: 0.5,
              rotate: newIsOpen ? 50 : 0,
              scale: newIsOpen ? 0.8 : 1,
              ease: "power2.inOut",
            });
          },
        });

        // Disable or enable scrolling
        document.body.style.overflow = newIsOpen ? "hidden" : "auto";
      }

      return newIsOpen;
    });
  }, []);

  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      if (e.touches && e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
      }
    };

    const handleTouchEnd = () => {
      if (touchStartX !== 0 && touchEndX !== 0) {
        const swipeDistance = touchStartX - touchEndX;

        if (swipeDistance > 70) {
          // Swipe left to open menu
          if (!isOpen) handleMenuToggle();
        } else if (swipeDistance < -70) {
          // Swipe right to close menu
          if (isOpen) handleMenuToggle();
        }
      }
      touchStartX = 0;
      touchEndX = 0;
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches.length === 1) {
        touchEndX = e.touches[0].clientX;
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleMenuToggle, isOpen]);

  useEffect(() => {
    const menuButtons = menuBtnRef.current;

    if (menuButtons && menuButtons.length > 0) {
      menuButtons.forEach((item) => {
        if (item) {
          item.addEventListener("click", handleMenuToggle);
        }
      });
    }

    return () => {
      if (menuButtons && menuButtons.length > 0) {
        menuButtons.forEach((item) => {
          if (item) {
            item.removeEventListener("click", handleMenuToggle);
          }
        });
      }
    };
  }, [handleMenuToggle]);

  return (
    <div className="fixed top-0 left-0 z-[999] w-full px-7 flex justify-between font-['f2'] font-semibold max-sm:px-3 max-sm:items-center max-sm:-top-5">
      <Link to={"/"} className="w-fit max-sm:pt-0">
        <span className="block font-['f2'] font-semibold text-xl pt-3">
          Nandal <span className="font-['f4'] pl-1">Jangir</span>
        </span>
      </Link>

      <div className="w-fit px-10 flex items-center justify-center gap-16 bg-[#dcc3a398] rounded-bl-2xl rounded-br-2xl backdrop-blur-xl max-sm:hidden max-xl:h-[6.5vh]">
        {[
          { title: "Home", link: "/" },
          { title: "About", link: "/about" },
          { title: "Project", link: "/projects" },
          { title: "Contact", link: "/contact" },
        ].map((e, index) => (
          <HoverAnm key={index} e={e} />
        ))}
      </div>

      <div
        onClick={handleMenuToggle}
        className="w-fit relative z-[999999] flex flex-col gap-1 justify-center items-end max-sm:pt-3"
      >
        <MenuMegnito>
          <div ref={menuSpanRef} className="flex flex-col gap-1 max-sm:pl-6">
            <span className="s1 block w-8 h-[2px] bg-zinc-700 group-hover:bg-white transition-colors max-sm:group-hover:bg-zinc-700"></span>
            <span className="s2 block w-8 h-[2px] bg-zinc-700 group-hover:bg-white transition-colors max-sm:group-hover:bg-zinc-700"></span>
          </div>
        </MenuMegnito>
      </div>

      <Menu ref={menuRef} menuBtnRef={menuBtnRef} />
    </div>
  );
}
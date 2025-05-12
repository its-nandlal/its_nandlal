import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import HoverAnm from './anm-part/HoverAnm';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Megnito from './anm-part/Megnito';

const Menu = forwardRef(({ menuBtnRef }, ref) => {
  return (
    <div
      ref={ref}
      className='absolute top-0 right-0 translate-x-[100%] w-1/3 h-screen pt-[25vh] pb-[10vh] bg-[#ceb797e8] flex flex-col justify-between items-center max-sm:w-full max-sm:pt-[30vh] max-sm:pb-[25vh] max-sm:h-[110vh]'
    >
      <div className="text-[4vw] font-[100] flex flex-col items-center max-sm:text-[14vw] max-sm:tracking-widest">
        {[
          { title: "Home", link: "/" },
          { title: "About", link: "/about" },
          { title: "Project", link: "/projects" },
          { title: "Contact", link: "/contact" },
        ].map((e, index) => (
          <div key={index} ref={(el) => (menuBtnRef.current[index] = el)}>
            <HoverAnm e={e} />
          </div>
        ))}
      </div>

      <div className='flex gap-5 text-[1.5vw] max-sm:text-[6vw] max-sm:gap-10'>
        <Megnito>
          <a
            href="https://www.instagram.com/its__nandlal/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </Megnito>

        <Megnito>
          <a
            href="https://www.linkedin.com/in/nandal-jangir-0b1b1a1b6/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </Megnito>

        <Megnito>
          <a
            href="https://github.com/its-nandlal?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </Megnito>
      </div>
    </div>
  );
});

Menu.displayName = 'Menu';

Menu.propTypes = {
  menuBtnRef: PropTypes.shape({
    current: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default Menu;
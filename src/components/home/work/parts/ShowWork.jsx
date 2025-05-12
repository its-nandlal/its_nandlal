import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import InfiniteMarquee from '../../../anm-part/InfiniteMarquee';
import Cards from '../../../anm-part/Cards';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useNavigate } from 'react-router-dom';
import { work as myworks } from '../../../../lib/data.json';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function ShowWork({ work }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [viewProjects, setViewProjects] = useState(false);
  const mainDivRef = useRef([]);
  const navigate = useNavigate();

  const showViewProject = (index) => {
    navigate(`/projects/${myworks[index].workName.toLowerCase()}`);
  };

  useGSAP(() => {
    mainDivRef.current.forEach((ref) => {
      if (ref) {
        gsap.fromTo(
          ref.querySelectorAll('.work > .workTop'),
          { y: '100%' },
          {
            y: '0%',
            ease: 'power4.out',
            scrollTrigger: {
              trigger: ref,
              start: 'top 90%',
              end: 'bottom 80%',
              scrub: 2,
              // markers: true,
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [work]);

  const handleMouseEnter = (i) => {
    setIndex(i);
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  const isLargeScreen = window.innerWidth > 768;

  return (
    <div onMouseLeave={() => setViewProjects(false)}>
      {work.map((item, i) => (
        <motion.div
          ref={(el) => (mainDivRef.current[i] = el)}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
          onClick={() => {
            setViewProjects((prev) => !prev);
            showViewProject(i);
          }}
          initial={{ '--height': '0%' }}
          whileHover={{ '--height': '100%' }}
          key={i}
          className={`relative w-full px-10 py-10 border-t ${
            i === work.length - 1 && 'border-b'
          } border-[#8c795f] border-dashed max-sm:px-4`}
        >
          <div className="work h-9 overflow-hidden">
            <div className="workTop relative flex items-center gap-32 max-sm:gap-2 max-sm:justify-between">
              <div className="w-1/3 flex items-center gap-32 max-sm:w-fit max-sm:gap-12">
                <div>
                  <h3 className="text-2xl font-['f1'] font-semibold leading-[1] max-xl:text-[1.2rem] max-sm:text-[5vw]">
                    {item.year}-
                  </h3>
                </div>
                <div>
                  <h3 className="text-2xl uppercase font-['f1'] font-semibold leading-[1] max-xl:text-[1.2rem] max-sm:text-[5vw]">
                    {item.workName}
                  </h3>
                </div>
              </div>

              <div className="w-1/3 flex items-center gap-4 max-sm:w-fit max-sm:hidden">
                <h3 className="text-2xl leading-[1] font-['f1'] font-semibold max-xl:text-[1.2rem] max-sm:text-[3vw]">
                  {item.category}
                </h3>
                <span className="text-2xl leading-[1] font-['f1'] font-semibold max-xl:text-[1.2rem] max-sm:text-[3vw]">
                  |
                </span>
                <h3 className="text-2xl leading-[1] font-['f1'] font-semibold max-xl:text-[1.2rem] max-sm:text-[3vw]">
                  {item.language}
                </h3>
              </div>

              <div className="flex items-center">
                <span className="block text-xl font-['f1'] font-semibold leading-[1] max-xl:text-[1.2rem] max-sm:text-[5vw]">
                  <BsBoxArrowUpRight />
                </span>
              </div>
            </div>

            {visible && <InfiniteMarquee e={item} text={'2xl'} />}
          </div>
        </motion.div>
      ))}

      {isLargeScreen && <Cards index={index} visible={visible} />}
    </div>
  );
}

ShowWork.propTypes = {
  work: PropTypes.arrayOf(
    PropTypes.shape({
      year: PropTypes.string.isRequired,
      workName: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      language: PropTypes.string.isRequired,
    })
  ).isRequired,
};
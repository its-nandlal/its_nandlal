import { motion } from 'framer-motion';
import { TbArrowUpRight } from 'react-icons/tb';
import PropTypes from 'prop-types';

export default function InfiniteMarquee({ e, text, name = '' }) {
  const marqueeDuration = 15; // Adjust for smooth scrolling
  const marqueeItems = 10; // Number of repeated items in the marquee

  return (
    <motion.div
      className="absolute top-0 left-0 z-[2] w-full h-full flex items-center pointer-events-none"
    >
      <motion.div
        initial={{ height: '0%' }}
        animate={{ height: 'var(--height)' }}
        transition={{ ease: 'linear', duration: 0.001 }}
        className="w-full bg-white flex items-center overflow-hidden ease-linear duration-100"
      >
        {/* Create seamless marquee by duplicating the content */}
        <div className="flex gap-8">
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              className="flex w-full"
              initial={{ x: '0%' }} // Start off-screen right
              animate={{ x: '-100%' }} // Move to off-screen left
              transition={{
                repeat: Infinity,
                ease: 'linear',
                duration: marqueeDuration, // Adjust for smooth scrolling
              }}
            >
              {[...Array(marqueeItems)].map((_, j) => (
                <span
                  key={j}
                  className={`text-${text} font-["f2"] font-semibold uppercase flex items-center gap-4 pl-4 whitespace-nowrap`}
                >
                  {e ? `${e.workName} ` : name} {e && <TbArrowUpRight />}
                </span>
              ))}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

InfiniteMarquee.propTypes = {
  e: PropTypes.shape({
    workName: PropTypes.string,
  }),
  text: PropTypes.string.isRequired,
  name: PropTypes.string,
};

InfiniteMarquee.defaultProps = {
  e: null,
  name: '',
};
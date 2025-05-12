import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Button({ children, link, bg = '' }) {
  return (
    <div className="h-20 w-[12rem] flex items-center justify-center pointer-events-auto max-sm:w-fit">
      {link ? (
        <Link
          to={link}
          className={`relative bg-[${bg}] border-zinc-900 border-[1px] border-dashed rounded-full flex items-center justify-center cursor-none overflow-hidden`}
        >
          <motion.div
            initial={{
              paddind: '1rem 2rem',
              '--top': '0',
              '--borderRadius': '40rem 40rem 0 0',
              '--btop': '101%',
            }}
            whileHover={{
              padding: ['1.3rem 2.3rem', '.65rem 1.5rem', '1rem 1.75rem'],
              '--top': ['-100%', '200%', '-100%'],
              '--borderRadius': ['40rem 40rem 0 0', '15rem 15rem 0 0', '0 0 0 0'],
              '--btop': '0%',
            }}
            transition={{ ease: 'backInOut', duration: 0.55 }}
            className="px-7 py-4 w-full h-full"
          >
            <div className="relative z-[2] h-6 font-['f2'] overflow-hidden">
              <motion.span
                initial={{ top: '0' }}
                animate={{ top: 'var(--top)' }}
                className="relative block max-sm:flex max-sm:items-center max-sm:gap-1"
              >
                {children}
              </motion.span>
              <motion.span
                initial={{ top: '0' }}
                animate={{ top: 'var(--top)' }}
                className="relative block text-white font-['f1'] max-sm:flex max-sm:items-center max-sm:gap-1"
              >
                {children}
              </motion.span>
            </div>
            <motion.div
              initial={{ borderRadius: '40rem 40rem 0 0', top: 'var(--btop)' }}
              animate={{ borderRadius: 'var(--borderRadius)', top: 'var(--btop)' }}
              className="absolute z-[1] top-[101%] left-0 bottom-0 ring-0 w-full h-[150%] bg-black rounded-tl-[40rem] rounded-tr-[40rem]"
            />
          </motion.div>
        </Link>
      ) : (
        <div
          className={`relative bg-[${bg}] border-zinc-900 border-[1px] border-dashed rounded-full flex items-center justify-center cursor-none overflow-hidden`}
        >
          <motion.div
            initial={{
              paddind: '1rem 2rem',
              '--top': '0',
              '--borderRadius': '40rem 40rem 0 0',
              '--btop': '101%',
            }}
            whileHover={{
              padding: ['1.3rem 2.3rem', '.65rem 1.5rem', '1rem 1.75rem'],
              '--top': ['-100%', '200%', '-100%'],
              '--borderRadius': ['40rem 40rem 0 0', '15rem 15rem 0 0', '0 0 0 0'],
              '--btop': '0%',
            }}
            transition={{ ease: 'backInOut', duration: 0.55 }}
            className="px-7 py-4 w-full h-full"
          >
            <div className="relative z-[2] h-6 font-['f2'] overflow-hidden">
              <motion.span
                initial={{ top: '0' }}
                animate={{ top: 'var(--top)' }}
                className="relative block max-sm:flex max-sm:items-center max-sm:gap-1"
              >
                {children}
              </motion.span>
              <motion.span
                initial={{ top: '0' }}
                animate={{ top: 'var(--top)' }}
                className="relative block text-white font-['f1'] max-sm:flex max-sm:items-center max-sm:gap-1"
              >
                {children}
              </motion.span>
            </div>
            <motion.div
              initial={{ borderRadius: '40rem 40rem 0 0', top: 'var(--btop)' }}
              animate={{ borderRadius: 'var(--borderRadius)', top: 'var(--btop)' }}
              className="absolute z-[1] top-[101%] left-0 bottom-0 ring-0 w-full h-[150%] bg-black rounded-tl-[40rem] rounded-tr-[40rem]"
            />
          </motion.div>
        </div>
      )}
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string,
  bg: PropTypes.string,
};

Button.defaultProps = {
  link: null,
  bg: '',
};
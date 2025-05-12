import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function HoverAnm({ e }) {
  return (
    <>
      <motion.div
        className="relative cursor-none"
        initial={{
          "--underline-scale": 0,
          "--transformOrigin": "bottom right",
        }}
        whileHover={{
          "--underline-scale": 1,
          "--transformOrigin": "bottom left",
        }}
      >
        <Link to={e.link} className="relative cursor-none leading-[1]">
          {e.title}
        </Link>

        <motion.div
          className="absolute top-[94%] left-0 w-full h-[2px] bg-[#ffe5c4]"
          initial={{ scaleX: 0, transformOrigin: "bottom left" }}
          animate={{
            scaleX: "var(--underline-scale)",
            transformOrigin: "var(--transformOrigin)",
          }}
          transition={{ ease: "linear", duration: 0.5 }}
        />
      </motion.div>
    </>
  );
}

HoverAnm.propTypes = {
  e: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};
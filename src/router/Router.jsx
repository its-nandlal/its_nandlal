import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "../pages/Home";
import ViewProject from "../components/projects/view-project/ViewProject";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Contact from "../pages/Contact";

export default function AppRouter() {
  const location = useLocation();

  // Scroll to the top on route change
  useEffect(() => {
    window.scrollTo(0,  0);
  }, [location]);

  // Animation Variants
  const pageVariants = {
    initial: { opacity: 0, scale: 1.02 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.03 },
  };

  const pageTransition = {
    duration: 0.8,
    ease: "easeInOut",
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route
          path="/"
          element={
            <motion.div
              key={location.pathname}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <Home />
            </motion.div>
          }
        />


        <Route
          path="/projects"
          element={
            <motion.div
              key={location.pathname}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <Projects />
            </motion.div>
          }
        />

        <Route
          path="/projects/:pname"
          element={
            <motion.div
              key={location.pathname}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <ViewProject />
            </motion.div>
          }
        />

        <Route
          path="/about"
          element={
            <motion.div
              key={location.pathname}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <About />
            </motion.div>
          }
        />

        <Route
          path="/contact"
          element={
            <motion.div
              key={location.pathname}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <Contact />
            </motion.div>
          }
        />

      </Routes>
    </AnimatePresence>
  );
}

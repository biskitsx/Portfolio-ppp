import { motion, AnimatePresence } from "framer-motion";
import SubProject from "./SubProject";
import { projects } from "@/data/project";
import clsx from "clsx";
import { useState, useEffect } from "react";

function Project() {
  const [showAll, setShowAll] = useState(false);
  const [isExpanding, setIsExpanding] = useState(false);
  const initialProjectCount = 4; // Show only 6 projects initially

  // Display either all projects or just the initial set
  const displayedProjects = showAll
    ? projects
    : projects.slice(0, initialProjectCount);

  // Scroll to proper position when expanding/collapsing
  useEffect(() => {
    if (isExpanding) {
      const timer = setTimeout(() => setIsExpanding(false), 800);
      return () => clearTimeout(timer);
    }
  }, [isExpanding]);

  const handleToggle = () => {
    if (!showAll) {
      setIsExpanding(true);
    } else {
      const projectSection = document.getElementById("project");
      if (projectSection) {
        projectSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setShowAll(!showAll);
  };

  // Container animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="w-full flex justify-center bg-base-200" id="project">
      <div className="w-11/12 px-5 py-10 md:py-32 lg:w-300 flex flex-col gap-8">
        <div className="font-bold flex gap-3 flex-col relative">
          <motion.h1
            className="text-secondary-focus uppercase"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: { duration: 0.5 },
            }}
          >
            Project
          </motion.h1>
          <motion.p
            className="text-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: { duration: 0.8 },
            }}
          >
            Some of my project 🚀
          </motion.p>
        </div>

        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 auto-rows-fr"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {displayedProjects.map((project, index) => {
              const widerIndex = [0, 3, 8];
              let isSpan = false;
              if (widerIndex.includes(index)) {
                isSpan = true;
              }

              return (
                <motion.div
                  key={index}
                  className={clsx("h-full", {
                    "sm:col-span-2 lg:col-span-2": isSpan,
                  })}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="h-full flex flex-col">
                    <SubProject props={project} className="flex-grow h-full" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <div className="flex flex-col items-center mt-8">
          <motion.button
            className="btn btn-primary px-8 relative overflow-hidden group"
            onClick={handleToggle}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              {showAll ? "View Less" : "View More"}
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </motion.svg>
            </span>
            <motion.span
              className="absolute inset-0 bg-primary-focus opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.p
            className="text-sm text-gray-500 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {showAll
              ? "Showing all projects"
              : `Showing ${initialProjectCount} of ${projects.length} projects`}
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default Project;

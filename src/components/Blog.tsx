import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { blogDetail } from "@/data/blog";
import SubBlog from "./SubBlog";
import { useState } from "react";

function Blog() {
  const [showAll, setShowAll] = useState(false);
  const initialBlogCount = 3; // Show only 3 blogs initially

  // Display either all blogs or just the initial set
  const displayedBlogs = showAll
    ? blogDetail
    : blogDetail.slice(0, initialBlogCount);

  const handleToggle = () => {
    if (!showAll) {
      // When expanding, we'll scroll to the newly revealed content
      setTimeout(() => {
        const blogSection = document.getElementById("blog");
        if (blogSection) {
          const scrollPosition = blogSection.offsetTop + window.innerHeight / 2;
          window.scrollTo({
            top: scrollPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      // When collapsing, scroll back to the blog section
      const blogSection = document.getElementById("blog");
      if (blogSection) {
        blogSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setShowAll(!showAll);
  };

  return (
    <div className="w-full flex justify-center" id="blog">
      <div className="w-11/12 px-5 py-10 md:py-32 lg:w-225 flex flex-col gap-8">
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
            Blog
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
            My blog on Medium 🌈
          </motion.p>
          <Image
            alt="sticker"
            src="/sticker2.png"
            width={1000}
            height={1000}
            className="absolute w-24 sm:w-40 -bottom-10 right-0 -rotate-12"
          />
        </div>

        <AnimatePresence>
          <motion.div
            className="flex flex-col gap-10"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            {displayedBlogs.map((blog, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SubBlog
                  description={blog.description}
                  title={blog.title}
                  image={blog.image}
                  link={blog.link}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {blogDetail.length > initialBlogCount && (
          <motion.div
            className="flex relative justify-center mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              className="btn btn-primary px-8 relative overflow-hidden group"
              onClick={handleToggle}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
              className="text-sm text-gray-500 mt-2 absolute -bottom-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {showAll
                ? "Showing all posts"
                : `Showing ${initialBlogCount} of ${blogDetail.length} posts`}
            </motion.p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Blog;

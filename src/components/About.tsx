import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faComment } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Image from "next/image";
import Step from "./Step";
import { MotionFaded } from "./Motion/MotionFaded";

function About() {
  return (
    <div className=" w-full flex justify-center" id="about">
      <div className="w-11/12 px-5 py-10 md:py-32 lg:w-225 flex flex-col gap-10 ">
        <div className="grid grid-cols-1  gap-10">
          {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-10'> */}
          <MotionFaded className="text-secondary-focus flex flex-col items-center">
            <div className="relative">
              <Image
                src="/baac.JPG"
                alt="connected"
                width={1000}
                height={1000}
                className="overflow-hidden shadow-md rounded-md w-80 mx-auto transition-all hover:rotate-3"
              />
              {/* <Image src="/z.JPG" alt='connected' width={3000} height={1000} className='overflow-hidden shadow-md rounded-md mx-auto transition-all hover:rotate-3' /> */}
              <Image
                alt="sticker"
                src="/sticker1.png"
                width={1000}
                height={1000}
                className="w-20 -bottom-8 -left-8 sm:w-28 absolute sm:-bottom-12 sm:-left-12 bg-secondary rounded-full shadow-lg animate-spin-slow"
              />
            </div>
          </MotionFaded>

          <div className="flex flex-col gap-4 font-bold">
            <motion.h1
              className="text-secondary-focus uppercase"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.5 },
              }}
            >
              About Me
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
              Get to know me 📍
            </motion.p>
            <motion.div
              className="text-xs md:text-sm font-normal text-justify flex flex-col gap-2"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.5 },
              }}
            >
              {/* <p className=''>I started programming for the first time in the <span className='font-medium text-primary'>&quot;Computer and Programming&quot;</span> subject while I was in my first year of electrical engineering (2 years ago). As I continued to study this course, I discovered that I enjoyed solving problems and writing programs. This subject was a turning point in my life, and it made me switch from electrical engineering to <span className='font-medium text-primary'>computer engineering</span> at <span className='font-medium text-primary'>Kasetsart University</span></p> */}
              {/* <p>When I first transferred, I had to work hard because I didn&apos;t have the same background as my friends. I started learning C and C++, which helped me learn about data structures and algorithms. Then, I discovered HTML, CSS, and JavaScript, which change my perspective and helped me understand how websites work.</p>
                            <p>After that, I kept learning, whether it was frontend or backend, new languages, and I made small projects every time I had free time after class. I also had the opportunity to become a teaching assistant in a developer course for second-year students, which was a great experience. I also worked on a <span className='font-medium text-primary'>GIS (Geographic Information Systems)</span> project application , which was an application that showed the location of activities on my campus using Google Map APIs.</p>
                            <p>Now, I am interested in creating web applications and I am looking for opportunities to work on new projects.</p> */}
              {/* <p>
                I am a fourth-year computer engineering student at Kasetsart
                University with a strong passion for software development. I
                have built several projects, including both frontend and backend
                applications using programming languages and frameworks such as
                Go, Node.js, React, and others. I believe that intelligence can
                be developed through dedication and hard work, and I am excited
                to apply my skills and knowledge to develop innovative and
                user-friendly software products.
              </p> */}
              <p>
                {" "}
                I am a fourth-year computer engineering student at Kasetsart
                University with a strong passion for software development. I
                have built several projects, including both frontend and backend
                applications using programming languages and frameworks such as
                Go, Node.js, React, and others. I believe that intelligence can
                be developed through dedication and hard work, and I am excited
                to apply my skills and knowledge to develop innovative and
                user-friendly software products.{" "}
              </p>{" "}
              <p>
                {" "}
                In 2024, I completed a 7-month internship at Appsynth as a Full
                Stack Developer. During this time, I worked on internal projects
                using Next.js and Golang, contributing to an employee engagement
                system and a time-tracking platform. I practiced Agile
                methodologies, collaborated closely with my team, and led
                knowledge-sharing sessions on topics like Feature Flags and
                OWASP. This experience not only strengthened my technical skills
                but also enhanced my teamwork and communication abilities.{" "}
              </p>
            </motion.div>
            <p className="text-xs font-normal text-justify "></p>
            <Step />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

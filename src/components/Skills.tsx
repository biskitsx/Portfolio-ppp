import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
const frontEnd = ["ReactJS", "NextJS", "Tailwind"];
const backEnd = [
  "NodeJS",
  "TypeScript",
  "JavaScript",
  "MongoDB",
  "Prisma",
  "PosgreSQL",
  "MySQL",
  "GO",
  "Docker",
];
import { logo, softSkills } from "@/data/skills";

function Skills() {
  return (
    <div
      className="bg-base-200 w-full flex justify-center items-center md:h-screen "
      id="skills"
    >
      <div className="w-11/12 px-5 py-10 md:py-32 lg:w-225 flex flex-col-reverse sm:flex-row gap-4  relative">
        <div className="flex flex-col gap-10 w-full">
          <div className="font-bold flex gap-3 flex-col">
            <motion.h1
              className="text-secondary-focus uppercase "
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.5 },
              }}
            >
              Skills
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
              Hard skills 🧑🏻‍💻
            </motion.p>
          </div>

          <div className="flex flex-wrap gap-3">
            {logo.map((item, index) => {
              const isExternal = item.externalLink;
              let src = item.src;
              if (!isExternal) {
                const githubIconBase =
                  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/";
                src = githubIconBase + item.src;
              }

              return (
                <a
                  className="rounded-full shadow-md bg-white p-2 hover:scale-105 transition"
                  key={index}
                  href={item.link}
                >
                  <motion.div
                    initial={{ scale: 0.1, opacity: 1 }}
                    whileInView={{
                      scale: 1,
                      opacity: 1,
                      transition: { duration: 0.5 },
                    }}
                  >
                    <Image
                      src={src}
                      alt={item.title}
                      width={30}
                      height={30}
                      className=""
                    />
                  </motion.div>
                </a>
              );
            })}
          </div>

          {/* <div className='relative'> */}

          {/* <Image alt='sticker' src="/sticker4.png" width={1000} height={1000} className='absolute w-20 sm:w-36 bottom-0 right-0' /> */}
          <motion.p
            className="text-2xl font-bold md:mt-20 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: { duration: 0.8 },
            }}
          >
            Soft skills 🧑🏻
          </motion.p>
          {/* </div> */}

          <div className="grid grid-cols-2  gap-5">
            {softSkills.map((item, index) => {
              return (
                <div
                  className="bg-base-100 p-2 rounded-md shadow-md font-medium flex justify-center items-center "
                  key={index}
                >
                  <motion.p
                    className="text-center text-sm"
                    initial={{ scale: 0.1, opacity: 1 }}
                    whileInView={{
                      scale: 1,
                      opacity: 1,
                      transition: { duration: 0.5 },
                    }}
                  >
                    {item}
                  </motion.p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
          <motion.div
            className="relative w-1/2 sm:w-60 md:w-72 space-y-4"
            initial={{ scale: 0.1, opacity: 1 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: { duration: 0.5 },
            }}
          >
            <div className="mockup-phone">
              <div className="camera"></div>
              <div className="display">
                <video controls muted autoPlay>
                  <source src="/video/presentation.mp4" type="video/mp4" />
                </video>
                {/* <div className="artboard artboard-demo phone-1">Hi.</div> */}
              </div>
            </div>
            <div className="bg-white rounded-md p-1">
              <h1 className="text-center font-medium">
                Internship Project Showcase 🚀
              </h1>
            </div>
            {/* <Image
              alt="sticker"
              src="/sticker4.png"
              width={5000}
              height={5000}
              className="w-full rounded-md"
            /> */}
            {/* <p className='absolute top-6 right-0 animate-spin text-3xl'>🌚</p> */}
            {/* <p className='absolute top-4 left-2 animate-spin text-4xl'>🌎</p> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

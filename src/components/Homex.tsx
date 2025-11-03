import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { faPersonFalling } from "@fortawesome/free-solid-svg-icons";
import { faCircleDown } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import TypewriterComponent from "typewriter-effect";
import { Link } from "react-scroll";
import { MotionFaded } from "./Motion/MotionFaded";

function Homex() {
  return (
    <div
      className="md:h-screen w-full flex justify-center items-center "
      id="home"
    >
      <div className="w-11/12 font-semibold flex flex-col justify-center items-center">
        <div className="flex flex-col items-center gap-8 py-10 md:flex-row-reverse lg:w-225 md:justify-between">
          <MotionFaded className="text-secondary-focus">
            <Image
              src="/birthday.JPG"
              alt="my-pic"
              width={300}
              height={300}
              className="mask mask-hexagon-2 sm:mask-squircle shadow-lg border-gray-700 transition-all hover:rotate-2"
            />
          </MotionFaded>
          <MotionFaded className="flex flex-col gap-4 text-center md:text-left md:w-140 relative">
            <h1 className="text-4xl  font-bold md:text-5xl lg:text-7xl ">
              <span className="text-3xl">Hi there 👋🏻, I&apos;m a</span>
              <span className="text-accent-focus">
                <TypewriterComponent
                  options={{
                    strings: [
                      "TypeScript",
                      "JavaScript",
                      "Golang",
                      "ReactJS",
                      "NextJS",
                      "Web",
                      "Backend",
                      "FullStack",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
              <div className="relative">
                Developer
                {/* <Image alt='sticker' src="/sticker2.png" width={1000} height={1000} className='w-32 absolute -top-12 right-4 animate-bounce' /> */}
              </div>
            </h1>

            <p className="text-lg font-normal ">
              Hello, I&apos;m Kit Suphakit. I&apos;m interested in{" "}
              <span className="text-secondary font-semibold  ">
                Full-Stack Developer
              </span>{" "}
              base in Thailand{" "}
              <FontAwesomeIcon
                icon={faPersonFalling}
                className="text-primary"
              />
            </p>

            <div className="flex gap-5 text-4xl justify-center transition-transform">
              <a
                href="https://www.facebook.com/kittspk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="hover:text-blue-600 hover:scale-110 "
                />
              </a>
              <a
                href="https://www.instagram.com/ksuphakyy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="hover:text-pink-600 hover:scale-110 "
                />
              </a>
              <a
                href="https://github.com/biskitsx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="hover:text-purple-800 hover:scale-110 "
                />
              </a>
              <a
                href="https://www.linkedin.com/in/suphakit-s/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="hover:text-blue-600 hover:scale-110 "
                />
              </a>
              <a
                href="https://medium.com/@kitsugarr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faMedium}
                  className="hover:text-black hover:scale-110 "
                />
              </a>
            </div>
          </MotionFaded>
        </div>
        <MotionFaded>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-73}
            duration={500}
            className="cursor-pointer hover:scale-105"
          >
            <FontAwesomeIcon
              icon={faCircleDown}
              className=" md:block animate-bounce text-3xl pb-4 md:pb-0 "
            />
          </Link>
        </MotionFaded>
      </div>
    </div>
  );
}

export default Homex;

import React from "react";
import Link from "next/link";
import scroll from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHippo, faBars } from "@fortawesome/free-solid-svg-icons";
import Swap from "./Swap";

function Navbar() {
  return (
    <div className="w-full flex justify-between font-semibold px-10 bg-base-100 py-6 items-center top-0 transition-transform sticky lg:fixed z-50">
      <Link href="#" className=" cursor-pointer">
        <h2 className="font-bold text-lg flex gap-2 items-center">
          suphakit {/* SUPHAKIT{" "} */}
          <FontAwesomeIcon
            icon={faHippo}
            className="text-accent !text-lg"
            width={18}
            height={18}
          />
        </h2>
      </Link>

      <nav className="hidden sm:flex gap-4 font-semibold">
        <scroll.Link
          to="home"
          spy={true}
          smooth={true}
          offset={-73}
          duration={500}
          className="cursor-pointer hover:scale-105"
        >
          Home
        </scroll.Link>
        <scroll.Link
          to="skills"
          spy={true}
          smooth={true}
          offset={-73}
          duration={500}
          className="cursor-pointer hover:scale-105"
        >
          Skills
        </scroll.Link>
        <scroll.Link
          to="about"
          spy={true}
          smooth={true}
          offset={-73}
          duration={500}
          className="cursor-pointer hover:scale-105"
        >
          About
        </scroll.Link>
        <scroll.Link
          to="project"
          spy={true}
          smooth={true}
          offset={-73}
          duration={500}
          className="cursor-pointer hover:scale-105"
        >
          Project
        </scroll.Link>
        <scroll.Link
          to="blog"
          spy={true}
          smooth={true}
          offset={-73}
          duration={500}
          className="cursor-pointer hover:scale-105"
        >
          Blog
        </scroll.Link>
        <scroll.Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-73}
          duration={500}
          className="cursor-pointer hover:scale-105"
        >
          Contact
        </scroll.Link>
        <Swap />
      </nav>
      <nav className="sm:hidden gap-4 font-semibold flex items-center">
        <Swap />
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="text-xl">
            <FontAwesomeIcon icon={faBars} className="cursor-pointer" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <scroll.Link
              to="home"
              spy={true}
              smooth={true}
              offset={-73}
              duration={500}
              className="cursor-pointer p-1 hover:bg-base-200 rounded-md"
            >
              Home
            </scroll.Link>
            <scroll.Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-73}
              duration={500}
              className="cursor-pointer hover:bg-base-200 rounded-md p-1"
            >
              Skills
            </scroll.Link>
            <scroll.Link
              to="about"
              spy={true}
              smooth={true}
              offset={-73}
              duration={500}
              className="cursor-pointer hover:bg-base-200 rounded-md p-1"
            >
              About
            </scroll.Link>
            <scroll.Link
              to="project"
              spy={true}
              smooth={true}
              offset={-73}
              duration={500}
              className="cursor-pointer hover:bg-base-200 rounded-md p-1"
            >
              Project
            </scroll.Link>
            <scroll.Link
              to="blog"
              spy={true}
              smooth={true}
              offset={-73}
              duration={500}
              className="cursor-pointer hover:bg-base-200 rounded-md p-1"
            >
              Blog
            </scroll.Link>
            <scroll.Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-73}
              duration={500}
              className="cursor-pointer hover:bg-base-200 rounded-md p-1"
            >
              Contact
            </scroll.Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

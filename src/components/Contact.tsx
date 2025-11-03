import {
  faCode,
  faEnvelope,
  faPhone,
  faIdCard,
  faFile,
  faLink,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { motion } from "framer-motion";

const contact = [
  {
    icon: faEnvelope,
    name: "Email",
    val: "suphakit.songs@gmail.com",
  },
  {
    icon: faPhone,
    name: "Telephone",
    val: "098-254-6225",
  },
];

const fade = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.75 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

function Contact() {
  return (
    <div className=" w-full flex justify-center bg-base-200" id="contact">
      <div className="w-11/12 px-5 py-10 lg:w-225 md:py-32 flex flex-col gap-10 ">
        <div className="font-bold flex gap-3 flex-col">
          <motion.h1
            className="text-secondary-focus uppercase"
            variants={fade}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: { duration: 0.5 },
            }}
          >
            Contact
          </motion.h1>
          <motion.p
            className="text-2xl"
            variants={fade}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: { duration: 0.8 },
            }}
          >
            Get in touch with me 🙋🏻‍♂️
          </motion.p>
        </div>
        <div className="w-full flex-col flex gap-5 items-center sm:flex-row sm:justify-around ">
          {contact.map((item, i) => {
            return (
              <div className="flex  items-center gap-2 w-60" key={i}>
                <div className="rounded-full shadow-md p-3 grid place-items-center bg-white">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-secondary-focus text-2xl"
                  />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold">{item.name}</h4>
                  <p className="font-medium hover:text-secondary-focus cursor-pointer">
                    {item.val}
                  </p>
                </div>
              </div>
            );
          })}
          <div className="flex  items-center gap-2 w-60">
            <div className="rounded-full shadow-md p-3 grid place-items-center bg-white">
              <FontAwesomeIcon
                icon={faCopy}
                className="text-secondary-focus text-2xl"
              />
            </div>
            <div className="flex flex-col">
              <h4 className="font-bold">Resume</h4>
              <a
                href="/suphakit_resume.pdf"
                className="font-medium hover:text-secondary-focus cursor-pointer"
              >
                Click to open
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

import React from "react";
import {
  faComment,
  faCube,
  faIcons,
  faLink,
  faMugHot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import clsx from "clsx";
export interface ProjectProps {
  url?: string;
  github?: string;
  image: string;
  title: string;
  desc: string;
  tools: string[];
}

interface SubProjectProps {
  props: ProjectProps;
  className?: string;
}
function SubProject({ props, className }: SubProjectProps) {
  const handleLinkClick = () => {
    if (props.url == "#") {
      return;
    }
  };

  return (
    <div
      className={clsx(
        "card shadow-2xl bg-base-100 card-compact hover:scale-105 transition-all rounded-md",
        className
      )}
      onClick={handleLinkClick}
    >
      <figure className="shadow-sm">
        <Image
          src={props.image}
          alt={props.title}
          className="h-56 w-full object-cover"
          width={1000}
          height={1000}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title ">
          <p>{props.title}</p>
          {props.github && (
            <a
              className="badge badge-secondary  text-white  hover:scale-125 cursor-pointer"
              href={props.github}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          )}
          {props.url && (
            <a
              className="badge badge-accent text-white flex gap-1 hover:scale-125 cursor-pointer"
              href={props.url}
            >
              <FontAwesomeIcon icon={faLink} />
            </a>
          )}
        </h2>
        <p>{props.desc}</p>
        <div className="card-actions justify-end">
          {props.tools.map((tool: string, index: number) => {
            return (
              <div className="badge badge-outline" key={index}>
                {tool}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SubProject;

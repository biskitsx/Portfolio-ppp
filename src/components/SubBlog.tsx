import Image from "next/image";
import React from "react";

interface BlogProps {
  title: string;
  image: string;
  link: string;
  description: string;
}

function SubBlog({ title, image, link, description }: BlogProps) {
  return (
    <div className="card card-compact md:card-side bg-base-100 shadow-xl relative overflow-hidden rounded-md md:h-36 ">
      <figure className="">
        <Image
          src={image}
          alt={image}
          width={200}
          height={200}
          className="w-full md:w-60 h-full lg:w-72 "
        />
      </figure>
      <div className="card-body w-11/12 ">
        <a className="card-title hover:underline cursor-pointer " href={link}>
          {title}
        </a>
        <div className="line-clamp-2">{description}</div>
        <a
          href={link}
          className="hover:underline cursor-pointer text-secondary text-end"
        >
          อ่านต่อที่นี่...
        </a>
      </div>
    </div>
  );
}

export default SubBlog;

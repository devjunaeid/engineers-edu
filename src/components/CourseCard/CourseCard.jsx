"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoTimerSharp } from "react-icons/io5";
import { RiBookReadFill } from "react-icons/ri";
import { SiBuildkite } from "react-icons/si";
import { FaHandPointRight } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import Link from "next/link";

function CourseCard({ img, title, sdesc, fdesc, achievements, module }) {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle)
  };
  return (
    <div className="flex flex-col justify-center items-center card w-full h-fit border bg-slate-200">
      <figure className="w-full">
        <Image
          src={img}
          alt="Hero Img 1"
          width={800}
          height={400}
          className="row-span-2 w-full h-72 object-cover object-center rounded-md rounded-b-none"
        />
      </figure>
      <div className="flex justify-center text-sm md:text-base items-center gap-2 md:gap-5 mt-8">
        <p className="flex items-center justify-center rounded-md gap-2 px-1 md:px-3 py-1 bg-amber-400">
          <IoTimerSharp /> {module[0]}
        </p>
        <p className="flex items-center justify-center rounded-md gap-2 px-1 md:px-3 py-1 bg-amber-400">
          <RiBookReadFill />
          {module[1]}
        </p>
        <p className="flex items-center justify-center rounded-md gap-2 px-1 md:px-3 py-1 bg-amber-400">
          <SiBuildkite />
          {module[2]}
        </p>
      </div>
      <div className="px-4 md:px-8 pt-6">
        <h2 className="card-title text-2xl text-center font-anekBd">{title}</h2>
        <p className="text-justify">{sdesc}</p>
      </div>
      <div className={`${(toggle)? "px-4 md:px-8 pt-6" :"hidden"}`}>
        <div className="font-lg text-justify">{fdesc}</div>
        <div className="flex flex-col mt-4">
          <h2 className="text-xl font-semibold">এই কোর্স শেষে আপনি</h2>
          <div className="w-[90%] m-auto my-4 flex flex-col justify-start items-start gap-2">
            {achievements.map((a, index) => (
              <p key={index} className="flex justify-center items-center gap-4">
                <FaHandPointRight className="text-amber-400 w-6 h-6" />
                {a}
              </p>
            ))}
          </div>
        </div>
        <div className="text-center my-4">
          <Link
            href={"/"}
            className="text-xl bg-amber-400 px-4 py-2 rounded-md"
          >
            রেজিস্টার করুন
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-center items-center my-2 relative">
        <button className={`${(toggle)? "hidden" : "text-lg font-semibold flex items-center justify-center gap-4 hover:text-amber-600 hover:transition-colors hover:ease-in-out hover:duration-500 text-center"}`} onClick={handleToggle}>
          আরো জানুন
          <IoIosArrowDown size={20} />
        </button>
        <button  className={`${(toggle)? "absolute bottom-4 right-2 px-2 py-2 bg-amber-400 rounded-full" : "hidden"}`} onClick={handleToggle}>
            <IoIosArrowUp size={24}/>
        </button>
      </div>
    </div>
  );
}

export default CourseCard;

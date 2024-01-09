"use client";
import React, { useEffect, useState } from "react";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { AiFillExperiment } from "react-icons/ai";
import { PiLaptopFill } from "react-icons/pi";
import { PiPercentFill } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
const unq = [
  {
    title: "প্রফেশনাল প্রশিক্ষক",
    desc: "আমাদের রয়েছে এক জাঁক প্রফেশনাল ও বাস্তব অবিজ্ঞতা সম্পন্ন প্রশিক্ষক।",
    img: <AiFillSafetyCertificate className="w-12 h-12 text-amber-400" />,
    comment: "",
  },
  {
    title: "হাতে কলমে শেখা",
    desc: "প্রত্যেকটি কোর্সে রয়েছে বাস্তব কাজের মাধ্যমে প্রশিক্ষণ প্রধানের সু-ব্যবস্থা।",
    img: <AiFillExperiment className="w-12 h-12 text-amber-400" />,
    comment: "",
  },
  {
    title: "১:১",
    desc: "প্রত্যেক শিক্ষার্থীর শেখার সুবিধাথে আলাদা আলাদা কম্পিউটারের সু-ব্যবস্থা",
    img: <PiLaptopFill className="w-12 h-12 text-amber-400" />,
    comment: "",
  },
  {
    title: "বিশেষ ছাড়",
    desc: "একসঙ্গে একাদিক কোর্সে ভর্তি হলে রয়েছে বিশেষ ছাড়!",
    img: <PiPercentFill className="w-12 h-12 text-amber-400" />,
    comment: "",
  },
];

function WhyWeAreTheBest() {
  const [count, setCount] = useState(0);
  const handleNext = () => {
    if (count == unq.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };
  const handlePrev = () => {
    if (count == 0) {
      setCount(unq.length - 1);
    } else {
      setCount(count - 1);
    }
  };
 const interval = 3000;
  useEffect(() => {
    const autoPlayInterval = setInterval(handleNext, interval);
    return () => {
      clearInterval(autoPlayInterval);
    };
  }, [count]);

  return (
    <div className="md:w-2/5 md:mx-auto">
      <div className={`w-full relative flex border overflow-x-hidden`}>
        {unq.map((item, index) => (
          <div
            key={index}
            className={`min-w-full py-10 px-4 bg-black rounded-md text-white relative flex flex-col justify-center items-center gap-6 border transition-all ease-in-out duration-${count == 0 ? 0 : 500}`}
            style={{
              transform: `translateX(-${count * 100}%)`,
            }}
          >
            <div className="p-4 rounded-md bg-amber-50 flex justify-center items-center">
              {item.img}
            </div>
            <div className="text-center">
              <h1 className="text-2xl md:text-4xl font-bold">{item.title}</h1>
              <h3 className="mt-6 text-xl md:text-3xl font-normal">
                {item.desc}
              </h3>
            </div>
          </div>
        ))}
        <div className="absolute inset-0 flex justify-between items-center mx-4 z-40">
          <button onClick={handlePrev}>
            <IoIosArrowBack className="w-8 h-8 text-white" />
          </button>
          <button onClick={handleNext}>
            <IoIosArrowForward className="w-8 h-8 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default WhyWeAreTheBest;

"use client";
import React, { useEffect, useState } from "react";
const service = [
  "ইঞ্জিনিয়ারিং কোর্স",
  "জব ফোকাস স্কিল ডেভেলপমেন্ট",
  "ইনডাস্ত্রিয়াল অ্যাটাসমেন্ট",
];
function RollingText() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index == service.length) {
      setIndex(0);
    } else {
      setTimeout(() => {
        setIndex(index + 1);
      }, 3000);
    }
  }, [index]);

  return (
    <div className="w-full h-[200px] flex flex-col justify-center items-center gap-4">
      <h1
        className={`${
          index == 0
            ? "text-black bg-amber-400 px-8 py-4 rounded-md font-notoBd font-semibold transition-all ease-in-out duration-300 md:duration-700 text-2xl md:text-5xl"
            : "font-light bg-amber-100 px-8 py-4 rounded-md transition-all ease-out duration-300 md:duration-700 text-xl md:text-3xl opacity-40"
        }`}
      >
        ইঞ্জিনিয়ারিং কোর্স
      </h1>
      <h1
        className={`${
          index == 1
            ? "text-black bg-amber-400 px-1 md:px-8 py-4 rounded-md font-notoBd font-semibold transition-all ease-in-out duration-300 md:duration-700 text-2xl md:text-5xl"
            : "font-light bg-amber-100 px-8 py-4 rounded-md transition-all ease-out duration-300 md:duration-700 text-xl md:text-3xl opacity-40"
        }`}
      >
        জব ফোকাস স্কিল ডেভেলপমেন্ট
      </h1>
      <h1
        className={`${
          index == 2
            ? "text-black bg-amber-400 px-8 py-4 rounded-md font-notoBd font-semibold transition-all ease-in-out duration-300 md:duration-700 text-2xl md:text-5xl"
            : "font-light bg-amber-100 px-8 py-4 rounded-md transition-all ease-out duration-300 md:duration-700 text-xl md:text-3xl opacity-40"
        }`}
      >
        ইনডাস্ত্রিয়াল অ্যাটাসমেন্ট
      </h1>
    </div>
  );
}

export default RollingText;

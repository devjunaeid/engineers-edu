"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RiMenu5Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaReadme } from "react-icons/fa6";
import { useSession } from "next-auth/react";

function Navbar() {
  const [tog, settog] = useState(false)
  const handleClick = () => {
    settog(!tog)
  }
  // const { data: session, status} = useSession()

  // if (status == "unauthenticated") {
  //   console.log("Not Authenticated!!!");
  // }else{
  //   console.log("Authenticated");
  //   console.log(session)
  // }

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50">
      <div className="navbar-start">
        <Link className="text-2xl md:text-3xl font-black" href={"/"}>
          ইঞ্জিনিয়ার'স<span className="text-amber-400 ml-4">অ্যাকাডেমি</span>
        </Link>
      </div>
      <div className="navbar-center hidden text-3xl lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl hidden">
          <li>
            <Link href={"/"}>হোম</Link>
          </li>
          <li>
            <Link href={"/"}>কোর্স সমূহ</Link>
          </li>
          <li>
            <Link href={"/"}>সেমিনার</Link>
          </li>
          <li>
            <details>
              <summary>স্টুডেন্ট কর্নার</summary>
              <ul className="p-2">
                <li>
                  <Link href={"/"}>সার্টিফিকেট ভেরিফিকেসন</Link>
                </li>
                <li>
                  <Link href={"/"}>স্টুডেন্ট ডেশবোর্ড</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>
                আমাদের সম্পর্কে
              </summary>
              <ul className="p-2">
                <li>
                  <Link href={"/"}>আমাদের টিম</Link>
                </li>
                <li>
                  <Link href={"/"}>পার্টনারস</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-8">
        <Link href={"/"} className="hidden btn text-xl ml-20 md:flex"><FaReadme size={20}/>ব্লগ</Link>
        <Link href={"tel:+8801712131588"} className="hidden btn text-xl md:flex"><FaPhoneAlt size={20}/>০১৭১২১৩১৫৮৮</Link>
        <button className="btn md:hidden" onClick={handleClick}>
         {(tog) ? <IoMdClose size={20}/> :  <RiMenu5Line size={20} />}
        </button>
        <div className={`${(tog)? "absolute top-20 left-[50%] -translate-x-[50%] min-w-[90%] bg-slate-50 z-60 md:hidden": "hidden"}`}>
          <ul className="menu-lg bg-slate-200 bg-opacity-100 min-w-full rounded-box text-center">
          <li>
              <Link href={"/"}>ব্লগ</Link>
            </li>
            <li>
              <Link href={"/signup"}>রেজিস্টার</Link>
            </li>
            <li className="hidden">
              <Link href={"/"}>হোম</Link>
            </li>
            <li className="hidden">
              <Link href={"/"}>কোর্স সমূহ</Link>
            </li>
            <li className="hidden">
              <Link href={"/"}>সেমিনার</Link>
            </li>
            <li className="hidden">
              <details>
                <summary>স্টুডেন্ট কর্নার</summary>
                <ul>
                  <li>
                    <Link href={"/"}>সার্টিফিকেট ভেরিফিকেসন</Link>
                  </li>
                  <li className="border-none">
                    <Link href={"/"}>স্টুডেন্ট ডেশবোর্ড</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li className="hidden border-none">
              <details>
                <summary>
                  আমাদের সম্পর্কে
                </summary>
                <ul>
                  <li>
                    <Link href={"/"}>আমাদের টিম</Link>
                  </li>
                  <li className="border-none">
                    <Link href={"/"}>পার্টনারস</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

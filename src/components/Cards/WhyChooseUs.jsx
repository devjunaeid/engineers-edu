import React from "react";
import { MdSupport } from "react-icons/md";
import { IoBagHandleSharp } from "react-icons/io5";
import { RiAttachmentFill } from "react-icons/ri";
import { PiCertificateFill } from "react-icons/pi";

const des = [
  {
    title: "সাপোর্ট",
    desc: "যেকোনো একটি কোর্সে জয়েন করলেই পাচ্ছেন লাইফটাইম সাপোর্ট।",
    icon: <MdSupport className="w-10 h-10 text-amber-400"/>
  },
  {
    title: "চাকুরীর সুযোগ",
    desc: "কোর্স শেষে শিক্ষার্থীদের জন্য রয়েছে চাকুরীর শুবেবস্থা(কর্মদক্ষতার ভীতিতে)",
    icon: <IoBagHandleSharp className="w-10 h-10 text-amber-400"/>
  },
  {
    title: "ফ্রি ম্যাটেরিয়ালস",
    desc: "যেকোনো একটি কোর্সে জয়েন করলেই পাচ্ছেন লাইফটাইম সাপোর্ট।",
    icon: <RiAttachmentFill className="w-10 h-10 text-amber-400"/>
  },
  {
    title:"সার্টিফিকেশান",
    desc: "যেকোনো একটি কোর্সে জয়েন করলেই পাচ্ছেন লাইফটাইম সাপোর্ট।",
    icon: <PiCertificateFill className="w-10 h-10 text-amber-400"/>
  },
];

function WhyChooseUs() {
  return (
    <div className="md:w-1/2 md:mx-auto grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-4">
      {
        des.map((item, index) => (
            <div key={index} className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
          <div className="w-full flex justify-center my-4">
            {item.icon}
          </div>
          <div>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {item.title}
            </h5>
          </div>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            {item.desc}
          </p>
        </div>
        ))
      }
    </div>
  );
}

export default WhyChooseUs;

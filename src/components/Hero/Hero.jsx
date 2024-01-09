import Image from "next/image";
import heroImg from "../../../public/hero/h1.jpg";
import RollingText from "../RollingText/RollingText";
import HeroCustomImg from "../HeroCustomImg/HeroCustomImg";
import heroSm from "../../../public/hero/bgsmall.png";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";

const service = [
  "ইঞ্জিনিয়ারিং কোর্স",
  "জব ফোকাস স্কিল ডেভেলপমেন্ট",
  "ইনডাস্ত্রিয়াল অ্যাটাসমেন্ট",
];

const into = "পুথিগত বিদ্যা পরহস্তে ধন, নহে বিদ্যা নহে ধন হলে প্রয়োজন। প্রতি বছর পাবলিক ও প্রাইভেট পলিটেকনিক থেকে বের হচ্ছে এক ঝাক নতুন ডিপ্লোমা ইঞ্জিনিয়ার। তাদের ভীড়ে বর্তমান প্রতিযোগিতায় নিজেকে এগিয়ে রাখতে হলে শুধু মাত্র পাঠ্যপুস্তকের জ্ঞানই যথেষ্ট নয়। চাই বাস্তবিক দক্ষতা অর্যন। তাই এই বাস্তবিক দক্ষতা অর্যনের লক্ষে আমরা অয়োজন করেছি কিছু প্রফেশনাল ট্রেনিং এর।"



function Hero() {
  return (
    <div className="flex w-full h-[90vh] justify-center">
      <div className="flex-1 w-full h-[90%] m-auto md:min-w-1/2 md:h-[80%] md:pl-10 flex flex-col justify-center items-center relative">
        <div className="w-[95%] flex flex-col justify-center items-center gap-16 md:gap-32 z-30">
          <RollingText />
          <div className="flex flex-col justify-center items-center gap-6">
            <div className="text-base md:text-xl font-anekBd md:w-[80%] bg-black/20 md:bg-black/10 md:text-black rounded-md p-4 text-justify text-white">
              {into}
            </div>
          <Link href={"tel:+8801712131588"} className="btn text-xl w-2/3 md:hidden"><FaPhoneAlt size={20}/>০১৭১২১৩১৫৮৮</Link>
          <Link href={"/register"} className="btn text-xl w-2/3 md:btn-lg md:text-2xl md:flex md:w-1/4 bg-amber-400 border-none"><FaWpforms size={20}/>রেজিস্টার</Link>
          </div>
        </div>
        <div className="md:hidden absolute min-w-full min-h-full inset-0 flex justify-center items-center">
          <div className="relative">
            <div className="min-w-full min-h-full absolute inset-0 flex justify-center items-center bg-black/30 backdrop-blur-sm"></div>
            <Image
              src={heroSm}
              alt="Hero Image"
              className="min-w-full min-h-[100svh] object-contain object-center"
            />
          </div>
        </div>
      </div>
      <div className="hidden flex-1 md:flex justify-center items-center">
        <HeroCustomImg />
      </div>
    </div>
  );
}

export default Hero;

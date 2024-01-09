import React from 'react'
import heroImg1 from "../../../public/hero/h1.jpg";
import heroImg2 from "../../../public/hero/h2.jpg";
import heroImg3 from "../../../public/hero/h3.jpg";
import heroImg4 from "../../../public/hero/h4.jpg";
import Image from 'next/image';


function HeroCustomImg() {
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <div className='grid grid-flow-col grid-cols-2 grid-rows-5 gap-5 w-[600px] h-[500px]'>
            <Image src={heroImg1} alt='Hero Img 1' className='row-span-2 w-full h-full object-cover rounded-b-lg border-8 border-b-[30px] border-t-0 border-amber-400'/>
            <Image src={heroImg2} alt='Hero Img 2' className='row-span-3 w-full h-full object-cover rounded-t-lg border-8 border-t-[30px] border-b-0 border-amber-400 mt-10'/>
            <Image src={heroImg3} alt='Hero Img 3' className='row-span-3 w-full h-full object-cover rounded-b-lg border-8 border-b-[30px] border-t-0 border-amber-400 -mt-10'/>
            <Image src={heroImg4} alt='Hero Img 4' className='row-span-2 w-full h-full object-cover rounded-t-lg border-8 border-t-[30px] border-b-0 border-amber-400'/>
        </div>
    </div>
  )
}

export default HeroCustomImg
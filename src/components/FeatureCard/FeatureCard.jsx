import React from 'react'
import Image from 'next/image'


function FeatureCard({title, desc, icon}) { // {name, desc, img}
  return (
    <div className='w-full m-auto h-fit flex flex-col justify-center items-center'>
        <div className='p-4 bg-amber-400 rounded-3xl z-10'>
        <Image src={icon} className='w-16 h-16 object-contain' alt='Feature Icon'/>
        </div>
        <div className='h-44 w-full text-center pt-12 pb-4 px-3 -mt-10 bg-black text-white rounded-2xl'>
            <h2 className='text-xl font-bold'>{title}</h2>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default FeatureCard
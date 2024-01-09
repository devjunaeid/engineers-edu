import React from 'react'
import FeatureCard from './FeatureCard'
import autoCadImg from '../../../public/feature/autocad.png'
import threeDImg from '../../../public/feature/3d.png'
import estimateImg from '../../../public/feature/estimate.png'
import etabsImg from '../../../public/feature/etabs.png'
import projectImg from '../../../public/feature/planning.png'
import attachmentImg from '../../../public/feature/quality.png'

const featureList = [
    {
        title: "AutoCad",
        desc: "Basic and Advanced Level of layout design and development.",
        icon: autoCadImg
    },
    {
        title: "3Ds Max and Randaring",
        desc: "All kinds of exterior design and randaring.",
        icon: threeDImg,
    },
    {
        title:"E-Tabs",
        desc:"RCC structure design and design check.",
        icon: etabsImg,
    },
    {
        title:"Estimate",
        desc: "RCC and Steel structure estimate.",
        icon: estimateImg,
    },
    {
        title: "Project Management",
        desc: "End to end Civil Engineering project management.",
        icon: projectImg,
    },
    {
        title: "Industrial Attachment(Diploma)",
        desc: "Industrial Attachment for Diploma in Civil students.",
        icon: attachmentImg,
    },
]

function FeatureCardList() {
  return (
    <div className='w-full grid grid-flow-row gap-2 grid-cols-1 md:grid-cols-6'>
        {
            featureList.map((feature, index) => (
                <FeatureCard
                    key={index} 
                    title={feature.title}
                    desc={feature.desc}
                    icon={feature.icon}
                /> 
            ))
        }
    </div>
  )
}

export default FeatureCardList
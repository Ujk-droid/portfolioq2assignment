"use client";
import { StickyScroll } from "@/app/components/ui/Sticky-scroll-reveal";


const musicSchoolContent = [{
   
      title: "Html:html is  creat a strutre of web page ",
      description: "my html teacher is sir Mohammad Ali from(infonet) he explain in simple step "
    },
     {
      title: "Css:css is a styling of web ",
      description: "Sir M Ali's expertise in CSS has not only enhanced my technical skills but also fostered my creativity in web design and development."

    },
     {
      title: "typescript",
      description: "Sir Okasha's unwavering enthusiasm and patience have been instrumental in breaking down complex concepts into understandable bits. His ability to explain intricate details with clarity and precision has been invaluable."

    },
     {
      title: "Next.js:SirFahad Khan",
      description:"Sir Fahad is an outstanding teacher, whose ability to break down complex ideas into understandable concepts has made learning an enjoyable and rewarding experience."

    },
     {
      title: "sir Muhammad Ali:Typescript",
      description: "  sir  Muhammad Ali vast knowledge and expertise in TypeScript have been a constant source of inspiration. His unique teaching style, blending theory with practical examples, has made learning an engaging experience"

    },
     {
      title:"Nextjs:Sir Ali Aftab Sheikh",
      description: "Sir Ali Aftab's teaching excellence and mentorship have been instrumental in my academic and professional development, and I am forever grateful for his support."
    },
     {
      title:"DataScience:Sir Ammar Tufail ",
      description: "Sir Ammar Tufail's passion for Data Science aur exceptional teaching skills have made complex concepts accessible aur engaging, fostering a deep appreciation for the field."
    },
     {
      title: "TypeScript:Sir Asharib",
      description: "Sir Asharib's vast knowledge and expertise in TypeScript have been a constant source of inspiration. His unique teaching style, blending theory with practical examples, has made learning an engaging experience"

    }
  ];
  

import React from 'react'

const WhyChoseUs = () => {
  return (
    <div>
        <StickyScroll  content= {musicSchoolContent}/>
      
    </div>
  )
}

export default WhyChoseUs
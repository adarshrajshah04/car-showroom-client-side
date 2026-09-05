'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const TitleText = () => {
    useGSAP(()=>{
        gsap.from('#hstext span',{
            y:-200,
            opacity:0,
            
            delay:1,
            duration:2,
            stagger:-0.3,
            ease: "power4.out",

        })
    })
  return (
      <h3 id='hstext' className="text-light-text mt-20 text-8xl w-[70%] font-bold ">
            <span className='inline-block'>The quiet luxury of</span> <span className='inline-block'>driving something</span> <span className='inline-block'>exceptional.</span>
          </h3>
  )
}

export default TitleText
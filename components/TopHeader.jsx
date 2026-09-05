'use client'

import React, { useRef } from "react";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";



const navItems = [
  {
    name: "Home",path: "/",
  },
  {
    name: "Collection",path: "/collection",
  },
  {
    name: "Brands",path: "/brands",
  },
  {
    name: "About",path: "/about",
  },
  {
    name: "Contact",path: "/contact",
  },
];
 


const TopHeader = () => {
const img=useRef(null)


 
  useGSAP(()=>{
     const tl=gsap.timeline()
    // image
    tl.from(img.current,{
      x:-100,
      duration:0.5,
      delay:1.5,
      opacity:0,
    })

    // navItems
    tl.from('#navDiv a',{
      y:-50,
      duration:1,
      opacity:0,
      stagger:0.3,
      
    })
    tl.from('#login',{
      x:100,
      opacity:0,
      duration:0.5,

    })

  })
  return (
    <div className="fixed top-0  w-full bg-secondary/30  backdrop-blur-xl flex justify-between items-center px-16 py-4 text-light-text ">
      {/* logo */}
      <div ref={img} className=" w-20 h-20" >
        <Image
        className="w-full h-full"
          src="/assets/images/logo.png"
          alt="ARS Logo"
          width={100}
          height={100}
        />
      </div>
      {/* navItems */}
      <div id="navDiv" className=" flex gap-10 text-[16px] " >
        {navItems.map((nav,idx)=>(
          <Link  href={'#'} key={idx}
           className="inline-block ">{nav.name}</Link>
        ))}
      </div>
      {/* Login */}
      <div id="login">
        <div className="flex items-center">
          <h3>Login </h3>
        <p className=" ml-1"><FaArrowRight /></p>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;

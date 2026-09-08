import React from "react";
import { MdOutlineCall } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import ContactForm from "@/components/ContactForm";


const page = () => {
  return (
    <div className=" pt-25 text-white flex px-20">
      <div className="w-1/2 pr-10 ">
        <p className=" text-mid-text/60 text-sm mt-5 ">Enquiries</p>
        <h3 className="  text-8xl mt-20">{"Let's talk about the car"}</h3>
        <p className="text-mid-text/60 mt-3">
          {
            "Tell us what you're looking for — or which vehicle caught your eye — and a specialist will come back to you personally."
          }
        </p>
        <div className=" flex flex-col gap-3 mt-8">
          <span className=" flex items-center  gap-3 text-dark-text text-xl">
            <MdOutlineCall />
            <p className="text-light-text/80 text-sm ">+1 212 555 0110</p>
          </span>
          <span className=" flex items-center  gap-3 text-dark-text text-xl">
            <CiMail />
            <p className="text-light-text/80 text-sm ">
              concierge@aurelia.cars
            </p>
          </span>
          <span className=" flex items-center  gap-3 text-dark-text text-xl">
            <IoLocationOutline />
            <p className="text-light-text/80 text-sm ">
              1 Meridian Avenue, Mumbai
            </p>
          </span>
        </div>
      </div>
      <div className="w-1/2 bg-card/60 border border-border/50 rounded-2xl  ">

      <ContactForm/>
        
      </div>
    </div>
  );
};

export default page;

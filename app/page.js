import SliderHome from "@/components/home/SliderHome";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const page = () => {
  return (
    <div>
      <div className="w-full relative h-screen ">
        <SliderHome />
        <div className="w-full h-full absolute top-0 left-0  px-20 pt-25 bg-black/50 ">
          <p className="text-sm text-mid-text/80 ">
            PREMIUM AUTOMOTIVE · PRIVATE SHOWROOM
          </p>
          <h3 className="text-light-text mt-20 text-8xl w-[70%] font-bold">
            The quiet luxury of driving something exceptional.
          </h3>
          <p className="text-mid-text/80 mt-8 text-xl w-[80%]">
            A curated collection of exceptional automobiles, selected for those
            who appreciate performance, design, and timeless luxury.
          </p>
          <div className=" flex gap-4 mt-5">
            <button className="flex items-center bg-light-text font-medium px-6 py-3  rounded-full">
              Explore the collection 
              <p className="ml-1"><FaArrowRight /></p>
            </button>
            <button className=" text-white ">
             View showroom
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

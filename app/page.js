import SliderHome from "@/components/home/SliderHome";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import AutoScroll from "@/components/home/AutoScroll";
import TitleText from "@/components/home/TitleText";
import { Home } from "lucide-react";

export const metadata ={
  title:'Home | ARS',
  description: "Discover exceptional luxury and performance cars at ARS. Explore a curated collection of premium automobiles selected for design, performance, comfort, and timeless elegance.",
}

const features = [
  {
    Icon: <AiOutlineSafetyCertificate />,
    title: "212-point inspection",
    description: "Every car, independently verified before listing.",
  },
  {
    Icon: <FaRegCheckCircle />,
    title: "Full provenance",
    description: "Service records, ownership history and warranty.",
  },
  {
    Icon: <MdOutlineWatchLater />,
    title: "48-hour delivery",
    description: "Enclosed transport to any address, worldwide.",
  },
];
const page = () => {

  return (
    <div>
      {/* home page 1 */}
      <div className="w-full relative h-screen ">
        <SliderHome />
        <div className="w-full h-full absolute top-0 left-0  px-20 pt-25 bg-black/70 ">
          <p className="text-sm text-mid-text/80 ">
            PREMIUM AUTOMOTIVE · PRIVATE SHOWROOM
          </p>
          {/* text only */}
          <TitleText/>
          <p className="text-mid-text/80 mt-8 text-xl w-[80%]">
            A curated collection of exceptional automobiles, selected for those
            who appreciate performance, design, and timeless luxury.
          </p>
          <div className=" flex gap-4 mt-5">
            <button 
            data-cursor=''
            data-magnetic
            className="flex items-center bg-light-text font-medium px-6 py-3  rounded-full">
              Explore the collection
              <p className="ml-1">
                <FaArrowRight />
              </p>
            </button>
            <button className=" text-white ">View showroom</button>
          </div>
        </div>
      
      </div>
      {/* features */}
      <hr className="bg-dark-text" />
      <div className="flex justify-between px-20 py-20">
        {features.map(({ Icon, title, description, idx }) => (
          <div key={idx} className=" flex items-center gap-1">
            <p className=" text-mid-text/60 text-2xl">{Icon}</p>
            <hr className="bg-mid-text h-[70%] w-px mx-2" />
            <div>
              <h3 className="text-xl text-light-text mb-2">{title}</h3>
              <p className="text-sm font-light text-mid-text/60">{description}</p>
            </div>
          </div>
        ))}
      </div>
      <AutoScroll/>
    </div>
  );
};

export default page;

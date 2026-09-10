import Image from "next/image";
import Link from "next/link";
import React from "react";


const CarsCard = ({ cars }) => {
  return (
    <div className="w-full min-h-screen flex flex-wrap items-center justify-between gap-8">
      {cars.map((car, idx) => (
        <div key={idx} className="w-[23%] h-100 border border-border/50 overflow-hidden rounded-xl">
          
          {/* Image */}
          <Link 
          href={`collection/${car.id}`} 
         
          className="relative w-full h-[65%] inline-block  ">
            <Image
             data-cursor=''
             
              alt={car.title}
              src={car.thumbnail}
              fill
              className="object-cover object-center"
            />
          </Link>
          {/* details */}
          <div className=" px-5 pt-3">
            <div className="flex justify-between">
                <h6 className=" text-light-text text-sm ">{car.title}</h6>
                <p className=" text-light-text text-sm">₹ {" "}{car.price}</p>
            </div>
            <p className="text-xs text-mid-text/60 mt-2   ">{car.description}</p>
            <Link href={`collection/${car.id}`}
            data-cursor=''
            className="inline-block w-full py-2 px-3 mt-2 rounded-full border border-border/20 text-sm text-mid-text/40 " 
            >
            View More details
            </Link>
          </div>

       

        </div>
      ))}
    </div>
  );
};

export default CarsCard;
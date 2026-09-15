import Image from "next/image";
import Link from "next/link";
import React from "react";
import classes from '@/public/assets/css/CarCard.module.css'
import { MdArrowOutward } from "react-icons/md";

const CarsCard = ({ data }) => {
  
  return (
    <div className={`${classes.cardsMain}  h-screen flex flex-wrap items-center justify-between gap-8 overflow-y-auto pb-5 `}>
      {data.map((car, idx) => (
        <div
          key={idx}
          className="w-[23%] min-h-100 border border-border/50 hover:border-border hover:translate-y-[-4px] overflow-hidden rounded-xl bg-card pb-5"
        >
          {/* Image */}
          <Link
            href={`collection/${car.id}`}
            className={`${classes.image} relative w-full h-75 inline-block `}
          >
            <Image
              data-cursor=""
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
              <p className=" text-light-text text-sm">₹ {car.price}</p>
            </div>
            <p className="text-xs text-mid-text/60 mt-2   ">
              {car.description}
            </p>
            <Link
              href={`collection/${car.id}`}
              data-cursor=""
              className="flex items-center justify-between w-full py-3 px-4 mt-3 rounded-full border border-border/20 text-sm text-mid-text/40 "
            >
              <p className="text-sm text-light-text">View More details</p>
              <p className="text-lg text-light-text ">
                <MdArrowOutward />
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarsCard;

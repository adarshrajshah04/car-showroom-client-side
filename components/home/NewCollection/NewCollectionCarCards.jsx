import Image from "next/image";
import Link from "next/link";
import React from "react";
import classes from '@/public/assets/css/HomeCollection.module.css'
import { MdArrowOutward } from "react-icons/md";

const NewCollectionCarCards = ({ data }) => {
  return (
    <div className={`${classes.cardsMain} w-full h-screen flex flex-wrap items-center justify-between gap-8 overflow-y-auto pb-15`}>
      {data.map((car, idx) => (
        <div
          key={idx}
          className="w-[23%] min-h-100 border border-border/50 hover:border-border hover:translate-y-[-4px] overflow-hidden rounded-xl bg-card pb-5"
        >
          {/* Image */}
          <Link
            href={`/${car.id}`}
            className="relative w-full h-75 inline-block  "
          >
            <Image
              data-cursor=""
              alt={car.name}
              src={car.image}
              fill
              className="object-cover object-center"
            />
          </Link>
          {/* details */}
          <div className=" px-5 pt-3">
            <div className="flex justify-between">
              <h6 className=" text-light-text text-sm ">{car.name}</h6>
              <p className=" text-light-text text-sm">₹ {car.price}</p>
            </div>
            <p className="text-xs text-mid-text/60 mt-2   ">
              {car.description}
            </p>
            <Link
              href={`collection/${car.id}`}
              data-cursor=""
              className=" w-full py-3 px-5 mt-2 rounded-full border border-border/20  flex justify-between items-center "
            >
              <p className="text-sm text-light-text">View More details</p>
              <p className="text-sm text-light-text">
              
                <MdArrowOutward />
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewCollectionCarCards;

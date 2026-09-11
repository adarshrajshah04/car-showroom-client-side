import Image from "next/image";
import Link from "next/link";
import React from "react";

const BrandCards = ({ brands }) => {
  console.log(brands);

  return (
    <div className="w-full  flex  flex-wrap gap-10 justify-between items-center">
      {brands.map((brand, idx) => (
        <Link

          key={idx}
          href={`/brands/${brand.id}`}
          className="w-[30%] h-100 border border-border/60  rounded-2xl overflow-hidden "
          data-cursor="check out"
        >
          <div className="relative  w-full h-full ">
            <Image
              alt={brand.name}
              src={brand.logo}
              fill
              className="object-center object-cover"
            ></Image>

            <div className="w-full h-full  absolute bottom-0 flex flex-col justify-end bg-primary/40   px-5 pb-5">
              <div>
                <h3 className=" text-light-text">{brand.name}</h3>
                <p className="text-sm text-mid-text mt-2 ">
                  {brand.description}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BrandCards;

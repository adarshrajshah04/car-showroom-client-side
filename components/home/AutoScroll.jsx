"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const brands = [
  { id: 1, name: "AUDI" },
  { id: 2, name: "PORSCHE" },
  { id: 3, name: "BMW" },
  { id: 4, name: "MERCEDES-BENZ" },
  { id: 5, name: "LAMBORGHINI" },
  { id: 6, name: "FERRARI" },
  { id: 7, name: "ASTON MARTIN" },
  { id: 8, name: "BENTLEY" },
  { id: 9, name: "ROLLS-ROYCE" },
  { id: 10, name: "MASERATI" },
  { id: 11, name: "TESLA" },
  { id: 12, name: "TOYOTA" },
];

const AutoScroll = () => {
  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,

    swipe: false,
    draggable: false,
    touchMove: false,
  };

  return (
    <div className="w-full overflow-hidden px-20 border-b border-border/40 border-t pt-10">
      <Slider {...settings}>
        {brands.map((brand, idx) => (
            
          <div key={idx} className="  h-20  px-8">
           
            <div className="flex items-center justify-center ">
                
                <h3 className="text-2xl text-dark-text tracking-[8px] whitespace-nowrap">{brand.name}</h3>
            </div>
            
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AutoScroll;

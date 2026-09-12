'use client'


import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const cars = [
  {
    id: 1,
    image: "/assets/images/home_car/img1.jpg",
  },
  {
    id: 2,
    image: "/assets/images/home_car/img2.jpg",
  },
  {
    id: 3,
    image: "/assets/images/home_car/img3.jpg",
  },
  {
    id: 4,
    image: "/assets/images/home_car/img4.jpg",
  },
  {
    id: 5,
    image: "/assets/images/home_car/img5.jpg",
  },
];

const SliderHome = () => {
    var settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <div className="slider-container  w-full" >
      <Slider {...settings} >
         {cars.map((car) => (
          <div key={car.id} >
            <div
              className="h-screen w-full bg-cover bg-center bg-black/80  "
              style={{
                backgroundImage: `url(${car.image})`,
              
              }}
            />
          </div>
        ))}
     
  
       
      </Slider>
    </div>
  )
}

export default SliderHome
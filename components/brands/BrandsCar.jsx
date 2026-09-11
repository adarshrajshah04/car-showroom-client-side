"use client";
import { fetchCars } from "@/redux/action/cars.action";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CarsCard from "../cars/CarsCard";

const BrandsCar = ({ id }) => {
  const dispatch = useDispatch();
  const { cars, isLoading, errorMsg } = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(fetchCars());
   
  }, [dispatch]);
 

  const fdata = cars.filter((a) => a.categoryId === id);;

  console.log(fdata);

  return <div>
    <CarsCard data={fdata}/>
  </div>;
};

export default BrandsCar;

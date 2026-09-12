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

  const fdata = cars.filter((a) => a.categoryId == id);

  return (
    <div>
     <div className="h-full w-fill flex items-center justify-center"> {isLoading && <p className=" text-white ">Loading....</p>}</div>
      {errorMsg && <p className=" text-red-600">{errorMsg}</p>}
    
      <div>
        <CarsCard data={fdata} />
      </div>
    </div>
  );
};

export default BrandsCar;

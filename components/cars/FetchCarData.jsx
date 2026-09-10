"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../redux/action/cars.action";
import CarsCard from "./CarsCard";

const FetchCarData = () => {
  const dispatch = useDispatch();

  const { cars, isLoading, errorMsg } = useSelector(
    (state) => state.cars
  );

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  console.log(cars);

  return (
    <div className=" py-30">
      {isLoading && <p className="text-white">Loading...</p>}

      {errorMsg && <p>{errorMsg}</p>}

      <div>
        <CarsCard cars={cars} />
      </div>
    </div>
  );
};

export default FetchCarData;
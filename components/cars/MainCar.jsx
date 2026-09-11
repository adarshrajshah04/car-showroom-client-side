"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/action/cars.action";
import CarsCard from "./CarsCard";

const MainCar = () => {
  const dispatch = useDispatch();

  const { cars, isLoading, errorMsg } = useSelector(
    (state) => state.cars
  );

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);


  return (
    <div >
      {isLoading && <p className="text-white">Loading...</p>}

      {errorMsg && <p>{errorMsg}</p>}

      <div>
        {/* sending cars data to CarsCard component */}
        <CarsCard data={cars} />
      </div>
    </div>
  );
};

export default MainCar;
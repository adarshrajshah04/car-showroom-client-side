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
    <div className=" h-screen" >
      {errorMsg && <p className=" text-red-600">{errorMsg}</p>}
      {isLoading ? <p className="text-white">Loading...</p>:<>
      <div>
        <p className="text-mid-text/60 text-sm ">The collection</p>
        <h3 className="text-6xl text-light-text font-bold mt-5">Every car, fully documented</h3>
        <p className=" text-mid-text/60  mt-5 mb-15 ">Drive Your Dream</p>
        {/* sending cars data to CarsCard component */}
        <CarsCard data={cars} />
      </div>
      </>}


      
    </div>
  );
};

export default MainCar;
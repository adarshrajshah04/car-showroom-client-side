"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/action/cars.action";
import CarsCard from "./CarsCard";
import Loading from "@/app/loading";
const MainCar = () => {
  const dispatch = useDispatch();

  const { cars, isLoading, errorMsg } = useSelector(
    (state) => state.cars
  );

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);




  return (
    <div className=" min-h-screen" >
     
      {isLoading ?<Loading/>:<>
      <div >
        <p className="text-mid-text/60 text-sm ">The collection</p>
        <h3 className="text-6xl text-light-text font-bold mt-5 mb-20">Every car, fully documented</h3>
        
        {/* sending cars data to CarsCard component */}
        <div >
          <CarsCard data={cars} />
        </div>
      </div>
      </>}


      
    </div>
  );
};

export default MainCar;
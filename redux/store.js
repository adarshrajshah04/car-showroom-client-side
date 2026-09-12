
import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./slice/car.slice";
import brandReducer from "./slice/brand,slice";
import NewCarReducer from "./slice/NewCollection.slice";


const store=configureStore({

    reducer:{
        cars:carReducer,
        brands:brandReducer,
        Newcars:NewCarReducer
    }
})

export default store
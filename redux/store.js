
import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./slice/car.slice";
import brandReducer from "./slice/brand,slice";


const store=configureStore({

    reducer:{
        cars:carReducer,
        brands:brandReducer,
    }
})

export default store
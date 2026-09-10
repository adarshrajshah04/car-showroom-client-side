import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "../action/cars.action";


const initialState={
    cars:[],
    isLoading:false,
    errorMsg:'',
}


const carSlice=createSlice({
    name:'cars',
    initialState,
    extraReducers:(builders)=>{
        builders
        .addCase(fetchCars.pending,(state,action)=>{
            state.isLoading=true
        })
        .addCase(fetchCars.fulfilled,(state,action)=>{
            state.isLoading=false
            state.cars=action.payload
        })
        .addCase(fetchCars.rejected,(state,action)=>{
            state.isLoading=false
            state.errorMsg='Something is wrong '
        } )
    }
})


export const carAction = carSlice.actions
const carReducer = carSlice.reducer
export default carReducer

import { createSlice } from "@reduxjs/toolkit";
import { fetchBrands } from "../action/brand.action";

const initialState={
    brands:[],
    isLoading:false,
    errorMsg:'',
}

const brandSlice=createSlice({
    name:'brands',
    initialState,   
    extraReducers:(builders)=>{
        builders
        .addCase(fetchBrands.pending,(state,action)=>{  
            state.isLoading=true;

        })
        .addCase(fetchBrands.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.brands=action.payload;
        })
        .addCase(fetchBrands.rejected,(state,action)=>{
            state.isLoading=false;
            state.errorMsg='Something is wrong';
        })
}})


export const brandAction = brandSlice.actions
const brandReducer = brandSlice.reducer
export default brandReducer
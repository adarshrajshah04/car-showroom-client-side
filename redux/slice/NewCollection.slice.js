import { createSlice } from "@reduxjs/toolkit";
import { fetchNewCollection } from "../action/NewCollection.action";




const initialState={
    cars:[],
    isLoading:false,
    errorMsg:'',
}


const NewCarSlice=createSlice({
    name:'Newcars',
    initialState,
    extraReducers:(builders)=>{
        builders
        .addCase(fetchNewCollection.pending,(state,action)=>{
            state.isLoading=true
        })
        .addCase(fetchNewCollection.fulfilled,(state,action)=>{
            state.isLoading=false
            state.cars=action.payload
        })
        .addCase(fetchNewCollection.rejected,(state,action)=>{
            state.isLoading=false
            state.errorMsg='Something is wrong '
        } )
    }
})


export const carAction = NewCarSlice.actions
const NewCarReducer = NewCarSlice.reducer
export default NewCarReducer

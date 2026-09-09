import { createAsyncThunk } from "@reduxjs/toolkit";

import axiosNew from '@/utils/NewAxios'


export const fetchCars= createAsyncThunk('cars',async()=>{
    const res = await axiosNew.get('/product')
    console.log(res.data)
    return  response.data

})
import { createAsyncThunk } from "@reduxjs/toolkit";

import axiosNew from '@/utils/NewAxios'


export const fetchBrands= createAsyncThunk('brands',async()=>{
    const res = await axiosNew.get('/category')
    // console.log(res.data)
    return  res.data

})
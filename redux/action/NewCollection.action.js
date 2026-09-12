import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




export const fetchNewCollection= createAsyncThunk('Newcars',async()=>{
    const res = await axios.get('https://6a74210e15e0453fe1b4664a.mockapi.io/Car')
    // console.log(res.data)
    return  res.data

})
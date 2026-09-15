'use client'
import { fetchBrands } from '@/redux/action/brand.action'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BrandCards from './BrandCards'



const MainBrand = () => {
    const dispatch = useDispatch();
    const { brands, } = useSelector((state) => state.brands);
    useEffect(() => {
      dispatch(fetchBrands());
    }, [dispatch])
    
  return (
    <div  className="min-h-screen w-full pb-20">
      <p className=" text-mid-text/60   mb-5 ">The marques</p>
      <h3 className='text-light-text text-7xl mb-20 font-bold'>Every name, a legacy</h3>
      <BrandCards brands={brands}/>
    </div>
  )
}

export default MainBrand
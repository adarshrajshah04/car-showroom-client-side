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
    <div>
      <BrandCards brands={brands}/>
    </div>
  )
}

export default MainBrand
'use client'
import { fetchNewCollection } from '@/redux/action/NewCollection.action'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CarsCard from '../../cars/CarsCard'
import NewCollectionCarCards from './NewCollectionCarCards'



const NewCollection = () => {
    const dispatch=useDispatch()
    const {cars,isLoading,errorMsg}=useSelector(state=>state.Newcars)
    useEffect(() => {
      dispatch(fetchNewCollection())
    
     
    }, [dispatch])
    
  return (
    <div className='px-20'>
      <div>
        <p className='text-mid-text/60 text-sm'>Featured</p>
        <h3 className=' text-6xl text-light-text font-bold mt-4 mb-15'>{"This month's arrivals"}</h3>
      </div>
      <NewCollectionCarCards data={cars} />
        
    </div>
  )
}

export default NewCollection
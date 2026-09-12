'use client'
import { fetchNewCollection } from '@/redux/action/NewCollection.action'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'



const NewCollection = () => {
    const dispatch=useDispatch()
    const {cars,isLoading,errorMsg}=useSelector(state=>state.Newcars)
    useEffect(() => {
      dispatch(fetchNewCollection())
    
     
    }, [dispatch])
    
  return (
    <div>
        
    </div>
  )
}

export default NewCollection
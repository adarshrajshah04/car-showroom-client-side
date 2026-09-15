
import NewCollectionSingleCar from '@/components/home/NewCollection/NewCollectionSingleCar';
import React from 'react'

const page =async  ({params}) => {
     const { id } = await params;

  console.log(id);
    
  return (
    <div className=' pt-30 px-20 text-white h-screen w-full  '>
   <NewCollectionSingleCar id={id}/>
    </div>
  )
}

export default page
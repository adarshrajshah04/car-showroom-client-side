import BrandsCar from '@/components/brands/BrandsCar'
import React from 'react'

const page = async({params}) => {
    const {id}=await params
    // console.log(params);
    
    
  return (
    <div className='pt-30 text-white'>page  {id} 
    <BrandsCar id={id}/>
    </div>
  )
}

export default page
import React from 'react'

const page =async  ({params}) => {
     const { id } = await params;

  console.log(id);
    
  return (
    <div className=' py-30 text-white'>{id}page</div>
  )
}

export default page
import MainCar from '@/components/cars/MainCar'
import React from 'react'

export const metadata={
  title:'Collection',
  description:  "Explore the ARS collection of luxury and performance cars. Discover premium automobiles from renowned brands, carefully selected for style, performance, and driving excellence.",
}

const page = () => {
  return (
    <div className=" pt-30 px-20 ">
        <MainCar/>
    </div>
  )
}

export default page
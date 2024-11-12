import React from 'react'
import PropertyCard from './propertyCard'
import  {properties}  from "./data/data.js";


const Recent = () => {
  return (
    <div className="bg-gray-100 my-7 py-1 ">
        <h1 className="text-3xl font-extrabold ml-12 mb-12 text-gray-800 mt-10 mx-10 text-center ">Recently Added</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 justify-center   ">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
        </div>
  )
}

export default Recent

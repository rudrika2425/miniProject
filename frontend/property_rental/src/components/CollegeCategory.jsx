// CollegeCategory.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { properties } from './data/data';
import PropertyCard from './propertyCard';
import Navbar from './Navbar';
import Footer from './footer';

const CollegeCategory = () => {
  const { collegeName } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const decodedCollegeName = decodeURIComponent(collegeName); // Decode to match dataset
    console.log("Selected college name:", decodedCollegeName);

    const filteredData = properties.filter((item) => item.college === decodedCollegeName);
    console.log("Filtered properties:", filteredData);

    setData(filteredData);
  }, [collegeName]);

  return (
    <>
   
    <h2 class="text-gray-500 font-bold text-2xl m-5">Properties near {collegeName} :</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 justify-center">
      {data.length > 0 ? (
        data.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))
      ) : (
        <p>No properties available in this category</p>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default CollegeCategory;

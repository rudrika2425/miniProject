// CollegeCategory.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { properties } from "./data/data";
import PropertyCard from "./propertyCard";
import Footer from "./footer";

const CollegeCategory = () => {
  const { collegeName } = useParams();
  const [data, setData] = useState([]);

  // Function to filter results based on both category and college name
  const filterResult = (catItem) => {
    const result = properties.filter((currData) => {
      return (
        currData.category === catItem &&
        currData.college === decodeURIComponent(collegeName)
      );
    });
    setData(result);
  };

  // Initial data load based on collegeName
  useEffect(() => {
    const decodedCollegeName = decodeURIComponent(collegeName);
    const filteredData = properties.filter(
      (item) => item.college === decodedCollegeName
    );
    setData(filteredData);
  }, [collegeName]);

  return (
    <>
      <h2 className="text-gray-500 font-bold text-2xl m-5">
        Properties near {collegeName}:
      </h2>
      <div className="grid grid-cols-5 gap-4 px-4 ">
      <div className="col-span-1 bg-gray-100 p-4 flex flex-col items-center h-full">
          <button
            className="m-4 bg-purple-700 text-white rounded-full px-10 py-3 hover:bg-purple-900 w-60"
            onClick={() => filterResult("Flat")}
          >
            FLATS
          </button>
          <button
            className="m-4 bg-purple-700 text-white rounded-full px-10 py-3 hover:bg-purple-900 w-60"
            onClick={() => filterResult("PG")}
          >
            PG
          </button>
          <button
            className="m-4 bg-purple-700 text-white rounded-full px-10 py-3 hover:bg-purple-900 w-60"
            onClick={() => filterResult("Hostel")}
          >
            HOSTELS
          </button>
          <button
            className="m-4 bg-purple-700 text-white rounded-full px-10 py-3 hover:bg-purple-900 w-60"
            onClick={() =>
              setData(
                properties.filter(
                  (item) => item.college === decodeURIComponent(collegeName)
                )
              )
            }
          >
            ALL
          </button>
        </div>

        <div className="col-span-4 bg-gray-100 p-4 grid grid-cols-3 gap-4 px-4 justify-center">
          {data.length > 0 ? (
            data.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))
          ) : (
            <p>No properties available in this category</p>
          )}
        </div>
      </div>
      
    </>
  );
};

export default CollegeCategory;

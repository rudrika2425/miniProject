// FeaturedCard.jsx
import React from "react";
import { featured } from "../data/data.js";
import { useNavigate } from "react-router-dom";

const FeaturedCard = () => {
  const navigate = useNavigate();

  const handleClick = (category) => {
    if (category) {
      navigate(`/college/${encodeURIComponent(category)}`); // encodeURIComponent ensures safe URL formatting
    }
  };

  return (
    <div className="content grid grid-cols-5 gap-6 mt-8 ">
      {featured.map((item, index) => (
        <div
          onClick={() => handleClick(item.name)} // Passing name as category
          key={index}
          className="box bg-white rounded-lg shadow-md p-8 cursor-pointer hover:shadow-lg transition-shadow duration-200 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out"
        >
          <img src={item.cover} alt={item.name} className="w-16 h-16 mx-auto mb-4" />
          <h4 className="text-lg font-semibold">{item.name}</h4>
          <label className="text-gray-500">{item.total} Property</label>
        </div>
      ))}
    </div>
  );
};

export default FeaturedCard;

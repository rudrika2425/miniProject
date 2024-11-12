import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
const PropertyCard = ({ 
  id, 
  image, 
  title, 
  bedrooms, 
  bathrooms, 
  food, 
  price, 
  college 
}) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out w-80 ml-0 -mx-2 mb-10">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-40 object-cover " 
        onError={(e) => { e.target.src = 'default-image.jpg'; }}
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <div className="flex justify-between items-center mt-2 text-gray-600">
          <span><i className="fa fa-bed text-purple-700" aria-hidden="true"></i> {bedrooms}</span>
          <span><i className="fa fa-bath text-purple-700" aria-hidden="true"></i> {bathrooms}</span>
          <span><i className="fa fa-cutlery text-purple-700" aria-hidden="true"></i> {food}</span>
        </div>
        <p className="text-green-600 font-bold mt-3 text-md">${price}</p>
        <p className="text-green-600 font-bold mt-3 text-md">{college}</p>
        
        <Link to={`/property/${id}`}>
          <button className="mt-3 bg-purple-600 text-white px-3 py-1.5 rounded-full hover:bg-purple-800 transition-all duration-300 ease-in-out text-sm">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;

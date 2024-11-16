
import React from 'react';
import { useParams } from 'react-router-dom';
import { properties } from '../data/data';
import Footer from '../footer';

const ProductDescription = () => {
  const { id } = useParams();
  const product = properties.find((p) => p.id === id);
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <>
    
    <div className="mt-8 mb-8 max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md">
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
       
        <div className="lg:col-span-2">
          <img
            src={product.image}
            alt="Property"
            className="w-full h-auto rounded-lg"
          />
          <div className="flex space-x-2 mt-4">
            <img
              src={product.image}
              alt="Thumbnail"
              className="w-20 h-16 object-cover rounded-lg"
            /><img
              src={product.image}
              alt="Thumbnail"
              className="w-20 h-16 object-cover rounded-lg"
            /><img
              src={product.image}
              alt="Thumbnail"
              className="w-20 h-16 object-cover rounded-lg"
            /><img
              src={product.image}
              alt="Thumbnail"
              className="w-20 h-16 object-cover rounded-lg"
            /><img
              src={product.image}
              alt="Thumbnail"
              className="w-20 h-16 object-cover rounded-lg"
            /><img
              src={product.image}
              alt="Thumbnail"
              className="w-20 h-16 object-cover rounded-lg"
            /><img
              src={product.image}
              alt="Thumbnail"
              className="w-20 h-16 object-cover rounded-lg"
            />
            <img
              src={product.image}
              alt="Thumbnail"
              className="w-20 h-16 object-cover rounded-lg"
            />
            <div className="w-20 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
              +14 Photos
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mt-6">Rs {product.price}</h1>
          <p className="text-gray-600 mt-2">{product.title}</p>
          <div className="flex space-x-4 mt-4">
            <span className="bg-gray-100 px-3 py-1 rounded-lg">{product.bedrooms} Bed</span>
            <span className="bg-gray-100 px-3 py-1 rounded-lg">{product.bathrooms} Bath</span>
            <span className="bg-gray-100 px-3 py-1 rounded-lg">{product.food} Facility</span>
            <span className="bg-gray-100 px-3 py-1 rounded-lg">Near to {product.college}</span>
            <span className="bg-gray-100 px-3 py-1 rounded-lg">24 hrs Wifi</span>
          </div>
          <button className="bg-purple-700 text-white px-6 py-2 rounded-lg mt-6">
            ADD to Wishlist
          </button>

          <h2 className="text-xl font-semibold text-gray-700 mt-8">Property Information</h2>
          <p className="text-gray-600 mt-2">
            {product.description}
          </p>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Agent Details */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="font-semibold text-gray-800">Owner Details</h3>
            <p className="text-gray-600 mt-2">{product.owner}</p>
            <p className="text-gray-600">{product.ownerDetails}</p>
            <p className="text-gray-600">{product.phoneNumber}</p>
            <button className="bg-purple-700 text-white px-6 py-2 rounded-lg mt-6">
            Book Now
          </button>
            
          </div>

          {/* Inspection Times */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="font-semibold text-gray-800">Inspection Times</h3>
            <p className="text-gray-600 mt-2">
              Inspections are actions are still happening
            </p>
            <p className="text-gray-600">Wednesday, 30 Aug - 10:30 am</p>
            
          </div>

          {/* Map */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="font-semibold text-gray-800">Location</h3>
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <p>Map Placeholder</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="font-semibold text-gray-800">Market Trends</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-4">
          <div>
            <p className="text-gray-600">Average Monthly Rent</p>
            <div className="flex items-center mt-2">
              <p className="text-xl font-bold">$1,280 / mo</p>
              <span className="text-green-500 ml-2">+10%</span>
            </div>
          </div>
          <div>
            <p className="text-gray-600">Studio Rentals</p>
            <div className="flex items-center mt-2">
              <p className="text-xl font-bold">$980 / mo</p>
              <span className="text-green-500 ml-2">+5%</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    
    </>
  );
};

export default ProductDescription;


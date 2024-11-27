import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Page from '../page';  
import Nav from '../Navbar/nav'

const Cart = () => {
  const navigate = useNavigate();

  const [properties, setProperties] = useState([
    {
      id: 1,
      name: "2BHK Apartment in Downtown",
      category: "Apartment",
      price: 12000.0,
      image: '/images/property1.jpg',
    },
    {
      id: 2,
      name: "3BHK Villa with Pool",
      category: "Villa",
      price: 25000.0,
      image: '/images/property2.jpg',
    },
    {
      id: 3,
      name: "1BHK Studio Apartment",
      category: "Apartment",
      price: 8500.0,
      image: '/images/property3.jpg',
    },
    {
      id: 4,
      name: "Luxury 4BHK Penthouse",
      category: "Penthouse",
      price: 35000.0,
      image: '/images/property4.jpg',
    },
  ]);

  const navigateToUpdate = (id) => {
    navigate('/updateRoom');
  };

  return (
    <>
    <div className="flex min-h-screen">
      {/* Left side: Page component occupies 1/4 of the page */}
      <div className="w-1/8 p-4 bg-gray-100 mr-7 ml-7">
        <Page />
      </div>

      {/* Right side: Cart component occupies 3/4 of the page */}
      <div className="w-3/4 p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Your Properties</h1>
        <div className="mb-6 text-lg text-center">Total Properties: {properties.length}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
            >
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{property.name}</h2>
                <p className="text-sm text-gray-500 mb-2">{property.category}</p>
                <p className="text-lg font-bold text-purple-700 mb-3">Rs. {property.price.toFixed(2)}</p>
                <button
                  onClick={() => navigateToUpdate(property.id)}
                  className="text-sm text-purple-700 hover:underline"
                >
                  Update Rooms
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Cart;

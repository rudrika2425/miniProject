import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import PropertyContext from "./../context/PropertyContext";
import Navbar from '../Navbar';

const PropertyDescription = () => {
  const { id } = useParams();
  const { properties } = useContext(PropertyContext); 

 
  if (!properties || properties.length === 0) {
    return <div>Loading...</div>; 
  }

 
  const property = properties.find((prop) => prop.id === id);

  // If property not found, show a message
  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold">{property.title}</h1>
        <img src={property.image} alt={property.title} className="w-full h-64 object-cover mt-4" />
        <p className="mt-4">{property.description}</p>
        <p><strong>Price:</strong> ${property.price}</p>
        <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
        <p><strong>Bathrooms:</strong> {property.bathrooms}</p>
        <p><strong>Food:</strong> {property.food}</p>
        <p><strong>College:</strong> {property.college}</p>
      </div>
    </>
  );
};

export default PropertyDescription;

// import React, { useContext } from "react";
// import { useParams } from "react-router-dom";
// import PropertyContext from "../context/PropertyContext"; // Import the context
// import Navbar from '../Navbar';

// const PropertyDescription = () => {
//   const { id } = useParams(); // Get the property ID from the URL
//   const { properties } = useContext(PropertyContext); // Access the properties from context

//   // Check if properties is not null and contains items
//   if (!properties || properties.length === 0) {
//     return <div>Loading...</div>; // Show loading if properties are null or empty
//   }

//   // Find the property with the given ID
//   const property = properties.find((prop) => prop.id === id);

//   // If property not found, show a message
//   if (!property) {
//     return <div>Property not found</div>;
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="p-8">
//         <h1 className="text-3xl font-bold">{property.title}</h1>
//         <img src={property.image} alt={property.title} className="w-full h-64 object-cover mt-4" />
//         <p className="mt-4">{property.description}</p>
//         <p><strong>Price:</strong> ${property.price}</p>
//         <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
//         <p><strong>Bathrooms:</strong> {property.bathrooms}</p>
//         <p><strong>Food:</strong> {property.food}</p>
//         <p><strong>College:</strong> {property.college}</p>
//       </div>
//     </>
//   );
// };

// export default PropertyDescription;

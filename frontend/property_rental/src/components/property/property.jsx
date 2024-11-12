// import React from 'react';
// import { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Navbar from '../nav';
// import PropertyCard from './propertyCard';
// function Property() {
//   const { collegeName } = useParams(); // Use "collegeName" to match the route
//   const [selected, setSelected] = useState(null);

//   const handleClick = (index) => {
//     setSelected(index);
//   };
//   const categories=['Hostels', 'PG\'s', 'Flats'];
//   return (
//     <div> 
//         <Navbar/>      
//         <div className='flex justify-center align-middle  bg-slate-400'>
//           <h1 className='text-3xl font-semibold bg-green-600 text-white h-24 flex justify-center items-center rounded-md shadow-lg mt-16 w-screen'>{collegeName.toUpperCase().replace('-',' ')}</h1>
//         </div>
//         <div className="flex justify-center items-center">
//   <ul className="flex justify-center align-middle space-x-40 bg-green-300 w-screen">  
//   {categories.map((category, index) => (
//         <li
//           key={index}
//           className={`text-lg cursor-pointer px-4 py-2 ${
//             selected === index
//               ? 'bg-green-500 rounded-lg border-2 border-green-700'
//               : ''
//           }`}
//           onClick={() => handleClick(index)}
//         >
//           {category}
//           </li>

//   ))}
//   </ul>
// </div>
// <PropertyCard category={selected !== null ? categories[selected] : null} collegeName={collegeName}/>
//     </div>

//   );
// }

// export default Property;

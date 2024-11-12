import React, { createContext, useState } from 'react';

export const CollegeContext = createContext(null);

const CollegeProvider = ({ children }) => {
  const [properties, setProperties] = useState([]); // Set an initial value, like an empty array
  
  return (
    <CollegeContext.Provider value={{ properties, setProperties }}>
      {children}
    </CollegeContext.Provider>
  );
};

export default CollegeProvider;

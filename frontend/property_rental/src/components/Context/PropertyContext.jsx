
import React, { createContext, useState } from "react";

const PropertyContext = createContext({
  properties: [],
  setProperties: () => {},
});

export const PropertyContextProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);

  return (
    <PropertyContext.Provider value={{ properties, setProperties }}>
      {children}
    </PropertyContext.Provider>
  );
};

export default PropertyContext;

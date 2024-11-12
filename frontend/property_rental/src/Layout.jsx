import React from 'react';
import Navbar from '../src/components/Navbar'; // Adjust the import path as needed

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;

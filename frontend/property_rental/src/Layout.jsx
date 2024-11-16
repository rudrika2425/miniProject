// Layout.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';  // Assuming you have a Navbar component
import Footer from './components/Footer';  // Assuming you have a Footer component

const Layout = ({ children }) => {
  const location = useLocation();

  // Check if the current route is not the login page
  const isLoginPage = location.pathname === '/';

  return (
    <div>
      {/* Conditionally render the Navbar */}
      {!isLoginPage && <Navbar />}
      
      <main>{children}</main>
      
      {/* Conditionally render the Footer */}
      {!isLoginPage && <Footer />}
    </div>
  );
};

export default Layout;

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 ">
      <div className="container mx-auto text-center">
        <p>© 2024 RentPro. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="hover:text-gray-400"><FaFacebook size={24}/></a>
          <a href="#" className="hover:text-gray-400"><FaTwitter size={24}/></a>
          <a href="#" className="hover:text-gray-400"><FaInstagram size={24}/></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

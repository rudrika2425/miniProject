import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from "../Context";
import { useSearchParams } from 'react-router-dom';

const Nav = () => {

  const [searchParams] = useSearchParams();
  const userEmail = searchParams.get('email');



  const handleLogout = () => {
    // Clear local storage and session storage
    localStorage.clear();
    sessionStorage.clear();
  
    // Redirect to the provided URL
    window.location.replace("http://localhost:5173/login");
  };
  

  //console.log(email);

  return (
    <nav className=" top-0 left-0 right-0 bg-white bg-opacity-50 backdrop-blur-md p-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-purple-700">
          <Link to="/">
            Rent
            <span className="text-3xl font-extrabold text-purple-700">Pro</span>
          </Link>
        </h1>

        <div className="flex items-center space-x-4">
          <span className="text-purple-700 font-semibold">{userEmail}</span>
          <button
            onClick={handleLogout}
            className="bg-white text-purple-700 px-5 py-2 border-2 border-purple-700 rounded-full font-semibold hover:text-purple-900 transform hover:scale-105 transition-transform"
          >
            Logout
          </button>
        </div>


      </div>
    </nav>
  );
};

export default Nav;

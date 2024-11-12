import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  console.log("Current Path:", currentPath); // Logs the current path for debugging

  return (
    <nav className=" top-0 left-0 right-0 bg-white bg-opacity-50 backdrop-blur-md p-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-purple-700">
          <Link to="/">
            Rent
            <span className="text-3xl font-extrabold text-purple-700">Pro</span>
          </Link>
        </h1>
        <ul className="flex space-x-6 text-lg">
          <li
            style={{
              borderBottom: currentPath === "/" ? "3px solid #6b46c1" : "none",
              paddingBottom: "4px",
            }}
            className="text-purple-700 hover:text-purple-900  font-semibold"
          >
            <Link to="/">Home</Link>
          </li>
          <li
            style={{
              borderBottom:
                currentPath === "/aboutus" ? "3px solid #6b46c1" : "none",
              paddingBottom: "4px",
            }}
            className="text-purple-700 hover:text-purple-900  font-semibold"
          >
            <Link to="/aboutus">About Us</Link>
          </li>
          <li style={{
                borderBottom:
                  currentPath === "/contact" ? "3px solid #6b46c1" : "none",
                paddingBottom: "4px",
              }}
              className="text-purple-700 hover:text-purple-900  font-semibold">
            <Link
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
        <Link to="/login">
          <button className="bg-white text-purple-700 px-5 py-2  border-2 border-purple-400 rounded-full font-semibold hover:bg-purple-300 transition-all duration-300">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;

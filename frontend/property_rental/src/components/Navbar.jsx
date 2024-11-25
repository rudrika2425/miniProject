import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "./AuthContext";

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const { userEmail, setUserEmail } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("userEmail"); // Clear localStorage
    setUserEmail(null); // Update context state
    navigate("/login"); // Redirect to login page
  };
  
  
  return (
    <nav className="top-0 left-0 right-0 bg-white bg-opacity-50 backdrop-blur-md p-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <h1 className="text-3xl font-extrabold text-purple-700">
          <Link to="/home">
            Rent
            <span className="text-3xl font-extrabold text-purple-700">Pro</span>
          </Link>
        </h1>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-lg">
          <li
            style={{
              borderBottom: currentPath === "/" ? "3px solid #6b46c1" : "none",
              paddingBottom: "4px",
            }}
            className="text-purple-700 hover:text-purple-900 font-semibold"
          >
            <Link to="/">Home</Link>
          </li>
          <li
            style={{
              borderBottom:
                currentPath === "/aboutus" ? "3px solid #6b46c1" : "none",
              paddingBottom: "4px",
            }}
            className="text-purple-700 hover:text-purple-900 font-semibold"
          >
            <Link to="/aboutus">About Us</Link>
          </li>
          <li
            style={{
              borderBottom:
                currentPath === "/contact" ? "3px solid #6b46c1" : "none",
              paddingBottom: "4px",
            }}
            className="text-purple-700 hover:text-purple-900 font-semibold"
          >
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          {userEmail ? (
            <>
              <span className="text-purple-700 font-semibold">{userEmail}</span>
              <button
                onClick={handleLogout}
                className="bg-white text-purple-700 px-5 py-2 border-2 border-purple-700 rounded-full font-semibold hover:text-purple-900 transform hover:scale-105 transition-transform"
              >
                Logout
              </button>

              {/* Show Cart Button Only When Logged In */}
              <Link to="/cart">
                <button className="bg-white text-purple-700 px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:text-purple-900 transform hover:scale-105">
                  <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                </button>
              </Link>
            </>
          ) : (
            <Link to="/login">
              <button className="bg-white text-purple-700 px-5 py-2 border-2 border-purple-700 rounded-full font-semibold hover:text-purple-900 transform hover:scale-105 transition-transform">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;

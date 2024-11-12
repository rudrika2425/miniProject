// import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import PropertyDescription from "./components/property/PropertyDescription";
import Login from "./components/auth/Login";
import Navbar from "./components/Navbar";
import { PropertyContextProvider } from "../components/context/PropertyContext"; // Import the context provider

import "./App.css";

function App() {
  return (
   
    // <PropertyContextProvider>
      <Router>
        <Navbar />
        <Routes>
          
        </Routes>
      </Router>
    // </PropertyContextProvider>
    
  );
}

export default App;

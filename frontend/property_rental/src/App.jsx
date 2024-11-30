import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/auth/Login";
import Home from "./components/Home";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import PropertyDescription from "./components/property/PropertyDescription";
import CollegeCategory from "./components/CollegeCategory";
import Cart from "./components/Cart";
import Navbar from './components/Navbar'; 
import Footer from "./components/footer";
import { AuthProvider } from "./components/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/property/:id" element={<PropertyDescription />} />
          <Route path="/college/:collegeName" element={<CollegeCategory />} />
          <Route path="*" element={<Home />}  />
        </Routes>
      <Footer/>
      </AuthProvider>
    </Router>
  );
}

export default App;

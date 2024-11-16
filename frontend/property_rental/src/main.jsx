import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router,Route,Routes,Navigate,} from "react-router-dom";
import Login from "./components/auth/Login";
import Home from "./components/Home";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs"; 
import "./index.css"; 
import PropertyDescription from "./components/property/PropertyDescription";
import CollegeCategory from "./components/CollegeCategory";
import Layout from "./Layout";
import Cart from "./components/Cart";
//import Admin from ".app./AdminPanel";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  
  <React.StrictMode>
  
    <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} /> {/* Add this route */}
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/property/:id" element={<PropertyDescription />} />
        <Route path="/college/:collegeName" element={<CollegeCategory />} />
        {/* <Route path="/admin/*" element={<Admin />} /> */}
        <Route path="*" element={<Navigate to="/home" />} />

      </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
 
);

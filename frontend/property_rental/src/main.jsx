import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./components/auth/Login";
import Home from "./components/Home";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs"; 
import "./index.css"; 
import PropertyDescription from "./components/property/PropertyDescription";
import CollegeCategory from "./components/CollegeCategory";
import Layout from "./Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  
  <React.StrictMode>
  
    <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} /> {/* Add this route */}
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/property/:id" element={<PropertyDescription />} />
        <Route path="/college/:collegeName" element={<CollegeCategory />} />

        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
 
);

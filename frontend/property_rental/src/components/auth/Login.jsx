import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [selectedRole,setSelectedRole]=useState('')
 const navigate=useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.ok) {
        toast.success(result.message);
        setIsLogin(true); // Switch to login after successful signup
      } else {
        toast.error(result.message || "Signup failed");
      }
    } catch (error) {
      toast.error("An error occurred during signup. Please try again.");
    }
  };

  
  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.ok) {
        toast.success("Login successful");
         if(selectedRole==="owner"){
          window.location.href="http://localhost:5174/"
         }
         else if(selectedRole==="tenant"){
          navigate("/home");
         }
      } else {
        toast.error(result.message || "Login failed");
      }
    } catch (error) {
      toast.error("An error occurred during login. Please try again.");
    }
  };

  const RadioButtons = ({ selectedRole, setSelectedRole }) => (
    <div className="mt-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Select Role
      </label>
      <div className="flex items-center gap-4">
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="role"
            value="owner"
            className="form-radio text-purple-700"
            checked={selectedRole === "owner"}
            onChange={(e) => setSelectedRole(e.target.value)}
          />
          <span className="ml-2 text-gray-700">Owner</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="role"
            value="tenant"
            className="form-radio text-purple-700"
            checked={selectedRole === "tenant"}
            onChange={(e) => setSelectedRole(e.target.value)}
          />
          <span className="ml-2 text-gray-700">Tenant</span>
        </label>
      </div>
    </div>
  );


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ToastContainer/>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <form onSubmit={isLogin? handleSignin: handleSignup} className="space-y-4">
          {/* Name Input (only for signup) */}
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-purple-300"
                required={!isLogin}
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-purple-300"
              required
            />
          </div>
       
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-purple-300"
              required
            />
          </div>
          {isLogin && (
            <RadioButtons
              selectedRole={selectedRole}
              setSelectedRole={setSelectedRole}
            />
          )}
          
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-300"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        {/* Toggle Login/Signup */}
        <p className="mt-4 text-center text-sm text-gray-600">
          {isLogin
            ? "Don't have an account? "
            : "Already have an account? "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-purple-600 font-medium cursor-pointer hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;

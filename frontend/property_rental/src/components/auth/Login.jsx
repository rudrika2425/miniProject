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
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
    <ToastContainer />
    <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
      <div className="flex items-center justify-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-tr from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 7.5l-5 5-2.5-2.5m11-3a9 9 0 11-7.267-3.233m6.27 5.095a9.034 9.034 0 01.997 3.205"
            />
          </svg>
        </div>
      </div>
      <h2 className="text-4xl font-bold text-center text-purple-600 mb-6">
        {isLogin ? "Welcome Back!" : "Create Account"}
      </h2>
      <p className="text-center text-gray-600 mb-8">
        {isLogin
          ? "Login to your account and explore the features!"
          : "Sign up and start your journey with us today!"}
      </p>
      <form onSubmit={isLogin ? handleSignin : handleSignup} className="space-y-6">
        {/* Name Input (only for signup) */}
        {!isLogin && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              required={!isLogin}
            />
          </div>
        )}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
            className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
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
          className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:from-purple-600 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 transition-transform transform hover:scale-105"
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>
      {/* Toggle Login/Signup */}
      <p className="mt-8 text-center text-sm text-gray-700">
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <span
          onClick={() => setIsLogin(!isLogin)}
          className="text-purple-600 font-medium cursor-pointer hover:underline hover:text-purple-800 transition duration-300"
        >
          {isLogin ? "Sign Up" : "Login"}
        </span>
      </p>
    </div>
  </div>
);

  
};

export default AuthPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [selectedRole, setSelectedRole] = useState("");
  const navigate = useNavigate();

  // Shared component for radio buttons
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (selectedRole === "tenant") {
      navigate("/home");
    } else if (selectedRole === "owner") {
      navigate("/admin");
    } else {
      alert("Please select a role");
    }
  };

  const LoginForm = () => (
    <div className="w-full p-8 lg:w-1/2">
      <p className="text-xl text-gray-600 text-center">Welcome back!</p>
      <form onSubmit={handleFormSubmit}>
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email Address
          </label>
          <input
            className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-purple-700"
            type="email"
            required
          />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-purple-700"
            type="password"
          />
          <a
            href="#"
            className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2"
          >
            Forgot Password?
          </a>
        </div>
        <RadioButtons selectedRole={selectedRole} setSelectedRole={setSelectedRole} />
        <div className="mt-8">
          <button
            type="submit"
            className="bg-purple-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-purple-900"
          >
            Login
          </button>
        </div>
      </form>
      <p
        className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2 cursor-pointer -mx-60"
        onClick={() => setIsLogin(false)}
      >
        Don't have an account yet?
      </p>
    </div>
  );

  const SignupForm = () => (
    <div className="w-full p-8 lg:w-1/2">
      <p className="text-xl text-gray-600 text-center">Create an Account</p>
      <form onSubmit={handleFormSubmit}>
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input
            className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-purple-700"
            type="text"
            required
          />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email Address
          </label>
          <input
            className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-purple-700"
            type="email"
            required
          />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-purple-700"
            type="password"
          />
        </div>
        <RadioButtons selectedRole={selectedRole} setSelectedRole={setSelectedRole} />
        <div className="mt-8">
          <button
            type="submit"
            className="bg-purple-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-purple-900"
          >
            Sign Up
          </button>
        </div>
      </form>
      <p
        className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2 cursor-pointer -mx-60"
        onClick={() => setIsLogin(true)}
      >
        Already have an account?
      </p>
    </div>
  );

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-screen-2xl bg-white overflow-hidden rounded-lg">
        <div className="flex items-center justify-center w-full px-5 sm:px-0">
          <div className="flex bg-white rounded-lg overflow-hidden max-w-sm lg:max-w-4xl w-full">
            <img
              className="hidden lg:block lg:w-1/2 object-cover"
              src="/images/landscape1.jpg"
              alt="Landscape"
              style={{ objectFit: "cover" }}
            />
            {isLogin ? <LoginForm /> : <SignupForm />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

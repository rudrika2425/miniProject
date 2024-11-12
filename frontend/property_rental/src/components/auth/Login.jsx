import React, { useState } from "react";
import Navbar from "../Navbar";
function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const LoginForm = () => {
    return (
      <>
        <div className="w-full p-8 lg:w-1/2">
          <p className="text-xl text-gray-600 text-center">Welcome back!</p>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="email"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="password"
            />
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2"
            >
              Forgot Password?
            </a>
          </div>
          <div className="mt-8">
            <button className="bg-purple-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-purple-900">
              Login
            </button>
          </div>
          <p
            className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2 cursor-pointer -mx-60"
            onClick={() => setIsLogin(false)}
          >
            Don&apos;t have an account yet?
          </p>
        </div>
      </>
    );
  };

  const SignupForm = () => {
    return (
      <div className="w-full p-8 lg:w-1/2">
        <p className="text-xl text-gray-600 text-center">Create an Account</p>
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name{" "}
          </label>
          <input
            className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
            type="text"
            required
          />
        </div>{" "}
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email Address
          </label>
          <input
            className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
            type="email"
            required
          />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
            type="password"
          />
        </div>
        <div className="mt-8">
          <button className="bg-purple-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-purple-900">
            Sign Up
          </button>
        </div>
        <p
          className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2 cursor-pointer -mx-60"
          onClick={() => setIsLogin(true)}
        >
          Already have an account?
        </p>
      </div>
    );
  };

  return (
    <>
     
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-screen-2xl bg-white shadow-lg overflow-hidden rounded-lg">
          <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
            <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
              <div
                className="hidden md:block lg:w-1/2 bg-cover bg-purple-700"
                style={{
                  backgroundImage: `url(/images/landscape1.jpeg)`,
                }}
              ></div>
              {isLogin ? <LoginForm /> : <SignupForm />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

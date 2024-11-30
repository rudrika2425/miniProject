import React from 'react';
import Navbar from './Navbar';
import Footer from './footer';
import Banner from './Banner';
import Featured from './property/Featured'; // Ensure the path to Featured is correct
import Recent from './Recent';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const move=()=>{
    navigate('/login');
  }
  return (
    <>
      
      <Banner />
      <div className="relative">
        {/* Hero Section */}
        <header className="absolute inset-0 flex justify-center items-center z-10 -mt-56">
          <div
            className="flex flex-col justify-center items-center text-center text-black border-2 border-solid p-8 max-w-4xl bg-opacity-50 backdrop-blur-md shadow-lg"
            style={{ transform: 'translateY(-290px)' }}
          >
            <h1 className="text-5xl font-extrabold mb-4 shadow-lg">
              Find Your Dream Rental Property
            </h1>
            <p className="text-lg font-medium mb-8 shadow-lg">
              Explore the best properties available in the market
            </p>
            <button onClick={move} className="bg-green-500 px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg">
              Get Started
            </button>
          </div>
        </header>
      </div>

      {/* Main Content */}
      <div className="flex justify-center">
        <img 
          src="./images/b1.png" 
          className="w-full h-96 m-7 p-6 pr-20 object-cover align-middle" 
          alt="Property Banner 1"
        />
      </div>

      <main className="container mx-auto my-16">
        
        <Featured />

        <div className="flex justify-center">
          <img 
            src="./images/b2.png" 
            className="w-full h-96 m-7 p-4 object-cover" 
            alt="Property Banner 2"
          />
        </div>

        {/* Recently Added Section */}
        <Recent />
      </main>

    </>
  );
};

export default Home;

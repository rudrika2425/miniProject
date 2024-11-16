import React from 'react';
import { useNavigate } from 'react-router-dom';

const Page = () => {
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate('/AddProperty/property');
  };

  const handleUpdate = () => {
    navigate('/updateProperty');
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side for navigation buttons - 1/4th of the screen */}
      <div className="w-1/8 bg-gray-100 p-4 flex flex-col items-center justify-center space-y-4">
        <button
          className="bg-purple-700 text-white rounded-full px-10 py-3 hover:bg-purple-900 w-60"
          onClick={handleAdd}
        >
          ADD PROPERTY
        </button>
        <button
          className="bg-purple-700 text-white rounded-full px-10 py-3 hover:bg-purple-900 w-60"
          onClick={handleUpdate}
        >
          UPDATE DETAILS
        </button>
      </div>

      {/* Right side for Cart content - 3/4th of the screen */}
      <div className="w-3/4 p-6">
        {/* Cart page content goes here */}
      </div>
    </div>
  );
};

export default Page;

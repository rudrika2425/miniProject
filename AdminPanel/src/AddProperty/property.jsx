import React, { useState } from 'react';

const AddPropertyForm = () => {
  const [propertyDetails, setPropertyDetails] = useState({
    residenceName: '',
    address: '',
    nearbyColleges: '',
    propertyType: 'PG',
    bedsVacant: '',
    roomsVacant: '',
    bedType: 'single',
    adminEmail: '',
    adminPhone: '',
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyDetails({
      ...propertyDetails,
      [name]: value,
    });
  };

  const handleFileChange = (e, index) => {
    const newImages = [...propertyDetails.images];
    newImages[index] = e.target.files[0];
    setPropertyDetails({
      ...propertyDetails,
      images: newImages,
    });
  };

  const handleRemoveImage = (index) => {
    const newImages = propertyDetails.images.filter((_, i) => i !== index);
    setPropertyDetails({
      ...propertyDetails,
      images: newImages,
    });
  };

  const handleAddImage = () => {
    if (propertyDetails.images.length < 5) {
      setPropertyDetails({
        ...propertyDetails,
        images: [...propertyDetails.images, null],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Property Details Submitted:', propertyDetails);
    // Handle form submission (e.g., send data to backend or update state)
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">Add New Property</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="residenceName" className="block text-sm font-medium text-gray-600">Name of Residence</label>
            <input
              type="text"
              id="residenceName"
              name="residenceName"
              value={propertyDetails.residenceName}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-green-300 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-600">Address</label>
            <textarea
              id="address"
              name="address"
              value={propertyDetails.address}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-green-300 focus:outline-none"
              rows="3"
            />
          </div>

          <div>
            <label htmlFor="nearbyColleges" className="block text-sm font-medium text-gray-600">Nearby Colleges</label>
            <input
              type="text"
              id="nearbyColleges"
              name="nearbyColleges"
              value={propertyDetails.nearbyColleges}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-green-300 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="propertyType" className="block text-sm font-medium text-gray-600">Property Type</label>
            <select
              id="propertyType"
              name="propertyType"
              value={propertyDetails.propertyType}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-green-300 focus:outline-none"
            >
              <option value="PG">PG</option>
              <option value="Flat">Flat</option>
            </select>
          </div>

          {propertyDetails.propertyType === 'PG' ? (
            <>
              <div>
                <label htmlFor="bedsVacant" className="block text-sm font-medium text-gray-600">Number of Beds Vacant</label>
                <input
                  type="number"
                  id="bedsVacant"
                  name="bedsVacant"
                  value={propertyDetails.bedsVacant}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-green-300 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="bedType" className="block text-sm font-medium text-gray-600">Bed Type</label>
                <select
                  id="bedType"
                  name="bedType"
                  value={propertyDetails.bedType}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-green-300 focus:outline-none"
                >
                  <option value="single">Single Bed</option>
                  <option value="multi">Multi Bed</option>
                </select>
              </div>
            </>
          ) : (
            <div>
              <label htmlFor="roomsVacant" className="block text-sm font-medium text-gray-600">Number of Rooms Vacant</label>
              <input
                type="number"
                id="roomsVacant"
                name="roomsVacant"
                value={propertyDetails.roomsVacant}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-green-300 focus:outline-none"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-600">Upload Images (Max 5)</label>
            {propertyDetails.images.map((image, index) => (
              <div key={index} className="flex items-center space-x-2 mt-2">
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, index)}
                  className="w-full p-1 border border-gray-300 rounded-md"
                />
                {image && (
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Property ${index + 1}`}
                    className="w-16 h-16 rounded-md object-cover border border-gray-200"
                  />
                )}
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
            {propertyDetails.images.length < 5 && (
              <button
                type="button"
                onClick={handleAddImage}
                className="mt-2 text-sm text-green-600 hover:text-green-800"
              >
                Add Another Image
              </button>
            )}
          </div>

          <div>
            <label htmlFor="adminEmail" className="block text-sm font-medium text-gray-600">Admin Email</label>
            <input
              type="email"
              id="adminEmail"
              name="adminEmail"
              value={propertyDetails.adminEmail}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-green-300 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="adminPhone" className="block text-sm font-medium text-gray-600">Admin Phone Number</label>
            <input
              type="tel"
              id="adminPhone"
              name="adminPhone"
              value={propertyDetails.adminPhone}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-green-300 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
          >
            Add Property
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPropertyForm;

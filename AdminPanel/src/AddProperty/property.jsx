import React, { useState } from 'react';
import Page from '../page'
import Nav from '../Navbar/nav'
import { useSearchParams } from 'react-router-dom';


const AddPropertyForm = () => {

  const [searchParams] = useSearchParams();
  const userEmail = searchParams.get('email');

  const [propertyDetails, setPropertyDetails] = useState({
    residenceName: '',
    address: '',
    nearbyColleges: '',
    propertyType: 'PG',
    bedsVacant: '',
    roomsVacant: '',
    adminEmail: userEmail,
    adminPhone: '',
    images: [],
    facilities:[],
    availableFlats: {
      '1BHK': '',
      '2BHK': '',
      '3BHK': '',
      '4BHK': '',
    },
  });
   const [facilities,setFacilities]=useState([])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyDetails({
      ...propertyDetails,
      [name]: value,
    });
  };

  const handleFlatChange = (e) => {
    const { name, value } = e.target;
    setPropertyDetails({
      ...propertyDetails,
      availableFlats: {
        ...propertyDetails.availableFlats,
        [name]: value,
      },
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

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setPropertyDetails((prev) => {
      if (checked) {
        return { ...prev, facilities: [...prev.facilities, name] };
      } else {
        return {
          ...prev,
          facilities: prev.facilities.filter((facility) => facility !== name),
        };
      }
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const payload = {
      email: propertyDetails.adminEmail,
      name: propertyDetails.residenceName,
      address: propertyDetails.address,
      college: propertyDetails.nearbyColleges,
      propertyType: propertyDetails.propertyType,
      facility: propertyDetails.facilities,
      beds: propertyDetails.propertyType === 'PG' ? propertyDetails.bedsVacant : undefined,
      bhk1: propertyDetails.propertyType === 'Flat' ? propertyDetails.availableFlats['1BHK'] : undefined,
      bhk2: propertyDetails.propertyType === 'Flat' ? propertyDetails.availableFlats['2BHK'] : undefined,
      bhk3: propertyDetails.propertyType === 'Flat' ? propertyDetails.availableFlats['3BHK'] : undefined,
      bhk4: propertyDetails.propertyType === 'Flat' ? propertyDetails.availableFlats['4BHK'] : undefined,
      images: propertyDetails.images.filter((image) => typeof image === 'string' && image.trim() !== ''),
    };
  
    try {
      const response = await fetch('http://localhost:3000/property/addproperty', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      const result = await response.json();
      if (response.ok) {
        alert('Property added successfully!');
        console.log('Property Details Submitted:', result);
  
        // Clear the form state
        setPropertyDetails({
          adminEmail: '',
          residenceName: '',
          address: '',
          nearbyColleges: '',
          propertyType: '',
          facilities: [],
          bedsVacant: '',
          availableFlats: { '1BHK': '', '2BHK': '', '3BHK': '', '4BHK': '' },
          images: [],
        });
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error submitting property details:', error);
      alert('An error occurred while submitting the form.');
    }
  };
  

  return (
    <>
    <Nav/>
    <div className="flex min-h-screen">
    <div className="w-1/8 p-4 bg-gray-100 mr-7 ml-7">
    <Page />
  </div>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 w-3/4">
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
                
              </div>
            </>
          ) : (
            <>
              <div>
                <label htmlFor="1BHK" className="block text-sm font-medium text-gray-600">Available 1BHK Flats</label>
                <input
                  type="number"
                  id="1BHK"
                  name="1BHK"
                  value={propertyDetails.availableFlats['1BHK']}
                  onChange={handleFlatChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-green-300 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="2BHK" className="block text-sm font-medium text-gray-600">Available 2BHK Flats</label>
                <input
                  type="number"
                  id="2BHK"
                  name="2BHK"
                  value={propertyDetails.availableFlats['2BHK']}
                  onChange={handleFlatChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-green-300 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="3BHK" className="block text-sm font-medium text-gray-600">Available 3BHK Flats</label>
                <input
                  type="number"
                  id="3BHK"
                  name="3BHK"
                  value={propertyDetails.availableFlats['3BHK']}
                  onChange={handleFlatChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-green-300 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="4BHK" className="block text-sm font-medium text-gray-600">Available 4BHK Flats</label>
                <input
                  type="number"
                  id="4BHK"
                  name="4BHK"
                  value={propertyDetails.availableFlats['4BHK']}
                  onChange={handleFlatChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-green-300 focus:outline-none"
                />
              </div>
            </>
          )}
        <div className="flex flex-col space-y-2">
        <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="Wifi"
                    checked={propertyDetails.facilities.includes('Wifi')}
                    onChange={handleCheckboxChange}
                  />
                  <span>Wifi</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="Study Table"
                    checked={propertyDetails.facilities.includes('Study Table')}
                    onChange={handleCheckboxChange}
                  />
                  <span>Study Table</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="Chair"
                    checked={propertyDetails.facilities.includes('Chair')}
                    onChange={handleCheckboxChange}
                  />
                  <span>Chair</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="Mess Facility"
                    checked={propertyDetails.facilities.includes('Mess Facility')}
                    onChange={handleCheckboxChange}
                  />
                  <span>Mess Facility</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="Laundry Facility"
                    checked={propertyDetails.facilities.includes('Laundry Facility')}
                    onChange={handleCheckboxChange}
                  />
                  <span>Laundry Facility</span>
                </label>
</div>


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

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
    </>
  );
};

export default AddPropertyForm;

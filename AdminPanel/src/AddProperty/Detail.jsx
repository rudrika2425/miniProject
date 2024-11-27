import React from 'react'

function Detail() {
  return (
    <div>
         <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 w-3/4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">Fill the details</h2>
        <form action="">
            <div>
            <label htmlFor="" className="block text-sm font-medium text-gray-600">Name of the Owner</label>
            <input
              type="text"
              id="ownerName"
              name="ownerName"
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-green-300 focus:outline-none"
            />
            </div>
            <div>
            <label htmlFor="" className="block text-sm font-medium text-gray-600">Email id</label>
            <input
              type="text"
              id="email"
              name="email"
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-green-300 focus:outline-none"
            />
            </div>
            <div>
            <label htmlFor="" className="block text-sm font-medium text-gray-600">Phone number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-green-300 focus:outline-none"
            />
            </div>
            <div>
            <label htmlFor="" className="block text-sm font-medium text-gray-600">Address of the Owner</label>
            <input
              type="text"
              id="address"
              name="address"
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-green-300 focus:outline-none"
            />
            </div>
        </form>
        </div>
        </div>
    </div>
  )
}

export default Detail
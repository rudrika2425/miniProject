import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    message: '',
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-purple-100 to-white">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md mt-14 transform transition-transform duration-300 hover:scale-105"
      >
        <h1 className="text-2xl font-extrabold text-center text-purple-700 mb-6">
          Contact Us
        </h1>
  
        {/* Name Input */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>
  
        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            E-mail <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>
  
        {/* Contact Number Input */}
        <div className="mb-4">
          <label htmlFor="contactNumber" className="block text-gray-700 font-medium mb-2">
            Contact Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>
  
        {/* Message Textarea */}
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          ></textarea>
        </div>
  
        {/* Date Input */}
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
  
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-purple-700 hover:to-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
}  
export default Contact;

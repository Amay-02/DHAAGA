import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic (e.g., API call)
    console.log('Signed up with:', { name, phoneNumber, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-300 via-yellow-300 to-red-300 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full transform transition-all duration-300 ease-in-out">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Create an Account</h2>

        <form className="mt-6" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-5">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              placeholder="Enter your full name"
            />
          </div>

          {/* Phone Number Input */}
          <div className="mb-5">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              placeholder="Create a password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-400 focus:outline-none transition duration-300 ease-in-out"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-yellow-500 hover:text-yellow-400">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

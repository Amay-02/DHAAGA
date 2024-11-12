import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle OTP verification (e.g., API call to verify OTP)
    if (isOtpSent) {
      console.log('OTP Verified:', otp);
    } else {
      // Simulate sending OTP
      console.log('Sending OTP to:', phoneNumber);
      setIsOtpSent(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-300 via-yellow-300 to-red-300 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full transform transition-all duration-300 ease-in-out">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login to DHAAGA</h2>

        <form className="mt-6" onSubmit={handleSubmit}>
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

          {/* OTP Input (appears only after OTP is sent) */}
          {isOtpSent && (
            <div className="mb-6">
              <label htmlFor="otp" className="block text-sm font-medium text-gray-700">Enter OTP</label>
              <input
                type="text"
                id="otp"
                name="otp"
                required
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                placeholder="Enter the OTP sent to your phone"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-400 focus:outline-none transition duration-300 ease-in-out"
          >
            {isOtpSent ? 'Verify OTP' : 'Send OTP'}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-yellow-500 hover:text-yellow-400">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

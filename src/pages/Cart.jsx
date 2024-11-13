import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-100 to-orange-200 min-h-screen flex items-center justify-center">
      <div className="container mx-auto mt-10 animate-fadeIn">
        <div className="sm:flex shadow-md my-10 rounded-lg bg-white overflow-hidden">
          <div className="w-full sm:w-3/4 bg-white px-10 py-10 shadow-inner rounded-l-lg">
            <div className="flex justify-between border-b border-orange-300 pb-8 mb-6">
              <h1 className="font-bold text-3xl text-orange-600">Shopping Cart</h1>
              <h2 className="font-semibold text-lg text-gray-600">2 Items</h2>
            </div>

            {/* Product 1 */}
            <div className="md:flex items-stretch py-8 border-b border-orange-200 hover:bg-orange-50 transition-colors duration-300">
              <div className="md:w-4/12 w-full">
                <img src="https://i.ibb.co/6gzWwSq/Rectangle-20-1.png" alt="Pooja Sticks" className="w-full h-full object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200" />
              </div>
              <div className="md:pl-5 md:w-8/12">
                <p className="text-xs text-gray-500">SKU: PS293</p>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold text-gray-800">Pooja Sticks</p>
                  <select aria-label="Select quantity" className="py-2 px-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-300">
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                  </select>
                </div>
                <p className="text-sm text-gray-600 mt-2">Incense Scent</p>
                <p className="text-sm text-gray-600 mt-1">Pack Size: 50 sticks</p>
                <p className="text-sm text-gray-600 mt-1">Natural Ingredients</p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    <button className="text-sm text-orange-500 underline hover:text-orange-600 transition">Add to favorites</button>
                    <button className="text-sm text-red-500 underline ml-4 hover:text-red-600 transition">Remove</button>
                  </div>
                  <p className="text-lg font-bold text-gray-800">₹200</p>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="md:flex items-stretch py-8 border-b border-orange-200 hover:bg-orange-50 transition-colors duration-300">
              <div className="md:w-4/12 w-full">
                <img src="https://i.ibb.co/6gzWwSq/Rectangle-20-1.png" alt="Men Kurta White" className="w-full h-full object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200" />
              </div>
              <div className="md:pl-5 md:w-8/12">
                <p className="text-xs text-gray-500">SKU: MK123</p>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold text-gray-800">Men Kurta White</p>
                  <select aria-label="Select quantity" className="py-2 px-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-300">
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                  </select>
                </div>
                <p className="text-sm text-gray-600 mt-2">Size: L</p>
                <p className="text-sm text-gray-600 mt-1">Color: White</p>
                <p className="text-sm text-gray-600 mt-1">Cotton Fabric</p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    <button className="text-sm text-orange-500 underline hover:text-orange-600 transition">Add to favorites</button>
                    <button className="text-sm text-red-500 underline ml-4 hover:text-red-600 transition">Remove</button>
                  </div>
                  <p className="text-lg font-bold text-gray-800">₹1500</p>
                </div>
              </div>
            </div>

            <Link to="/home" className="inline-block mt-8 font-semibold text-sm text-yellow-500 hover:text-orange-500 transition duration-200">
              <span>←</span> Continue Shopping
            </Link>
          </div>

          <div className="w-full sm:w-1/4 bg-orange-100 p-6 rounded-r-lg">
            <h1 className="text-2xl font-bold text-orange-600 border-b border-orange-300 pb-4 mb-6">Order Summary</h1>
            <div className="flex justify-between text-gray-700">
              <span>Subtotal:</span>
              <span>₹1700</span>
            </div>
            <div className="flex justify-between text-gray-700 mt-4">
              <span>Shipping:</span>
              <span>₹100</span>
            </div>
            <button className="mt-6 w-full bg-orange-500 text-white font-bold py-2 rounded-md hover:bg-orange-600 transition-colors duration-200">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

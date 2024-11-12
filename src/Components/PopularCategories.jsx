import React from 'react';
import clothing from '../assets/Categories/Clothes.jpg';
import pooja from "../assets/Categories/pooja.webp";
import decor from "../assets/Categories/Decor.png";
import hand from "../assets/Categories/handi.webp";

const ShopByCategory = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Shop The Collections</h2>
        <p className="text-xl text-gray-600 mb-8">Shop the latest products from the most popular collections</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {/* Category 1: Clothing */}
          <div className="relative w-72 h-48 overflow-hidden rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-800">
            <img
              src={clothing}
              alt="Clothing"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <p className="text-white text-xl font-semibold">Clothing</p>
            </div>
          </div>

          {/* Category 2: Pooja Items */}
          <div className="relative w-72 h-48 overflow-hidden rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-800">
            <img
              src={pooja}
              alt="Pooja"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <p className="text-white text-xl font-semibold">Pooja</p>
            </div>
          </div>

          {/* Category 3: Decor Items */}
          <div className="relative w-72 h-48 overflow-hidden rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-800">
            <img
              src={decor}
              alt="Decor"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <p className="text-white text-xl font-semibold">Decor</p>
            </div>
          </div>

          {/* Category 4: Handicrafts */}
          <div className="relative w-72 h-48 overflow-hidden rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-800">
            <img
              src={hand}
              alt="Handicrafts"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <p className="text-white text-xl font-semibold">Handicrafts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;

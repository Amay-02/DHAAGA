import React, { useState } from 'react';
import { FaCartPlus, FaHeart } from 'react-icons/fa';
import sticks from "../assets/Products/PoojaSticks.jpg"; // Correct image import
import brass from "../assets/Products/diya.jpg";

const products = [
  {
    id: 1,
    name: 'Pooja Sticks',
    price: '₹120',
    imageSrc: sticks,
    imageAlt: 'Traditional Pooja sticks used during religious rituals.',
  },
  {
    id: 2,
    name: 'Brass Diya Lamp',
    price: '₹250',
    imageSrc: brass,
    imageAlt: 'Brass Diya lamp for lighting up festive occasions.',
  },
  {
    id: 3,
    name: 'Marigold Flowers',
    price: '₹50',
    imageSrc: 'https://via.placeholder.com/300x300.png?text=Marigold+Flowers',
    imageAlt: 'Fresh marigold flowers for decoration and pooja rituals.',
  },
  {
    id: 4,
    name: 'Handcrafted Clay Diyas',
    price: '₹100',
    imageSrc: 'https://via.placeholder.com/300x300.png?text=Handcrafted+Clay+Diyas',
    imageAlt: 'Handcrafted clay diyas for Diwali and pooja ceremonies.',
  },
  {
    id: 5,
    name: 'Sandalwood Incense Sticks',
    price: '₹200',
    imageSrc: 'https://via.placeholder.com/300x300.png?text=Sandalwood+Incense+Sticks',
    imageAlt: 'Sandalwood incense sticks for spiritual rituals.',
  },
  {
    id: 6,
    name: 'Brass Puja Thali',
    price: '₹450',
    imageSrc: 'https://via.placeholder.com/300x300.png?text=Brass+Puja+Thali',
    imageAlt: 'Traditional brass puja thali for religious ceremonies.',
  },
  {
    id: 7,
    name: 'Ghee Lamp for Pooja',
    price: '₹150',
    imageSrc: 'https://via.placeholder.com/300x300.png?text=Ghee+Lamp',
    imageAlt: 'Ghee lamp used for religious rituals during pooja.',
  },
  {
    id: 8,
    name: 'Decorative Rangoli Colors',
    price: '₹60',
    imageSrc: 'https://via.placeholder.com/300x300.png?text=Rangoli+Colors',
    imageAlt: 'Colorful rangoli powders for festive decorations.',
  },
];

export default function Shop() {
  const [wishlist, setWishlist] = useState(new Set());
  const [clicked, setClicked] = useState(new Set());

  const handleWishlistClick = (productId) => {
    const updatedWishlist = new Set(wishlist);
    if (updatedWishlist.has(productId)) {
      updatedWishlist.delete(productId);
    } else {
      updatedWishlist.add(productId);
    }
    setWishlist(updatedWishlist);
  };

  const handleCartClick = (productId) => {
    const updatedClicked = new Set(clicked);
    updatedClicked.add(productId);
    setClicked(updatedClicked);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Best Sellers</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              {/* Product Card */}
              <div
                className="relative bg-white rounded-lg shadow-sm overflow-hidden transition-transform duration-300 hover:scale-105"
                style={{ height: '380px', width: '280px' }} // Card height and width
              >
                {/* Image Container */}
                <div className="w-full h-full relative">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"  // Ensure the image fills the container and zooms on hover
                  />
                </div>

                {/* Wishlist Icon */}
                <div
                  onClick={() => handleWishlistClick(product.id)}
                  className={`absolute top-2 right-2 text-xl cursor-pointer ${wishlist.has(product.id) ? 'text-red-500' : 'text-white'} opacity-0 group-hover:opacity-100 transition-all duration-300`}
                >
                  <FaHeart />
                </div>

                {/* Add to Cart Button */}
                <div
                  onClick={() => handleCartClick(product.id)}
                  className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer transition-all duration-300 ${clicked.has(product.id) ? 'bg-dark-blue' : ''} opacity-0 group-hover:opacity-100 group-hover:translate-y-0`}
                >
                  Add to Cart
                </div>
              </div>

              {/* Product Info (Name and Price) */}
              <div className="mt-2 text-center">
                <p className="text-lg font-semibold text-gray-800">{product.name}</p>
                <p className="text-xl font-bold text-yellow-500">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

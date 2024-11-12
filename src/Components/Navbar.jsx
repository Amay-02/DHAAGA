import React, { useState, useEffect } from 'react';
import { FiHeart, FiUser, FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';  // Import Link for navigation

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle dropdown visibility on profile icon click
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Detect scroll event to apply blur effect
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true); // Apply blur effect after scrolling 50px
    } else {
      setIsScrolled(false);
    }
  };

  // Listen for scroll events
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 font-roboto ${isScrolled ? 'bg-white/80 backdrop-blur-lg' : 'bg-white shadow-md'}`} onClick={closeDropdown}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        
        {/* Logo Placeholder */}
        <div className="flex items-center">
          <img
            src="" // Add logo source here
            alt="Logo"
            className="w-10 h-10" // Adjust as needed
          />
        </div>

        {/* Centered Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/home" className="text-base font-semibold text-gray-800 hover:text-yellow-600">
            Home
          </Link>
          <Link to="/discover-artisans" className="text-base font-semibold text-gray-800 hover:text-yellow-600">
            Discover Artisans
          </Link>
          <Link to="/contact-us" className="text-base font-semibold text-gray-800 hover:text-yellow-600">
            Contact Us
          </Link>
          <Link to="/about-us" className="text-base font-semibold text-gray-800 hover:text-yellow-600">
            About Us
          </Link>
        </div>

        {/* Right Side: Search Bar and Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search..."
            className="hidden lg:block px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-yellow-500"
            style={{ width: '250px' }} // Longer search bar
          />

          {/* Icons */}
          <div className="flex items-center space-x-4 ml-auto"> {/* Shift icons towards right */}
            {/* Profile Icon with Clickable Dropdown */}
            <div className="relative">
              <div 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown();
                }}
                className="text-gray-600 hover:text-yellow-600 cursor-pointer"
              >
                <FiUser size={20} /> {/* Profile Icon */}
              </div>
              {isDropdownOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                  <Link to="/login" className="block px-4 py-2 text-blue-600 font-semibold hover:bg-gray-100">Login / SignUp</Link> {/* Use Link instead of a tag */}
                  <Link to="/orders" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Orders</Link>
                  <Link to="/wishlist" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Wishlist</Link>
                  <Link to="/coupons" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Coupons</Link>
                  <Link to="/customer-care" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Customer Care</Link>
                </div>
              )}
            </div>

            {/* Cart Icon */}
            <Link to="/cart" className="text-gray-600 hover:text-yellow-600">
              <FiShoppingCart size={20} />
            </Link>

            {/* Wishlist Icon */}
            <Link to="/wishlist" className="text-gray-600 hover:text-yellow-600">
              <FiHeart size={20} />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button className="text-gray-600 hover:text-yellow-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

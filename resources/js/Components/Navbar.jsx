import React, { useState } from 'react';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import { Link, Head } from '@inertiajs/react';
import CategoryNav from './CategoryNav';
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
    <nav className="bg-blue-600 py-2 w-full">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-white text-2xl font-bold hover:text-yellow-500 transition duration-300">
            Asli Flipkart
          </a>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-4">
          <div className="relative w-full">
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Search for products, brands and more"
            />
            <button className="absolute right-0 top-0 h-full bg-yellow-500 px-6 text-white font-semibold rounded-md hover:bg-yellow-600 transition duration-300">
              Search
            </button>
          </div>
        </div>

        {/* User Options */}
        <div className="hidden md:flex items-center space-x-4">
          <a href={route('login')} className="text-white font-medium hover:text-yellow-500 transition duration-300">
            Login
          </a>
          <a href="#" className="text-white font-medium relative hover:text-yellow-500 transition duration-300">
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
            <FaShoppingCart className="inline-block mr-1" /> Cart
          </a>
        </div>

        {/* Hamburger Menu (Mobile View) */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FaBars className="text-white text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4">
          <div className="flex flex-col space-y-2 py-2">
            <a href="#" className="text-white font-medium hover:text-yellow-500 transition duration-300">
              More
            </a>
            <Link
                                            href={route('login')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Log in
                                        </Link>
            <a href="#" className="text-white font-medium relative hover:text-yellow-500 transition duration-300">
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
              <FaShoppingCart className="inline-block mr-1" /> Cart
            </a>
          </div>
        </div>
      )}
    </nav>
    <CategoryNav />
   </>
  );
}

export default Navbar;

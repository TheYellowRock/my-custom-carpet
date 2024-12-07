'use client'
import { useState } from "react";
import Link from "next/link";
import {
  ShoppingCartIcon,
  XMarkIcon,
  MinusIcon,
} from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white w-screen shadow">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/">
          <img
            src="https://cdn.shopify.com/s/files/1/0768/3463/6043/files/WhatsApp_Image_2024-12-02_at_12.49.43_fe42876a.jpg?v=1733525240"
            alt="Logo"
            className="h-32 w-auto cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-700 text-lg font-sans">
          <Link href="/home">What?</Link>
          <Link href="/about">How?</Link>
          <Link href="/services">Order It</Link>
          <Link
            href="/cart"
            className="relative flex items-center text-gray-700 hover:text-gray-900 font-sans"
          >
            <ShoppingCartIcon className="h-6 w-6" />
            <span className="absolute -top-1 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
              3
            </span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <MinusIcon className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white transform transition-transform duration-300 ease-in-out z-20 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="container mx-auto px-4 py-5">
          {/* Close Button */}
          <div className="flex justify-between items-center mb-8">
            <Link href="/">
              <img
                src="https://cdn.shopify.com/s/files/1/0768/3463/6043/files/WhatsApp_Image_2024-10-15_at_13.06.00_16aa87e9.jpg?v=1729053237"
                alt="Logo"
                className="h-16 w-auto cursor-pointer"
              />
            </Link>
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              <XMarkIcon className="h-8 w-8" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav>
            <ul className="flex flex-col space-y-6 text-gray-700 text-lg font-sans">
              <li>
                <Link href="/home" onClick={toggleMenu}>
                  What?
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={toggleMenu}>
                  How?
                </Link>
              </li>
              <li>
                <Link href="/services" onClick={toggleMenu}>
                  Order It
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  onClick={toggleMenu}
                  className="flex items-center font-sans"
                >
                  <ShoppingCartIcon className="h-6 w-6 mr-2" />
                  <span>Cart (3)</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

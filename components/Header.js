import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="text-2xl font-bold">
          Maui Microgreens
        </a>
        <nav>
          <a href="/" className="text-white hover:text-gray-200 px-3">
            Home
          </a>
          <a href="/services" className="text-white hover:text-gray-200 px-3">
            Services
          </a>
          <a href="/about" className="text-white hover:text-gray-200 px-3">
            About
          </a>
          <a href="/contact" className="text-white hover:text-gray-200 px-3">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

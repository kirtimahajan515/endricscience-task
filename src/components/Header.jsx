import React, { useState } from "react";
import logo2 from "../assets/logo.png";
import search2 from "../assets/search2.jpg";

const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-500 text-white shadow-md h-32">
      {/* Top Section */}
      <div 
       style={{padding: "0px 80px"}}
       className="flex items-center justify-between px-6 py-4 md:px-12 h-1/2">
        {/* --- Logo --- */}
        <div className="flex items-center space-x-3 gap-3">
          <img src={logo2} alt="EndricScience Logo" className="h-10 text-blue-500" />
          <h1 className="font-bold text-xl md:text-3xl">Endricscience</h1>
        </div>

       {/* ---- search bar ---- */}
        <div className="hidden md:flex items-center bg-blue-50 text-gray-700 rounded-full w-fit max-w-md h-9 px-4">
          <input
            type="text"
            placeholder="SEARCH"
            className="flex-grow focus:outline-none "
            style={{paddingLeft: "2rem"}}
          />

          <img
            src={search2}
            alt="Search"
            className="w-8 h-8 rounded-full cursor-pointer"
            style={{marginRight: "1rem"}}
          />

        </div>

        {/* ----- hamburger menu ----- */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 bg-blue-600 rounded focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="flex flex-col gap-1">
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span> 
          </div>
        </button>
      </div>

      {/*---- Navigation Links ----- */}
      <nav
        style={{padding: "0px 80px"}}
        className={`bg-blue-800 h-1/2 md:flex md:items-center md:justify-between px-6 py-3 md:px-12 transition-all duration-300 ${
          isMenuOpen ? "block" : "hidden"
        } md:block`}
      >
       
      <div className="flex flex-col gap-8 md:flex-row space-y-2 md:space-y-0 md:space-x-8 mb-2 md:mb-0">
          <a href="#home" className="hover:text-gray-300">
            Home
          </a>
          <a href="#journals" className="hover:text-gray-300">
            Our Journals
          </a>
          <a href="#policies" className="hover:text-gray-300">
            Editorial Policies
          </a>
          <a href="#about" className="hover:text-gray-300">
            About Us
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contact Us
          </a>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-5 md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <button className="w-full md:w-24 h-8 bg-blue-100 rounded-2xl text-black  py-1 hover:bg-white hover:text-blue-500">
            LOG IN
          </button>
          <button className="w-full md:w-24 bg-blue-100 text-black rounded-2xl py-1 hover:bg-white hover:text-blue-500">
            SIGN IN
          </button>
        </div>
      </nav>
    </header>
  );
};

 export default Header;


















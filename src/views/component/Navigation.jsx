import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => (
    <nav className="bg-[#1F205D] text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ul className="flex justify-between md:justify-start md:space-x-8 overflow-x-auto">
          <li className="whitespace-nowrap cursor-pointer hover:text-[#F27C22] transition-colors">About Us</li>
          <Link to='/rssretail' className="whitespace-nowrap cursor-pointer hover:text-[rgb(242,124,34)] transition-colors">RSS Retail</Link>
          <Link to='/rsswholesale' className="whitespace-nowrap cursor-pointer hover:text-[#F27C22] transition-colors">RSS Wholesales</Link>
        </ul>
      </div>
    </nav>
);

export default Navigation
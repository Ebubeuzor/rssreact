import { Search } from 'lucide-react';
import React from 'react'

const SearchBar = () => (
    <div className="w-full bg-white">
      <div className="container mx-auto px-4 py-6 w-3/6 max-md:w-full">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-3 rounded-full border-2 border-[#1F205D] focus:outline-none focus:border-[#F27C22] transition-colors"
          />
          <Search className="absolute cursor-pointer right-4 top-3 text-[#1F205D]" />
        </div>
      </div>
    </div>
);

export default SearchBar
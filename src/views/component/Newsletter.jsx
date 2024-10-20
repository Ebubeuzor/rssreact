import React from 'react'

const Newsletter = () => (
  <div className="w-full text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Subscribe to Our Newsletter</h2>
        <div className="flex  border-2 border-black">
          <input
            type="email"
            placeholder="Enter your email" 
            className="flex-grow px-4 py-2 rounded-l focus:outline-none text-[#1F205D]"
          />
          <button className="bg-[#F27C22] text-white px-6 py-2 rounded-r hover:bg-[#F27C22]/80 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Newsletter
import React from 'react'
import herobanner from '../../assets/images/herobanner.avif'

const HeroSection = () => (
  <div className="relative h-64 md:h-96 bg-gray-200 w-full">
    <img 
      src={herobanner}
      alt="Hero Banner" 
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40">
      <h1 className="text-white text-4xl md:text-6xl font-bold text-center mb-4">Fresh & Delicious</h1>
      <p className="text-white text-xl md:text-2xl text-center">Experience the finest flavors with our premium selection</p>
    </div>
  </div>
);

export default HeroSection;
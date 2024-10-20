import React from 'react'
import herobanner from '../../assets/images/herobanner.avif'

const HeroSection = () => (
<div className="relative h-64 md:h-96 bg-gray-200 w-full">
    <img 
      src={herobanner} 
      alt="Hero Banner" 
      className="w-full h-full object-cover"  // Use object-cover to maintain aspect ratio
    />
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
    <h2 className="text-white text-3xl md:text-5xl font-bold">Welcome to RSS Foods</h2>
    </div>
</div>
);

export default HeroSection
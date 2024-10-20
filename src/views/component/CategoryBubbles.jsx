import React from 'react'
import LoadingSpinner from './LoadingSpinner';
import { useNavigate } from 'react-router-dom';

const CategoryBubbles = ({ categories, isLoading }) => {
  if (isLoading) return <LoadingSpinner />;
  const navigate = useNavigate();

  const moveToAnotherPage = (page) => {
    navigate(`/${page}`);
  }

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-around overflow-x-auto">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#F27C22] text-white hover:bg-[#1F205D] transition-colors flex items-center justify-center mx-2 cursor-pointer"
            >
              <span className="text-sm text-center" onClick={() => moveToAnotherPage("category/1")}>{category}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryBubbles
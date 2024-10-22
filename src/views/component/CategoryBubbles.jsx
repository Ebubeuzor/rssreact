import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

const CategoryBubbles = ({ categories, isLoading }) => {
  if (isLoading) return <LoadingSpinner />;
  const navigate = useNavigate();

  const moveToAnotherPage = (page) => {
    navigate(`/${page}`);
  };

  return (
    <div className="w-full bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Shop by Category</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl">
            {categories.map((category, index) => (
              <div
                key={index}
                onClick={() => moveToAnotherPage(`category/${index + 1}`)}
                className="relative group cursor-pointer"
              >
                <div 
                  className="w-full h-40 rounded-lg overflow-hidden"
                >
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300">
                    <div className="h-full w-full flex items-center justify-center">
                      <span className="text-white text-lg font-medium px-2 text-center">
                        {category.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBubbles;
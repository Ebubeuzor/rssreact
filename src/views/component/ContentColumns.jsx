import React from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

const ContentColumns = ({ content, isLoading }) => {
  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {Object.entries(content).map(([category, items]) => (
            <div key={category} className="bg-gray-100 p-4 rounded">
              <h2 className="text-xl font-bold mb-3 capitalize">{category}</h2>
              <ul>
                {items.map((item, index) => (
                  <li key={index} className="mb-2">
                    <Link
                      to={`/${category.toLowerCase()}/${index + 1}`}
                      className="text-blue-600 hover:underline"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to={`/${category.toLowerCase()}`}
                className="text-blue-600 text-sm hover:underline mt-2 block"
              >
                See More...
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentColumns;
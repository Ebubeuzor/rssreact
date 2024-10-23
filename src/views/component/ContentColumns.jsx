import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ChefHat, Video, Book } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';

const ContentColumns = ({ content, isLoading }) => {
  if (isLoading) return <LoadingSpinner />;

  const categoryConfig = {
    blog: {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Food & Nutrition Blog",
      description: "Expert insights on healthy eating and lifestyle",
      color: 'group-hover:text-orange-600',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'
    },
    recipes: {
      icon: <ChefHat className="w-5 h-5" />,
      title: "Curated Recipes",
      description: "Step-by-step guides to delicious meals",
      color: 'group-hover:text-indigo-600',
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352'
    },
    videos: {
      icon: <Video className="w-5 h-5" />,
      title: "Video Tutorials",
      description: "Watch and learn cooking techniques",
      color: 'group-hover:text-orange-600',
      image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb'
    },
    ebooks: {
      icon: <Book className="w-5 h-5" />,
      title: "Digital Resources",
      description: "Comprehensive guides and ebooks",
      color: 'group-hover:text-indigo-600',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570'
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explore Our Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover a wealth of culinary knowledge through our carefully curated content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(content).map(([category, items]) => {
            const config = categoryConfig[category.toLowerCase()];
            return (
              <div key={category} className="group">
                <div className="bg-white rounded-xl shadow-sm transition-all duration-200 hover:shadow-md overflow-hidden h-full flex flex-col">
                  {/* Header */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors duration-200">
                        <span className={`${config.color} transition-colors duration-200`}>
                          {config.icon}
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-900">
                        {config.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      {config.description}
                    </p>
                  </div>

                  {/* Content List */}
                  <div className="flex-grow p-6">
                    <ul className="space-y-4">
                      {items.slice(0, 3).map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="h-1.5 w-1.5 rounded-full bg-gray-300 mt-2 mr-3"></div>
                          <span className="text-gray-700 text-sm">
                          <Link
                            to={`/${category.toLowerCase()}/${index + 1}`}
                            className="text-blue-600 hover:underline"
                          >
                            {item}
                          </Link>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer */}
                  <div className="p-6 pt-0">
                    <Link
                      to={`/${category.toLowerCase()}`}
                      className="inline-flex items-center justify-center w-full px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
                    >
                      View All {config.title}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContentColumns;
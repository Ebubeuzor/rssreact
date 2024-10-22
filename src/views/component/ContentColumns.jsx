import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ChefHat, Video, Book } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';

const ContentColumns = ({ content, isLoading }) => {
  if (isLoading) return <LoadingSpinner />;

  const categoryConfig = {
    blog: {
      icon: <BookOpen className="w-6 h-6" />,
      color: 'bg-orange-600',
      hoverColor: 'hover:bg-indigo-900',
      lightColor: 'bg-orange-50',
      iconBg: 'bg-white/10',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'
    },
    recipes: {
      icon: <ChefHat className="w-6 h-6" />,
      color: 'bg-indigo-900',
      hoverColor: 'hover:bg-orange-600',
      lightColor: 'bg-slate-50',
      iconBg: 'bg-white/10',
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352'
    },
    videos: {
      icon: <Video className="w-6 h-6" />,
      color: 'bg-orange-600',
      hoverColor: 'hover:bg-indigo-900',
      lightColor: 'bg-orange-50',
      iconBg: 'bg-white/10',
      image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb'
    },
    ebooks: {
      icon: <Book className="w-6 h-6" />,
      color: 'bg-indigo-900',
      hoverColor: 'hover:bg-orange-600',
      lightColor: 'bg-slate-50',
      iconBg: 'bg-white/10',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570'
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Resources & Content</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(content).map(([category, items]) => {
          const config = categoryConfig[category.toLowerCase()];
          return (
            <div key={category} className="flex flex-col">
              <div className={`rounded-t-lg ${config.color} p-6 text-white`}>
                <div className={`${config.iconBg} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                  {config.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{category}</h3>
                <ul className="space-y-2">
                  {items.slice(0, 3).map((item, index) => (
                    <li key={index} className="text-sm">
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to={`/${category.toLowerCase()}`}
                className={`text-center py-3 ${config.lightColor} ${config.hoverColor} hover:text-white transition-colors duration-300 rounded-b-lg font-medium`}
              >
                View All {category}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContentColumns;
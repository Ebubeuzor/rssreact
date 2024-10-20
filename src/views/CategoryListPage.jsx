import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';

const CategoryListPage = () => {
  const { category } = useParams();

  const contentColumns = {
    blog: ['How to Eat Healthy', '10 Best Superfoods', 'Meal Prep Guide'],
    recipes: ['Easy Pasta', 'Vegan Smoothie', 'Grilled Chicken'],
    videos: ['Cooking Basics', 'Kitchen Tips', 'Recipe Reviews'],
    ebooks: ['Beginner\'s Cookbook', 'Nutrition Guide', 'Meal Planning']
  };

  const items = contentColumns[category] || [];

  return (

    <>
        <Header/>

        <div className="max-w-4xl min-h-screen mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 capitalize">{category}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{item}</h2>
                <Link 
                    to={`/${category.toLowerCase()}/${index + 1}`}
                    className="text-blue-600 hover:underline"
                >
                    Read More
                </Link>
                </div>
            </div>
            ))}
        </div>
        </div>
        
        <Footer/>
    </>
  );
};

export default CategoryListPage;
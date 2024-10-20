import React, { useEffect, useState } from 'react'
import LoadingSpinner from './component/LoadingSpinner';
import Header from './component/header';
import Footer from './component/Footer';
import { useNavigate } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';

const CategoryPage = () => {
    const [categoryData, setCategoryData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState('Foods');
    
    const navigate = useNavigate();

    const productPage = (id) => {
        navigate(`/productPage/${id}`)
    }
    
    const fetchCategoryData = (category) => {
        return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                description: `Welcome to RSS ${category}. Find the best selection of ${category.toLowerCase()} products.`,
                products: Array(8).fill().map((_, i) => ({
                    id: i + 1,
                    name: `${category} Product ${i + 1}`,
                    price: (19000.99 + i).toFixed(2),
                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPX72zRye0yKp_n8EXUUkyJ54fn-lsfwwzY_y5uvjg241pHEEgV6UbsJK4iraOf2BZYQ&usqp=CAU',
                    rating: 4 + (i % 2) * 0.5,
                    reviews: 50 + i * 10
                }))
            });
        }, 1000);
        });
    };

    useEffect(() => {
      fetchCategoryData(activeCategory).then(data => {
        setCategoryData(data);
        setIsLoading(false);
      });
    }, [activeCategory]);
  
    if (isLoading) return <LoadingSpinner />;
    if (!categoryData) return <div>Error loading category</div>;
  
    return (
       <>
        <Header/>
        <main className="bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
                <div className="max-w-2xl mx-auto text-center mb-6">
                    <h1 className="text-2xl sm:text-3xl font-bold text-[#1F205D] mb-2">
                        {activeCategory}
                    </h1>
                    <p className="text-sm sm:text-base text-gray-600">{categoryData.description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {categoryData.products.map(product => (
                    <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow duration-300">
                        <div className="relative">
                            <img 
                                onClick={() => productPage(product.id)} 
                                src={product.image} 
                                alt={product.name} 
                                className="w-full h-40 object-cover cursor-pointer" 
                            />
                            <button className="absolute top-2 right-2 bg-[#F27C22] text-white p-1.5 rounded-full hover:bg-[#1F205D] transition-colors duration-300">
                                <ShoppingCart size={16} />
                            </button>
                        </div>
                        <div className="p-3">
                            <h3 
                                onClick={() => productPage(product.id)}  
                                className="font-semibold text-sm mb-1 cursor-pointer hover:text-[#F27C22] transition-colors duration-300 line-clamp-2"
                            >
                                {product.name}
                            </h3>
                            <div className="flex items-center mb-2">
                                <Star className="text-yellow-400 fill-current" size={14} />
                                <span className="ml-1 text-xs text-gray-600">
                                    {product.rating} ({product.reviews})
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-[#1F205D] font-bold text-sm">₦{product.price}</p>
                                <button className="bg-[#F27C22] text-white px-3 py-1 rounded text-sm hover:bg-[#1F205D] transition-colors duration-300">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </main>
        <Footer/>
       </> 
    );
};

export default CategoryPage
import React, { useState } from 'react';
import { ShoppingCart, Search } from 'lucide-react';
import Header from './component/Header';
import Footer from './component/Footer';
import { useNavigate } from 'react-router-dom';

const categories = ['Dry Food', 'Frozen Food', 'Dried Veggies'];

const products = [
  { id: 1, name: 'Rice', category: 'Dry Food', price: 2500, image: 'https://www.health.com/thmb/AcaOIOijkWe2IaNA13jnRHlMPuM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1734160670-0157c2daf8e841d6a783b38aedc51aa8.jpg' },
  { id: 2, name: 'Beans', category: 'Dry Food', price: 1800, image: 'https://c7.alamy.com/comp/2KFBXRB/brown-beans-pinto-beans-nigerian-oloyin-beans-top-view-of-beans-2KFBXRB.jpg' },
  { id: 3, name: 'Frozen Fish', category: 'Frozen Food', price: 3500, image: 'https://thehealthyfish.com/wp-content/uploads/2016/08/frozentilapiafishmyths_1280px_728904722cfe4b608df1234aefd6fb04.jpeg' },
  { id: 4, name: 'Frozen Chicken', category: 'Frozen Food', price: 4000, image: 'https://i0.wp.com/media.premiumtimesng.com/wp-content/files/2014/11/frozen-chicken.jpg?fit=710%2C533&ssl=1' },
  { id: 5, name: 'Dried Tomatoes', category: 'Dried Veggies', price: 1200, image: 'https://veganwithgusto.com/wp-content/uploads/2022/08/sun-dried-tomatoes-in-bowl.jpg' },
  { id: 6, name: 'Dried Peppers', category: 'Dried Veggies', price: 1000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTy2a5OfyD9P2oxoXdgZ6DMSA423kuOQAUiw&s' },
];

const RSSRetailPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const productPage = (id) => {
    navigate(`/productPage/${id}`)
  }

  return (
    <>
      <Header/>
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">RSS Retail</h1>
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
          <div className="flex flex-wrap gap-2">
            <button 
              className={`px-4 py-2 rounded text-sm ${selectedCategory === 'All' ? 'bg-[#F27C22] text-white' : 'bg-gray-200'}`}
              onClick={() => setSelectedCategory('All')}
            >
              All
            </button>
            {categories.map(category => (
              <button 
                key={category}
                className={`px-4 py-2 rounded text-sm ${selectedCategory === category ? 'bg-[#F27C22] text-white' : 'bg-gray-200'}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="w-full sm:w-auto">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search products..." 
                className="w-full sm:w-64 pl-10 pr-4 py-2 border rounded-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg">
              <img src={product.image} onClick={() => productPage(product.id)} alt={product.name} className="w-full h-48 object-cover cursor-pointer" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 cursor-pointer" onClick={() => productPage(product.id)}>{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.category}</p>
                <p className="text-blue-600 font-bold">₦{product.price.toLocaleString()}</p>
                <button className="mt-4 w-full bg-[#F27C22] text-white py-2 rounded hover:bg-blue-600 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default RSSRetailPage;
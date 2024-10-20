import React, { useState } from 'react';
import { Search, TruckIcon } from 'lucide-react';
import Header from './component/header';
import Footer from './component/Footer';
import { useNavigate } from 'react-router-dom';

const categories = ['Dry Food', 'Frozen Food', 'Dried Veggies'];

const products = [
  { id: 1, name: 'Rice (50kg bag)', category: 'Dry Food', price: 25000, image: 'https://www.health.com/thmb/AcaOIOijkWe2IaNA13jnRHlMPuM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1734160670-0157c2daf8e841d6a783b38aedc51aa8.jpg', minOrder: 10 },
  { id: 2, name: 'Beans (100kg bag)', category: 'Dry Food', price: 45000, image: 'https://c7.alamy.com/comp/2KFBXRB/brown-beans-pinto-beans-nigerian-oloyin-beans-top-view-of-beans-2KFBXRB.jpg', minOrder: 5 },
  { id: 3, name: 'Frozen Fish (20kg box)', category: 'Frozen Food', price: 35000, image: 'https://thehealthyfish.com/wp-content/uploads/2016/08/frozentilapiafishmyths_1280px_728904722cfe4b608df1234aefd6fb04.jpeg', minOrder: 5 },
  { id: 4, name: 'Frozen Chicken (25kg box)', category: 'Frozen Food', price: 40000, image: 'https://i0.wp.com/media.premiumtimesng.com/wp-content/files/2014/11/frozen-chicken.jpg?fit=710%2C533&ssl=1', minOrder: 5 },
  { id: 5, name: 'Dried Tomatoes (10kg bag)', category: 'Dried Veggies', price: 12000, image: 'https://veganwithgusto.com/wp-content/uploads/2022/08/sun-dried-tomatoes-in-bowl.jpg', minOrder: 10 },
  { id: 6, name: 'Dried Peppers (10kg bag)', category: 'Dried Veggies', price: 10000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTy2a5OfyD9P2oxoXdgZ6DMSA423kuOQAUiw&s', minOrder: 10 },
];

const RSSWholesalePage = () => {
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
        <h1 className="text-3xl font-bold mb-8">RSS Wholesale</h1>
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
          <div className="flex flex-wrap gap-2">
            <button 
              className={`px-4 py-2 rounded text-sm ${selectedCategory === 'All' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setSelectedCategory('All')}
            >
              All
            </button>
            {categories.map(category => (
              <button 
                key={category}
                className={`px-4 py-2 rounded text-sm ${selectedCategory === category ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
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
              <img src={product.image} onClick={() => productPage(product.id)} alt={product.name} className="w-full cursor-pointer h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 cursor-pointer" onClick={() => productPage(product.id)}>{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.category}</p>
                <p className="text-green-600 font-bold">₦{product.price.toLocaleString()}</p>
                <p className="text-sm text-gray-500 mt-2">Minimum Order: {product.minOrder} units</p>
                <button className="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <TruckIcon className="mr-2" /> Bulk Order Information
          </h2>
          <p className="mb-2">For large wholesale orders, please contact our sales team:</p>
          <p className="font-bold">Phone: +234 123 456 7890</p>
          <p className="font-bold">Email: wholesale@rssfoods.com</p>
        </div>
      </div>
    
      <Footer/>
    </>
  );
};

export default RSSWholesalePage;
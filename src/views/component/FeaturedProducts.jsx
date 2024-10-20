import React from 'react'
import LoadingSpinner from './LoadingSpinner';
import { useNavigate } from 'react-router-dom';

const FeaturedProducts = ({ products, isLoading }) => {
  if (isLoading) return <LoadingSpinner />;
  
  const navigate = useNavigate();

  const productPage = (id) => {
    navigate(`/productPage/${id}`)
  }

  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h2 className="text-2xl font-bold mb-4 text-[#1F205D]">Featured Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map(product => (
            <div key={product.id} onClick={() => productPage(product.id)} className="bg-white cursor-pointer p-4 rounded shadow hover:shadow-lg transition-shadow">
              <div className="h-32 rounded mb-2">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />   
              </div>
              <h3 className="font-semibold text-[#1F205D]">{product.title}</h3>
              <p className="text-[#F27C22] font-bold">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts
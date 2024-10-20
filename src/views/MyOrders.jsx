import React, { useState, useEffect } from 'react';
import Header from './component/header';
import Footer from './component/Footer';
import LoadingSpinner from './component/LoadingSpinner';

export default function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with setTimeout
    setTimeout(() => {
      // Placeholder data with image URLs
      setOrders([
        { 
          id: 1, 
          date: '2024-10-01', 
          total: 99000, 
          status: 'Delivered',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPX72zRye0yKp_n8EXUUkyJ54fn-lsfwwzY_y5uvjg241pHEEgV6UbsJK4iraOf2BZYQ&usqp=CAU' // Using placeholder image
        },
        { 
          id: 2, 
          date: '2024-10-05', 
          total: 14900, 
          status: 'Processing',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPX72zRye0yKp_n8EXUUkyJ54fn-lsfwwzY_y5uvjg241pHEEgV6UbsJK4iraOf2BZYQ&usqp=CAU' // Using placeholder image
        },
      ]);
      setLoading(false);
    }, 1000); // Simulate 1 second loading time
  }, []);

  return (
    <>
      <Header/>
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">My Orders</h2>
        {loading ? (
          <LoadingSpinner />
        ) : (
          orders.length > 0 ? (
            orders.map(order => (
              <div key={order.id} className="flex items-center border-b border-gray-200 py-4">
                <img 
                  src={order.image} 
                  alt={`Order ${order.id}`} 
                  className="w-20 h-20 object-cover rounded-md mr-4"
                />
                <div>
                  <p className="font-semibold">Order #{order.id}</p>
                  <p className="text-sm text-gray-600">Date: {order.date}</p>
                  <p className="text-sm text-gray-600">Total: ₦{order.total.toFixed(2)}</p>
                  <p className="text-sm">
                    Status: 
                    <span className={`ml-1 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No orders found.</p>
          )
        )}
      </div>
      <Footer/>
    </>
  );
}
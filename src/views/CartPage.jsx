import React, { useEffect, useState } from 'react'
import Header from './component/header';
import LoadingSpinner from './component/LoadingSpinner';
import { Minus, Plus } from 'lucide-react';
import Footer from './component/Footer';

const CartPage = () => {
    const [cartData, setCartData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
  
    const fetchCartData = () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              items: [
                { id: 1, name: 'Organic Vegetables Box', price: 29000.99, quantity: 2, image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPX72zRye0yKp_n8EXUUkyJ54fn-lsfwwzY_y5uvjg241pHEEgV6UbsJK4iraOf2BZYQ&usqp=CAU' },
                { id: 2, name: 'Fresh Fruit Basket', price: 24000.99, quantity: 1, image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPX72zRye0yKp_n8EXUUkyJ54fn-lsfwwzY_y5uvjg241pHEEgV6UbsJK4iraOf2BZYQ&usqp=CAU' },
                { id: 3, name: 'Whole Grain Bread', price: 4000.99, quantity: 3, image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPX72zRye0yKp_n8EXUUkyJ54fn-lsfwwzY_y5uvjg241pHEEgV6UbsJK4iraOf2BZYQ&usqp=CAU' },
                { id: 4, name: 'Whole Grain Bread', price: 4000.99, quantity: 3, image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPX72zRye0yKp_n8EXUUkyJ54fn-lsfwwzY_y5uvjg241pHEEgV6UbsJK4iraOf2BZYQ&usqp=CAU' },
                { id: 5, name: 'Whole Grain Bread', price: 4000.99, quantity: 3, image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPX72zRye0yKp_n8EXUUkyJ54fn-lsfwwzY_y5uvjg241pHEEgV6UbsJK4iraOf2BZYQ&usqp=CAU' },
              ],
              summary: {
                subtotal: 94000.95,
                shipping: 5000.99,
                taxPercentage: 0.1,
                tax: 8000.55,
                total: 109000.49
              }
            });
          }, 1000);
        });
    };      

    const calculateSummary = (items) => {
        const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const shipping = cartData.summary.shipping;
        const tax = subtotal * cartData.summary.taxPercentage;
        const total = subtotal + shipping + tax;
        return { subtotal, shipping, tax, total };
    };

    const handleIncreaseQuantity = (id) => {
        const updatedItems = cartData.items.map(item => 
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        const updatedSummary = calculateSummary(updatedItems);
        setCartData({ items: updatedItems, summary: updatedSummary });
    };

    const handleDecreaseQuantity = (id) => {
        const updatedItems = cartData.items.map(item =>
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        );
        const updatedSummary = calculateSummary(updatedItems);
        setCartData({ items: updatedItems, summary: updatedSummary });
    };

    useEffect(() => {
      fetchCartData().then(data => {
        setCartData(data);
        setIsLoading(false);
      });
    }, []);
  
    if (isLoading) return <LoadingSpinner />;
    if (!cartData) return <div>Error loading cart</div>;
  
    return (
        <>
            <Header/>

            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    {cartData.items.map(item => (
                    <div key={item.id} className="flex items-center border-b py-4">
                        <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
                        <div className="ml-4 flex-grow">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-gray-600">₦{item.price.toFixed(2)}</p>
                        <div className="flex items-center mt-2">
                            <button className="p-1" onClick={() => handleDecreaseQuantity(item.id)}><Minus size={16} /></button>
                            <span className="mx-2">{item.quantity}</span>
                            <button className="p-1" onClick={() => handleIncreaseQuantity(item.id)}><Plus size={16} /></button>
                        </div>
                        </div>
                        <div className="text-right">
                        <p className="font-semibold">₦{(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                    </div>
                    ))}
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                    <div className="space-y-2">
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>₦{cartData.summary.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>₦{cartData.summary.shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Tax</span>
                        <span>₦{cartData.summary.tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t pt-2 mt-2">
                        <div className="flex justify-between font-semibold">
                        <span>Total</span>
                        <span>₦{cartData.summary.total.toFixed(2)}</span>
                        </div>
                    </div>
                    </div>
                    <button className="w-full bg-[#1F205D] text-white py-3 rounded-lg mt-6">
                    Proceed to Checkout
                    </button>
                </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default CartPage
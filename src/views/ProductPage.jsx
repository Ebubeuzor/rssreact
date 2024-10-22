import React, { useEffect, useState } from 'react';
import { ArrowLeft, Heart, ChevronDown, Mail } from 'lucide-react';
import Header from './component/Header';
import Footer from './component/Footer';
import LoadingSpinner from './component/LoadingSpinner';
import Newsletter from './component/Newsletter';

const ProductPage = () => {
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');
    const [email, setEmail] = useState('');
    
    const sizes = ['1kg', '2kg', '5kg', '10kg', '25kg'];

    const fetchProductData = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    id: 1,
                    name: 'Premium Organic Rice',
                    price: 29000.99,
                    description: 'Premium quality organic rice sourced from the finest farms.',
                    images: [
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPX72zRye0yKp_n8EXUUkyJ54fn-lsfwwzY_y5uvjg241pHEEgV6UbsJK4iraOf2BZYQ&usqp=CAU',
                        'https://4.imimg.com/data4/YB/HG/ANDROID-46803775/product-1000x1000.jpeg',
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPX72zRye0yKp_n8EXUUkyJ54fn-lsfwwzY_y5uvjg241pHEEgV6UbsJK4iraOf2BZYQ&usqp=CAU',
                    ],
                    category: 'Grains',
                    inStock: true,
                    nutritionalFacts: {
                        calories: '130 per 100g',
                        protein: '2.7g',
                        carbohydrates: '28g',
                        fat: '0.3g',
                        fiber: '0.4g'
                    },
                    ingredients: ['100% Organic Rice'],
                    usage: 'Wash thoroughly before cooking. Use 2 cups of water for 1 cup of rice.',
                    relatedProducts: [
                        { 
                            id: 2, 
                            name: 'Brown Rice', 
                            price: 24000.99, 
                            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpL9oT2oL8DpVV18MpJBcTWpCeVFUay68rzA&s' 
                        },
                        { 
                            id: 3, 
                            name: 'Basmati Rice', 
                            price: 34000.99, 
                            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpL9oT2oL8DpVV18MpJBcTWpCeVFUay68rzA&s' 
                        }
                    ],
                    recentlyViewed: [
                        { 
                            id: 4, 
                            name: 'Jasmine Rice', 
                            price: 31000.99, 
                            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpL9oT2oL8DpVV18MpJBcTWpCeVFUay68rzA&s' 
                        },
                        { 
                            id: 5, 
                            name: 'Wild Rice', 
                            price: 39000.99, 
                            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpL9oT2oL8DpVV18MpJBcTWpCeVFUay68rzA&s' 
                        }
                    ]
                });
            }, 1000);
        });
    };

    useEffect(() => {
        fetchProductData().then(data => {
            setProduct(data);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) return <LoadingSpinner />;
    if (!product) return <div>Error loading product</div>;

    const handleSubscribe = (e) => {
        e.preventDefault();
        console.log('Subscribe:', email);
        setEmail('');
    };

    return (
        <>
            <Header />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Breadcrumb */}
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
                    <a href="/" className="hover:text-[#1F205D]">Home</a>
                    <span>/</span>
                    <a href="/category" className="hover:text-[#1F205D]">{product.category}</a>
                    <span>/</span>
                    <span className="text-[#1F205D]">{product.name}</span>
                </div>

                {/* Main Product Section */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Product Images */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative">
                            <img 
                                src={product.images[selectedImage]} 
                                alt={product.name} 
                                className="w-full h-[500px] object-cover rounded-lg"
                            />
                            <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                                <Heart className="w-6 h-6 text-[#F27C22]" />
                            </button>
                        </div>
                        <div className="flex space-x-4 mt-4">
                            {product.images.map((img, index) => (
                                <img 
                                    key={index}
                                    src={img}
                                    alt={`${product.name} ${index + 1}`}
                                    className={`w-24 h-24 object-cover rounded-md cursor-pointer transition 
                                        ${selectedImage === index ? 'ring-2 ring-[#F27C22]' : 'opacity-70 hover:opacity-100'}`}
                                    onClick={() => setSelectedImage(index)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-3xl font-bold text-[#1F205D] mb-4">{product.name}</h1>
                        <div className="flex items-center space-x-4 mb-4">
                            <span className="text-2xl font-bold text-[#1F205D]">₦{product.price.toFixed(2)}</span>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium
                                ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {product.inStock ? 'In Stock' : 'Out of Stock'}
                            </span>
                        </div>

                        {/* Size Selection */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-[#1F205D] mb-2">
                                Select Size
                            </label>
                            <div className="flex flex-wrap gap-3">
                                {sizes.map((size) => (
                                    <button
                                        key={size}
                                        className={`px-4 py-2 rounded-md text-sm font-medium transition
                                            ${selectedSize === size 
                                                ? 'bg-[#F27C22] text-white' 
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity Selection */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-[#1F205D] mb-2">
                                Quantity
                            </label>
                            <div className="flex items-center space-x-3">
                                <button 
                                    className="w-10 h-10 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                >
                                    -
                                </button>
                                <input
                                    type="number"
                                    value={quantity}
                                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                    className="w-20 h-10 border border-gray-300 rounded-md text-center"
                                />
                                <button 
                                    className="w-10 h-10 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                                    onClick={() => setQuantity(quantity + 1)}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Add to Cart Button */}
                        <button className="w-full bg-[#F27C22] text-white py-3 rounded-lg font-semibold hover:bg-[#d66c1a] transition">
                            Add to Cart
                        </button>

                        {/* Product Information Tabs */}
                        <div className="mt-8 border-t pt-8">
                            <div className="flex border-b">
                                <button
                                    className={`px-4 py-2 text-sm font-medium ${
                                        activeTab === 'description' ? 'border-b-2 border-[#F27C22] text-[#F27C22]' : 'text-gray-500'
                                    }`}
                                    onClick={() => setActiveTab('description')}
                                >
                                    Description
                                </button>
                                <button
                                    className={`px-4 py-2 text-sm font-medium ${
                                        activeTab === 'nutrition' ? 'border-b-2 border-[#F27C22] text-[#F27C22]' : 'text-gray-500'
                                    }`}
                                    onClick={() => setActiveTab('nutrition')}
                                >
                                    Nutritional Facts
                                </button>
                                <button
                                    className={`px-4 py-2 text-sm font-medium ${
                                        activeTab === 'usage' ? 'border-b-2 border-[#F27C22] text-[#F27C22]' : 'text-gray-500'
                                    }`}
                                    onClick={() => setActiveTab('usage')}
                                >
                                    Usage
                                </button>
                            </div>
                            <div className="py-4">
                                {activeTab === 'description' && (
                                    <p className="text-gray-600">{product.description}</p>
                                )}
                                {activeTab === 'nutrition' && (
                                    <div className="space-y-2">
                                        {Object.entries(product.nutritionalFacts).map(([key, value]) => (
                                            <div key={key} className="flex justify-between py-2 border-b">
                                                <span className="text-gray-600 capitalize">{key}</span>
                                                <span className="font-medium">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {activeTab === 'usage' && (
                                    <p className="text-gray-600">{product.usage}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-[#1F205D] mb-6">Related Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {product.relatedProducts.map(item => (
                            <div key={item.id} className="border rounded-lg overflow-hidden group">
                                <div className="relative">
                                    <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition" />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-medium text-[#1F205D]">{item.name}</h3>
                                    <p className="text-[#F27C22] font-bold mt-1">₦{item.price.toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recently Viewed */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-[#1F205D] mb-6">Recently Viewed</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {product.recentlyViewed.map(item => (
                            <div key={item.id} className="border rounded-lg overflow-hidden group">
                                <div className="relative">
                                    <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition" />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-medium text-[#1F205D]">{item.name}</h3>
                                    <p className="text-[#F27C22] font-bold mt-1">₦{item.price.toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Newsletter Subscription */}
                <Newsletter />
            </div>

            <Footer />
        </>
    );
};

export default ProductPage;
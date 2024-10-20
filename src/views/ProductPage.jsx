import React, { useEffect, useState } from 'react';
import LoadingSpinner from './component/LoadingSpinner';
import { ArrowLeft, Heart } from 'lucide-react';
import Header from './component/Header';
import Footer from './component/Footer';

const ProductPage = () => {
    
    const fetchProductData = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    id: 1,
                    name: 'Premium Organic Vegetable Box',
                    price: 29000.99,
                    description: 'A carefully curated selection of fresh, organic vegetables delivered straight to your door.',
                    images: [
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPX72zRye0yKp_n8EXUUkyJ54fn-lsfwwzY_y5uvjg241pHEEgV6UbsJK4iraOf2BZYQ&usqp=CAU',
                        'https://4.imimg.com/data4/YB/HG/ANDROID-46803775/product-1000x1000.jpeg',
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPX72zRye0yKp_n8EXUUkyJ54fn-lsfwwzY_y5uvjg241pHEEgV6UbsJK4iraOf2BZYQ&usqp=CAU'
                    ],
                    category: 'Vegetables',
                    inStock: true,
                    rating: 4.5,
                    reviews: 128,
                    details: [
                        'Contains seasonal vegetables',
                        'Certified organic',
                        'Locally sourced when possible',
                        'Recyclable packaging'
                    ],
                    relatedProducts: [
                        { id: 2, name: 'Fruit Basket', price: 24000.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPX72zRye0yKp_n8EXUUkyJ54fn-lsfwwzY_y5uvjg241pHEEgV6UbsJK4iraOf2BZYQ&usqp=CAU' },
                        { id: 3, name: 'Herb Box', price: 19000.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPX72zRye0yKp_n8EXUUkyJ54fn-lsfwwzY_y5uvjg241pHEEgV6UbsJK4iraOf2BZYQ&usqp=CAU' }
                    ]
                });
            }, 1000);
        });
    };

    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(0);
    const [unit, setUnit] = useState(null); // New state for the unit

    useEffect(() => {
        fetchProductData().then(data => {
            setProduct(data);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) return <LoadingSpinner />;
    if (!product) return <div>Error loading product</div>;

    const handleUnitChange = (e) => {
        setUnit(Number(e.target.value));
    };

    return (
        <>
            <Header />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-1/2">
                        <img 
                            src={product.images[selectedImage]} 
                            alt={product.name} 
                            className="w-full h-96 object-cover mb-4"
                        />
                        <div className="flex space-x-2">
                            {product.images.map((img, index) => (
                                <img 
                                    key={index} 
                                    src={img} 
                                    alt={`Thumbnail ${index}`}
                                    onClick={() => setSelectedImage(index)}
                                    className={`w-20 h-20 object-cover cursor-pointer ${selectedImage === index ? 'ring-2 ring-blue-500' : ''}`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 sm:pl-10">
                        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                        <p className="text-gray-700 mb-4">₦{product.price.toFixed(2)}</p>
                        <p className={`mb-4 ${product.inStock ? 'text-green-500' : 'text-red-500'}`}>
                            {product.inStock ? 'In Stock' : 'Out of Stock'}
                        </p>
                        <p className="mb-4">{product.description}</p>

                        {/* Unit selection */}
                        <div className="mb-4">
                            <label htmlFor="unit" className="block text-sm font-medium text-gray-700">
                                Select Quantity:
                            </label>
                            <input 
                                type="number" 
                                id="unit" 
                                value={unit}
                                onChange={handleUnitChange}
                                className="mt-1 block w-20 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            />
                        </div>

                        <p className="text-lg font-bold text-green-600">
                            Total Price: ₦{(product.price * unit).toFixed(2)}
                        </p>

                        <button className="mt-6 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors">
                            Add to Cart
                        </button>

                        <div className="mt-8">
                            <h3 className="text-xl font-semibold">Product Details</h3>
                            <ul className="list-disc ml-5 mt-2">
                                {product.details.map((detail, index) => (
                                    <li key={index} className="text-gray-700">{detail}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {product.relatedProducts.map(relatedProduct => (
                            <div key={relatedProduct.id} className="border rounded-lg overflow-hidden shadow-lg">
                                <img src={relatedProduct.image} alt={relatedProduct.name} className="w-full h-48 object-cover"/>
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg mb-2">{relatedProduct.name}</h3>
                                    <p className="text-green-600 font-bold">₦{relatedProduct.price.toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ProductPage;

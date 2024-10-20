import React, { useState, useEffect } from 'react';

const ProductForm = ({ product, setProduct }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    type: '',
    stock: '',
    images: [],
    minimumUnit: '', // New field for minimum unit
    discountPrice: '', // New field for discount price
  });

  useEffect(() => {
    if (product && Object.keys(product).length > 0) {
      setFormData(product);
    }
  }, [product]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const images = files.map(file => URL.createObjectURL(file));
    setFormData({ ...formData, images });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProduct(formData);
    console.log(formData); // Updated form data including new fields
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      price: '',
      category: '',
      type: '',
      stock: '',
      images: [],
      minimumUnit: '',
      discountPrice: '',
    });
    setProduct(null); // Reset form and cancel editing
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Price</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Category</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Type</label>
        <select
          name="type"
          value={formData.type}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Type</option>
          <option value="Retail">Retail</option>
          <option value="Wholesale">Wholesale</option>
          <option value="Final Users">Final Users</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Stock</label>
        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Minimum Unit Field */}
      <div className="mb-4">
        <label className="block text-gray-700">Minimum Unit</label>
        <input
          type="number"
          name="minimumUnit"
          value={formData.minimumUnit}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Discount Price Field */}
      <div className="mb-4">
        <label className="block text-gray-700">Discount Price</label>
        <input
          type="number"
          name="discountPrice"
          value={formData.discountPrice}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Image Upload */}
      <div className="mb-4">
        <label className="block text-gray-700">Images</label>
        <input
          type="file"
          multiple
          onChange={handleImageChange}
          className="w-full p-2 border rounded"
        />
        {formData.images && formData.images.length > 0 && (
          <div className="mt-4 grid grid-cols-3 gap-2">
            {formData.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product Image ${index + 1}`}
                className="w-full h-24 object-cover rounded"
              />
            ))}
          </div>
        )}
      </div>

      <div className="flex space-x-4">
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          {product && Object.keys(product).length > 0 ? 'Update Product' : 'Save Product'}
        </button>
        <button type="button" onClick={handleCancel} className="bg-gray-400 text-white px-4 py-2 rounded">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProductForm;

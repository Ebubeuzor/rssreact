import React, { useState, useEffect } from 'react';
import AdminLayout from '../component/admin/AdminLayout';
import { Upload, Edit2, Trash2, X } from 'lucide-react';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [editCategory, setEditCategory] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    // Simulate fetching categories with actual food category images
    const fetchCategories = async () => {
      const fetchedCategories = await new Promise((resolve) => 
        setTimeout(() => resolve([
          { 
            id: 1, 
            name: 'Vegetables', 
            image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80'
          },
          { 
            id: 2, 
            name: 'Fruits', 
            image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=800&q=80'
          },
          { 
            id: 3, 
            name: 'Dairy', 
            image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=800&q=80'
          },
          {
            id: 4,
            name: 'Bakery',
            image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80'
          },
          {
            id: 5,
            name: 'Meat',
            image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=800&q=80'
          }
        ]), 1000)
      );
      setCategories(fetchedCategories);
    };
    fetchCategories();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const addCategory = () => {
    const newCategoryObject = {
      id: Date.now(),
      name: newCategory,
      image: previewImage || 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=800&q=80'
    };
    setCategories([...categories, newCategoryObject]);
    resetForm();
  };

  const updateCategory = () => {
    setCategories(categories.map((cat) => 
      cat.id === editCategory.id 
        ? { ...cat, name: newCategory, image: previewImage || cat.image }
        : cat
    ));
    resetForm();
  };

  const deleteCategory = (categoryToDelete) => {
    setCategories(categories.filter((cat) => cat.id !== categoryToDelete.id));
  };

  const resetForm = () => {
    setNewCategory('');
    setEditCategory(null);
    setSelectedImage(null);
    setPreviewImage(null);
  };

  const startEdit = (category) => {
    setEditCategory(category);
    setNewCategory(category.name);
    setPreviewImage(category.image);
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Manage Categories</h2>
        
        {/* Form Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image Upload */}
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 h-48">
              {previewImage ? (
                <div className="relative w-full h-full">
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="w-full h-full object-contain"
                  />
                  <button
                    onClick={() => {
                      setPreviewImage(null);
                      setSelectedImage(null);
                    }}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors duration-200"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center cursor-pointer w-full h-full hover:bg-gray-50 transition-colors duration-200">
                  <Upload size={24} className="text-gray-400 mb-2" />
                  <span className="text-sm text-gray-500">Upload Image</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              )}
            </div>

            {/* Category Name Input and Buttons */}
            <div className="flex flex-col justify-center">
              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="Category Name"
                className="border border-gray-300 p-2 rounded-lg mb-4"
              />
              <div className="flex space-x-2">
                <button 
                  onClick={editCategory ? updateCategory : addCategory}
                  disabled={!newCategory.trim()} 
                  className={`
                    flex-1
                    ${newCategory.trim() ? 'bg-[#F27C22] hover:bg-[#E16C12]' : 'bg-gray-300'}
                    text-white px-4 py-2 rounded-lg transition-colors duration-200
                  `}
                >
                  {editCategory ? 'Update Category' : 'Add Category'}
                </button>
                {(editCategory || newCategory || previewImage) && (
                  <button 
                    onClick={resetForm}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Categories List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              <div className="h-48 bg-gray-100">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{category.name}</h3>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => startEdit(category)}
                      className="p-2 text-blue-500 hover:bg-blue-50 rounded-full transition-colors duration-200"
                      title="Edit"
                    >
                      <Edit2 size={18} />
                    </button>
                    <button 
                      onClick={() => deleteCategory(category)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors duration-200"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Categories;
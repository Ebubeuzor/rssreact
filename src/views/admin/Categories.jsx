import React, { useState, useEffect } from 'react';
import AdminLayout from '../component/admin/AdminLayout';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [editCategory, setEditCategory] = useState(null);

  useEffect(() => {
    // Simulate fetching categories
    const fetchCategories = async () => {
      const fetchedCategories = await new Promise((resolve) => 
        setTimeout(() => resolve(['Vegetables', 'Fruits', 'Dairy']), 1000)
      );
      setCategories(fetchedCategories);
    };
    fetchCategories();
  }, []);

  const addCategory = () => {
    setCategories([...categories, newCategory]);
    setNewCategory('');
  };

  const updateCategory = () => {
    setCategories(categories.map((cat) => (cat === editCategory ? newCategory : cat)));
    setEditCategory(null);
    setNewCategory('');
  };

  const deleteCategory = (categoryToDelete) => {
    setCategories(categories.filter((cat) => cat !== categoryToDelete));
  };

  return (
    <AdminLayout>

        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Manage Categories</h2>
            <div className="mb-4">
                <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="New Category"
                className="border p-2 w-full rounded"
                />
            </div>
            <button 
                onClick={editCategory ? updateCategory : addCategory} 
                className="bg-[#F27C22] text-white px-4 py-2 rounded mb-4"
            >
                {editCategory ? 'Update Category' : 'Add Category'}
            </button>
            <ul className="space-y-2">
                {categories.map((category) => (
                <li key={category} className="flex justify-between items-center bg-gray-200 p-2 rounded">
                    {category}
                    <div className="flex space-x-2">
                    <button 
                        onClick={() => {setEditCategory(category); setNewCategory(category);}} 
                        className="bg-blue-500 text-white px-2 py-1 rounded"
                    >
                        Edit
                    </button>
                    <button 
                        onClick={() => deleteCategory(category)} 
                        className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                        Delete
                    </button>
                    </div>
                </li>
                ))}
            </ul>
        </div>
        
    </AdminLayout>
  );
};

export default Categories;

import React, { useState, useRef } from 'react';
import { Plus, Edit2, Trash2, Clock, Users, Image as ImageIcon } from 'lucide-react';
import AdminLayout from '../component/admin/AdminLayout';

const RecipeForm = ({ recipe, setRecipe, onCancel }) => {
    const [formData, setFormData] = useState({
        title: '',
        ingredients: [''],
        instructions: [''],
        prepTime: '',
        cookTime: '',
        servings: '',
        image: null,
        ...recipe  // This will overwrite the default values if recipe is provided
    });
    const fileInputRef = useRef();

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleArrayChange = (e, index, type) => {
        const updatedArray = [...formData[type]];
        updatedArray[index] = e.target.value;
        setFormData({ ...formData, [type]: updatedArray });
    };

    const addArrayItem = (type) => {
        setFormData({ ...formData, [type]: [...formData[type], ''] });
    };

    const removeArrayItem = (index, type) => {
        const updatedArray = formData[type].filter((_, i) => i !== index);
        setFormData({ ...formData, [type]: updatedArray });
    };

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setFormData({ ...formData, image: e.target.files[0] });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setRecipe(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">{recipe && recipe.id ? 'Edit Recipe' : 'Add New Recipe'}</h3>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Ingredients</label>
                    {formData.ingredients.map((ingredient, index) => (
                        <div key={index} className="flex mt-1">
                            <input
                                type="text"
                                value={ingredient}
                                onChange={(e) => handleArrayChange(e, index, 'ingredients')}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                placeholder="Enter ingredient"
                            />
                            <button
                                type="button"
                                onClick={() => removeArrayItem(index, 'ingredients')}
                                className="ml-2 text-red-600 hover:text-red-800"
                            >
                                <Trash2 size={20} />
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => addArrayItem('ingredients')}
                        className="mt-2 text-indigo-600 hover:text-indigo-800"
                    >
                        <Plus size={20} />
                        Add Ingredient
                    </button>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Instructions</label>
                    {formData.instructions.map((instruction, index) => (
                        <div key={index} className="flex mt-1">
                            <input
                                type="text"
                                value={instruction}
                                onChange={(e) => handleArrayChange(e, index, 'instructions')}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                placeholder="Enter instruction"
                            />
                            <button
                                type="button"
                                onClick={() => removeArrayItem(index, 'instructions')}
                                className="ml-2 text-red-600 hover:text-red-800"
                            >
                                <Trash2 size={20} />
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => addArrayItem('instructions')}
                        className="mt-2 text-indigo-600 hover:text-indigo-800"
                    >
                        <Plus size={20} />
                        Add Instruction
                    </button>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Prep Time</label>
                        <input
                            type="text"
                            name="prepTime"
                            value={formData.prepTime}
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Cook Time</label>
                        <input
                            type="text"
                            name="cookTime"
                            value={formData.cookTime}
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Servings</label>
                        <input
                            type="number"
                            name="servings"
                            value={formData.servings}
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Recipe Image</label>
                    <div className="mt-1 flex items-center">
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleImageChange}
                            accept="image/*"
                            className="hidden"
                        />
                        <button
                            type="button"
                            onClick={() => fileInputRef.current.click()}
                            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <ImageIcon className="mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                            Upload Image
                        </button>
                        {formData.image && (
                            <span className="ml-4 text-sm text-gray-500">
                                {typeof formData.image === 'string' ? formData.image : formData.image.name}
                            </span>
                        )}
                    </div>
                </div>

                <div className="flex justify-end space-x-2">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Save Recipe
                    </button>
                </div>
            </div>
        </form>
    );
};

const RecipeCard = ({ recipe, onEdit, onDelete }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {recipe.image && (
            <img 
                src={typeof recipe.image === 'string' ? recipe.image : URL.createObjectURL(recipe.image)} 
                alt={recipe.title} 
                className="w-full h-48 object-cover" 
            />
        )}
        <div className="p-4">
            <h3 className="font-bold text-xl mb-2">{recipe.title}</h3>
            <div className="flex items-center text-gray-600 mb-2">
                <Clock size={16} className="mr-1" />
                <span className="text-sm">Prep: {recipe.prepTime}</span>
                <span className="mx-2">|</span>
                <Clock size={16} className="mr-1" />
                <span className="text-sm">Cook: {recipe.cookTime}</span>
            </div>
            <div className="flex items-center text-gray-600 mb-4">
                <Users size={16} className="mr-1" />
                <span className="text-sm">Servings: {recipe.servings}</span>
            </div>
            <div className="flex justify-end space-x-2">
                <button
                    onClick={() => onEdit(recipe)}
                    className="text-indigo-600 hover:text-indigo-800"
                >
                    <Edit2 size={20} />
                </button>
                <button
                    onClick={() => onDelete(recipe.id)}
                    className="text-red-600 hover:text-red-800"
                >
                    <Trash2 size={20} />
                </button>
            </div>
        </div>
    </div>
);

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [editingRecipe, setEditingRecipe] = useState(null);

    const handleDelete = (id) => {
        setRecipes(recipes.filter(recipe => recipe.id !== id));
    };

    const handleSaveRecipe = (newRecipe) => {
        if (newRecipe.id) {
            setRecipes(recipes.map(r => (r.id === newRecipe.id ? newRecipe : r)));
        } else {
            setRecipes([...recipes, { ...newRecipe, id: Date.now() }]);
        }
        setEditingRecipe(null);
    };

    return (
        <AdminLayout>
            <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Manage Recipes</h2>
                    <button
                        onClick={() => setEditingRecipe({})}
                        className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <Plus size={20} className="inline-block mr-2" />
                        Add New Recipe
                    </button>
                </div>

                {editingRecipe && (
                    <div className="mb-6">
                        <RecipeForm
                            recipe={editingRecipe}
                            setRecipe={handleSaveRecipe}
                            onCancel={() => setEditingRecipe(null)}
                        />
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recipes.map(recipe => (
                        <RecipeCard
                            key={recipe.id}
                            recipe={recipe}
                            onEdit={setEditingRecipe}
                            onDelete={handleDelete}
                        />
                    ))}
                </div>
            </div>
        </AdminLayout>
    );
};

export default Recipes;
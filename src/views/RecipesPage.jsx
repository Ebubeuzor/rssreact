import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './component/header';
import Footer from './component/Footer';

// Recipes Page Component
export const RecipesPage = () => {
  const { recipeId } = useParams();

  // Mock data - in a real app, you'd fetch this based on recipeId
  const recipe = {
    id: recipeId,
    title: "Easy Pasta",
    ingredients: ["200g pasta", "100g cheese", "50g butter", "Salt to taste"],
    instructions: [
      "Boil pasta in salted water until al dente",
      "Drain pasta and return to pot",
      "Add butter and cheese, stir until melted",
      "Season with salt and serve"
    ],
    prepTime: "10 minutes",
    cookTime: "15 minutes",
    servings: 4,
    image: "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_728,h_546/k%2FPhoto%2FRecipes%2F2023-01-Caramelized-Tomato-Paste-Pasta%2F06-CARAMELIZED-TOMATO-PASTE-PASTA-039"
  };

  return (
    <>
        <Header/>

        <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <img src={recipe.image} alt={recipe.title} className="w-full h-auto mb-4 rounded" />
        
        <div className="mb-4">
            <p>Prep Time: {recipe.prepTime}</p>
            <p>Cook Time: {recipe.cookTime}</p>
            <p>Servings: {recipe.servings}</p>
        </div>

        <h2 className="text-2xl font-bold mb-2">Ingredients</h2>
        <ul className="list-disc pl-5 mb-4">
            {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
            ))}
        </ul>

        <h2 className="text-2xl font-bold mb-2">Instructions</h2>
        <ol className="list-decimal pl-5 mb-4">
            {recipe.instructions.map((step, index) => (
            <li key={index} className="mb-2">{step}</li>
            ))}
        </ol>
        </div>

        <Footer/>
    </>
  );
};
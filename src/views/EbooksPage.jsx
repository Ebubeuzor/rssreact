import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './component/header';
import Footer from './component/Footer';

export const EbooksPage = () => {
    const { ebookId } = useParams();
  
    // Mock data - in a real app, you'd fetch this based on ebookId
    const ebook = {
      id: ebookId,
      title: "Beginner's Cookbook",
      author: "Chef Maria",
      description: "A comprehensive guide for novice cooks, covering basic techniques and simple recipes.",
      pages: 150,
      publicationDate: "2024-01-15",
      coverImage: "https://bookcover4u.com/pro/Nonfiction-book-cover-design-P1481952697NOB-Healthy-food-cookbook-food-vegetable-Healthy-food.jpg",
      downloadUrl: "/cookbook.pdf", // Replace with actual download URL
      chapters: [
        "Kitchen Essentials",
        "Knife Skills",
        "Basic Cooking Methods",
        "Simple Breakfast Recipes",
        "Easy Lunch Ideas",
        "Quick Dinner Solutions"
      ]
    };

    const handleDownload = () => {
        // Trigger the download of the ebook
        const link = document.createElement('a');
        link.href = ebook.downloadUrl;
        link.download = `${ebook.title}.pdf`; // Suggest a filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
  
    return (

        <>
            <Header/>
            <div className="max-w-3xl mx-auto p-4">
                <div className="md:flex mb-6">
                <img src={ebook.coverImage} alt={ebook.title} className="w-full md:w-1/3 h-auto rounded mr-6 mb-4 md:mb-0" />
                <div>
                    <h1 className="text-3xl font-bold mb-2">{ebook.title}</h1>
                    <p className="mb-2">By {ebook.author}</p>
                    <p className="mb-2">Pages: {ebook.pages}</p>
                    <p className="mb-2">Published: {ebook.publicationDate}</p>
                    <button 
                    onClick={handleDownload} 
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                    Download Free
                    </button>
                </div>
                </div>
                <p className="mb-4">{ebook.description}</p>
                <h2 className="text-2xl font-bold mb-2">Table of Contents</h2>
                <ul className="list-disc pl-5">
                {ebook.chapters.map((chapter, index) => (
                    <li key={index}>{chapter}</li>
                ))}
                </ul>
            </div>
            <Footer/>
        </>
    );
};

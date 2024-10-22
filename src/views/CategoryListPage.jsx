import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';

const CategoryListPage = () => {
  const { category } = useParams();

  const categoryContent = {
    blog: {
      title: "Health & Wellness Blog",
      description: "Expert insights on nutrition, wellness, and healthy living",
      bannerImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      items: [
        {
          id: 1,
          title: "How to Eat Healthy on a Budget",
          excerpt: "Discover practical tips and strategies for maintaining a nutritious diet without breaking the bank.",
          image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
          slug: "healthy-eating-budget"
        },
        {
          id: 1,
          title: "10 Best Superfoods for Energy",
          excerpt: "Explore the top superfoods that can naturally boost your energy levels throughout the day.",
          image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
          slug: "superfoods-energy"
        },
        {
          id: 1,
          title: "Complete Meal Prep Guide",
          excerpt: "Master the art of meal preparation with our comprehensive guide.",
          image: "https://images.unsplash.com/photo-1512058564366-18510be2db19",
          slug: "meal-prep-guide"
        }
      ]
    },
    recipes: {
      title: "Healthy Recipes",
      description: "Delicious and nutritious recipes for every meal",
      bannerImage: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
      items: [
        {
          id: 1,
          title: "30-Minute Easy Pasta Dishes",
          excerpt: "Quick and delicious pasta recipes perfect for busy weeknights.",
          image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856",
          slug: "quick-pasta-recipes"
        },
        {
          id: 1,
          title: "Energizing Vegan Smoothies",
          excerpt: "Start your day right with these nutrient-packed vegan smoothie recipes.",
          image: "https://images.unsplash.com/photo-1502741126161-b048400d085d",
          slug: "vegan-smoothies"
        },
        {
          id: 1,
          title: "Perfect Grilled Chicken Guide",
          excerpt: "Learn the secrets to juicy, flavorful grilled chicken every time.",
          image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435",
          slug: "grilled-chicken-guide"
        }
      ]
    },
    videos: {
      title: "Video Tutorials",
      description: "Watch and learn from our expert demonstrations",
      bannerImage: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb",
      items: [
        {
          id: 1,
          title: "Cooking Basics for Beginners",
          excerpt: "Master fundamental cooking techniques with our step-by-step video guide.",
          image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352",
          slug: "cooking-basics"
        },
        {
          id: 1,
          title: "Essential Kitchen Tips & Tricks",
          excerpt: "Professional chefs share their favorite time-saving techniques.",
          image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d",
          slug: "kitchen-tips"
        },
        {
          id: 1,
          title: "Healthy Recipe Reviews",
          excerpt: "Watch honest reviews and demonstrations of popular healthy recipes.",
          image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f",
          slug: "recipe-reviews"
        }
      ]
    },
    ebooks: {
      title: "Digital Library",
      description: "Comprehensive guides and cookbooks",
      bannerImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
      items: [
        {
          id: 1,
          title: "Beginner's Guide to Healthy Cooking",
          excerpt: "Everything you need to know to start your healthy cooking journey.",
          image: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488",
          slug: "beginners-cookbook"
        },
        {
          id: 1,
          title: "Complete Nutrition Guide",
          excerpt: "Understanding macro and micronutrients and creating balanced meals.",
          image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
          slug: "nutrition-guide"
        },
        {
          id: 1,
          title: "Monthly Meal Planning Made Easy",
          excerpt: "Learn how to plan your meals effectively and reduce food waste.",
          image: "https://images.unsplash.com/photo-1544681280-d0a72c256fbf",
          slug: "meal-planning"
        }
      ]
    }
  };

  const content = categoryContent[category.toLowerCase()];
  if (!content) return <div>Category not found</div>;

  return (
    <>
      <Header />
      {/* Banner Section */}
      <div className="relative">
        <img 
          src={content.bannerImage}
          alt={content.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto h-full flex items-center px-4">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-4">{content.title}</h1>
              <p className="text-xl">{content.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.items.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Link
                  to={`/${category.toLowerCase()}/${item.id}`}
                  className="inline-block px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-indigo-900 transition-colors duration-300"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CategoryListPage;
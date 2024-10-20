import { useEffect, useState } from 'react'
import Header from './component/header'
import Navigation from './component/Navigation'
import HeroSection from './component/HeroSection'
import SearchBar from './component/SearchBar'
import CategoryBubbles from './component/CategoryBubbles'
import FeaturedProducts from './component/FeaturedProducts'
import ContentColumns from './component/ContentColumns'
import CompetitionSection from './component/CompetitionSection'
import Newsletter from './component/Newsletter'
import Footer from './component/Footer'

function HomePage() {
  
  // Simulated data fetch remains the same
  const fetchData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          categories: ['Dry Food', 'Frozen Food', 'Dried Veggies'],
          featuredProducts: [
            { id: 1, title: 'Organic Vegetables', price: '₦10009.99', category: 'Dried Veggies' ,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPX72zRye0yKp_n8EXUUkyJ54fn-lsfwwzY_y5uvjg241pHEEgV6UbsJK4iraOf2BZYQ&usqp=CAU' },
            { id: 2, title: 'Fresh Fruits', price: '₦20004.99', category: 'Frozen Food' ,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPX72zRye0yKp_n8EXUUkyJ54fn-lsfwwzY_y5uvjg241pHEEgV6UbsJK4iraOf2BZYQ&usqp=CAU'},
            { id: 3, title: 'Whole Grains', price: '₦10004.99', category: 'Dry Food' ,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPX72zRye0yKp_n8EXUUkyJ54fn-lsfwwzY_y5uvjg241pHEEgV6UbsJK4iraOf2BZYQ&usqp=CAU'},
            { id: 4, title: 'Dairy Products', price: '₦9000.99', category: 'Dried Veggies' ,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPX72zRye0yKp_n8EXUUkyJ54fn-lsfwwzY_y5uvjg241pHEEgV6UbsJK4iraOf2BZYQ&usqp=CAU'}
          ],
          contentColumns: {
            blog: ['How to Eat Healthy', '10 Best Superfoods', 'Meal Prep Guide'],
            recipes: ['Easy Pasta', 'Vegan Smoothie', 'Grilled Chicken'],
            videos: ['Cooking Basics', 'Kitchen Tips', 'Recipe Reviews'],
            ebooks: ['Beginner\'s Cookbook', 'Nutrition Guide', 'Meal Planning']
          },
          competitions: [
            { id: 1, 
              title: 'Win a Year of Free Groceries', 
              startDate: '2024-12-31', 
              endDate: '2024-12-31', 
              image: 'https://thumbs.dreamstime.com/z/cooking-master-competition-vector-illustration-53111191.jpg?ct=jpeg'
            }
          ],
          podcasts: [
            { id: 1, 
              title: 'Healthy Eating Habits', 
              duration: '25 min',
              videoUrl: "https://www.youtube.com/embed/ZJy1ajvMU1k",
              image: 'https://helios-i.mashable.com/imagery/articles/02iUTowes53L36fhYb6lbtY/hero-image.fill.size_1248x702.v1631049916.jpg' 
            }
          ]
        });
      }, 1500);
    });
  };

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData().then(result => {
      setData(result);
      console.log(result);
      setIsLoading(false);
    });
  }, []);

  
  return (
    <>
    <Header/>
      <div className="min-h-screen flex flex-col">
        <Navigation/>
        <main className="flex-grow">
          <HeroSection/>
          <SearchBar/>
          <CategoryBubbles categories={data?.categories || []} isLoading={isLoading} />
          <FeaturedProducts products={data?.featuredProducts || []} isLoading={isLoading} />
          <ContentColumns content={data?.contentColumns || {}} isLoading={isLoading} />
          <CompetitionSection competitions={data?.competitions || []} podcasts={data?.podcasts || []} isLoading={isLoading} />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default HomePage

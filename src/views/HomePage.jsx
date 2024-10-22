import { useEffect, useState } from 'react'
import Header from './component/Header'
import Navigation from './component/Navigation'
import HeroSection from './component/HeroSection'
import SearchBar from './component/SearchBar'
import CategoryBubbles from './component/CategoryBubbles'
import FeaturedProducts from './component/FeaturedProducts'
import ContentColumns from './component/ContentColumns'
import CompetitionSection from './component/CompetitionSection'
import Newsletter from './component/Newsletter'
import Footer from './component/Footer'
import WhyChooseUs from './component/WhyChooseUs'
import TestimonialSection from './component/TestimonialSection'

function HomePage() {
  
  // Simulated data fetch remains the same
  const fetchData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          categories: [
            {
              name: 'Dry Food',
              image: 'https://images.unsplash.com/photo-1558818498-28c1e002b655?q=80&w=1000&auto=format&fit=crop',
            },
            {
              name: 'Frozen Food',
              image: 'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1000&auto=format&fit=crop',
            },
            {
              name: 'Dried Veggies',
              image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1000&auto=format&fit=crop',
            }
          ],
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
          ],
          bestSellers: [
            { id: 1, title: 'Organic Vegetables', price: '₦10009.99', category: 'Dried Veggies' ,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPX72zRye0yKp_n8EXUUkyJ54fn-lsfwwzY_y5uvjg241pHEEgV6UbsJK4iraOf2BZYQ&usqp=CAU' },
            { id: 2, title: 'Fresh Fruits', price: '₦20004.99', category: 'Frozen Food' ,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPX72zRye0yKp_n8EXUUkyJ54fn-lsfwwzY_y5uvjg241pHEEgV6UbsJK4iraOf2BZYQ&usqp=CAU'},
            { id: 3, title: 'Whole Grains', price: '₦10004.99', category: 'Dry Food' ,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPX72zRye0yKp_n8EXUUkyJ54fn-lsfwwzY_y5uvjg241pHEEgV6UbsJK4iraOf2BZYQ&usqp=CAU'},
            { id: 4, title: 'Dairy Products', price: '₦9000.99', category: 'Dried Veggies' ,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPX72zRye0yKp_n8EXUUkyJ54fn-lsfwwzY_y5uvjg241pHEEgV6UbsJK4iraOf2BZYQ&usqp=CAU'}
          ],
          testimonials: [
            {
              id: 1,
              name: "Sarah Johnson",
              image: "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=",
              content: "The quality of their dried fruits is exceptional. I've been a regular customer for over a year now, and the consistency is remarkable.",
              rating: 5
            },
            {
              id: 2,
              name: "Michael Chen",
              image: "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=",
              content: "As a chef, I'm particular about my ingredients. Their products have never disappointed me. The frozen vegetables retain their flavor perfectly.",
              rating: 5
            },
            {
              id: 3,
              name: "Amanda Peters",
              image: "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=",
              content: "I recommend these products to all my clients. The quality and nutritional value are exactly what health-conscious individuals need.",
              rating: 5
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
          <FeaturedProducts products={data?.featuredProducts || []} isLoading={isLoading} title={"Featured Products"}/>
          <FeaturedProducts products={data?.bestSellers || []} isLoading={isLoading} title={"Best Selling Products"}/>
          <WhyChooseUs/>
          <TestimonialSection testimonials={data?.testimonials} isLoading={isLoading} />
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

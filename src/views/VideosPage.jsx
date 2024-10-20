import React from 'react'
import { useParams } from 'react-router-dom';
import Header from './component/header';
import Footer from './component/Footer';

const VideosPage = () => {
    const { videoId } = useParams();
  
    // Mock data - in a real app, you'd fetch this based on videoId
    const video = {
      id: videoId,
      title: "Cooking Basics: Knife Skills",
      description: "Learn essential knife skills to improve your cooking efficiency and presentation.",
      duration: "15:30",
      uploadDate: "2024-03-10",
      thumbnailUrl: "/api/placeholder/600/400",
      videoUrl: "https://www.youtube.com/embed/ZJy1ajvMU1k" // This would be a real video URL in a live app
    };
  
    return (
        <>
            <Header/>

            <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{video.title}</h1>
            <div className="relative pb-9/16 mb-4" style={{ paddingBottom: '56.25%' }}> {/* Aspect ratio 16:9 */}
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={video.videoUrl}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <p className="mb-2">Duration: {video.duration}</p>
            <p className="mb-4">Uploaded on: {video.uploadDate}</p>
            <p className="mb-4">{video.description}</p>
            </div>

            <Footer/>
        </>
    );
};

export default VideosPage
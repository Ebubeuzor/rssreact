import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialSection = ({ testimonials, isLoading }) => {
  const defaultTestimonials = [
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
  ];

  const activeTestimonials = testimonials || defaultTestimonials;

  if (isLoading) {
    return (
      <div className="w-full bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-64 bg-gray-200 rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1F205D] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers about their experience with our products and service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activeTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg p-8 relative transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute top-6 right-8 text-[#F27C22]">
                <Quote size={24} />
              </div>

              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#F27C22]"
                />
                <div className="ml-4">
                  <h3 className="font-bold text-[#1F205D]">{testimonial.name}</h3>
                  <div className="flex mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-[#F27C22] text-[#F27C22]"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
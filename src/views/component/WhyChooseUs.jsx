import React from 'react';
import { ShieldCheck, Truck, Clock, Award } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
      title: "Quality Guaranteed",
      description: "All our products undergo strict quality control to ensure the highest standards"
    },
    {
      icon: <Truck className="w-8 h-8 text-blue-500" />,
      title: "Fast Delivery",
      description: "Same-day delivery available for orders placed before 2 PM"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "24/7 Support",
      description: "Our customer service team is always here to help you"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-500" />,
      title: "Best Price",
      description: "Competitive prices with regular deals and discounts"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best shopping experience with quality products and exceptional service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-blue-50 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
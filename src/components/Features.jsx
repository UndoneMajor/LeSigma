import React from 'react';
import { FaTruck, FaMoneyBillWave, FaHeadset } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaTruck className="w-8 h-8 text-red-500" />,
      title: "Free Delivery",
      description: "Offers convenience and the ability to shop from anywhere, anytime."
    },
    {
      icon: <FaMoneyBillWave className="w-8 h-8 text-red-500" />,
      title: "100% Money Back Guaranty",
      description: "E-commerce have a review system where customers can share feedback."
    },
    {
      icon: <FaHeadset className="w-8 h-8 text-red-500" />,
      title: "Strong Support",
      description: "Offer customer support services to assist customers with queries and issues."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features; 
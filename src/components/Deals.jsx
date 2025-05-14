import React from 'react';
import deals from '../assets/deals.png';

const Deals = () => {
  const timeValues = [
    { value: '14', label: 'Days' },
    { value: '20', label: 'Hours' },
    { value: '15', label: 'Mins' },
    { value: '05', label: 'Secs' }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="bg-[#f4e5ec] rounded-3xl max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center p-8 md:p-12">
          <div className="md:w-1/2">
            <img src={deals} alt="Fashion Deals" className="w-full h-auto max-w-md mx-auto" />
          </div>
          <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
            <p className="text-red-500 font-medium mb-2">Get Up To 20% Discount</p>
            <h2 className="text-4xl font-bold mb-4">Deals Of This Month</h2>
            <p className="text-gray-600 mb-8">
              Our Women's Fashion Deals of the Month are here to make your style
              dreams a reality without breaking the bank. Discover a curated collection
              of exquisite clothing, accessories, and footwear, all handpicked to elevate
              your wardrobe.
            </p>
            <div className="flex space-x-6 justify-center md:justify-start">
              {timeValues.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-full w-16 md:w-20 h-16 md:h-20 flex items-center justify-center shadow-sm">
                    <div>
                      <div className="text-xl md:text-2xl font-bold">{item.value}</div>
                      <div className="text-xs md:text-sm">{item.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;

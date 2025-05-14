import React from 'react';
import fashionImg from '../assets/fashion-model.png';

const FasionBanner = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between bg-pink-100 p-15 m-13">
        <div className="max-w-xl text-center lg:text-left">
          <p className="text-red-500 font-semibold uppercase">Up to 20% discount on</p>
          <h1 className="text-5xl font-extrabold text-gray-900 mt-2 mb-4">Girl's Fashion</h1>
          <p className="text-gray-600 mb-6">
            Discover the latest trends and express your unique style with our Women's Fashion website. 
            Explore a curated collection of clothing, accessories, and footwear that caters to every taste and occasion.
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded">
            Explore Now
          </button>
        </div>
        <div className="mt-10 lg:mt-0">
          <img src={fashionImg} alt="Fashion Girl" className="max-h-[500px] object-contain" />
        </div>
      </div>
    </div>
  );
};

export default FasionBanner;

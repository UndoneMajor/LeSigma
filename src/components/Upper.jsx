import React from 'react'
import headerImage from '../assets/fashion-model.png'

export default function Upper() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-[#f4e5ec] rounded-3xl max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center p-8 md:p-12">
          <div className="md:w-1/2 space-y-6">
            <h4 className="text-red-500 font-medium">UP TO 20% DISCOUNT ON</h4>
            <h1 className="text-5xl font-extrabold text-slate-900 font-serif">Girl's Fashion</h1>
            <p className="text-gray-600">
              Discover the latest trends and express your unique style with our Women's Fashion website. Explore a curated collection of clothing, accessories, and footwear that caters to every taste and occasion.
            </p>
            <button className="bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition">
              EXPLORE NOW
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <img 
              src={headerImage} 
              alt="header" 
              className="w-full h-auto max-w-md mx-auto" 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

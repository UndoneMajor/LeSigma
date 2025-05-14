import React from 'react'
import headerImage from '../assets/fashion-model.png'

export default function Upper() {
  return (
    <header className="bg-pink-100 rounded-b-xl py-12 px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
      <div className="space-y-6 max-w-xl mx-auto md:mx-0">
        <h4 className="text-red-600 font-medium">UP TO 20% DISCOUNT ON</h4>
        <h1 className="text-5xl font-extrabold text-slate-900 font-serif">Girl's Fashion</h1>
        <p className="text-slate-500">
          Discover the latest trends and express your unique style with our Women's Fashion website. Explore a curated collection of clothing, accessories, and footwear that caters to every taste and occasion.
        </p>
        <button className="bg-red-600 text-white py-3 px-6 rounded hover:bg-red-700 transition">EXPLORE NOW</button>
      </div>
      <div className="relative h-full flex justify-center">
        <img src={headerImage} alt="header" className="max-w-sm translate-y-10" />
      </div>
    </header>
  )
}

import React from 'react'
import cat1 from '../assets/category-1.jpg'
import cat2 from '../assets/category-2.jpg'
import cat3 from '../assets/category-3.jpg'
import cat4 from '../assets/category-4.jpg'

const categories = [
  { image: cat1, label: 'Accessories' },
  { image: cat2, label: 'Dress Collection' },
  { image: cat3, label: 'Jewellery' },
  { image: cat4, label: 'Cosmetics' },
]

export default function Categories() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-extrabold font-serif text-center mb-4 text-slate-900">Top Categories</h2>
      <p className="text-center text-slate-500 max-w-xl mx-auto mb-10">
        Browse a diverse range of categories, from chic dresses to versatile accessories. Elevate your style today!
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {categories.map((item, idx) => (
          <div key={idx} className="text-center">
            <img src={item.image} alt={item.label} className="w-24 h-24 mx-auto mb-4 rounded-full shadow-md border-4 border-white object-cover" />
            <h4 className="text-lg font-semibold font-serif text-slate-900">{item.label}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}

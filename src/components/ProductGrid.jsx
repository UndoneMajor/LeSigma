import React from 'react'
import products from '../data/products.json'

export default function ProductGrid() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-extrabold font-serif text-center mb-4 text-slate-900">Trending Products</h2>
      <p className="text-center text-slate-500 max-w-xl mx-auto mb-10">
        Discover the Hottest Picks: Elevate Your Style with Our Curated Collection of Trending Women's Fashion Products.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((item) => (
          <div key={item._id} className="bg-white shadow rounded overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
            <div className="text-center p-4">
              <div className="text-yellow-400 mb-1 text-sm">
                {'★'.repeat(Math.floor(item.rating))}{item.rating % 1 ? '½' : ''}
              </div>
              <h4 className="font-bold text-lg text-slate-900">{item.name}</h4>
              <p className="text-slate-900 font-semibold">
                ₹{item.price.toFixed(2)}
                {item.oldPrice && (
                  <s className="text-slate-400 text-sm ml-2">₹{item.oldPrice.toFixed(2)}</s>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="bg-[#ed3849] text-white py-3 px-6 rounded hover:bg-[#d23141] transition">Load More</button>
      </div>
    </section>
  )
}

import React from 'react'
import blog1 from '../assets/card-1.png'
import blog2 from '../assets/card-2.png'
import blog3 from '../assets/card-3.png'

const blogs = [
  { image: blog1, title: 'Mastering the Art of Capsule Wardrobes', subtitle: 'Timeless Elegance', date: '12th August 2022' },
  { image: blog2, title: 'Unveiling the Hottest Beachwear Trends', subtitle: 'Summer Breeze', date: '18th January 2023' },
  { image: blog3, title: "Navigating the World of Women's Tailoring", subtitle: 'Power Dressing', date: '25th May 2023' },
]

export default function Blog() {
  return (
    <section className="bg-slate-50 rounded-xl max-w-screen-xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-extrabold font-serif text-center mb-4 text-slate-900">Latest From Blog</h2>
      <p className="text-center text-slate-500 max-w-xl mx-auto mb-10">
        Elevate your wardrobe with our freshest style tips, trends, and inspiration on our blog.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog, i) => (
          <div key={i} className="bg-white rounded-lg shadow overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-60 object-cover" />
            <div className="p-4 text-center">
              <h6 className="text-sm text-[#ed3849] font-medium">{blog.subtitle}</h6>
              <h4 className="text-lg font-semibold font-serif text-slate-900">{blog.title}</h4>
              <p className="text-sm font-semibold text-slate-400">{blog.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

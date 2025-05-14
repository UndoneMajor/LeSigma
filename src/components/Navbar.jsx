import React from 'react'

export default function NavBar() {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <nav className="flex justify-between items-center py-6">
          <ul className="flex gap-8 font-medium text-slate-900">
            <li><a href="#" className="hover:text-red-500 transition">Home</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Shop</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Pages</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Contact</a></li>
          </ul>
          <div className="text-2xl font-extrabold text-slate-900 font-serif">
            Lebaba<span className="text-red-500">.</span>
          </div>
          <div className="flex gap-6 items-center">
            <button className="px-4 py-2 text-slate-900 hover:text-red-500 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="px-4 py-2 text-slate-900 hover:text-red-500 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </div>
  )
}

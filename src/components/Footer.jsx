import React from 'react'
import insta1 from '../assets/instagram-1.jpg'
import insta2 from '../assets/instagram-2.jpg'
import insta3 from '../assets/instagram-3.jpg'
import insta4 from '../assets/instagram-4.jpg'
import insta5 from '../assets/instagram-5.jpg'
import insta6 from '../assets/instagram-6.jpg'

export default function Footer() {
  return (
    <>
      <footer className="max-w-screen-xl mx-auto px-4 py-20 grid md:grid-cols-4 gap-12">
        <div>
          <h4 className="text-lg font-extrabold font-serif text-slate-900 mb-6">CONTACT INFO</h4>
          <p className="text-slate-500 mb-3"><span className="text-[#ed3849] mr-2">📍</span>36/25 Street, Track Market, Guwahati, Assam</p>
          <p className="text-slate-500 mb-3"><span className="text-[#ed3849] mr-2">📧</span>support@Lebaba.com</p>
          <p className="text-slate-500"><span className="text-[#ed3849] mr-2">📞</span>(+91) 93456 79889</p>
        </div>
        <div>
          <h4 className="text-lg font-extrabold font-serif text-slate-900 mb-6">COMPANY</h4>
          <a href="#" className="block text-slate-500 hover:text-[#ed3849] mb-2">Home</a>
          <a href="#" className="block text-slate-500 hover:text-[#ed3849] mb-2">About Us</a>
          <a href="#" className="block text-slate-500 hover:text-[#ed3849] mb-2">Work With Us</a>
          <a href="#" className="block text-slate-500 hover:text-[#ed3849] mb-2">Our Blog</a>
          <a href="#" className="block text-slate-500 hover:text-[#ed3849]">Terms & Conditions</a>
        </div>
        <div>
          <h4 className="text-lg font-extrabold font-serif text-slate-900 mb-6">USEFUL LINK</h4>
          <a href="#" className="block text-slate-500 hover:text-[#ed3849] mb-2">Help</a>
          <a href="#" className="block text-slate-500 hover:text-[#ed3849] mb-2">Track My Order</a>
          <a href="#" className="block text-slate-500 hover:text-[#ed3849] mb-2">Men</a>
          <a href="#" className="block text-slate-500 hover:text-[#ed3849] mb-2">Women</a>
          <a href="#" className="block text-slate-500 hover:text-[#ed3849]">Dresses</a>
        </div>
        <div>
          <h4 className="text-lg font-extrabold font-serif text-slate-900 mb-6">INSTAGRAM</h4>
          <div className="grid grid-cols-3 gap-2">
            {[insta1, insta2, insta3, insta4, insta5, insta6].map((img, i) => (
              <img key={i} src={img} alt={`insta-${i}`} className="w-full h-20 object-cover rounded" />
            ))}
          </div>
        </div>
      </footer>
      <div className="text-center py-4 text-sm text-slate-400 border-t">Copyright © 2024. All rights reserved.</div>
    </>
  )
}

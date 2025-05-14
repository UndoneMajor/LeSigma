import React from 'react'
import dealsImg from '../assets/deals.png'

export default function Deals() {
  return (
    <section className="bg-[#f4e5ec] rounded-xl max-w-screen-xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
      <div className="relative flex justify-center">
        <img src={dealsImg} alt="Deals" className="max-w-md w-full object-contain -translate-y-8" />
      </div>
      <div className="space-sy-6 max-w-xl">
        <h5 className="text-[#ed3849] font-medium text-sm uppercase">Get Up To 20% Discount</h5>
        <h4 className="text-3xl font-extrabold font-serif text-slate-900">Deals Of This Month</h4>
        <p className="text-slate-500">
          Our Women's Fashion Deals of the Month are here to make your style dreams a reality without breaking the bank. Discover a curated collection of exquisite clothing, accessories, and footwear.
        </p>
        <div className="flex gap-4">
          {['14 Days', '20 Hours', '15 Mins', '05 Secs'].map((t, i) => (
            <div key={i} className="w-20 h-20 bg-white rounded-full shadow flex flex-col justify-center items-center text-sm font-semibold text-slate-900">
              <span className="text-xl font-bold">{t.split(' ')[0]}</span>
              <span>{t.split(' ')[1]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

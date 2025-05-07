import React from 'react'
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi'
import header from './assets/header.png'
export default function App() {
  return (
    <>
      <header className="navbar">
        <div className="container">
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">Pages</a>
            <a href="#">Contact</a>
          </div>
          <div className="logo">
            Lebaba<span className="logo-dot">.</span>
          </div>
          <div className="nav-icons">
            <FiSearch size={24} />
            <div className="cart-icon">
              <FiShoppingCart size={24} />
              <span className="badge">0</span>
            </div>
            <FiUser size={24} />
          </div>
        </div>
      </header>
      <section className="hero">
        <div className="hero-wrapper">
          <div className="hero-content">
            <p className="discount">UP TO 20% DISCOUNT ON</p>
            <h1 className="hero-title">Girl's Fashion</h1>
            <p className="hero-subtitle">
              Discover the latest trends and express your unique style with our Women's Fashion website. Explore a curated collection of clothing, accessories, and footwear that caters to every taste and occasion.
            </p>
            <a href="#" className="btn">EXPLORE NOW</a>
          </div>
          <img src={header} alt="Fashion model" className="hero-image" />
        </div>
      </section>
    </>
  )
}

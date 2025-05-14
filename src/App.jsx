import './App.css'
import React from 'react';
import NavBar from './components/NavBar'
import Upper from './components/Upper'
import Categories from './components/Categories';
import ProductGrid from './components/ProductGrid';
import Deals from './components/Deals';
import Features from './components/Features';
import LatestBlog from './components/LatestBlog';

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
        <NavBar />
        <Upper />
        <Categories />
        <ProductGrid />
        <Deals />
        <Features />
        <LatestBlog />
    </main>
  )
}

export default App

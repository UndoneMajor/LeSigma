import './App.css'
import React, { useState } from 'react';
import NavBar from './components/NavBar'
// import Hero from './components/Hero'
// import CompanyLogo from './components/CompanyLogo'
// import PurposeSection from './components/PurposeSection'
// import FeaturesSection from './components/FeaturesSection'
// import ScheduleSection from './components/ScheduleSection'
// import MonitorSection from './components/MonitorSection'
// import PricingSection from './components/PricingSection'
// import ServicesSection from './components/ServicesSection'
// import TestimonialsSection from './components/TestimonialsSection'
// import NewsletterSection from './components/NewsletterSection'
// import Footer from './components/Footer'
import Upper from './components/Upper'
import Categories from './components/Categories';
import ProductGrid from './components/ProductGrid';
import LoginScreen from './components/LoginScreen';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden">
        {/* <Navbar />
        <Hero />
        <CompanyLogo />
        <PurposeSection />
        <FeaturesSection />
        <ScheduleSection />
        <MonitorSection />
        <PricingSection />
        <ServicesSection />
        <TestimonialsSection />
        <NewsletterSection />
        <Footer /> */}
        <NavBar onLoginClick={handleLoginClick}/>
        <Upper/>
        <Categories/>
        <ProductGrid/>
        {showLogin && <LoginScreen onClose={handleCloseLogin} />}
    </main>
  )
}

export default App

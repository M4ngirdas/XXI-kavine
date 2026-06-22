import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Products from '../components/Products'
import Contact from '../components/Contact'
import Footer from '../components/Footer.jsx'
import Header from "../components/Header.jsx"

export default function App() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);

  return (
    <div className="relative">
      <Header />
      <div className="grain-overlay" />
      <Hero />
      <About />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

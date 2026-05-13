import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t border-bakery-beige">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-serif tracking-[0.3em] font-bold">XXL KAVINĖ</div>
        
        <div className="text-[10px] uppercase tracking-widest text-bakery-gray">
          © 2026 XXL Kavinė. Domeikava, Lietuva.
        </div>

        <div className="flex space-x-8">
          <a href="#hero" className="text-[10px] uppercase tracking-widest hover:text-bakery-gold transition-colors">Pradžia</a>
          <a href="#products" className="text-[10px] uppercase tracking-widest hover:text-bakery-gold transition-colors">Produktai</a>
          <a href="#contact" className="text-[10px] uppercase tracking-widest hover:text-bakery-gold transition-colors">Kontaktai</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
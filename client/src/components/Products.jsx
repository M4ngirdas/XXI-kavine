import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { id: 1, name: 'Prancūziški Kruasanai', cat: 'Kepykla', img: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=800' },
  { id: 2, name: 'Egzotiniai Desertai', cat: 'Konditerija', img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800' },
  { id: 3, name: 'Specializuota Kava', cat: 'Barista', img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800' },
  { id: 4, name: 'Naminė Duona', cat: 'Kepykla', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800' }
];

const Products = () => {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Antraštės lygiavimas - Centruotas visuose ekranuose */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-bakery-gold uppercase tracking-[0.4em] text-[10px] font-bold block mb-4">Pasirinkimas</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Mūsų pasididžiavimas</h2>
          <p className="text-bakery-gray text-base font-light leading-relaxed">
            Kiekvienas produktas gaminamas vietoje, naudojant tik aukščiausios kokybės produktus be dirbtinių priedų. Mes užtikriname šviežumą kiekvieną dieną.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {items.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden mb-6 bg-bakery-beige">
                <img 
                  src={item.img} 
                  className="w-full h-full object-cover" 
                  alt={item.name}
                />
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-bakery-gold mb-2">{item.cat}</p>
              <h3 className="text-lg font-serif tracking-wide">{item.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
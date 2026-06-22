import React from 'react'
import { motion } from 'framer-motion'

const items = [
  { id: 1, name: 'Kepykla', img: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=800' },
  { id: 2, name: 'Konditerija', img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800' },
  { id: 3, name: 'Gėrimai', img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800' },
  { id: 4, name: 'Duona', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800' }
];

export default function Products() {
  return (
    <section id="products" className="grid place-items-center gap-12 py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

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
              <h3 className="text-lg font-serif tracking-wide">{item.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
      <a href="#products" className="bg-bakery-dark text-white px-8 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-bakery-gold transition-all duration-500">
        Peržiūrėti meniu
      </a>
    </section>
  );
}
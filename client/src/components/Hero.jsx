import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Kairė pusė: Welcome & CTA */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="text-bakery-gold uppercase tracking-[0.4em] text-[10px] font-bold block mb-4">Sveiki atvykę į</span>
              <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] text-bakery-dark">
                XXL <br /> <span className="italic">Kavinę</span>
              </h1>
            </div>
            <p className="text-bakery-gray text-lg font-light leading-relaxed max-w-md">
              Mūsų kepykloje kiekvienas rytas prasideda nuo šviežiai maltos kavos aromato ir krosnyje kylančios duonos.
            </p>
            <div className="flex gap-4">
              <a href="#products" className="bg-bakery-dark text-white px-8 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-bakery-gold transition-all duration-500">
                Mūsų meniu
              </a>
              <a href="#contact" className="border border-bakery-dark/20 px-8 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-bakery-dark hover:text-white transition-all duration-500">
                Kontaktai
              </a>
            </div>
          </motion.div>

          {/* Dešinė pusė: Mūsų Istorija */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white p-8 md:p-12 shadow-2xl relative z-10 border border-bakery-beige">
              <span className="text-bakery-gold uppercase tracking-[0.5em] text-[10px] font-bold block mb-6">Mūsų Istorija</span>
              <h2 className="text-3xl md:text-4xl font-serif italic mb-6">Tradicijos puoselėjamos nuo 2010-ųjų</h2>
              <div className="space-y-4 text-bakery-gray font-light leading-relaxed">
                <p>
                  Domeikavos širdyje įsikūrusi XXL kavinė – tai ne tik kepykla, tai šeimos amato tęstinumas. Mes tikime, kad tikras skonis gimsta nenaudojant jokių dirbtinių priedų.
                </p>
                <p>
                  Kiekvienas mūsų gaminys yra ruošiamas rankomis, naudojant tik aukščiausios kokybės lietuviškus produktus ir prancūziškas konditerijos technikas.
                </p>
              </div>
              <div className="mt-8 aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-full object-cover"
                  alt="Mūsų kepykla"
                />
              </div>
            </div>
            {/* Dekoratyvinis rėmelis už nugaros */}
            <div className="absolute -top-6 -right-6 w-full h-full border border-bakery-gold/20 -z-0 hidden md:block" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
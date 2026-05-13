import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 md:py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          
          {/* Vizualinė pusė: Kompozicija iš dviejų nuotraukų */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000" 
                className="w-full h-full object-cover transition-transform duration-[3s] hover:scale-110"
                alt="Kepėjo rankos"
              />
            </motion.div>
            
            {/* Mažesnė, "plūduriuojanti" nuotrauka suteikianti gylio */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-12 -right-6 md:-right-12 w-1/2 aspect-square overflow-hidden rounded-sm shadow-2xl border-8 border-white hidden sm:block"
            >
              <img 
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600" 
                className="w-full h-full object-cover"
                alt="Detalė"
              />
            </motion.div>
          </div>

          {/* Tekstinė pusė: Emocija ir Kokybė */}
          <div className="w-full lg:w-1/2 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-bakery-gold uppercase tracking-[0.4em] text-[10px] font-bold">Mūsų Filosofija</span>
              <h2 className="text-4xl md:text-6xl font-serif leading-tight">
                Kokybė, kurią galima <br /> <span className="italic">užuosti.</span>
              </h2>
              <p className="text-bakery-gray text-lg font-light leading-relaxed">
                Mūsų meilė kepiniams prasideda nuo pagarbos ingredientui. Mes renkamės tikrą kaimišką sviestą, ilgą tešlos kildinimą ir natūralų raugą. Tai lėtas procesas, kurio rezultatas – nepamirštama tekstūra ir gilus skonis.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-8 pt-6 border-t border-bakery-beige"
            >
              <div>
                <h4 className="font-serif italic text-2xl mb-2 text-bakery-dark">Meistrystė</h4>
                <p className="text-sm text-bakery-gray font-light">Kiekvienas gaminys lipdomas rankomis, skiriant dėmesį kiekvienai detalei.</p>
              </div>
              <div>
                <h4 className="font-serif italic text-2xl mb-2 text-bakery-dark">Šviežumas</h4>
                <p className="text-sm text-bakery-gray font-light">Niekada nepaliekame vakarykščių kepinių – pas mus viskas tik iš šios dienos krosnies.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <div className="inline-flex items-center space-x-4 p-4 bg-bakery-beige/50 rounded-sm">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-bakery-gold shadow-sm font-serif italic text-xl">
                  &
                </div>
                <p className="text-sm font-medium tracking-wide uppercase italic">Pagaminta su meile Domeikavoje</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
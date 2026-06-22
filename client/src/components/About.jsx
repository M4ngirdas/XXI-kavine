import React from 'react';
import { motion } from 'framer-motion';
import { texts } from "../config/texts"

export default function About() {
  return (
    <section id="about" className="py-24 md:py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          <div className="w-full lg:w-1/2 relative">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl" >
              <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000"  className="w-full h-full object-cover transition-transform duration-[3s] hover:scale-110" alt="Kepėjo rankos" />
            </motion.div>
            <motion.div  initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }} className="absolute -bottom-12 -right-6 md:-right-12 w-1/2 aspect-square overflow-hidden rounded-sm shadow-2xl border-8 border-white hidden sm:block">
              <img src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600" className="w-full h-full object-cover" alt="Detalė" />
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2 space-y-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
              <span className="text-bakery-gold uppercase tracking-[0.4em] text-[10px] font-bold">Apie mus</span>
              <h2 className="text-4xl md:text-6xl font-serif leading-tight">
                {texts.about_title} <br /> <span className="italic">{texts.about_italic}</span>
              </h2>
              <p className="text-bakery-gray text-lg font-light leading-relaxed">
                {texts.about_desc}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
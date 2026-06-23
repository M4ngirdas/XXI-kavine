import React from 'react';
import { motion } from 'framer-motion';
import { texts } from "../config/texts";
import { info } from "../config/info";

export default function Hero() {
    return (
        <section id="hero" className="flex items-center justify-center relative min-h-screen pt-24 md:pt-32 lg:pt-40 pb-12 md:pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 pt-8 lg:pt-0 items-center">
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-6 md:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
                        <div>
                            <span className="text-bakery-gold uppercase tracking-[0.4em] text-[10px] font-bold block mb-3 md:mb-4">Sveiki atvykę į</span>
                            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] lg:leading-[0.9] text-bakery-dark break-words w-full">
                                {info.brand_name} <br className="hidden sm:inline" /> <span className="italic">Kepyklėlę</span>
                            </h1>
                        </div>
                        <p className="text-bakery-gray text-base md:text-lg font-light leading-relaxed max-w-md mx-auto lg:mx-0">
                            {texts.hero_desc}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                            <a href="#products" className="bg-bakery-dark text-white px-8 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-bakery-gold transition-all duration-500 text-center">
                                Mūsų meniu
                            </a>
                            <a href="#contact" className="border border-bakery-dark/20 px-8 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-bakery-dark hover:text-white transition-all duration-500 text-center block">
                                Kontaktai
                            </a>
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative w-full max-w-2xl mx-auto lg:mx-0">
                        <div className="bg-white p-6 sm:p-8 md:p-12 shadow-2xl relative z-10 border border-bakery-beige">
                            <span className="text-bakery-gold uppercase tracking-[0.5em] text-[10px] font-bold block mb-4 md:mb-6">Mūsų Istorija</span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic mb-4 md:mb-6">{texts.history_title}</h2>
                            <div className="space-y-4 text-bakery-gray text-sm md:text-base font-light leading-relaxed">
                                <p>
                                    {texts.history_p_1}
                                </p>
                                <p>
                                    {texts.history_p_2}
                                </p>
                            </div>
                            <div className="mt-6 md:mt-8 aspect-video overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Mūsų kepykla" />
                            </div>
                        </div>
                        <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-full h-full border border-bakery-gold/20 z-0 hidden sm:block" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
import React from 'react';
import { LuMapPin, LuPhone, LuClock, LuPhoneCall } from 'react-icons/lu';
import { FaFacebook } from "react-icons/fa6"
import { info } from "../config/info"

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-bakery-beige">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row shadow-2xl overflow-hidden bg-bakery-dark min-h-[600px]">
                    <div className="w-full lg:w-1/2 text-white p-10 md:p-16 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5">
                        <h2 className="text-4xl md:text-5xl font-serif mb-12 italic">Laukiame Jūsų</h2>
                        <div className="space-y-12">
                            <div className="flex items-start space-x-6 group">
                                <LuMapPin className="text-bakery-gold shrink-0 mt-1 transition-transform group-hover:scale-110" size={22} />
                                <div>
                                    <p className="uppercase tracking-[0.2em] text-[10px] text-white/40 mb-2 font-bold">Adresas</p>
                                    <p className="text-lg font-light leading-relaxed">{info.address}, <br />{info.city}</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-6 group">
                                <LuPhone className="text-bakery-gold shrink-0 mt-1 transition-transform group-hover:scale-110" size={22} />
                                <div>
                                    <p className="uppercase tracking-[0.2em] text-[10px] text-white/40 mb-2 font-bold">Telefonas</p>
                                    <a href={`tel:${info.tel_number}`} className="text-lg font-light hover:text-bakery-gold transition-colors">{info.tel_number}</a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-6 group">
                                <LuClock className="text-bakery-gold shrink-0 mt-1 transition-transform group-hover:scale-110" size={22} />
                                <div>
                                    <p className="uppercase tracking-[0.2em] text-[10px] text-white/40 mb-2 font-bold">Darbo laikas</p>
                                    <p className="text-lg font-light">Pirmadienis - Sekmadienis</p>
                                    <p className="text-xl font-serif italic text-bakery-gold mt-1">{info.work_hours}</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-16 pt-10 border-t border-white/10 flex flex-col sm:flex-row sm:items-center space-y-6 sm:space-y-0 sm:space-x-10">
                            <a href={`tel:${info.tel_number}`} className="inline-flex items-center space-x-4 text-white/80 hover:text-bakery-gold transition-all group">
                                <div className="p-3 border border-white/10 rounded-full group-hover:border-bakery-gold transition-colors">
                                    <LuPhoneCall size={18} />
                                </div>
                                <span className="uppercase tracking-[0.3em] text-xs font-medium">Skambinti dabar</span>
                            </a>
                            <a href={info.facebook_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-4 text-white/80 hover:text-bakery-gold transition-all group">
                                <div className="p-3 border border-white/10 rounded-full group-hover:border-bakery-gold transition-colors">
                                    <FaFacebook size={18} />
                                </div>
                                <span className="uppercase tracking-[0.3em] text-xs font-medium">Facebook</span>
                            </a>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 min-h-[450px] lg:min-h-full relative overflow-hidden transition-all">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2306.183756209268!2d25.28827727734898!3d54.6866952727103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd941199342733%3A0xc3b8a1c97a5542a2!2sGedimino%20pilies%20bok%C5%A1tas!5e0!3m2!1slt!2slt!4v1710000000000!5m2!1slt!2slt" className="absolute inset-0 w-full h-full" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
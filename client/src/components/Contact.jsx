import React from 'react';
import { MapPin, Phone, Clock, PhoneCall } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-bakery-beige">
      <div className="max-w-7xl mx-auto px-6">
        {/* Flex konteineris: Row kompiuteriuose, Col mobiliuosiuose */}
        <div className="flex flex-col lg:flex-row shadow-2xl rounded-sm overflow-hidden bg-bakery-dark min-h-[600px]">
          
          {/* Kontaktų informacija - Užima 50% pločio lg ekrane */}
          <div className="w-full lg:w-1/2 text-white p-10 md:p-16 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5">
            <h2 className="text-4xl md:text-5xl font-serif mb-12 italic">Laukiame Jūsų</h2>
            
            <div className="space-y-12">
              <div className="flex items-start space-x-6 group">
                <MapPin className="text-bakery-gold shrink-0 mt-1 transition-transform group-hover:scale-110" size={22} />
                <div>
                  <p className="uppercase tracking-[0.2em] text-[10px] text-white/40 mb-2 font-bold">Adresas</p>
                  <p className="text-lg font-light leading-relaxed">Vandžiogalos pl. 81, <br />Domeikava, Kaunas</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <Phone className="text-bakery-gold shrink-0 mt-1 transition-transform group-hover:scale-110" size={22} />
                <div>
                  <p className="uppercase tracking-[0.2em] text-[10px] text-white/40 mb-2 font-bold">Telefonas</p>
                  <a href="tel:+37069976164" className="text-lg font-light hover:text-bakery-gold transition-colors">(8-699) 76164</a>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <Clock className="text-bakery-gold shrink-0 mt-1 transition-transform group-hover:scale-110" size={22} />
                <div>
                  <p className="uppercase tracking-[0.2em] text-[10px] text-white/40 mb-2 font-bold">Darbo laikas</p>
                  <p className="text-lg font-light">Pirmadienis – Sekmadienis</p>
                  <p className="text-xl font-serif italic text-bakery-gold mt-1">10:00 – 19:30</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-white/10">
              <a 
                href="tel:+37069976164" 
                className="inline-flex items-center space-x-4 text-white/80 hover:text-bakery-gold transition-all group"
              >
                <div className="p-3 border border-white/10 rounded-full group-hover:border-bakery-gold transition-colors">
                  <PhoneCall size={18} />
                </div>
                <span className="uppercase tracking-[0.3em] text-xs font-medium">Skambinti dabar</span>
              </a>
            </div>
          </div>

          {/* Žemėlapis - Užima kitus 50% */}
          <div className="w-full lg:w-1/2 min-h-[450px] lg:min-h-full relative overflow-hidden transition-all">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2290.4907101564756!2d23.92131971217643!3d54.9641777725516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e721590408544d%3A0xb1922c262c3f848!2sVand%C5%BEiogalos%20pl.%2081%2C%20Domeikava%2C%2054354%20Kauno%20r.%20sav.!5e0!3m2!1slt!2slt!4v1715630000000!5m2!1slt!2slt" 
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
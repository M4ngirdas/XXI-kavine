import { motion } from 'framer-motion'
import { texts } from "../config/texts"

import dessert from "../assets/products/dessert.png"
import mainDishes from "../assets/products/main_dishes.png"
import snacks from "../assets/products/snacks.png"
import bakery from "../assets/products/bakery.png"

const items = [
    { id: 1, name: 'Konditerija', imgSrc: bakery },
    { id: 2, name: 'Desertai', imgSrc: dessert },
    { id: 3, name: 'Pagrindiniai patiekalai', imgSrc: mainDishes },
    { id: 4, name: 'Užkandžiai', imgSrc: snacks }
];

export default function Products() {
    return (
        <section id="products" className="grid place-items-center gap-8 md:gap-12 py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">

                <div className="text-center max-w-2xl mx-auto mb-12 md:mb-20">
                    <h2 className="text-3xl md:text-5xl font-serif mb-4 md:mb-6">{texts.products_title}</h2>
                    <p className="text-bakery-gray text-sm md:text-base font-light leading-relaxed">
                        {texts.products_desc}
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-8 gap-y-8 md:gap-y-12 w-full mx-auto">
                    {items.map((item, i) => (
                        <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex flex-col items-center text-center">
                            <div className="relative aspect-[3/4] w-full overflow-hidden mb-3 md:mb-6 bg-bakery-beige">
                                <img src={item.imgSrc} className="w-full h-full object-cover" alt={item.name} />
                            </div>
                            <h3 className="text-sm md:text-lg font-serif tracking-wide">{item.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="w-full sm:w-auto px-4 sm:px-0">
                <a href="#products" className="bg-bakery-dark text-white px-8 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-bakery-gold transition-all duration-500 text-center block w-full sm:w-auto">
                    Peržiūrėti meniu
                </a>
            </div>
        </section>
    );
}
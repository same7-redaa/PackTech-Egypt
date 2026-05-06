import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const heroImages = [
  "https://images.unsplash.com/photo-1563212034-7fa725916ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1574345100067-27bba0b0f4fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1580983546059-43c39f1c7d24?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
];

export default function Hero() {
  const { t, isRtl } = useLanguage();

  return (
    <section id="home" className="relative min-h-[75dvh] md:min-h-[800px] flex items-center justify-start px-6 md:px-10 overflow-hidden pt-28 pb-16 md:py-0">
      {/* Background Image Slider */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-primary-dark">
        <div className="absolute inset-0 w-full h-full hero-gradient z-0" />
      </div>

      {/* Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-${isRtl ? 'l' : 'r'} from-primary-dark via-primary-dark/80 to-transparent z-10`} />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-10 mt-10 md:mt-0">
        <div className="max-w-2xl w-full">
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-light leading-[1.1] md:leading-[1] tracking-tight mb-3 uppercase flex flex-col gap-1">
              <span className="whitespace-nowrap text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                {t.hero.title1} <span className="text-accent-orange">{t.hero.titleHighlight}</span>
              </span>
              <span>{t.hero.title2}</span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.15 }}
            className="text-text-light/80 text-sm md:text-base leading-relaxed mb-8 max-w-md font-medium"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 15, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-start gap-4"
          >
            <a href="#contact" className="w-full sm:w-auto text-center px-8 py-4 bg-accent-orange hover:bg-hover-blue text-white text-[11px] uppercase tracking-widest font-black transition-all rounded-none shadow-lg">
              {t.requestQuote}
            </a>
            <a href="#services" className="w-full sm:w-auto text-center px-8 py-4 border border-white/20 hover:bg-white text-white hover:text-text-main text-[11px] uppercase tracking-widest font-bold backdrop-blur-sm transition-all rounded-none">
              {t.viewProducts}
            </a>
          </motion.div>
        </div>

        {/* Hero Side Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: isRtl ? -50 : 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.4 }}
          className="w-full lg:w-[45%] hidden md:flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 glass-panel">
            <img 
              src="/gallery/e14473_6c98c9db0bd045db9e1c27ba20c35b99~mv2.avif" 
              alt="Packaging solutions" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

    </section>
  );
}

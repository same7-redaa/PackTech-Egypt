import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Stats from './Stats';

export default function WhyChooseUs() {
  const { t, isRtl } = useLanguage();

  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-dark-surface relative overflow-hidden">
      {/* Decorative element */}
      <div className={`absolute top-0 ${isRtl ? 'left-0' : 'right-0'} w-1/3 h-full bg-primary-blue/[0.1] transform ${isRtl ? '-skew-x-12 -translate-x-32' : 'skew-x-12 translate-x-32'}`} />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Left Column: Image & Overlay */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
              className="relative aspect-[4/5] overflow-hidden grayscale contrast-125 border border-white/10"
            >
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Quality Control" 
                className="w-full h-full object-cover mix-blend-overlay opacity-80"
              />
              <div className="absolute inset-0 bg-primary-dark/40" />
            </motion.div>
            
            {/* Floating badge */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
              className={`absolute -bottom-8 ${isRtl ? '-left-8' : '-right-8'} glass-panel-dark p-6 shadow-2xl max-w-[240px] z-10 hidden sm:block`}
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 border border-accent-orange text-accent-orange flex items-center justify-center font-bold text-sm num-font">
                  ISO
                </div>
                <div className="font-bold text-white uppercase tracking-widest text-[10px]">{t.whyChooseUs.badge}</div>
              </div>
              <p className="text-[10px] text-text-light/80 mt-2 uppercase tracking-wide">{t.whyChooseUs.badgeDesc}</p>
            </motion.div>
          </div>

          {/* Right Column: Text & List */}
          <div>
            <h2 className="text-[10px] font-bold tracking-[0.2em] text-accent-orange uppercase mb-3">{t.whyChooseUs.subtitle}</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-light mb-6 uppercase tracking-tight leading-tight mt-6 sm:mt-0">
              {t.whyChooseUs.title}
            </h3>
            <p className="text-text-light/80 text-sm mb-10 leading-relaxed font-medium">
              {t.whyChooseUs.desc}
            </p>

            <ul className="space-y-4 mb-12">
              {t.whyChooseUs.reasons.map((reason, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ type: "spring", stiffness: 100, damping: 20, delay: idx * 0.05 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-1.5 h-1.5 bg-accent-orange rounded-full shrink-0 mt-1.5" />
                  <span className="text-text-light text-xs uppercase tracking-widest leading-relaxed font-bold">{reason}</span>
                </motion.li>
              ))}
            </ul>

            <button className="bg-transparent border border-white/20 hover:bg-white hover:text-text-main text-white px-8 py-4 text-[11px] uppercase tracking-widest font-bold transition-all rounded-none">
              {t.whyChooseUs.button}
            </button>
          </div>
        </div>

        {/* Stats component placed below in the same section flow */}
        <div className="mt-16 md:mt-32">
          <Stats />
        </div>
      </div>
    </section>
  );
}

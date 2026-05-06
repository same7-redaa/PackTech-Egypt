import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Testimonials() {
  const { t, isRtl } = useLanguage();

  const testimonials = [
    {
      text: "PackTech transformed our entire supply chain. Their corrugated boxes reduced transit damage by 98% while improving our pallet efficiency. Truly a world-class OEM partner.",
      author: "Mahmoud Hassan",
      position: t.testimonials.roles[0],
      company: "Carrier Egypt"
    },
    {
      text: "The offset printing quality on our retail custom packaging is phenomenal. PackTech delivered what other factories said was impossible, on time and at scale.",
      author: "Sarah El-Sayed",
      position: t.testimonials.roles[1],
      company: "Fresh Group"
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-primary-dark relative overflow-hidden border-t border-primary-blue/30">
      <div className="absolute inset-0 grayscale opacity-5 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80')] bg-cover bg-fixed bg-center" />
      <div className="absolute inset-0 bg-primary-dark/95 mix-blend-multiply" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[10px] font-bold tracking-[0.2em] text-accent-orange uppercase mb-3">{t.testimonials.subtitle}</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">{t.testimonials.title}</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: idx * 0.1 }}
              className="glass-panel-dark p-8 md:p-10 relative rounded-none shadow-2xl"
            >
              <Quote className={`absolute top-8 ${isRtl ? 'left-8' : 'right-8'} w-10 h-10 text-white/5 rotate-180`} />
              <p className="text-steel-gray text-sm leading-relaxed mb-8 italic relative z-10 font-medium">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-white/20 flex items-center justify-center font-bold text-white text-xs">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold text-[11px] uppercase tracking-widest leading-none mb-1">{testimonial.author}</h4>
                  <p className="text-accent-orange text-[10px] uppercase tracking-wider">{testimonial.position}, <span className="num-font" dir="ltr">{testimonial.company}</span></p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

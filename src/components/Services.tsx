import { motion } from 'framer-motion';
import { PackageOpen, Box, Printer, Archive, Layers, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Box className="w-6 h-6 shrink-0" />,
      title: t.services.items[0].title,
      description: t.services.items[0].desc
    },
    {
      icon: <PackageOpen className="w-6 h-6 shrink-0" />,
      title: t.services.items[1].title,
      description: t.services.items[1].desc
    },
    {
      icon: <Printer className="w-6 h-6 shrink-0" />,
      title: t.services.items[2].title,
      description: t.services.items[2].desc
    },
    {
      icon: <Layers className="w-6 h-6 shrink-0" />,
      title: t.services.items[3].title,
      description: t.services.items[3].desc
    },
    {
      icon: <Archive className="w-6 h-6 shrink-0" />,
      title: t.services.items[4].title,
      description: t.services.items[4].desc
    },
    {
      icon: <ShieldCheck className="w-6 h-6 shrink-0" />,
      title: t.services.items[5].title,
      description: t.services.items[5].desc
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-background relative border-t border-light-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-12 md:mb-16">
          <h2 className="text-[10px] font-bold tracking-[0.2em] text-accent-orange uppercase mb-3">{t.services.subtitle}</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-dark mb-4 md:mb-6 uppercase tracking-tight">{t.services.title1}<br/>{t.services.title2}</h3>
          <p className="text-text-secondary max-w-2xl text-sm leading-relaxed font-medium">
            {t.services.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.05 }}
              className="group p-6 md:p-8 bg-white hover:bg-white border border-light-border hover:border-accent-orange/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full rounded-sm"
            >
              <div className="flex items-center gap-4 mb-6 text-accent-orange">
                <div className="w-8 h-8 border border-steel-gray rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 text-text-secondary group-hover:text-accent-orange group-hover:border-accent-orange transition-colors num-font">
                  {String(index + 1).padStart(2, '0')}
                </div>
                {service.icon}
              </div>
              <h4 className="text-sm font-bold text-primary-dark uppercase tracking-wider mb-2">{service.title}</h4>
              <p className="text-[11px] text-text-secondary leading-relaxed uppercase tracking-widest mt-auto">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

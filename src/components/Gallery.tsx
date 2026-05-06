import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X } from 'lucide-react';

export default function Gallery() {
  const { t } = useLanguage();
  const [selectedImg, setSelectedImg] = useState<{url: string, title: string} | null>(null);

  const images = [
    {
      url: "/gallery/e14473_6c98c9db0bd045db9e1c27ba20c35b99~mv2.avif",
      title: t.gallery.img1,
      span: "col-span-2 md:col-span-2 row-span-2"
    },
    {
      url: "/gallery/e14473_a5db9786ca4245e28509e4fbd9e2d548~mv2.avif",
      title: t.gallery.img2,
      span: "col-span-1 md:col-span-1 row-span-1"
    },
    {
      url: "/gallery/e14473_c92363fb6cf2427a98bdd229fb0cd679~mv2.avif",
      title: t.gallery.img3,
      span: "col-span-1 md:col-span-1 row-span-1"
    },
    {
      url: "/gallery/e14473_f4629dba552c4fa2b2778916a5f645de~mv2.avif",
      title: t.gallery.img4,
      span: "col-span-2 md:col-span-2 row-span-1"
    }
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <h2 className="text-[10px] font-bold tracking-[0.2em] text-accent-orange uppercase mb-3">{t.gallery.subtitle}</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-dark uppercase tracking-tight leading-tight">
              {t.gallery.title1}<br/>{t.gallery.title2}
            </h3>
          </div>
          <button className="hidden md:block py-3 border-b-2 border-accent-orange text-primary-dark font-bold uppercase tracking-widest text-[11px] hover:text-accent-orange transition-colors">
            {t.gallery.button}
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-none md:grid-rows-3 gap-2 h-auto md:h-[600px] min-h-[300px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 80, damping: 20, delay: idx * 0.1 }}
              className={`relative overflow-hidden group cursor-pointer ${img.span} bg-steel-gray min-h-[150px] md:min-h-0`}
              onClick={() => setSelectedImg(img)}
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h4 className="text-white font-bold text-[9px] md:text-[11px] uppercase tracking-widest glass-panel-dark px-2 md:px-4 py-1 md:py-2 border border-white/10">{img.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-primary-dark/95 backdrop-blur-sm p-4 md:p-10"
          >
            <button 
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/50 hover:text-accent-orange transition-colors z-50"
              onClick={() => setSelectedImg(null)}
            >
              <X size={36} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              src={selectedImg.url}
              alt={selectedImg.title}
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center pointer-events-none">
              <p className="text-white font-bold text-sm md:text-base tracking-widest uppercase bg-primary-dark/80 px-6 py-2 rounded-full backdrop-blur-md border border-white/10">
                {selectedImg.title}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

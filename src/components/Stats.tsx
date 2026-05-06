import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

function Counter({ to }: { to: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = to;
    const duration = 2000;
    let startTime: number | null = null;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = time - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function (easeOutQuart)
      const easePercentage = 1 - Math.pow(1 - percentage, 4);
      
      setCount(Math.floor(start + (end - start) * easePercentage));
      
      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, to]);

  return <span ref={ref} className="num-font" dir="ltr">{count}</span>;
}

export default function Stats() {
  const { t, isRtl } = useLanguage();
  
  const statsData = [
    { value: 500, suffix: '+', label: t.stats.clients },
    { value: 25, suffix: '+', label: t.stats.years },
    { value: 10, suffix: 'M+', label: t.stats.units },
    { value: 24, suffix: '/7', label: t.stats.support }
  ];

  return (
    <div className="bg-primary-dark border-y border-primary-blue/50 py-12 relative overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
        {statsData.map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={`flex flex-col items-center justify-center ${isRtl ? 'border-r first:border-0' : 'border-l first:border-0'} border-white/5`}
          >
            <div className="flex items-baseline mb-1 text-4xl md:text-5xl font-black text-white leading-none" dir="ltr">
              <Counter to={stat.value} />
              <span className="num-font">{stat.suffix}</span>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-text-light/60 mt-1">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

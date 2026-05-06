import { motion } from 'framer-motion';
import { AlignJustify, X, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language, setLanguage, isRtl } = useLanguage();

  const navLinks = [
    { key: 'home', label: t.nav.home },
    { key: 'services', label: t.nav.products },
    { key: 'clients', label: t.nav.clients },
    { key: 'gallery', label: t.nav.gallery },
    { key: 'contact', label: t.nav.contact }
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary-dark/95 backdrop-blur-md py-4 border-b border-white/10 shadow-lg' : 'bg-transparent py-6 border-b border-light-border/20'}`}>
      <div className="max-w-7xl mx-auto px-10 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center" dir="ltr">
          <span className="text-xl font-bold tracking-tighter uppercase text-white">
            PackTech <span className="text-accent-orange font-light">Egypt</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.key} 
              href={`#${link.key}`}
              className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-medium text-white/70 hover:text-white transition-colors"
          >
            <Globe size={14} />
            <span className="num-font font-bold">{language === 'en' ? 'AR' : 'EN'}</span>
          </button>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="#contact" className="inline-block px-6 py-2 border border-white/20 text-[11px] uppercase tracking-widest font-bold text-white hover:bg-white hover:text-text-main transition-all bg-transparent rounded-none">
            {t.getStarted}
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="text-white/70 hover:text-white transition-colors"
          >
            <Globe size={20} />
          </button>
          <button 
            className="text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <AlignJustify />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`md:hidden absolute top-full ${isRtl ? 'right-0' : 'left-0'} w-full bg-primary-dark border-t border-white/10 py-4 px-10 flex flex-col gap-4`}
        >
          {navLinks.map((link) => (
            <a 
              key={link.key} 
              href={`#${link.key}`}
              className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/70 hover:text-accent-orange transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="inline-block text-center border border-white/20 text-white px-6 py-3 rounded-none text-[11px] uppercase tracking-widest font-bold mt-4 w-full hover:bg-white hover:text-text-main transition-colors">
            {t.getStarted}
          </a>
        </motion.div>
      )}
    </header>
  );
}
